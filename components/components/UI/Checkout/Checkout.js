import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import produce from 'immer'; // https://github.com/mweststrate/immer

import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ContactForm from './ContactForm/ContactForm';
import AddressForm from './AddressForm/AddressForm';
import PaymentForm from './PaymentForm/PaymentForm';
import Review from './Review/Review';
import OmiseConfig from './omise.config';

const contactFormText = {
    title: "Contact information",
    labelSubscribe: "Please keep me informed!"
};

const addressFormText = {
    title: "Home Address"
};

const paymentFormText = {
    title: ""
};

const styles = theme => ({
    appBar: {
        position: 'relative'
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: '0 0 0'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});

const steps = ['Contact', 'Address', 'Payment', 'Review'];

class Checkout extends Component {
    state = {
        activeStep: 0,
        isClient: false,
        nextAllowed: false,
        user: {
            draft: {
                contact: {
                    name: '',
                    email: '',
                    subscribe: false,
                    checked: false,
                    noOfUpdates: 0
                },
                address: {
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    zip: '',
                    country: '',
                    checked: false,
                    noOfUpdates: 0
                },
                card: { 
                    name: '',
                    number: '',
                    expiry: '',
                    cvv: '',
                    checked: false,
                    noOfUpdates: 0
                },
            },    
            commit: {
                contact: {
                    name: '',
                    email: '',
                    subscribe: true,
                    checked: false
                },
                address: {
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    zip: '',
                    country: '',
                    checked: false
                },
                card: { 
                    name: '',
                    number: '',
                    expiry: '',
                    cvv: '',
                    checked: false
                }
            }    
        }
    };

    // This lifecycle method only gets called client side
    componentDidMount() {
        // Use it to restrict credit card information to the client only
        this.setState({ isClient: true });
        console.log(this.state.user.draft.contact.email);
    };
    
    handleChange = form => event => {
        // It is safe to call setState with a function multiple times. 
        // Updates will be queued and later executed in the order they were called.

        const label = event.target.name;
        const isCheckbox = (label === "subscribe");
        const value = isCheckbox ? event.target.checked : event.target.value;
        
        console.log("event.target.name", value);

        this.setState(
            produce(immerDraft => {
                immerDraft.user.draft[form][label] = value; // For some reason one cannot use event.target within produce...
            }), 
            () => {
                // Check whether form data are now correct. Since local state has been checked if it exists we only need to check existence 
                const { name, email } = { ...this.state.user.draft[form] };
                const isAllDataCorrect = !(name === '' || email === ''); 

                if (isAllDataCorrect) {
                    this.setState(
                        produce(immerDraft => {
                            // Copy draft data to commit
                            immerDraft.user.commit = this.state.user.draft;
                            // Increment the number of updates for the current form
                            immerDraft.user.draft[form].noOfUpdates += 1
                        }),
                        () => {
                            // Allow move to next form
                            this.setState({ nextAllowed: true});
                        }
                    );
                };
            }    
        );
    };

    confirmHandler = () => {
        'use strict';

        if (!this.state.isClient) {
            return; // Do not attempt to checkout server side
        };
    
        Omise.setPublicKey(OmiseConfig.publicKey);
        
        expiry = this.state.user.card.expiry
        const month = expiry.substr(0,2);
        const year = expiry.substr(3,2);

        const cardInformation = {
            name:             this.state.user.card.name,
            number:           this.state.user.card.number,
            expiration_month: month,
            expiration_year:  year,
            security_code:    this.state.user.card.cvv
        };
        
        Omise.createToken('card', cardInformation, (statusCode, response) => {
            if (statusCode === 200) {
                // Success: send back the TOKEN_ID to your server. The TOKEN_ID can be
                // found in `response.id`.
                const tokenID = response.id;
        
                // TO DO: add checkout code
            }
            else {
                // Error: display an error message. Note that `response.message` contains
                // a preformatted error message. Also note that `response.code` will be
                // "invalid_card" in case of validation error on the card.
                
                /*
                "authentication_failure" "authentication failed"
                "bad_request" "type is currently not supported"
                "expired_charge" "charge expired"
                "failed_capture" "Charge is not authorized"
                "failed_void" "void failed"
                "invalid_amount" "amount must be an integer"
                "invalid_bank_account" "brand is not included in the list"
                "invalid_card" "number is invalid and brand not supported (unknown)"
                "invalid_card_token" "invalid card token"
                "invalid_charge" "currency is currently not supported and amount is not a number"
                "invalid_filter" "invalid filters"
                "invalid_link" "currency is not currently supported"
                "invalid_page" "invalid page"
                "invalid_scope" "invalid scope"
                "missing_card" "request contains no card parameters"
                "not_found" "Customer cust_test_000000000000 was not found"
                "used_token" "token was already used"
                "code": "service_not_found" "message": "you are using api version which does not support this operation"
                */

                // TO DO: add error handling code
            }
        });
    };

    // TO DO:
    // 1. 
    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
            nextAllowed: false
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
            nextAllowed: true
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    // This should go in a HOC
    getStepContent = step => {
        switch (step) {
            case 0:
                return <ContactForm 
                            key={ this.state.user.draft.contact.noOfUpdates }
                            formText={ contactFormText } 
                            formData={ this.state.user.draft.contact }
                            onChange={ this.handleChange('contact') }
                        />;
            case 1:
                return <AddressForm 
                            key={ this.state.user.draft.address.noOfUpdates }
                            formText={ addressFormText } 
                            formData={ this.state.user.draft.address }
                            onChange={ this.handleChange('address') }
                        />;
            case 2:
                return <PaymentForm 
                            key={ this.state.user.draft.card.noOfUpdates }
                            formText={ paymentFormText } 
                            formData={ this.state.user.draft.card }
                            onChange={ this.handleChange('card') }
                        />;
            case 3:
                return <Review />;    
            default:
                throw new Error('Unknown step');
        }
    };

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        let omiseScript = 
            <Head>
                <script src="https://cdn.omise.co/omise.js"></script>
            </Head>;
  
        let thankYouJSX = 
            <Fragment>
                <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                </Typography>
            </Fragment>;
        
        let backButtonJSX = 
            <Button onClick={ this.handleBack } className={ classes.button }>
                Back
            </Button>;
        
        let navigationButtonsJSX = 
            <Fragment>
                { this.getStepContent(activeStep) }
                <div className={classes.buttons}>
                    { activeStep !== 0 && backButtonJSX }
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={ this.handleNext }
                        className={ classes.button }
                        disabled={ !this.state.nextAllowed }
                    >
                        { activeStep === steps.length - 1 ? 'Place order' : 'Next' }
                    </Button>
                </div>
            </Fragment>;
        
        return (
            (this.state.isClient) ?  
            <Fragment>
                { omiseScript }
                <AppBar position="absolute" color="primary" className={ classes.appBar }>
                    <Toolbar>
                        <Stepper activeStep={ activeStep } className={ classes.stepper }>
                            { steps.map((label, i) => (
                                <Step key={i}>
                                    <StepLabel>{ activeStep === i ? label : null }</StepLabel>
                                </Step>
                            )) }
                        </Stepper>
                    </Toolbar>
                </AppBar>
                <main className={ classes.layout }>
                    <Paper className={ classes.paper }>
                        <Fragment>
                            { activeStep === steps.length ? thankYouJSX : navigationButtonsJSX }
                        </Fragment>
                    </Paper>
                </main>
            </Fragment> : null
        );
    };
};

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);

/*
// 
    handleFormSubmit = form => event => {
        // If data input is checkbox, then get the right value 
        const isCheckBox = event.target.name === 'subscribe';
        const isCheckBoxInEmailForm = (form === 'contact' && isCheckBox);
        const newValue = isCheckBoxInEmailForm ? event.target.checked : event.target.value;
        
        // Store validated data in state
        this.setState({ user: { ...this.state.user, [form]: { ...this.state.user[form], [event.target.name]: newValue }}}, 
            () => console.log("Parent:", this.state.user.contact) 
        );

        // Validated data now stored in state, allowed to go to next form, and set checked flag
        this.setState({ 
            nextAllowed: true , 
            user: { ...this.state.user, [form]: { ...this.state.user[form], checked: true }}
        });
    };

*/

/*
handleChange = form => event => {
        const isCheckbox = (event.target.name === "subscribe");
        
        console.log("event.target.name", event.target.name);
        // Set draft state
        this.setState({ user: {...this.state.user, 
            draft: { ...this.state.user.draft, 
                [form]: {...this.state.user.draft[form],
                    [event.target.name]: isCheckbox ? event.target.checked : event.target.value } 
                }
            }
        },
            // Callback
            () => {
                console.log("Set draft state:", this.state.user.draft[form]);
                // Check whether form data are now correct. Since local state has been checked if it exists we only need to check existence 
                const { name, email } = { ...this.state.user.draft[form] };
                const isAllDataCorrect = !(name === '' || email === ''); 

                console.log("name, email:", name, email);
                console.log("isAllDataCorrect:", isAllDataCorrect);

                if (isAllDataCorrect) {
                    console.log("Inside...");
                    // Copy draft data to commit
                    () => this.setState({ commit: this.state.user.draft }, 
                        // Callback: update draft data with commit data
                        () => {
                            console.log("this.user.commit", this.user.commit);
                            this.setState({ draft: this.state.user.commit},
                            // Callback: increment no of updates of form
                            (prevState) => this.setState({ [form]: { ...this.state.user.draft[form], 
                                noOfUpdates: prevState.user.draft[form].noOfUpdates + 1 }},
                                // Callback: allow move to next form
                                () => this.setState({ nextAllowed: true}))
                            )
                        }
                    );
                };
            }    
        );    
    };
*/
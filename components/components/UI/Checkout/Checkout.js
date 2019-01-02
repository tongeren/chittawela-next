import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import produce from 'immer'; // https://github.com/mweststrate/immer: use for handling nested state
import valid from 'card-validator';

import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import StepForm from '../Forms/StepForm/StepForm';

import OmiseConfig from '../../../omise/omise.config';
import OmiseScriptHead from '../../../omise/OmiseScriptHead/OmiseScriptHead';

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
    step: {
        
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

const steps = ['Contact', 'Address', 'Payment', 'Review', 'Confirmation'];
const noOfSteps = steps.length;

class Checkout extends Component {
    state = {
        activeStep: 0,
        isClient: false,
        UX : {
            date: null,
            start: null,
            end: null
        },
        omiseResponse: {
            token: {
                success: false,
                id: null,
                message: null,
                code: null
            },
            charge: {
                success: false
            }
        },
        nextAllowed: false,
        noOfUpdates: {
            contact: 0,
            address: 0,
            card: 0
        },
        user: {
            draft: {
                contact: {
                    name: '',
                    email: '',
                    subscribe: true // Subscribe per default: let user opt out
                },
                address: {
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    zip: '',
                    country: ''
                },
                card: { 
                    name: '',
                    number: '',
                    expiry: '',
                    cvc: ''
                },
            },    
            commit: {
                contact: {
                    name: '',
                    email: '',
                    subscribe: true,
                },
                address: {
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    zip: '',
                    country: ''
                },
                card: { 
                    name: '',
                    number: '',
                    expiry: '',
                    cvc: ''
                }
            }    
        }
    };

    // This lifecycle method only gets called client side
    componentDidMount() {
        // Use it to restrict credit card information to the client only
        this.setState({ isClient: true });
        // Set start time of user input
        const currentDate = new Date();
        const start = currentDate.getTime();
        // Set time info user interaction with checkout
        this.setState({ UX: { ...this.state.UX, date: currentDate, start: start }});
    };
    
    isFormDataCorrect = (form) => {
        switch (form) {
            case 'contact': {
                const { name, email } = { ...this.state.user.draft[form] };
                return !(name === '' || email === ''); 
            };    
            case 'address': {
                const { addressLine1, city, zip, country } = { ...this.state.user.draft[form] };
                return !(addressLine1 === '' || city ==='' || zip ==='' || country ==='');
            };
            case 'card': {
                const { name, number, expiry, cvc } = { ...this.state.user.draft[form] };
                return !(name === '' || number === '' || expiry === '' || cvc === '');
            };
            default: {
                console.log("Form data check for this form has not be defined.");   
                return null;
            };     
        };
    };

    handleChange = form => (event, name)  => {
        const isCheckbox = (name === "subscribe");
        const value = isCheckbox ? event.target.checked : event.target.value;

        this.setState(
            produce(immerDraft => {
                immerDraft.user.draft[form][name] = value; 
            }), 
            () => {
                // Check whether form data are now correct. Since local state has been checked if it exists we only need to check existence 
                const isAllDataCorrect = this.isFormDataCorrect(form);

                if (isAllDataCorrect) {
                    this.setState(
                        produce(immerDraft => {
                            // Copy draft data to commit
                            immerDraft.user.commit = this.state.user.draft;
                            // Increment the number of updates for the current form
                            immerDraft.noOfUpdates[form] += 1
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

    omiseTokenHandler = () => {
        'use strict';

        if (!this.state.isClient) {
            return; // Do not attempt to checkout server side
        };
    
        Omise.setPublicKey(OmiseConfig.publicKey);
        
        const expiry = valid.expirationDate(this.state.user.commit.card.expiry);
        if (!expiry.isValid) {
            console.log("Credit card expiration date is invalid.");
            return; 
        };

        const month = expiry.month;
        const year = expiry.year;

        const cardInformation = {
            name:             this.state.user.commit.card.name,
            number:           this.state.user.commit.card.number,
            expiration_month: month,
            expiration_year:  year,
            security_code:    this.state.user.commit.card.cvc
        };
        
        Omise.createToken('card', cardInformation, (statusCode, response) => {
            if (statusCode === 200) {
                // Success: send back the TOKEN_ID to your server. The TOKEN_ID can be
                // found in `response.id`.
                this.setState({ omiseResponse: 
                    { ...omiseResponse, 
                        token: 
                        { ...token,
                            success: true,
                            id: response.id
                        }
                    }    
                });
            }
            else {
                // Error: display an error message. Note that `response.message` contains
                // a preformatted error message. Also note that `response.code` will be
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
                "service_not_found" "you are using api version which does not support this operation"
                */
                this.setState({ omiseResponse: 
                    { ...omiseResponse, 
                        token: 
                        { ...token,
                            success: false,
                            message: response.message, 
                            code: message.code     
                        }        
                    }
                });
            }
        });
    };

    purchaseHandler = () => {
        // Get Omise token
        this.omiseTokenHandler();
        
        if (this.state.omiseResponse.success) {
            // Charge card via Omise 
            this.omiseChargeCardHandler();
        } else {
            return;
        };    
    };
         
    step = flag => (flag ? 1 : -1);

    handleFormChange = (forward) => {
        this.setState(state => ({
            activeStep: state.activeStep + this.step(forward),
            nextAllowed: !forward
        }));
    };

    isReviewStep = () => (this.state.activeStep === noOfSteps - 2);

    handleNext = () => {
        // If in review the next button has been clicked, then start purchase
        if  (this.isReviewStep()) {
            this.purchaseHandler();
        };

        this.handleFormChange(true);
    };

    handleBack = () => this.handleFormChange(false);

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;
        
        return (
            (this.state.isClient) ?  
            <Fragment>
                <OmiseScriptHead />
                <AppBar position="absolute" color="primary" className={ classes.appBar }>
                    <Toolbar>
                        <Stepper activeStep={ activeStep } className={ classes.stepper }>
                            { steps.map((label, i) => (
                                <Step key={i} className = { classes.step }>
                                    <StepLabel>{ activeStep === i ? label : null }</StepLabel>
                                </Step>
                            )) }
                        </Stepper>
                    </Toolbar>
                </AppBar>
                <main className={ classes.layout }>
                    <Paper className={ classes.paper }>
                        <StepForm 
                            classes={ classes.buttons }
                            activeStep={ activeStep }
                            noOfUpdates={ this.state.noOfUpdates }
                            formData={ this.state.user.draft }
                            handleBack={ this.handleBack }
                            handleNext={ this.handleNext }
                            onChange={ this.handleChange }
                            nextAllowed={ this.state.nextAllowed }
                            noOfSteps = { noOfSteps }
                        />
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
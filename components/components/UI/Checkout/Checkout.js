import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import produce from 'immer'; // https://github.com/mweststrate/immer: use for handling nested state
import valid from 'card-validator';

import withStyles from '@material-ui/core/styles/withStyles';
import restrictToClient from '../../../hoc/restrictToClient';
import withOmise from '../../../omise/withOmise/withOmise';
import passToClient from '../../../hoc/passToClient';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

import CheckoutStepper from './CheckoutStepper/CheckoutStepper';
import StepForm from '../Forms/StepForm/StepForm';

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
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});

//const steps = ['Contact', 'Address', 'Payment', 'Review', 'Confirmation'];
const noOfSteps = 5;

const forms = ['contact', 'address', 'card'];
const noOfForms = forms.length;

class Checkout extends Component {
    state = {
        activeStep: 0,
        nextAllowed: true, // Change back later (derived state)
        UX : {
            date: null,
            start: null,
            end: null
        },
        noOfUpdates: {
            contact: 0,
            address: 0,
            card: 0
        },
        user: {
            error: { 
                contact: {
                    name: false,
                    email: false
                },
                address: {
                    addressLine1: false,
                    addressLine2: false,
                    city: false,
                    zip: false,
                    country: false 
                },
                card: { 
                    name: false,
                    number: false,
                    expiry: false,
                    cvc: false
                }
            },
            draft: {
                contact: {
                    name: 'Duncan van Tongeren',
                    email: 'dpvantongeren@gmail.com',
                    subscribe: true // Subscribe per default: let user opt out
                },
                address: {
                    addressLine1: 'Anna Blamanplein 123',
                    addressLine2: '',
                    city: 'The Hague',
                    zip: '2525 ZW',
                    country: 'Netherlands'
                },
                card: { 
                    name: 'DP VAN TONGEREN',
                    number: '4242 4242 4242 4242',
                    expiry: '10/20',
                    cvc: '979'
                },
            }    
        }
    };

    // This lifecycle method only gets called client side
    componentDidMount() {
        // Set start time of user input
        const currentDate = new Date();
        const start = currentDate.getTime();
        // Set time info user interaction with checkout
        this.setState({ UX: { ...this.state.UX, date: currentDate, start: start }});
    };

    shouldComponentUpdate(nextProps, nextState) {
       // State in this component does not capture view data, hence no updates necessary on this component level
       const nextAllowedChanged = !(nextState.nextAllowed === this.state.nextAllowed);
       const activeStepChanged = !(nextState.activeStep === this.state.activeStep);
       
       const shouldUpdate = nextAllowedChanged || activeStepChanged; 
       
       return shouldUpdate;
    };
    
    isFormDataCorrect = (form) => {
        const errorState = this.state.user.error[form];
        const isCorrect = !(Object.values(errorState).reduce((acc, val) => acc || val));

        return isCorrect;
    };

    setNextAllowed = (allow) => {
        const change = !(this.state.nextAllowed === allow);

        if (change) {
            this.setState({ nextAllowed: allow });
        };
    };

    allowMoveToNextForm = () => {
        this.setNextAllowed(true);
    };

    disallowMoveToNextForm = () => {
        this.setNextAllowed(false);
    };

    handleChange = (value, error, name) => {
        const newValue = value; // boolean or string 

        const form = this.getCurrentForm();

        this.setState(
            produce(immerDraft => {
                // Make sure the error state of this input is updated
                immerDraft.user.error[form][name] = error;

                // Always change the draft value state
                immerDraft.user.draft[form][name] = newValue;
            }),
            () => {
                // Check whether the current form is now error free
                const isCurrentFormErrorFree = this.isFormDataCorrect(form);

                if (isCurrentFormErrorFree) {
                    this.setState(
                        produce(immerDraft => {
                            // Increment the number of updates for the current form
                            immerDraft.noOfUpdates[form] += 1;
                        }), 
                        () => {
                            // Allow move to next form
                            this.allowMoveToNextForm();
                        }   
                    );    
                } else {
                    // Disallow move to next form
                    this.disallowMoveToNextForm();
                };
            }
        );         
    };

    transformedCardData = () => {
        const { number, name, expiry, cvc } = { ...this.state.user.draft.card };
        const expiryDate = valid.expirationDate(expiry);
        if (!expiryDate.isValid) {
            console.log("Credit card expiration date is invalid.");
            return; 
        };

        const month = Number(expiryDate.month);
        const year = Number(expiryDate.year);

        const cardInformation = {
            name:             name,
            number:           number,
            expiration_month: month,
            expiration_year:  year,
            security_code:    cvc
        };

        return cardInformation;
    };

    purchaseHandler = async () => {
        console.log("Checkout: purchaseHandler() starts...");
        let omiseTokenResponse = {};

        // Transform card data
        const cardInformation = this.transformedCardData();
        console.log("cardInformation", cardInformation);

        omiseTokenResponse = await this.props.omiseTokenHandler(cardInformation);
        console.log("omiseResponse=", omiseTokenResponse);

        const tokenObtained = omiseTokenResponse.success; 
        if (tokenObtained) {
            // Get token
            const token = omiseTokenResponse.id;
            // Charge card via Omise 
            console.log("About to charge card..., token=", token);

            const omiseChargeResponse = await this.props.omiseChargeCardHandler(token);
        } else {
            // Handle credit card errors 
            // Get Omise error message
            const errorMessage = omiseTokenResponse.message;
            
            console.log("Error occurred..., errorMessage=", errorMessage);
            return;
        };    
    };
         
    step = flag => (flag ? 1 : -1);

    handleFormChange = (forward, correct) => {
        this.setState(state => ({
            activeStep: state.activeStep + this.step(forward)
        }), () => {
            correct ? this.allowMoveToNextForm() : this.disallowMoveToNextForm();
        });
    };

    isReviewStep = () => (this.state.activeStep === noOfSteps - 2);
    isConfirmationStep = () => (this.state.activeStep === noOfSteps - 1);

    getForm = (step) => forms[step];

    getCurrentForm = () => this.getForm(this.state.activeStep);

    getNextForm = () => this.getForm(this.state.activeStep + 1);

    canMoveToNextForm = () => {
        const nextStep = this.state.activeStep + 1;
        const nextStepIsForm = (nextStep < noOfForms);
    
        return nextStepIsForm ? this.isFormDataCorrect(this.getNextForm()) : true;
    };

    handleNext = () => {
        // If in review the next button has been clicked, then start purchase
        if  (this.isReviewStep()) {
            console.log("Checkout: handleNext() triggered...");
            this.purchaseHandler();
        };

        // Check whether the draft values of the next form constitute correct form data whenever applicable
        const correct = this.canMoveToNextForm();
        
        // Handle change to next "form" 
        this.handleFormChange(true, correct);
    };

    handleBack = () => this.handleFormChange(false, true);

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <AppBar position="absolute" color="primary" className={ classes.appBar }>
                    <Toolbar>
                        <CheckoutStepper activeStep={ this.state.activeStep }/> 
                    </Toolbar>
                </AppBar>
                <main className={ classes.layout }>
                    <Paper className={ classes.paper }>
                        <StepForm 
                            classes={ classes.buttons }
                            activeStep={ this.state.activeStep }
                            formData={ this.state.user.draft }
                            handleBack={ this.handleBack }
                            handleNext={ this.handleNext }
                            onChange={ this.handleChange }
                            nextAllowed={ this.state.nextAllowed } // nextAllowed is derived state
                            noOfSteps = { noOfSteps }
                        />
                    </Paper>
                </main>
            </Fragment> 
        );
    };
};

Checkout.propTypes = {
    classes: PropTypes.object.isRequired, // Must be wrapped by withStyles
    isClient: PropTypes.bool.isRequired, // Must be wrapped by restrictToClient
    omiseTokenHandler: PropTypes.func.isRequired, // Must be wrapped by withOmise
    omiseChargeCardHandler: PropTypes.func.isRequired
};

export default passToClient(
    restrictToClient(
        withOmise(
            withStyles(styles)(Checkout)
        )
    )
);

/*

        user: {
            error: { 
                contact: {
                    name: true,
                    email: true
                },
                address: {
                    addressLine1: true,
                    addressLine2: false,
                    city: true,
                    zip: true,
                    country: false 
                },
                card: { 
                    name: true,
                    number: true,
                    expiry: true,
                    cvc: true
                }
            },
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
                    country: 'Netherlands'
                },
                card: { 
                    name: '',
                    number: '',
                    expiry: '',
                    cvc: ''
                },
            } 
*/
import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import produce from 'immer'; // https://github.com/mweststrate/immer: use for handling nested state
import valid from 'card-validator';

import withStyles from '@material-ui/core/styles/withStyles';
import restrictToClient from '../../../hoc/restrictToClient';

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

const forms = ['contact', 'address', 'card'];
const noOfForms = forms.length;

class Checkout extends Component {
    state = {
        activeStep: 0,
        nextAllowed: false,
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
        noOfUpdates: {
            contact: 0,
            address: 0,
            card: 0
        },
        user: {
            error: { // initial state must mirror which fields are required
                contact: {
                    name: true,
                    email: true
                },
                address: {
                    addressLine1: true,
                    addressLine2: false,
                    city: true,
                    zip: true,
                    country: true
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
    
    isFormDataCorrect = () => {
        const form = this.getForm(this.state.activeStep);
        const errorState = this.state.user.error[form];
        const isCorrect = !(Object.values(errorState).reduce((acc, val) => acc || val));
        
        //console.log("errorState=", errorState);

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
        //const isCheckbox = (name === "subscribe");
        const newValue = value; // boolean or string //isCheckbox ? event.target.checked : event.target.value;

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
                const isCurrentFormErrorFree = this.isFormDataCorrect();

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
        const { activeStep } = this.state;

        return (
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
  classes: PropTypes.object.isRequired,
};

export default restrictToClient(withStyles(styles)(Checkout));
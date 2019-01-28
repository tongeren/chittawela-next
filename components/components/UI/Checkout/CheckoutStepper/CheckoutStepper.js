import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const styles = () => ({
    stepper: {
        padding: '0 0 0'
    },
    step: { }
});

const steps = ['Contact', 'Address', 'Payment', 'Review', 'Confirmation'];

const checkoutStepper = props => {
    const { activeStep, classes } = props;

    return (
        <Stepper activeStep={ activeStep } className={ classes.stepper }>
            { steps.map((label, i) => (
                <Step key={i} className={ classes.step }>
                    <StepLabel>{ activeStep === i ? label : null }</StepLabel>
                </Step>
            )) }
        </Stepper>
    );    
};

checkoutStepper.propTypes = {
    activeStep: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(checkoutStepper);
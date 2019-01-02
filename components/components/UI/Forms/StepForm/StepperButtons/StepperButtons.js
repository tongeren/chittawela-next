import PropTypes from 'prop-types';
import BackwardButton from './BackwardButton/BackwardButton';
import ForwardButton from './ForwardButton/ForwardButton';

const stepperButtons = (props) => {
    const { classes, activeStep, handleBack, handleNext, nextAllowed, noOfSteps} = props;
    
    const lastStep = noOfSteps - 1; // Zero based

    const { ...backwardButtonProps } = { classes, activeStep, lastStep, handleBack };
    const { ...forwardButtonProps } = { classes, activeStep, lastStep, handleNext, nextAllowed };
   
    return (
        <div className={ classes }>
            <BackwardButton { ...backwardButtonProps }/>
            <ForwardButton { ...forwardButtonProps }/>            
        </div>
    );    
};

stepperButtons.propTypes = {
    classes: PropTypes.string.isRequired,
    activeStep: PropTypes.number.isRequired,
    handleBack: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    nextAllowed: PropTypes.bool.isRequired,
    noOfSteps: PropTypes.number.isRequired
};

export default stepperButtons;


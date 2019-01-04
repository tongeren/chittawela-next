import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const forwardButton = (props) => {
    const { classes, activeStep, lastStep, handleNext, nextAllowed } = props;
    
    const isConfirmation = (activeStep === lastStep);
    const isReview = (activeStep === lastStep - 1);
    const isNextAllowed = (isConfirmation || isReview || nextAllowed);

    const text = isConfirmation ? 'Go home' : (
        isReview ? 'Place order' : 'Next'
    );

    return (
        <Button 
            variant="contained"
            color="primary"
            onClick={ handleNext }
            className={ classes }
            disabled={ !isNextAllowed }
        >
        { text }
        </Button>
    );
};

forwardButton.propTypes = {
    classes: PropTypes.string.isRequired, 
    activeStep: PropTypes.number.isRequired, 
    lastStep: PropTypes.number.isRequired, 
    handleNext: PropTypes.func.isRequired, 
    nextAllowed: PropTypes.bool.isRequired 
};

export default forwardButton;
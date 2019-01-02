import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const backwardButton = (props) => {
    const { classes, activeStep, lastStep, handleBack } = props;

    const isBackAllowed = !(activeStep === 0 || activeStep === lastStep);

    return (
        <Fragment>
            { isBackAllowed && <Button onClick={ handleBack } className={ classes }>Back</Button> }
        </Fragment>
    );
};

backwardButton.propTypes = { 
    classes: PropTypes.string.isRequired, 
    activeStep: PropTypes.number.isRequired, 
    lastStep: PropTypes.number.isRequired,
    handleBack: PropTypes.func.isRequired 
};

export default backwardButton;
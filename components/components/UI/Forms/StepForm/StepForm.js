import { Fragment } from 'react';
import PropTypes from 'prop-types';

import StepContent from './StepContent/StepContent';
import StepperButtons from './StepperButtons/StepperButtons';
import EmptyBox from '../../EmptyBox/EmptyBox';

const stepForm = (props) => {
    const { classes, activeStep, formData, handleBack, handleNext, onChange, nextAllowed, noOfSteps } = props;
    const step = activeStep;
    
    const { ...stepContentProps } = { step, formData, onChange };
    const { ...stepperButtonsProps } = { classes, activeStep, handleBack, handleNext, nextAllowed, noOfSteps };

    console.log("StepForm rerender: activeStep=", activeStep);
    
    return (
        <Fragment>
            <StepContent { ...stepContentProps } />
            <EmptyBox width={'80vw'} height={'4vh'}/> 
            <StepperButtons { ...stepperButtonsProps }/>
        </Fragment>
    );    
};

stepForm.propTypes = {
    classes: PropTypes.string.isRequired,
    activeStep: PropTypes.number.isRequired,
    formData: PropTypes.shape({
        contact: PropTypes.object.isRequired,
        address: PropTypes.object.isRequired,
        card: PropTypes.object.isRequired
    }),
    handleBack: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    nextAllowed: PropTypes.bool.isRequired,
    noOfSteps: PropTypes.number.isRequired
};

export default stepForm;

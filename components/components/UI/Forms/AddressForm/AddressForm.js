import { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import InputBoxFactory from '../../InputBoxes/InputBoxFactory/InputBoxFactory';

import CountryInput from '../../InputBoxes/CountryInput/CountryInput';
import CountryChoiceList from '../../CountryChoiceList/CountryChoiceList';

const addressForm = (props) => {
    const { formText, formData, onChange } = props;

    // Use anonymous function instead of binding in render
    const callback = (event, ) => onChange(event, 'country');
    
    // Initialize factory
    InputBoxFactory.init(onChange);

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>{ formText.title }</Typography>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    { InputBoxFactory.build('addressLine1', { defaultValue: formData.addressLine1 }) } 
                </Grid>
                <Grid item xs={12}>
                    { InputBoxFactory.build('addressLine2', { defaultValue: formData.addressLine2 }) }       
                </Grid>
                <Grid item xs={12} sm={6}>
                    { InputBoxFactory.build('city', { defaultValue: formData.city }) }
                </Grid>
                <Grid item xs={12} sm={6}>
                    { InputBoxFactory.build('zip', { defaultValue: formData.zip }) }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CountryInput 
                        defaultValue={ formData.country }
                        validator={ false }
                        callback={ callback }
                    >
                        <CountryChoiceList />  
                    </CountryInput>
                </Grid>
            </Grid>
        </Fragment>
    ); 
};   
    
addressForm.propTypes = {
    formText: PropTypes.shape({
        title: PropTypes.string.isRequired
    }),
    formData: PropTypes.shape({
        addressLine1: PropTypes.string.isRequired,
        addressLine2: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    }),
    onChange: PropTypes.func.isRequired
};

export default addressForm;


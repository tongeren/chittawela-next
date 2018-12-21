import { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import InputBoxFactory from '../../InputBoxes/InputBoxFactory/InputBoxFactory';

import CountryInput from '../../InputBoxes/CountryInput/CountryInput';
import CountryChoiceList from '../../CountryChoiceList/CountryChoiceList';

const addressForm = (props) => {
    // Initialize factory
    InputBoxFactory.init(props.onChange);

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>{ props.formText.title }</Typography>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    { InputBoxFactory.build('addressLine1', { defaultValue: props.formData.addressLine1 }) } 
                </Grid>
                <Grid item xs={12}>
                    { InputBoxFactory.build('addressLine2', { defaultValue: props.formData.addressLine2 }) }       
                </Grid>
                <Grid item xs={12} sm={6}>
                    { InputBoxFactory.build('city', { defaultValue: props.formData.city }) }
                </Grid>
                <Grid item xs={12} sm={6}>
                    { InputBoxFactory.build('zip', { defaultValue: props.formData.zip }) }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CountryInput 
                        defaultValue={ props.formData.country }
                        validator={ false }
                        callback={ (event, ) => props.onChange(event, 'country') }
                    >
                        <CountryChoiceList />  
                    </CountryInput>
                </Grid>
            </Grid>
        </Fragment>
    ); 
};   
    
export default addressForm;

/*
<Grid item xs={12}>
                    <AddressLine2Input onChange={ event => props.onChange(event) } defaultValue={ props.formData.addressLine2 }/>   
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CityInput onChange={ event => props.onChange(event) } defaultValue={ props.formData.city }/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ZipInput onChange={ event => props.onChange(event) } defaultValue={ props.formData.zip }/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CountryInput onChange={ event => props.onChange(event) } defaultValue={ props.formData.country }>
                        <CountryChoiceList />  
                    </CountryInput>
                </Grid>
*/
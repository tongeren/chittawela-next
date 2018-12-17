import { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AddressLine1Input from '../../InputBoxes/AddressLine1Input/AddressLine1Input';
import AddressLine2Input from '../../InputBoxes/AddressLine2Input/AddressLine2Input';
import CityInput from '../../InputBoxes/CityInput/CityInput';
import ZipInput from '../../InputBoxes/ZipInput/ZipInput';
import CountryInput from '../../InputBoxes/CountryInput/CountryInput';

import CountryChoiceList from '../../CountryChoiceList/CountryChoiceList';

const addressForm = (props) => (
    <Fragment>
        <Typography variant="h6" gutterBottom>{ props.formText.title }</Typography>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <AddressLine1Input onChange={ event => props.onChange(event) } defaultValue={ props.formData.addressLine1 }/>
            </Grid>
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
        </Grid>
    </Fragment>
);    
    
export default addressForm;
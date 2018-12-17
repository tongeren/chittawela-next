import { Fragment, Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Cards from 'react-credit-cards';

import 'react-credit-cards/lib/styles.scss';

import EmptyBox from '../../EmptyBox/EmptyBox';
import CardNumberInput from '../../InputBoxes/CardNumberInput/CardNumberInput';
import CardNameInput from '../../InputBoxes/CardNameInput/CardNameInput';
import ExpiryDateInput from '../../InputBoxes/ExpiryDateInput/ExpiryDateInput';
import CVCInput from '../../InputBoxes/CVCInput/CVCInput';

const paymentForm = (props) => (
    <Fragment>    
        <Cards { ...props.formData } />
        <EmptyBox width={'100vw'} height={'2vh'}/>
        <Grid container spacing={24}>
            <Grid item xs={12} md={6}>
                <CardNumberInput onChange={ event => props.onChange(event) } defaultValue={ props.formData.number }/>
            </Grid>
            <Grid item xs={12} md={6}>
                <CardNameInput onChange={ event => props.onChange(event) } defaultValue={ props.formData.name }/>
            </Grid>
            <Grid item xs={12} md={6}>
                <ExpiryDateInput onChange={ event => props.onChange(event) } defaultValue={ props.formData.expiry }/>
            </Grid>
            <Grid item xs={12} md={6}>
                <CVCInput onChange={ event => props.onChange(event) } defaultValue={ props.formData.cvc }/>
            </Grid>
        </Grid>
    </Fragment>
);

export default paymentForm;


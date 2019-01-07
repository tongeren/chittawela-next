import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Cards from 'react-credit-cards';
import valid from 'card-validator';

import 'react-credit-cards/lib/styles.scss';

import { isValidName } from '../../../../validation/validation';
import EmptyBox from '../../EmptyBox/EmptyBox';
import InputBoxFactory from '../../InputBoxes/InputBoxFactory/InputBoxFactory';

const cardValidators = {
    name: value => isValidName(value),
    number: value => valid.number(value).isValid,
    expiry: value => valid.expirationDate(value).isValid,
    cvc: number => cvc => {
        const card = valid.number(number).card;
        const isCardUndetermined = (card === null);
        const cvcLength = (isCardUndetermined ? 3 : card.code.size);
        const isValid = (cvc.length === cvcLength);
        return isValid;
    }
};

class PaymentForm extends Component {
    state = { 
        ...this.props.formData, 
        focused: 'number',
    };

    getPropName = (name) => {
        switch (name) {
            case 'cardName': {
                return 'name';
            }
            case 'cardNumber': {
                return 'number';
            }
            default: {
                return name;
            }
        };
    };

    handleChange = (value, label) => {
        this.setState({ [label]: value });
    };

    changeFocus = (label) => {
        this.setState({ focused: label });
    };
    
    handler = (value, error, name) => {
        const { onChange } = this.props;
        //const value = event.target.value;
        // Get label of state
        const label = this.getPropName(name);
        // Change focus
        this.changeFocus(label);
        // Change local state
        this.handleChange(value, label);
        // Change global state
        onChange(value, error, label);
    };

    render() {
        const { formData } = this.props;
        const { number, name, expiry, cvc } = formData;

        // Initialize factory
        InputBoxFactory.init(this.handler);

        return (
            <Fragment>    
                <Cards { ...this.state } />
                <EmptyBox width={'80vw'} height={'4vh'}/> 
                <Grid container spacing={24}>
                    <Grid item xs={12} md={6}>
                        { InputBoxFactory.build('cardNumber', { 
                            defaultValue: number,
                            validator: cardValidators.number
                        }) } 
                    </Grid>
                    <Grid item xs={12} md={6}>
                        { InputBoxFactory.build('cardName', { 
                            defaultValue: name,
                            validator: cardValidators.name 
                        }) } 
                    </Grid>
                    <Grid item xs={6} md={3}>
                        { InputBoxFactory.build('expiry', { 
                            defaultValue: expiry,
                            validator: cardValidators.expiry
                        }) } 
                    </Grid>
                    <Grid item xs={6} md={3}>
                        { InputBoxFactory.build('cvc', { 
                            defaultValue: cvc,
                            validator: cardValidators.cvc(this.state.number)  
                        }) } 
                    </Grid>
                </Grid>
            </Fragment>        
        );
    };    
};

PaymentForm.propTypes = {
    formData: PropTypes.shape({
        number: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        expiry: PropTypes.string.isRequired,
        cvc: PropTypes.string.isRequired
    }),
    onChange: PropTypes.func.isRequired
};


export default PaymentForm;


import { Fragment, Component } from 'react';

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
        const cvcLength = (number === '') ? 3 : valid.number(number).card.code.size;
        const isValid = cvc.length === cvcLength;
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

    handleChange = (event, label) => {
        this.setState({ [label]: event.target.value });
    };

    changeFocus = (label) => {
        this.setState({ focused: label });
    };
    
    handler = (event, name) => {
        const { onChange } = this.props;
        // Get label of state
        const label = this.getPropName(name);
        // Change focus
        this.changeFocus(label);
        // Change local state
        this.handleChange(event, label);
        // Change global state
        onChange(event, label);
    };

    render() {
        const { formData } = this.props;

        // Initialize factory
        InputBoxFactory.init(this.handler);

        return (
            <Fragment>    
                <Cards { ...this.state } />
                <EmptyBox width={'80vw'} height={'4vh'}/> 
                <Grid container spacing={24}>
                    <Grid item xs={12} md={6}>
                        { InputBoxFactory.build('cardNumber', { 
                            defaultValue: formData.number,
                            validator: cardValidators.number
                        }) } 
                    </Grid>
                    <Grid item xs={12} md={6}>
                        { InputBoxFactory.build('cardName', { 
                            defaultValue: formData.name,
                            validator: cardValidators.name 
                        }) } 
                    </Grid>
                    <Grid item xs={6} md={3}>
                        { InputBoxFactory.build('expiry', { 
                            defaultValue: formData.expiry,
                            validator: cardValidators.expiry
                        }) } 
                    </Grid>
                    <Grid item xs={6} md={3}>
                        { InputBoxFactory.build('cvc', { 
                            defaultValue: formData.cvc,
                            validator: cardValidators.cvc(this.state.number)  
                        }) } 
                    </Grid>
                </Grid>
            </Fragment>        
        );
    };    
};

export default PaymentForm;


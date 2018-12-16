import { Fragment, Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Cards from 'react-credit-cards';

import 'react-credit-cards/lib/styles.scss';

import EmptyBox from '../../EmptyBox/EmptyBox';
import DecoratedTextField from '../../DecoratedTextField/DecoratedTextField';

class PaymentForm extends Component {
    handleChange = event => {
        this.props.onFormSubmit(event);
    };

    render() {  

        return (
            <Fragment>    
                <Cards
                    number={this.props.cardInfo.number}
                    name={this.props.cardInfo.name}
                    expiry={this.props.cardInfo.expiry}
                    cvc={this.props.cardInfo.cvc}
                    focused={this.props.stateInfo.focused}
                />
                <EmptyBox width={'100vw'} height={'2vh'}/>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={6}>
                        <DecoratedTextField 
                            required 
                            id="cardNumber" 
                            label="Card number" 
                            name="number"
                            value={this.props.cardInfo.number}
                            onChange={ event => this.handleChange(event) }
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DecoratedTextField 
                            required 
                            id="cardName" 
                            label="Name on card" 
                            name="name"
                            value={this.props.cardInfo.name}
                            onChange={ event => this.handleChange(event) }
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DecoratedTextField 
                            required 
                            id="expDate" 
                            label="Expiry date" 
                            name="expiry"
                            value={this.props.card.expiry}
                            onChange={ event => this.handleChange(event) }
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DecoratedTextField
                            required
                            id="cvv"
                            label="CVV"
                            name="cvv"
                            /* helperText="Last three digits on signature strip" */
                            value={this.props.cardInfo.cvv}
                            onChange={ event => this.handleChange(event) }
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Fragment>
        );
    };
};

export default PaymentForm;


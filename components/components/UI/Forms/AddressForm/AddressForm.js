import { Fragment, Component } from 'react';
import { getData } from 'country-list';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DecoratedTextField from '../../DecoratedTextField/DecoratedTextField';

const countries = getData();

class AddressForm extends Component {
    liftUp = (event) => {
        // Lifted state has been checked, hence can be lifted up once more
        this.props.onChange(event);
    };

    render() {
        return (
            <Fragment>
                <Typography variant="h6" gutterBottom>{ this.props.formText.title }</Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <DecoratedTextField
                            required
                            id="address1"
                            name="addressLine1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="billing address-line-1"
                            onChange={ event => this.handleChange(event) }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <DecoratedTextField
                            required
                            id="address2"
                            name="addressLine2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="billing address-line-2"
                            onChange={ event => this.handleChange(event) }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DecoratedTextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="billing address-level2"
                            onChange={ event => this.handleChange(event) }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DecoratedTextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="billing postal-code"
                            onChange={ event => this.handleChange(event) }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DecoratedTextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="billing country"
                            onChange={ event => this.handleChange(event) }
                            SelectProps={{ native: true }}
                        >
                            { countries.map((country, i) => (
                                <option key={ i } value={ country.name }>{ country.name }</option>
                            ))}    
                        </DecoratedTextField>
                    </Grid>
                </Grid>
            </Fragment>
        );    
    };
};

export default AddressForm;
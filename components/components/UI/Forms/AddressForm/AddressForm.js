import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import InputBoxFactory from '../../InputBoxes/InputBoxFactory/InputBoxFactory';
import CountryInput from '../../InputBoxes/CountryInput/CountryInput';
import EmptyBox from '../../EmptyBox/EmptyBox';

class AddressForm extends Component {
    // Use anonymous function instead of binding in render
    callback = (value, error, ) => this.props.onChange(value, error, 'country');
    
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    };

    render() {
        const { formText, formData, onChange } = this.props;
        const { addressLine1, addressLine2, city, zip, country } = formData;

        // Initialize factory
        InputBoxFactory.init(onChange);

        return (
            <Fragment>
                <Typography variant="h6" gutterBottom>{ formText.title }</Typography>
                <EmptyBox width={'80vw'} height={'2vh'}/>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        { InputBoxFactory.build('addressLine1', { defaultValue: addressLine1 }) } 
                    </Grid>
                    <Grid item xs={12}>
                        { InputBoxFactory.build('addressLine2', { defaultValue: addressLine2 }) }       
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        { InputBoxFactory.build('city', { defaultValue: city }) }
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        { InputBoxFactory.build('zip', { defaultValue: zip }) }
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CountryInput 
                            defaultValue={ country }
                            validator={ false }
                            callback={ this.callback }
                        />
                    </Grid>
                </Grid>
            </Fragment>
        );
    };
};   
    
AddressForm.propTypes = {
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

export default AddressForm;


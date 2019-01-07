import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';
import CountryOptions from './CountryOptions/CountryOptions';

const countryInput = props => {
    const { defaultValue, ...allowedProps } = props;

    return (
        <UncontrolledInput
            { ...allowedProps }
            required
            select
            id="country"
            name="country"
            label="Country"
            defaultValue={ defaultValue }
            fullWidth
            autoComplete="billing country"
            SelectProps={{ native: true }}>
                <CountryOptions /> 
        </UncontrolledInput>
    );            
};

countryInput.propTypes = {
    defaultValue: PropTypes.string.isRequired
};

export default countryInput;
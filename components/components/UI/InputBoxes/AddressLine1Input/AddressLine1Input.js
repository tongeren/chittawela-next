import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

const addressLine1Input = props => (
    <UncontrolledInput
        required
        id="address1"
        name="addressLine1"
        label="Address line 1"
        fullWidth
        autoComplete="billing address-line-1"
        onChange={ event => props.onChange(event) } 
        onSelect={ event => props.onSelect(event) }
        defaultValue={ props.defaultValue }
    />        
);

addressLine1Input.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};

export default addressLine1Input;

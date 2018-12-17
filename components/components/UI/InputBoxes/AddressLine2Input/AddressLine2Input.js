import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

const addressLine2Input = props => (
    <UncontrolledInput
        id="address2"
        name="addressLine2"
        label="Address line 2"
        fullWidth
        autoComplete="billing address-line-2"
        onChange={ event => props.onChange(event) } 
        onSelect={ event => props.onSelect(event) }
        defaultValue={ props.defaultValue }
    />        
);

addressLine2Input.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};

export default addressLine2Input;
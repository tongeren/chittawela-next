import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

const expiryDateInput = props => (
    <UncontrolledInput
        required 
        id="expDate" 
        label="Expiry date" 
        name="expiry"
        autoComplete="cc-exp"
        onChange={ event => props.onChange(event) } 
        onSelect={ event => props.onSelect(event) }
        defaultValue={ props.defaultValue }
    />        
);

expiryDateInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};

export default expiryDateInput;
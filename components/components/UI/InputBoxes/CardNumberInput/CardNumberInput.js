import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

const cardNumberInput = props => (
    <UncontrolledInput
        required 
        id="cardNumber" 
        label="Card number" 
        name="number"
        fullWidth
        autoComplete="cc-number"
        onChange={ event => props.onChange(event) } 
        onSelect={ event => props.onSelect(event) }
        defaultValue={ props.defaultValue }
    />        
);

cardNumberInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};

export default cardNumberInput;

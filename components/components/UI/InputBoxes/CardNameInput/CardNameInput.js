import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

const cardNameInput = props => (
    <UncontrolledInput
        required 
        id="cardName" 
        label="Name on card" 
        name="name"
        fullWidth
        autoComplete="cc-name"
        onChange={ event => props.onChange(event) } 
        onSelect={ event => props.onSelect(event) }
        defaultValue={ props.defaultValue }
    />        
);

cardNameInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};

export default cardNameInput;

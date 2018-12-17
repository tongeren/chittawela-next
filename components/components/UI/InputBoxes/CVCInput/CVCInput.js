import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

const cVCInput = props => (
    <UncontrolledInput
        required 
        id="cvc"
        label="CVC"
        name="cvc"
        // helperText="Last three digits on signature strip" 
        autoComplete="cc-csc"
        onChange={ event => props.onChange(event) } 
        onSelect={ event => props.onSelect(event) }
        defaultValue={ props.defaultValue }
    />        
);

cVCInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};

export default cVCInput;

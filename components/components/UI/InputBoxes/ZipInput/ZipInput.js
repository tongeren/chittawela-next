import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

const zipInput = props => (
    <UncontrolledInput
        required
        id="zip"
        name="zip"
        label="Zip / Postal code"
        fullWidth
        autoComplete="billing postal-code"
        onChange={ event => props.onChange(event) } 
        onSelect={ event => props.onSelect(event) }
        defaultValue={ props.defaultValue }
    />        
);

zipInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};

export default zipInput;
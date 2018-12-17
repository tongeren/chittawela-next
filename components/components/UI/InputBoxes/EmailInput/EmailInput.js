import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';
import { isValidEmailAddress } from '../../../../validation/validation';

const emailInput = props => (
    <UncontrolledInput
        required
        name="email"
        label="E-mail Address"
        autoComplete="email"
        fullWidth
        onChange={ event => props.onChange(event) } 
        onSelect={ event => props.onSelect(event) }
        validator={ value => isValidEmailAddress(value) }
        defaultValue={ props.defaultValue }
    />        
);

emailInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};

export default emailInput;


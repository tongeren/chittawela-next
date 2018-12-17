import PropTypes from 'prop-types';
 
import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';
import { isValidName } from '../../../../validation/validation';

const nameInput = props => (
    <UncontrolledInput 
        required 
        name="name" 
        label="Name"
        autoComplete="name"
        fullWidth
        onChange={ event => props.onChange(event) } 
        onSelect={ event => props.onSelect(event) }
        validator={ value => isValidName(value) }
        defaultValue={ props.defaultValue }
    />
);

nameInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};

export default nameInput;


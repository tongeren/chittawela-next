import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

const countryInput = props => (
    <UncontrolledInput
        required
        id="country"
        name="country"
        label="Country"
        fullWidth
        autoComplete="billing country"
        onChange={ event => props.onChange(event) } 
        onSelect={ event => props.onSelect(event) }
        defaultValue={ props.defaultValue }
        SelectProps={{ native: true }}>
        { props.children }
    </UncontrolledInput>        
);

countryInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};

export default countryInput;
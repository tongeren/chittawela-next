import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

const countryInput = props => (
    <UncontrolledInput
        { ...props }
        required
        id="country"
        name="country"
        label="Country"
        fullWidth
        autoComplete="billing country"
        defaultValue={ props.defaultValue }
        SelectProps={{ native: true }}>
        { props.children }
    </UncontrolledInput>        
);

countryInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onSelect: PropTypes.func
};

export default countryInput;
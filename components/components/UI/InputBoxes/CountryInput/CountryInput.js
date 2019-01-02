import PropTypes from 'prop-types';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

const countryInput = props => {
    const { children, defaultValue, ...allowedProps } = props;

    return (
        <UncontrolledInput
            { ...allowedProps }
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
            defaultValue={ defaultValue }
            SelectProps={{ native: true }}>
            { children }
        </UncontrolledInput>
    );            
};

countryInput.propTypes = {
    children: PropTypes.object.isRequired,
    defaultValue: PropTypes.string.isRequired
};

export default countryInput;
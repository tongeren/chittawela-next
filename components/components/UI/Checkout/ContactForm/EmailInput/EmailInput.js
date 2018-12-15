import { Component } from 'react';
import PropTypes from 'prop-types';

import UncontrolledInput from '../../../UncontrolledInput/UncontrolledInput';
import { isValidEmailAddress } from '../../../../../validation/validation';

// Fully uncontrolled component with key
class EmailInput extends Component {

    liftUp = (event) => {
        // Lifted state has been checked, hence can be lifted up once more
        this.props.onChange(event);
    };

    render() {
        return (
            <UncontrolledInput
                required
                name="email"
                label="E-mail Address"
                autoComplete="email"
                fullWidth
                onChange={ this.liftUp } 
                validator={ value => isValidEmailAddress(value) }
                defaultValue={ this.props.defaultValue }
            />
        );
    };
};

EmailInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default EmailInput;


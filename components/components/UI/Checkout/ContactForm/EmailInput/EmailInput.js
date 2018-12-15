import { Component } from 'react';
import PropTypes from 'prop-types';

import DecoratedTextField from '../../../DecoratedTextField/DecoratedTextField';   
import { isValidEmailAddress } from '../../../../../validation/validation';

// Fully uncontrolled component with key
class EmailInput extends Component {
    // Load and store draft state
    state = {
        value: this.props.defaultValue
    };

    handleChange = event => {
        // Change local state 
        this.setState({ value: event.target.value });

        // Whenever error status is false, also lift state up 
        const isValid = isValidEmailAddress(this.state.value);
        if (isValid) { this.props.onChange(event) };
    };

    render() {
        return (
            <DecoratedTextField
                required
                name="email"
                label="E-mail Address"
                fullWidth
                onChange={ event => this.handleChange(event) }
                error={ !isValidEmailAddress(this.state.value) }
                defaultValue={ this.state.value }
            />
        );
    };
};

EmailInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default EmailInput;


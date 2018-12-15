import { Component } from 'react';
import PropTypes from 'prop-types';

import DecoratedTextField from '../../../DecoratedTextField/DecoratedTextField';   
import { isValidName } from '../../../../../validation/validation';

// Fully uncontrolled component 
class NameInput extends Component {
    // Load and store draft state
    state = {
        value: this.props.defaultValue
    };

    handleChange = event => {
        // Change local state 
        this.setState({ value: event.target.value });

        // Whenever error status is false, also lift state up 
        const isValid = isValidName(this.state.value);
        if (isValid) { this.props.onChange(event) };
    };

    render() {
        return (
            <DecoratedTextField
                required
                name="name"
                label="Name"
                fullWidth
                onChange={ event => this.handleChange(event) }
                error={ !isValidName(this.state.value) }
                defaultValue={ this.state.value }
            />
        );
    };
};

NameInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default NameInput;
import { Component } from 'react';
import PropTypes from 'prop-types';

import DecoratedTextField from '../../DecoratedTextField/DecoratedTextField';   

// Fully uncontrolled component 
class UncontrolledInput extends Component {
    // Load and store draft state
    state = {
        value: this.props.defaultValue
    };

    isError = (value) => {
        // If the validator is supplied, then determine whether we are in an error state, otherwise we are not
        return this.props.validator ? !this.props.validator(value) : false;
    };

    handleChange = event => {
        // Change local state 
        this.setState({ value: event.target.value });

        // Whenever error status is false, also lift state up 
        const isValid = !this.isError(this.state.value);
        if (isValid) { this.props.onChange(event) };
    };

    render() {
        // Remove 'validator' prop which is not allowed on DOM node
        const { validator, ...allowedProps } = this.props;

        return (
            <DecoratedTextField
                { ...allowedProps }
                onChange={ event => this.handleChange(event) }
                onSelect={ event => this.handleChange(event) }
                error={ this.isError(this.state.value) }
                defaultValue={ this.state.value }
            />
        );
    };
};

UncontrolledInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
    required: PropTypes.bool,
    fullWidth: PropTypes.bool,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    autoComplete: PropTypes.string,
    validator: PropTypes.func
};

export default UncontrolledInput;
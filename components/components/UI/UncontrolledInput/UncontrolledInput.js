import { Component } from 'react';
import PropTypes from 'prop-types';

import DecoratedTextField from '../../../DecoratedTextField/DecoratedTextField';   

// Fully uncontrolled component 
class UncontrolledInput extends Component {
    // Load and store draft state
    state = {
        value: this.props.defaultValue
    };

    getAutoFillFieldName = () => {
        return this.props.autoComplete ? this.props.autoComplete : null;
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
        return (
            <DecoratedTextField
                required
                name={ this.props.name }
                label={ this.props.label }
                fullWidth
                autoComplete={ this.getAutoFillFieldName() }
                onChange={ event => this.handleChange(event) }
                error={ this.isError(this.state.value) }
                defaultValue={ this.state.value }
            />
        );
    };
};

NameInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    autoComplete: PropTypes.string,
    validator: PropTypes.func
};

export default UncontrolledInput;
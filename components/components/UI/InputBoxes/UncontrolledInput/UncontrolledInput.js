import { Component } from 'react';
import PropTypes from 'prop-types';

import DecoratedTextField from '../../DecoratedTextField/DecoratedTextField';   

// Fully uncontrolled component 
class UncontrolledInput extends Component {
    // Load and store draft state
    state = {
        value: this.props.defaultValue
    };

    handleChange = (event, callback) => {
        this.setState({ value: event.target.value });

        // Whenever error status is false, also lift state up 
        const isFunction = typeof(this.props.validator) === 'function';
        const isValid = isFunction ? this.props.validator(this.state.value) : true;
        
        isValid ? callback(event) : null;
    };

    isError = value => {
       return this.props.validator ? !this.props.validator(value) : false;
    };

    render() {
        const { callback, onChange, onSelect, error, validator, defaultValue,  ...allowedProps } = this.props;
        
        return (
            <DecoratedTextField
                { ...allowedProps }
                onChange={ event => this.handleChange(event, this.props.callback) }
                onSelect={ event => this.handleChange(event, this.props.callback) }
                error={ this.isError(this.state.value) }
                defaultValue={ this.state.value }
            />
        );
    };
};

UncontrolledInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    validator: PropTypes.any,
    callback: PropTypes.func.isRequired,
};

export default UncontrolledInput;


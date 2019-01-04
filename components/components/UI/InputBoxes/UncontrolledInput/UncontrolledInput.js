import { Component } from 'react';
import PropTypes from 'prop-types';

import DecoratedTextField from '../../DecoratedTextField/DecoratedTextField';   

// Fully uncontrolled component 
class UncontrolledInput extends Component {
    // Load and store draft state
    state = {
        value: this.props.defaultValue
    };    

    isError = value => {
        const { validator } = this.props;
 
        const isFunction = typeof(validator) === 'function';
        const error = this.props.required &&  (value === '');
 
        return isFunction ? !this.props.validator(value) : error;
    };

    handleChange = (event, callback) => {
        const prevValue = this.state.value;
        const newValue = event.target.value;

        const prevError = this.isError(prevValue);
        const newError = this.isError(newValue);
        
        console.log("handleChange: (newError, prevError):", newError, prevError);

        this.setState({ 
            value: newValue
        });

        const changeToError = !prevError && newError;
        const noError = !newError;

        // Lift state up if either: 1. error state is false (input has been checked),
        // or:                      2. previous error state was false, but now is true (change to error)
        const liftStateUp = noError || changeToError;

        if (liftStateUp) {
            console.log("Lift state up...");
            callback(event);
        };
    };

    onChangeHandler = event => this.handleChange(event, this.props.callback);
    onSelectHandler = this.onChangeHandler;

    // We need this method to refocus on the current input field because we loose focus after next button is enabled
    reFocus = input => {
        if (input) {
            setTimeout(() => { input.focus() }, 100);
        };
    };

    render() {
        const { callback, onChange, onSelect, validator, error, defaultValue, inputRef,  ...allowedProps } = this.props;
        const { value } = this.state;
        
        return (
            <DecoratedTextField
                { ...allowedProps }
                inputRef={ this.reFocus }
                onChange={ this.onChangeHandler }
                onSelect={ this.onSelectHandler }
                error={ this.isError(value) }
                defaultValue={ value }
            />
        );
    };
};

UncontrolledInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    validator: PropTypes.any,
    callback: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired
};

export default UncontrolledInput;


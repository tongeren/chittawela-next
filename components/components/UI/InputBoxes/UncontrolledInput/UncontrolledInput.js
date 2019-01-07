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
        const { validator, required } = this.props;
 
        // If required, then if there is a validator, then use it, else only error if empty, else no error
        const isFunction = typeof(validator) === 'function';
        const isErrorUsingValidator = isFunction ? !this.props.validator(value) : undefined;
        const isEmpty = (value === '');
        
        return required ? (isFunction ? isErrorUsingValidator : isEmpty) : false;
    };

    handleChange = event => {
        const prevValue = this.state.value;
        const newValue = event.target.value;

        const newError = this.isError(newValue);
        
        const isValueChanged = !(prevValue === newValue);

        if (isValueChanged) {
            this.setState({ 
                value: newValue
            }, 
                () => this.props.callback(newValue, newError)
            );
        };    
    };

    onChangeHandler = event => this.handleChange(event);

    render() {
        const { callback, onChange, onSelect, validator, error, defaultValue, inputRef,  ...allowedProps } = this.props;
        const { value } = this.state;

        console.log("typeof value", typeof value);
        
        return (
            <DecoratedTextField
                { ...allowedProps }
                onChange={ this.onChangeHandler }
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


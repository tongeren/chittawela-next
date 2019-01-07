import { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class SubscribeCheckbox extends Component {
    state = {
        checked: this.props.defaultValue
    };

    handleChange = event => {
        const value = event.target.checked;
        // Change local state 
        this.setState({ checked: value });
        // Always lift state up 
        this.props.onChange(value);
    };

    render() {
        return (
            <Checkbox 
                color="secondary" 
                name="subscribe"
                checked={ this.state.checked }
                onChange={ event => this.handleChange(event) }
            /> 
        );
    };
};

SubscribeCheckbox.propTypes = {
    defaultValue: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SubscribeCheckbox;
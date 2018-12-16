import { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class SubscribeCheckbox extends Component {
    state = {
        checked: this.props.defaultValue
    };

    handleChange = event => {
        // Change local state 
        this.setState({ checked: event.target.checked });
        // Always lift state up 
        this.props.onChange(event);
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

export default SubscribeCheckbox;
import { Component } from 'react';
import PropTypes from 'prop-types';
 
import UncontrolledInput from '../../../UncontrolledInput/UncontrolledInput';
import { isValidName } from '../../../../../validation/validation';

class NameInput extends Component {

    liftUp = (event) => {
        // Lifted state has been checked, hence can be lifted up once more
        this.props.onChange(event);
    };

    render() {
        return (
            <UncontrolledInput 
                required 
                name="name" 
                label="Name"
                autoComplete="name"
                fullWidth
                onChange={ this.liftUp } 
                validator={ value => isValidName(value) }
                defaultValue={ this.props.defaultValue }
            />
        );
    };
};

NameInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default NameInput;


import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const decoratedTextField = (props) => (
    <TextField {...props}>
        { props.children }
    </TextField>
);

decoratedTextField.defaultProps= {
    variant: "outlined"
};

export default decoratedTextField;



import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const CancelButton = (props) => {
    const { clicked, autoFocusStatus } = props;

    return (
        <Button onClick={ clicked } color="secondary" autoFocus={ autoFocusStatus }>
            Cancel
        </Button>
    );    
};

CancelButton.propTypes={
    clicked: PropTypes.func.isRequired,
    autoFocusStatus: PropTypes.bool.isRequired
};

export default CancelButton;

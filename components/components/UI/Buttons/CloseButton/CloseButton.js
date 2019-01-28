import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const CloseButton = props => {
    const { clicked, autoFocusStatus } = props;

    return (
        <Button onClick={ clicked } color="secondary" autoFocus={ autoFocusStatus }>
            Close
        </Button>
    );
};

CloseButton.propTypes={
    clicked: PropTypes.func.isRequired,
    autoFocusStatus: PropTypes.bool.isRequired    
};

export default CloseButton;


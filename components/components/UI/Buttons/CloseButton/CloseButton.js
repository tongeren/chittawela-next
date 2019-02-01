import PropTypes from 'prop-types';
import Button from '../Button/Button';

const CloseButton = props => {
    const { clicked, autoFocusStatus } = props;

    return (
        <Button onClick={ clicked } autoFocus={ autoFocusStatus }>
            Close
        </Button>
    );
};

CloseButton.propTypes={
    clicked: PropTypes.func.isRequired,
    autoFocusStatus: PropTypes.bool.isRequired    
};

export default CloseButton;


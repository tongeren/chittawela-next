import PropTypes from 'prop-types';
import Button from '../Button/Button';

const CloseButton = props => {
    const { handler, autoFocusStatus } = props;

    return (
        <Button onClick={ handler } autoFocus={ autoFocusStatus }>
            Close
        </Button>
    );
};

CloseButton.propTypes={
    handler: PropTypes.func.isRequired,
    autoFocusStatus: PropTypes.bool.isRequired    
};

export default CloseButton;


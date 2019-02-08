import PropTypes from 'prop-types';
import Button from '../Button/Button';

const CloseButton = props => {
    const { handler, status } = props;

    return (
        <Button clicked={ handler } autoFocus={ status }>
            Close
        </Button>
    );
};

CloseButton.propTypes={
    handler: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired    
};

export default CloseButton;


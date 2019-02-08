import PropTypes from 'prop-types';
import Button from '../Button/Button';

const SubscribeButton = (props) => {
    const { handler, autoFocusStatus, disableStatus } = props;

    return (
        <Button clicked={ handler } autoFocus={ autoFocusStatus } disabled={ disableStatus }>
            Subscribe
        </Button>
    );    
};

SubscribeButton.propTypes={
    handler: PropTypes.func.isRequired,
    autoFocusStatus: PropTypes.bool.isRequired,
    disableStatus: PropTypes.bool.isRequired
};

export default SubscribeButton;

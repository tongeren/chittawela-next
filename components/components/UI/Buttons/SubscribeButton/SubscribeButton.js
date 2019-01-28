import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const SubscribeButton = (props) => {
    const { clicked, autoFocusStatus, disableStatus } = props;

    return (
        <Button onClick={ clicked } color="secondary" autoFocus={ autoFocusStatus } disabled={ disableStatus }>
            Subscribe
        </Button>
    );    
};

SubscribeButton.propTypes={
    clicked: PropTypes.func.isRequired,
    autoFocusStatus: PropTypes.bool.isRequired,
    disableStatus: PropTypes.bool.isRequired
};

export default SubscribeButton;

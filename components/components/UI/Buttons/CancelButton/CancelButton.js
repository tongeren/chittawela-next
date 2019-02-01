import PropTypes from 'prop-types';
import Button from '../Button/Button';

const CancelButton = (props) => {
    const { clicked, autoFocusStatus } = props;

    return (
        <Button onClick={ clicked } autoFocus={ autoFocusStatus }>
            Cancel
        </Button>
    );    
};

CancelButton.propTypes={
    clicked: PropTypes.func.isRequired,
    autoFocusStatus: PropTypes.bool.isRequired
};

export default CancelButton;

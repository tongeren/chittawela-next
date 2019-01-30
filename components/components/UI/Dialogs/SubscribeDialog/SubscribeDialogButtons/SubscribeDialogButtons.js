import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';

import CancelButton from '../../../Buttons/CancelButton/CancelButton';
import SubscribeButton from '../../../Buttons/SubscribeButton/SubscribeButton';

const SubscribeDialogButtons = props => {
    const { handleCancel, handleSubscribe, validationStatus } = props;

    return (
        <DialogActions>
            <CancelButton 
                clicked={ handleCancel }
                autoFocusStatus={ !validationStatus }
            />
            <SubscribeButton
                clicked={ handleSubscribe }
                autoFocusStatus={ validationStatus } 
                disableStatus={ !validationStatus }
            />
        </DialogActions>
    );    
};

SubscribeDialogButtons.propTypes={
    handleCancel: PropTypes.func.isRequired,
    handleSubscribe: PropTypes.func.isRequired,
    validationStatus: PropTypes.bool.isRequired
};

export default SubscribeDialogButtons;
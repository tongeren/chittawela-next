import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CloseButton from '../../Buttons/CloseButton/CloseButton';

const subscriptionSuccessTitle = "Thank you!"
const subscriptionSuccessMessage = "You succesfully subscribed to Chittawela's mailing list. We will keep in touch!";

const ConfirmationDialog = props => {
    const { showDialog, onCloseHandler } = props;

    return (
        <Dialog open={ showDialog } onClose={ onCloseHandler } aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title">{ subscriptionSuccessTitle }</DialogTitle>
            <DialogContent>
                <DialogContentText>{ subscriptionSuccessMessage }</DialogContentText>
            </DialogContent>
            <DialogActions>
                <CloseButton clicked={ onCloseHandler } autoFocusStatus={ true } /> 
            </DialogActions>
        </Dialog>
    );
};

ConfirmationDialog.propTypes={
    showDialog: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired
};

export default ConfirmationDialog;    
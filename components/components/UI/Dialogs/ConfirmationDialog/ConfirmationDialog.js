import PropTypes from 'prop-types';
import MuiDialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '../Dialog/Dialog';
import CloseButton from '../../Buttons/CloseButton/CloseButton';

const subscriptionSuccessTitle = "Thank you!"
const subscriptionSuccessMessage = "You succesfully subscribed to Chittawela's mailing list. We will keep in touch!";

const ConfirmationDialog = props => {
    const { showDialog, onCloseHandler } = props;

    return (
        <Dialog 
            show={ showDialog }
            onCloseHandler={ onCloseHandler }
            title={ subscriptionSuccessTitle }
            buttons={ <CloseButton handler={ onCloseHandler } clicked={ onCloseHandler } autoFocusStatus={ true } /> }
        >
            <MuiDialogContentText>{ subscriptionSuccessMessage }</MuiDialogContentText>
        </Dialog>  
    );
};

ConfirmationDialog.propTypes={
    showDialog: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired
};

export default ConfirmationDialog;    

import PropTypes from 'prop-types';

import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import { withStylingContextProvider } from '../../../../hoc/withStylingContext/withStylingContext';
import ButtonTypes from '../../../../styles/types/buttons';

const style = ButtonTypes.dialogs;

const Dialog = props => {
    const { show, onCloseHandler, title, content, buttons, handlers, status } = props;

    return (
        <MuiDialog 
            open={ show } 
            onClose={ onCloseHandler } 
            onBackdropClick = { onCloseHandler } 
            aria-labelledby="form-dialog-title"
        >
            <MuiDialogTitle>{ title }</MuiDialogTitle>
            <MuiDialogContent>
                { content() }
            </MuiDialogContent>
            <MuiDialogActions>{ buttons(handlers, status) }</MuiDialogActions>
        </MuiDialog>
    );    
};

Dialog.propTypes={
    show: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.func.isRequired,
    buttons: PropTypes.func.isRequired,
    handlers: PropTypes.objectOf(PropTypes.func).isRequired,
    status: PropTypes.object.isRequired
};

export default withStylingContextProvider(style)(Dialog);
//export default Dialog;

/*

*/
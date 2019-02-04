import PropTypes from 'prop-types';

import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import { withStylingContextProvider } from '../../../../hoc/withStylingContext/withStylingContext';
import ButtonTypes from '../../../../styles/types/buttons';

const style = ButtonTypes.dialogs;

const Dialog = props => {
    const { show, onCloseHandler, title, children, buttons } = props;
    
    return (
        <MuiDialog 
            open={ show } 
            onClose={ onCloseHandler } 
            onBackdropClick = { onCloseHandler } 
            aria-labelledby="form-dialog-title"
        >
            <MuiDialogTitle id="form-dialog-title">{ title }</MuiDialogTitle>
            <MuiDialogContent>
                { children }
            </MuiDialogContent>
            <MuiDialogActions>{ buttons }</MuiDialogActions>
        </MuiDialog>
    );    
};

Dialog.propTypes={
    show: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    buttons: PropTypes.element.isRequired
};

export default withStylingContextProvider(style)(Dialog);


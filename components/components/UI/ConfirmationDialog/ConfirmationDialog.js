import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class ConfirmationDialog extends React.Component {
  state = {
    dialogOpen: this.props.show,
  };

  handleClose = () => {
    // Close the Confirmation dialog
    this.setState({ dialogOpen: false });
    this.props.closeConfirmationDialog();
  };

  render() {
    const { fullScreen } = this.props;

    let confirmationDialogJSX =
      <div>
        <Dialog
          open={this.props.show}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Thank you!"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
                You succesfully subscribed to Chittawela's mailing list. We will keep in touch! 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary" autoFocus>
                Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>;
     
    return ( (this.props.show && this.state.dialogOpen) ? confirmationDialogJSX : null );
    
  }
}

ConfirmationDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ConfirmationDialog);
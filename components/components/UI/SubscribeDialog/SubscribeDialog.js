import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const dialogTitleText = "Please tell me more!";
const subscribeDialogText = "Yes! I want to change my life and live from the heart!";
const fullNameInputFieldText = "Your Name";
const emailAddressInputFieldText = "Your Email Address";

export default class SubscribeDialog extends Component {
    state = {
        dialogOpen: this.props.show
    };

    handleClose = () => {
        console.log("handleClose");
        console.log("Subscribe to MailChimp");
        this.setState({ dialogOpen: false });
        this.props.closeDialog();
    };
  
    render() {
        let subscribeDialogJSX =
            <div>
                <Dialog
                    open={ this.props.show }
                    onClose={ this.handleClose }
                    onBackdropClick = { this.handleClose }
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{ dialogTitleText }</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            { subscribeDialogText }
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label={ fullNameInputFieldText }
                            type="email"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label={ emailAddressInputFieldText }
                            type="email"
                            fullWidth
                            variant="outlined"
                        />
                    </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="secondary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>;
    
        return ( (this.props.show && this.state.dialogOpen) ? subscribeDialogJSX : null );
        // return (this.state.dialogOpen ? subscribeDialogJSX : null );
        // return subscribeDialogJSX;
    }    
}

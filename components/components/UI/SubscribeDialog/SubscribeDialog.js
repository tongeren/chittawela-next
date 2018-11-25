import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { subscribeToNewsletter } from '../../../../lib/api/public'; /* client side API method */
import { isValidEmailAddress, isValidName } from '../../../validation/validation';

const dialogTitleText = "Please tell me more!";
const subscribeDialogText = "Yes! I want to change my life and live from the heart!";
const fullNameInputFieldText = "Your Name";
const emailAddressInputFieldText = "Your Email Address";

const presetName = "Duncan van Tongeren";
const presetEmailAddress = "dpvantongeren@gmail.com";

export default class SubscribeDialog extends Component {
    state = {
        dialogOpen: this.props.show,
        user: {
            name: presetName,
            email: presetEmailAddress
        }
    };

    cancelButtonClickedHandler = () => {
        this.handleClose();
    }

    subscribeButtonClickedHandler = async (event) => {        
        if (!this.isValidSubscriptionInfo()) { return; };

        event.preventDefault();

        try {
            const user = this.state.user;
            await subscribeToNewsletter({ user });
        } 
        catch (err) {
            console.log(err); 
        }
        
        console.log("Subscribed!");
        this.handleClose();
    };

    handleClose = () => {
        // Close the dialog
        this.setState({ dialogOpen: false });
        this.props.closeDialog();
    };
  
    isValidSubscriptionInfo = () => {
        const isName = isValidName(this.state.user.name);
        const isEmail = isValidEmailAddress(this.state.user.email);

        const isValid = isName && isEmail;
        
        return isValid;
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
                            error={ !isValidName(this.state.user.name) }
                            margin="dense"
                            id="name"
                            label={ fullNameInputFieldText }
                            onChange={ (event) => this.setState({ user: { ...this.state.user, name: event.target.value.trim() }}) }
                            type="text" /* HTML5 input type */
                            fullWidth
                            variant="outlined"
                            value={ this.state.user.name }
                        />
                        <TextField
                            autoFocus
                            error={ !isValidEmailAddress(this.state.user.email) }
                            margin="dense"
                            id="name"
                            label={ emailAddressInputFieldText }
                            onChange={ (event) => this.setState({ user: { ...this.state.user, email: event.target.value.trim() }}) }
                            type="email" /* HTML5 input type */
                            fullWidth
                            variant="outlined"
                            value={ this.state.user.email }
                        />
                    </DialogContent>
                <DialogActions>
                    <Button 
                        onClick={this.cancelButtonClickedHandler} 
                        color="secondary" 
                        autoFocus={!this.isValidSubscriptionInfo()} >
                        Cancel
                    </Button>
                    <Button 
                        onClick={this.subscribeButtonClickedHandler} 
                        color="secondary" 
                        autoFocus={this.isValidSubscriptionInfo()}
                        disabled={!this.isValidSubscriptionInfo()} >
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>;
    
        return ( (this.props.show && this.state.dialogOpen) ? subscribeDialogJSX : null );
    }    
}

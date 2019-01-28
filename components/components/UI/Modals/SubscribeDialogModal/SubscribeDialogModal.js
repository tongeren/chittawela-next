import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SubscribeDialogButtons from './SubscribeDialogButtons/SubscribeDialogButtons';

import { subscribeToNewsletter } from '../../../../../lib/api/public'; /* client side API method */
import { logger } from '../../../../helper/logger';
//import { ClientSideApiRequest } from '../../../../../lib/api/api.functions';
import { isValidEmailAddress, isValidName } from '../../../../validation/validation';

const dialogTitleText = "Please tell me more!";
const subscribeDialogText = "Yes! I want to change my life and live from the heart!";
const fullNameInputFieldText = "Your Name";
const emailAddressInputFieldText = "Your Email Address";

const presetName = "Duncan van Tongeren";
const presetEmailAddress = "isarastudio@gmail.com";
const testWithoutSubscribing = true;

//const subscribeToNewsletter = ClientSideApiRequest.build('addSingleSubscriberToList');

export default class SubscribeDialogModal extends Component {
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
        console.log("SubscribeDialog.subscribeButtonClickedHandler:");

        if (!this.isValidSubscriptionInfo()) { return; };
        
        event.preventDefault();

        try {
            const name = this.state.user.name;
            const first = name.split(" ")[0];
            const last = name.slice(first.length + 1, name.length);
            const user = {
                firstName: first,
                lastName: last,
                email: this.state.user.email
            };

            logger.log('info', 'SubscribeDialog.subscribeButtonClickedHandler: user= %j', user);

            if (!testWithoutSubscribing) {
                await subscribeToNewsletter({ user });
            };    
        } 
        catch (err) {
            console.log(err); 
        }
        
        this.handleClose();

        // Open the Confirmation dialog
        this.props.openConfirmationDialog();
    };

    handleClose = () => {
        // Close the Subscribe dialog
        this.setState({ dialogOpen: false });
        this.props.closeSubscribeDialog();
    };
  
    isValidSubscriptionInfo = () => {
        const isName = isValidName(this.state.user.name);
        const isEmail = isValidEmailAddress(this.state.user.email);

        const isValid = isName && isEmail;
        
        return isValid;
    };

    render() {
        logger.log('info', 'SubscribeDialogModal: rendering..., this.props.show= %j', this.props.show);

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
                    <SubscribeDialogButtons
                        handleCancel={ this.cancelButtonClickedHandler }
                        handleSubscribe={ this.subscribeButtonClickedHandler }
                        validationStatus={ this.isValidSubscriptionInfo() } 
                    />
                </Dialog>
            </div>;
    
        return ( (this.props.show && this.state.dialogOpen) ? subscribeDialogJSX : null );
    }    
}

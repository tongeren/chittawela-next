import { Component } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer'; // https://github.com/mweststrate/immer: use for handling nested state

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SubscribeDialogButtons from './SubscribeDialogButtons/SubscribeDialogButtons';
import InputBoxFactory from '../../InputBoxes/InputBoxFactory/InputBoxFactory';

import { subscribeToNewsletter } from '../../../../../lib/api/public'; 

import { isValidEmailAddress, isValidName } from '../../../../validation/validation';

const dialogTitleText = "Please tell me more!";
const subscribeDialogText = "Yes! I want to change my life and live from the heart!";
const fullNameInputFieldText = "Your Name";
const emailAddressInputFieldText = "Your Email Address";

const presetName = "Duncan van Tongeren";
const presetEmailAddress = "isarastudio@gmail.com";
const testWithoutSubscribing = true;

class SubscribeDialog extends Component {
    state = {
        error: {
            name: false,
            email: false
        },
        draft: {
            name: presetName,
            email: presetEmailAddress
        }
    };

    handleChange = (value, error, name) => {
        const newValue = value; // boolean or string 

        this.setState(
            produce(immerDraft => {
                // Make sure the error state of this input is updated
                immerDraft.error[name] = error;

                // Always change the draft value state
                immerDraft.draft[name] = newValue;
            })
        );         
    };

    subscribeHandler = async (event) => {    
        if (!this.isValidSubscriptionInfo()) { return; };
        
        event.preventDefault();

        try {
            const { name, email } = this.state.draft;
            const first = name.split(" ")[0];
            const last = name.slice(first.length + 1, name.length);
            const user = {
                firstName: first,
                lastName: last,
                email: email
            };

            if (!testWithoutSubscribing) {
                await subscribeToNewsletter({ user });
            };    
        } 
        catch (err) {
            console.log(err); 
        };
        
        this.props.onCloseHandler();

        this.props.onSubscribeHandler();
    };
  
    isValidSubscriptionInfo = () => {
        const { name, email } = this.state.draft;
        const isName = isValidName(name);
        const isEmail = isValidEmailAddress(email);
        const isValid = isName && isEmail;        
        return isValid;
    };

    render() {
        const { showDialog, onCloseHandler } = this.props;
        const { name, email } = this.state.draft;

        // Initialize factory
        InputBoxFactory.init(this.handleChange);

        return(
            <Dialog 
                open={ showDialog } 
                onClose={ onCloseHandler } 
                onBackdropClick = { onCloseHandler } 
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{ dialogTitleText }</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        { subscribeDialogText }
                    </DialogContentText>
                    { InputBoxFactory.build('name', { 
                        margin: "dense", 
                        label: fullNameInputFieldText, 
                        variant: "outlined", 
                        defaultValue: name 
                    }) } 
                    { InputBoxFactory.build('email', { 
                        margin: "dense", 
                        label: emailAddressInputFieldText, 
                        variant: "outlined", 
                        defaultValue: email 
                    }) }            
                </DialogContent>
                <SubscribeDialogButtons
                    handleCancel={ onCloseHandler }
                    handleSubscribe={ this.subscribeHandler }
                    validationStatus={ this.isValidSubscriptionInfo() } 
                />
            </Dialog>
        );
    }; 
};

SubscribeDialog.propTypes={
    showDialog: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired,
    onSubscribeHandler: PropTypes.func.isRequired
};

export default SubscribeDialog;
import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer'; // https://github.com/mweststrate/immer: use for handling nested state

import MuiDialogContentText from '@material-ui/core/DialogContentText';

import Dialog from '../Dialog/Dialog';
import InputBoxFactory from '../../InputBoxes/InputBoxFactory/InputBoxFactory';
import SubscribeDialogButtons from '../../Buttons/SubscribeDialogButtons/SubscribeDialogButtons';
import EmptyBox from '../../EmptyBox/EmptyBox';

import { subscribeToNewsletter } from '../../../../../lib/api/public'; 

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
        const { nameError, emailError } = this.state.error;
        const invalid = nameError || emailError;   
        if (invalid) { return; };
        
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

    render() {
        const { showDialog, onCloseHandler } = this.props;
        const { name, email } = this.state.draft;
        const nameError = this.state.error.name;
        const emailError = this.state.error.email;

        // Initialize factory
        InputBoxFactory.init(this.handleChange);

        return (
            <Dialog 
                show={ showDialog }
                onCloseHandler={ onCloseHandler }
                title={ dialogTitleText }
                content={ () => (
                    <Fragment>
                        <MuiDialogContentText>{ subscribeDialogText }</MuiDialogContentText>
                        <EmptyBox width={'60vw'} height={'1vh'}/>
                        {   InputBoxFactory.build('name', { 
                            margin: 'normal', 
                            label: fullNameInputFieldText, 
                            variant: 'outlined', 
                            defaultValue: name 
                        }) } 
                        {   InputBoxFactory.build('email', { 
                            margin: 'normal', 
                            label: emailAddressInputFieldText, 
                            variant: 'outlined', 
                            defaultValue: email 
                        }) } 
                    </Fragment>
                )}
                buttons={ (handlers, status) => <SubscribeDialogButtons { ...handlers } { ...status } /> }
                handlers={{ 
                    handleCancel: onCloseHandler, 
                    handleSubscribe: this.subscribeHandler
                }}
                status={{ validationStatus: nameError || emailError }}
            />
        );
    }; 
};

SubscribeDialog.propTypes={
    showDialog: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired,
    onSubscribeHandler: PropTypes.func.isRequired
};

export default SubscribeDialog;
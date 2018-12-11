import { Fragment, Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import DecoratedTextField from '../../DecoratedTextField/DecoratedTextField';   
import { isValidEmailAddress, isValidName } from '../../../../validation/validation';


class EmailForm extends Component {
    state = {
        subscribe: this.props.subscribe,  // local state for toggle 
        name: {
            error: true
        },
        email: {
            error: true
        }
    };

    handleChange = event => {
        // Change local state
        switch (event.target.name) {
            case 'subscribe':
                this.setState({ subscribe: event.target.checked });
                break;
            case 'name':
                this.setState({ name: { ...this.state.error, error: !isValidName(event.target.value) }}); 
                break;
            case 'email':
                this.setState({ email: { ...this.state.error, error: !isValidEmailAddress(event.target.value) }}); 
                break;
            default:
                console.log("Switch statement default triggered...");                  
        };
        
        // Change state in parent only if the input is valid
        const isValidInput = !this.state.name.error && !this.state.email.error;
        if (isValidInput) {
            this.props.onFormSubmit(event);
        };    
    };

    /*
    // Get state from parent 
    getState = prop => {
        console.log("getState Child:", prop, this.props.getState(prop));
        console.log("valid name", prop, isValidName(this.props.getState(prop)));
        console.log("valid email", prop, isValidEmailAddress(this.props.getState(prop)));
        this.props.getState(prop);
    };
    */

    render() {
        return (
            <Fragment>
                <Typography variant="h6" gutterBottom>
                    Contact information
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <DecoratedTextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            autoComplete="name"
                            onChange={ event => this.handleChange(event) }
                            error={ this.state.name.error }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <DecoratedTextField
                            required
                            id="email"
                            name="email"
                            label="E-mail Address"
                            fullWidth
                            autoComplete="billing address-line1"
                            onChange={ event => this.handleChange(event) }
                            error={ this.state.email.error }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={ 
                                <Checkbox 
                                    color="secondary" 
                                    name="subscribe" 
                                    checked={this.state.subscribe}
                                    onChange={ event => this.handleChange(event) }
                                /> }
                            label="Please keep me informed!"
                        />
                    </Grid>
                </Grid>
            </Fragment>
        );
    };    
};

export default EmailForm;
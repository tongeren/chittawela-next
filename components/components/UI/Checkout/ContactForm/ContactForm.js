import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import NameInput from './NameInput/NameInput';
import EmailInput from './EmailInput/EmailInput';
import SubscribeCheckbox from './SubscribeCheckbox/SubscribeCheckbox';

class ContactForm extends Component {

    liftUp = (event) => {
        // Lifted state has been checked, hence can be lifted up once more
        this.props.onChange(event);
    };

    render() {
        return (
            <Fragment>
                <Typography variant="h6" gutterBottom>{ this.props.formText.title }</Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <NameInput onChange={ this.liftUp } defaultValue={ this.props.formData.name }/>
                    </Grid>
                    <Grid item xs={12}>
                        <EmailInput onChange={ this.liftUp } defaultValue={ this.props.formData.email }/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={ <SubscribeCheckbox onChange={ this.liftUp } defaultValue={ this.props.formData.subscribe }/> }
                            label={ this.props.formText.labelSubscribe }
                        />
                    </Grid>
                </Grid>
            </Fragment>
        );
    };    
};

ContactForm.propTypes = {
    formText: PropTypes.shape({
        title: PropTypes.string.isRequired,
        labelSubscribe: PropTypes.string.isRequired
    }),
    formData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        subscribe: PropTypes.bool.isRequired,
        checked: PropTypes.bool.isRequired
    }),
    onChange: PropTypes.func.isRequired
};

export default ContactForm;

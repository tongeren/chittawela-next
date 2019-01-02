import { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import SubscribeCheckbox from './SubscribeCheckbox/SubscribeCheckbox';
import InputBoxFactory from '../../InputBoxes/InputBoxFactory/InputBoxFactory';

const contactForm = props => {
    const { onChange, formText, formData } = props;

    // Use anonymous function instead of binding in render
    const subscribe = (event, ) => onChange(event, 'subscribe');

    // Initialize factory
    InputBoxFactory.init(onChange);

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>{ formText.title }</Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    { InputBoxFactory.build('name', { defaultValue: formData.name }) } 
                </Grid>
                <Grid item xs={12}>
                    { InputBoxFactory.build('email', { defaultValue: formData.email }) } 
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={ 
                            <SubscribeCheckbox 
                                onChange={ subscribe } 
                                defaultValue={ formData.subscribe }
                            /> 
                        }
                        label={ formText.labelSubscribe }
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};    

contactForm.propTypes = {
    formText: PropTypes.shape({
        title: PropTypes.string.isRequired,
        labelSubscribe: PropTypes.string.isRequired
    }),
    formData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        subscribe: PropTypes.bool.isRequired
    }),
    onChange: PropTypes.func.isRequired
};

export default contactForm;

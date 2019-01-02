import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const confirmation = (props) => {
    const { orderNo } = props;

    return (
        <Fragment>
            <Typography variant="h5" gutterBottom>
                Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
                Your order number is ${ orderNo }. We have emailed your order confirmation, and will
                keep you updated.
            </Typography>
        </Fragment>
    );    
};

confirmation.propTypes = {
    orderNo: PropTypes.number.isRequired
};

export default confirmation
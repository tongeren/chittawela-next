import { Fragment } from 'react';
import PropTypes from 'prop-types';

import CancelButton from '../CancelButton/CancelButton';
import SubscribeButton from '../SubscribeButton/SubscribeButton';

const SubscribeDialogButtons = props => {
    const { handleCancel, handleSubscribe, validationStatus } = props;

    console.log("SubscribeDialogButtons: handleCancel=", handleCancel);

    return (
        <Fragment>
            <CancelButton 
                handler={ handleCancel }
                autoFocusStatus={ !validationStatus }
            />
            <SubscribeButton
                handler={ handleSubscribe }
                autoFocusStatus={ validationStatus } 
                disableStatus={ !validationStatus }
            />
        </Fragment>
    );    
};

SubscribeDialogButtons.propTypes={
    handleCancel: PropTypes.func.isRequired,
    handleSubscribe: PropTypes.func.isRequired,
    validationStatus: PropTypes.bool.isRequired
};

export default SubscribeDialogButtons;
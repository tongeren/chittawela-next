import { Fragment } from 'react';
import PropTypes from 'prop-types';

import CancelButton from '../CancelButton/CancelButton';
import SubscribeButton from '../SubscribeButton/SubscribeButton';

const SubscribeDialogButtons = props => {
    const { handleCancel, handleSubscribe, validationStatus } = props;

    return (
        <Fragment>
            <CancelButton 
                clicked={ handleCancel }
                autoFocusStatus={ !validationStatus }
            />
            <SubscribeButton
                clicked={ handleSubscribe }
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
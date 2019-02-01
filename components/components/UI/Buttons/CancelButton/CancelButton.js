import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const CancelButton = (props) => {
    const { handler, autoFocusStatus } = props;

    return (
        <Button onClick={ handler } autoFocus={ autoFocusStatus }>
            Cancel
        </Button>
    );    
};

CancelButton.propTypes={
    handler: PropTypes.func.isRequired,
    autoFocusStatus: PropTypes.bool.isRequired
};

export default CancelButton;

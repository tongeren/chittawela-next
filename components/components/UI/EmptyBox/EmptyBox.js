import { Fragment } from 'react';
import PropTypes from 'prop-types';

const emptyBox = (props) => {
    const { width, height } = props;

    return (
        <Fragment>
            <div className={'Empty'}></div>
            <style jsx>{`
                .Empty {
                    width: ${ width };
                    height: ${ height };
                }
            `}
            </style>
        </Fragment>
    );    
};

emptyBox.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
};

export default emptyBox;

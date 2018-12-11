import { Fragment } from 'react';

const emptyBox = (props) => (
    <Fragment>
        <div className={'Empty'}></div>
        <style jsx>{`
            .Empty {
                width: ${props.width};
                height: ${props.height};
            }
        `}
        </style>
    </Fragment>
);

export default emptyBox;

// import { Fragment } from 'react';
import PropTypes from 'prop-types';

// Changed top level Fragment to div to make this component testable with Enzyme
// See https://github.com/airbnb/enzyme/issues/1799, open issue as of 2019/01/28

const backdrop = props => (
  props.show ? 
    <div> 
      <div className={ "Backdrop" } onClick={ props.clicked }></div>
      <style jsx>{`
        .Backdrop {
          width: 100%;
          height: 100%;
          position: fixed;
          z-index: 99999;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.5);
        } 
      `}
      </style>
    </div> : null
);  

backdrop.propTypes={
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};

export default backdrop;
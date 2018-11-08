import { Fragment } from 'react';

const backdrop = (props) => (
  props.show ? 
    <Fragment> 
      <div className={"Backdrop"} onClick={props.clicked}></div>
      <style jsx>{`
        .Backdrop {
          width: 100%;
          height: 100%;
          position: fixed;
          z-index: 100;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.5);
        } 
      `}
      </style>
    </Fragment> : null
);  



export default backdrop;
import { Fragment } from 'react';
import Link from 'next/link';

const button = (props) => (
  <Fragment>
    <Link href="/checkout">
      <button onClick={props.clicked} className={"Button"}>{props.text}</button>
    </Link>
    <style jsx>{`
      .Button {
        align-self: center;
        background-color: #8f7a49;
        border-radius: 0; 
        border: 0.2vw solid whitesmoke;
        display: inline-block;
        cursor: pointer;
        color:whitesmoke; 
        font-family: 'Roboto';
        font-size: 3vw;
        letter-spacing: 0.5vw;
        height: 5vh; 
        width: 39vw;
        text-decoration: none;
      }
  
      .Button:hover {
        background-color:#8f7a49;;
      }

      .Button:active {
        position: relative;
        top: 0.2vw;
      }
    `}
    </style>
  </Fragment>
);

export default button;

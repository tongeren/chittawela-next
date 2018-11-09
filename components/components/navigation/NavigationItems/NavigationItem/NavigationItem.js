import { Fragment } from 'react';
import Link from 'next/link';

const navigationItem = (props) => (
  <Fragment>
    <li className={"NavigationItem"}>
      <Link href={props.path}>
        <a className={"Link"}>{props.navText}</a>
      </Link>
    </li>
    <style jsx>{`
      .NavigationItem {
        margin: 4.8vw 0; /* 10px 0; */
        box-sizing: border-box;
        display: block;
        width: 100%;
        border-bottom: solid 1px #eee;
      }
    
      .Link {
        color: #8f7a49;
        text-decoration: none;
        text-align: left;
        width: 100%;
        box-sizing: border-box;
        display: block;
        font-size: 4vw;
      }
    
      .Link:hover,
      .Link:active,
      .Link.active {
        color: black;
      }
  
      /*
      @media (min-width: 500px) {
        .NavigationItem {
          margin: 0;
          display: flex;
          height: 100%;
          width: auto;
          align-items: center;
        }
    
        .Link {
          color: whitesmoke;
          height: 100%;
          padding: 16px 10px;
          border-bottom: 4px solid transparent;
          font-size: 4vw;
        }
    
        .Link:hover,
        .Link:active,
        .Link.active {
          background-color: #8f7a49;
          border-bottom: 4px solid black;
          color: whitesmoke;
        }
      }
      */
    `}
    </style>
  </Fragment>  
);  

export default navigationItem;

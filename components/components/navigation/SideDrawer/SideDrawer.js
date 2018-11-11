import { Fragment } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <nav>
          <NavigationItems clicked={props.closed}/>
        </nav>
      </div>
      <style jsx>{`
        .SideDrawer {
          position: fixed;
          width: 55vw;
          height: 100%;
          left: 0;
          top: 0;
          z-index: 200;
          background-color: white;
          padding: 16vw 8vw;
          box-sizing: border-box;
          transition: transform 0.3s ease-out; /* Goodui.org: Try Transitions instead of showing changes instantly. Transition time <0.5s */
        }
  
        .Open {
          transform: translateX(0);
        }
  
        .Close {
          transform: translateX(-100%);
        }

        .nav {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-flow: column;
          align-items: center;
          height: 100%;
        }
  
        @media (pointer: fine) {
          .nav {
            flex-flow: row;
          }
        }

        @media (pointer: fine) {
          .SideDrawer {
            display: none;
          } 
        }

        NavLink {
          margin: 5vw 0;
          box-sizing: border-box;
          display: block;
          width: 100%;
        }

        NavLink a {
          color: #8f7a49;
          text-decoration: none;
          width: 100%;
          box-sizing: border-box;
          display: block;
        }

        NavLink a:hover,
        NavLink a:active,
        NavLink a.active {
          color: black;
        }

        @media (min-width: 500px) {  /* <--- CHANGE THIS!!! */ 
          NavLink {
            margin: 0;
            display: flex;
            height: 100%;
            width: auto;
            align-items: center;
          }

          NavLink a {
            color: whitesmoke;
            height: 100%;
            padding: 8vw 5vw;
            border-bottom: 2vw solid transparent;
          }

          NavLink a:hover,
          NavLink a:active,
          NavLink a.active {
            background-color: #8f7a49;
            border-bottom: 2vw solid black;
            color: whitesmoke;
          }
        }
      `}
      </style>
    </Fragment>
  );
}

export default sideDrawer;


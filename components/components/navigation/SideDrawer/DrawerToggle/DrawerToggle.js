import { Fragment } from 'react';

const menuIconsvg = require('../../../../../static/icons/Menu.svg');

const drawerToggle = (props) => (
  <Fragment>
    <div className={"DrawerToggle"} onClick={props.clicked}>
      <img className={"MenuIcon"} src={menuIconsvg} alt="MenuIcon" />
    </div>
    <style jsx>{`
      .DrawerToggle {  
        margin: auto;
        height: 4vh; 
      } 

      .MenuIcon {
        align-self: center;
        margin: auto;
        height: 4vh; 
      }
    `}
    </style>
  </Fragment>
);

export default drawerToggle;

import { Fragment } from 'react';
// import menuIconsvg from '../../../../../static/icons/Menu.svg';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerToggle = (props) => (
  <Fragment>
    <div className={props.className} onClick={props.clicked}>
      {/* <img className={"MenuIcon"} src={menuIconsvg} alt="MenuIcon" /> */}
      <IconButton color="secondary" aria-label="Menu" className={"MenuIcon"}>
        <MenuIcon fontSize="large"/>
      </IconButton>
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

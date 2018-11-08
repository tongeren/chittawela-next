import { Fragment } from 'react';
// import classes from './Toolbar.module.css';
import Button from '../Button/Button';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <Fragment>
    <header className={"Toolbar"}>
      <DrawerToggle clicked={props.drawerToggleClicked}/> 
      <p></p>
      <Button /> 
    </header>
    <style jsx>{`
      .Toolbar {
        display: grid; 
        width: 100vw; 
        grid-template-columns: 13vw 47vw 40vw;
        height: 6vh; 
        background-color: black; 
        color: whitesmoke; 
      }
    `}
    </style>
  </Fragment>
);

export default toolbar;
import { Fragment } from 'react';
import Button from '../Button/Button';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const buttonText = "RESERVE MY SPOT!"; // Goodui.org: Try Benefit Buttons instead of just task based ones.
const iconExplanation = "MENU"; // Goodui.org: Try Icon Labels instead of opening for interpretation.

const toolbar = (props) => (
  <Fragment>
    <header className={"Toolbar"}>
      <DrawerToggle clicked={props.drawerToggleClicked}/> 
      <p className={"Explanation"}>{iconExplanation}</p>
      <p></p>
      <Button text={buttonText}/> 
    </header>
    <style jsx>{`
      .Explanation {
        height: 6vh;
        line-height: 6vh;
        font-family: 'Roboto';
        font-size: 3vw;
        letter-spacing: 0.5vw;
      }

      .Toolbar {
        display: grid; 
        width: 100vw; 
        grid-template-columns: 13vw 27vw 20vw 40vw;
        height: 6vh; 
        background-color: black; 
        color: whitesmoke; 
      }
    `}
    </style>
  </Fragment>
);

export default toolbar;
import { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '../Button/Button';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const buttonText = "RESERVE MY SPOT!"; // Goodui.org: Try Benefit Buttons instead of just task based ones.
const iconExplanation = "MENU"; // Goodui.org: Try Icon Labels instead of opening for interpretation.

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const toolbar = (props) => {
  const { classes } = props;
  return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar color="default">
          <DrawerToggle className={classes.menuButton} clicked={props.drawerToggleClicked}/> 
          <Typography variant="button" color="inherit" className={classes.grow}>
            { iconExplanation }
          </Typography>     
          <Button text={buttonText} />     
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(toolbar);
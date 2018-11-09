import { Component, Fragment } from 'react';
import Toolbar from '../components/components/navigation/Toolbar/Toolbar';
import SideDrawer from '../components/components/navigation/SideDrawer/SideDrawer';
import Footer from '../components/containers/Footer/Footer';
import NormalizeCss from './NormalizeCss';
import TrueGlobalCss from './TrueGlobalCss';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggledHandler = () => {
    this.setState( (prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    } );
  }

  render () {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggledHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} /> 
        <main className={"Main"}>
          {this.props.children}
        </main> 
        <Footer />
        <NormalizeCss />
        <TrueGlobalCss />
      </Fragment>
    );
  }
}

export default Layout;


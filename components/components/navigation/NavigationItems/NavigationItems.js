import { Fragment } from 'react';
// import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { routes } from '../../../routes/Routes';

const navigationItems = (props) => (
  <Fragment>
      <ul className={"NavigationItems"} >
          { routes.map((route, i) => ( route.show ? <NavigationItem key={i} clicked={props.clicked} {...route}>{route.navText}</NavigationItem> : null)) } 
    </ul>
    <style jsx>{`
      .NavigationItems {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100%;
      }
  
      @media (pointer: fine) {
        .NavigationItems {
          flex-flow: row;
        }
      }
    `}
    </style>
  </Fragment>  
);

export default navigationItems;
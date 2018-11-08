import { Component, Fragment } from 'react';
// import Music from '../../components/UI/Music/Music';
import AnimatedIconTripleChevronDown from '../../components/navigation/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown';

class Footer extends Component {
    render () {
      return (
        <Fragment>
          <footer className={'Footer'}>
            {/* <Music className={classes.ToggleMusic} /> */}
            <div className={'NextPage'}>
              <AnimatedIconTripleChevronDown />
            </div>  
          </footer>
          <style jsx>{`
            .Footer {
              display: grid;
              grid-template-columns: 5vw 10vw 30vw 10vw 45vw;
              position: absolute;
              justify-content: center;
              bottom: 4vh;
              width: 100vw;
            }
      
            .ToggleMusic {
              grid-column-start: 2;
            }
      
            .NextPage {
              grid-column-start: 4;
            } 
          `}
          </style>
        </Fragment>  
      );
    }
  }
  
  export default Footer;
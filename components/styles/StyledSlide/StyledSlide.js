import { Slide } from 'material-auto-rotating-carousel';
import { withStyles } from '@material-ui/core';

const slideStyles = {
    root: {
        borderRadius: '0px',
        overflow: 'hidden'
    }    
};

export default withStyles(slideStyles)(props => <Slide {...props}/>);

 
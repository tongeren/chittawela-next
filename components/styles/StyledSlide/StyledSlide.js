import { Slide } from 'material-auto-rotating-carousel';
import { withStyles } from '@material-ui/core';

const slideStyles = {
    media: {
        objectFit: 'cover',
        objectPosition: 'center',
        overflow: 'hidden'
    }    
};

export default withStyles(slideStyles)( props => <Slide {...props}/> );


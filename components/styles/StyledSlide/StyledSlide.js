import PropTypes from 'prop-types';
import { Slide } from 'material-auto-rotating-carousel';
import { withStyles } from '@material-ui/core';

const slideStyles = {
    root: {
        borderRadius: '0px',
        overflow: 'hidden'
    }    
};

const StyledSlide = props => <Slide { ...props }/>;

StyledSlide.propTypes={
    media: PropTypes.node.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default withStyles(slideStyles)(StyledSlide);
 
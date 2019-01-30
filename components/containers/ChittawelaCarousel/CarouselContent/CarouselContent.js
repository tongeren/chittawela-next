import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './CarouselContentStyles';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'; // https://github.com/TeamWertarbyte/material-auto-rotating-carousel

const subscribeButtonLabel = "LET ME KNOW MORE!";

const CarouselContent = props => {
    const { classes, clicked, onClickHandler, children } = props;

    return (
        <AutoRotatingCarousel 
            autoplay={ !clicked } // only autoplay when the start button is not clicked 
            hideArrows={ false }
            interval={ 9000 } // interval should be in the range of 8-10s 
            open 
            mobile
            label={ subscribeButtonLabel }
            onStart = { onClickHandler } 
            ModalProps={{ BackdropProps: {classes: { root: classes.BackdropProps} } }} 
            classes={{ root: classes.root, carouselWrapper: classes.carouselWrapper }}>
            { children }
        </AutoRotatingCarousel> 
    );
};

CarouselContent.propTypes={
    classes: PropTypes.object.isRequired,
    clicked: PropTypes.bool.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default withStyles(styles)(CarouselContent);

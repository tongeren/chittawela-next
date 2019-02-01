import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Using https://github.com/TeamWertarbyte/material-auto-rotating-carousel for now
// Unfortunately the Slides array must be children of the AutoRotatingCarousel
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'; // 
import { Image } from 'cloudinary-react';
import StyledSlide from '../../../../styles/StyledSlide/StyledSlide';

const subscribeButtonLabel = "LET ME KNOW MORE!";

const carouselHeight = 'calc(100vh - 59px)';

const styles = {
    root: {
        top: '59px',
        height: carouselHeight 
    },
    BackdropProps: {
        top: '59px',
        height: carouselHeight
    },
    carouselWrapper: {
        borderRadius: '0px' 
    }
};

const CarouselContent = props => {
    const { classes, clicked, onClickHandler, slidesData } = props;

    return (
        <AutoRotatingCarousel 
            autoplay={ !clicked } // only autoplay when the start button is not clicked 
            hideArrows={ false }
            interval={ 9000 } // interval should be in the range of 8-10s 
            open={ true } 
            mobile={ true }
            label={ subscribeButtonLabel }
            onStart={ onClickHandler } 
            ModalProps={{ BackdropProps: {classes: { root: classes.BackdropProps} } }} 
            classes={{ root: classes.root, carouselWrapper: classes.carouselWrapper }}>
            { slidesData.map((slide, i) => (
                <StyledSlide 
                    key={i}
                    media={ <Image cloudName="chittawela" publicId={ slide.publicid }/> }
                    { ...slide } 
                />
            ))}
        </AutoRotatingCarousel> 
    );
};

CarouselContent.propTypes={
    classes: PropTypes.object.isRequired,
    clicked: PropTypes.bool.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    slidesData: PropTypes.arrayOf(
        PropTypes.shape({
            publicid: PropTypes.string.isRequired,
            style: PropTypes.object.isRequired,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired
        }).isRequired
    )    
};

export default withStyles(styles)(CarouselContent);

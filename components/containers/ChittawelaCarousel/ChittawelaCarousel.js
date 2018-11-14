import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { whitesmoke, black, turquoise, rosegold, gold, champagne } from '../../styles/colors';
import { withStyles } from '@material-ui/core/styles';
import StyledSlide from '../../styles/StyledSlide/StyledSlide';
import { Image } from 'cloudinary-react';

const slideTitle = "Now is Time to Soothe Your Soul";
const slideSubTitle = "Gain peace from within" ;
// const mediaBackGroundStyles = { overflow: 'hidden' };
const slideBottomStyles = { backgroundColor: 'whitesmoke', overflow: 'hidden' };

const chittawelaSlides = [ 
    {
        publicid: "LandingPage/001.JPG",
        // mediaBackgroundStyle: { mediaBackGroundStyles },
        style: { slideBottomStyles },
        title: "Strength from Within",
        subtitle: slideSubTitle
    },
    {
        publicid: "LandingPage/chittawela_colour_text_under.PNG",
        // mediaBackgroundStyle: { mediaBackGroundStyles },
        style: { slideBottomStyles },
        title: slideTitle,
        subtitle: slideSubTitle
    },
    {
        publicid: "LandingPage/008.JPG",
        // mediaBackgroundStyle: { mediaBackGroundStyles },
        style: { slideBottomStyles },
        title: "Metta",
        subtitle: slideSubTitle
    },
    {
        publicid: "LandingPage/009.JPG",
        // mediaBackgroundStyle: { mediaBackGroundStyles },
        style: { slideBottomStyles },
        title: "Back to Your Self",
        subtitle: slideSubTitle
    }   
];

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

const chittawelaCarousel = (props) => {
        const { classes } = props;

        return(  
            <AutoRotatingCarousel 
                autoplay={true}
                hideArrows={false}
                interval={ 5000 }
                open 
                mobile 
                ModalProps={{ BackdropProps: {classes: { root: classes.BackdropProps} } }} 
                classes={{ root: classes.root, carouselWrapper: classes.carouselWrapper }}>
                { chittawelaSlides.map((slide, i) => (
                    <StyledSlide 
                        key={i}
                        media={ <Image cloudName="chittawela" publicId={ slide.publicid }/> }
                        {...slide} />
                ))}
            </AutoRotatingCarousel> 
        );
};

export default withStyles(styles)(chittawelaCarousel);
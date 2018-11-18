import { Fragment, Component } from 'react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { whitesmoke, black, turquoise, rosegold, gold, champagne } from '../../styles/colors';
import { withStyles } from '@material-ui/core/styles';
import StyledSlide from '../../styles/StyledSlide/StyledSlide';
import { Image } from 'cloudinary-react';
import SubscribeDialog from '../../components/UI/SubscribeDialog/SubscribeDialog';

const slideTitle = "Now is Time to Soothe Your Soul";
const slideSubTitle = "Gain peace from within" ;
// const mediaBackGroundStyles = { backgroundColor: whitesmoke };
const slideBottomStyles = { backgroundColor: 'whitesmoke', overflow: 'hidden' };
const subscribeButtonLabel = "LET ME KNOW MORE!";

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

class ChittawelaCarousel extends Component {
    // constructor() {
    //    super();
    //    this.handleCloseBySubscribeDialogHandler = this.handleCloseBySubscribeDialogHandler.bind(this);
    //};

    state = {
        startButtonClicked: false
    };

    handleStartButtonClickedHandler = () => {
        // console.log("handleStartButtonClickedHandler");
        this.setState({ startButtonClicked: true});
    };

    handleCloseBySubscribeDialogHandler = () => {
        // console.log("handleCloseBySubscribeDialogHandler");
        // console.log("Reset ChittawelaCarousel's state");
        this.setState({ startButtonClicked: false});
    };

    render() {
        const { classes } = this.props;
        
        console.log("Rendering ChittawelaCarousel:", this.state.startButtonClicked);

        return(  
            <Fragment>
                <AutoRotatingCarousel 
                    autoplay={ true }
                    hideArrows={ false }
                    interval={ 8000 } /* interval should be in the range of 8-10s */
                    open 
                    label={ subscribeButtonLabel }
                    mobile 
                    onStart = { () => this.handleStartButtonClickedHandler() } /* MailChimp subscription */
                    ModalProps={{ BackdropProps: {classes: { root: classes.BackdropProps} } }} 
                    classes={{ root: classes.root, carouselWrapper: classes.carouselWrapper }}>
                    { chittawelaSlides.map((slide, i) => (
                        <StyledSlide 
                            key={i}
                            media={ <Image cloudName="chittawela" publicId={ slide.publicid }/> }
                            { ...slide } />
                    ))}
                </AutoRotatingCarousel> 
                {/*  this.state.startButtonClicked ? <SubscribeDialog show /> : null */}
                { this.state.startButtonClicked ? 
                    <SubscribeDialog 
                        show={ true } 
                        closeDialog={ this.handleCloseBySubscribeDialogHandler } 
                    /> 
                : null }
            </Fragment>
        );
    }    
}

export default withStyles(styles)(ChittawelaCarousel);
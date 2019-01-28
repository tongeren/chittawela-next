import { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Image } from 'cloudinary-react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
//import { whitesmoke, black, turquoise, rosegold, gold, champagne } from '../../styles/colors';

import SubscribeDialogModal from '../../components/UI/Modals/SubscribeDialogModal/SubscribeDialogModal';
import ConfirmationDialogModal from '../../components/UI/Modals/ConfirmationDialogModal/ConfirmationDialogModal';
import StyledSlide from '../../styles/StyledSlide/StyledSlide';

// Logging
import { logger } from '../../helper/logger';

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
    state = {
        startButtonClicked: false,
        showConfirmationDialog: false
    };

    startButtonClickedHandler = () => {
        //logger.log('info', 'ChittawelaCarousel.startButtonClickedHandler(): about to change state...');
        console.log('ChittawelaCarousel.startButtonClickedHandler(): about to change state...');

        this.setState({ startButtonClicked: true}, 
            () => {
                //logger.log('info', 'ChittawelaCarousel.startButtonClickedHandler(): changed state...');
                console.log('ChittawelaCarousel.startButtonClickedHandler(): changed state...')
            }    
        );
    };

    closeBySubscribeDialogHandler = () => {
        this.setState(() => ({ startButtonClicked: false})); // binding this
    };

    mailchimpSubscribeHandler = () => {
        this.setState({ showConfirmationDialog: true });
    };

    closeConfirmationDialogHandler = () => {
        this.setState({ showConfirmationDialog: false });
    };

    render() {
        const { classes } = this.props;

        logger.log('info', 'ChittawelaCarousel: rendering..., this.state.startButtonClicked= %j', this.state.startButtonClicked);

        return(  
            <Fragment>
                <AutoRotatingCarousel 
                    autoplay={ !this.state.startButtonClicked } /* only autoplay when the subscribe dialog is not open */
                    hideArrows={ false }
                    interval={ 8000 } /* interval should be in the range of 8-10s */
                    open 
                    label={ subscribeButtonLabel }
                    mobile 
                    onStart = { () => this.startButtonClickedHandler() } /* MailChimp subscription */
                    //onStart = { this.startButtonClickedHandler() } /* MailChimp subscription */
                    ModalProps={{ BackdropProps: {classes: { root: classes.BackdropProps} } }} 
                    classes={{ root: classes.root, carouselWrapper: classes.carouselWrapper }}>
                    { chittawelaSlides.map((slide, i) => (
                        <StyledSlide 
                            key={i}
                            media={ <Image cloudName="chittawela" publicId={ slide.publicid }/> }
                            { ...slide } />
                    ))}
                </AutoRotatingCarousel> 
                <SubscribeDialogModal 
                    show={ this.state.startButtonClicked }
                    openConfirmationDialog={ this.mailchimpSubscribeHandler }
                    closeSubscribeDialog={ this.closeBySubscribeDialogHandler } 
                /> 
                <ConfirmationDialogModal 
                    show={ this.state.showConfirmationDialog } 
                    openConfirmationDialog={ this.mailchimpSubscribeHandler }
                    closeConfirmationDialog={ this.closeConfirmationDialogHandler }
                />   
            </Fragment>
        );
    }    
}

export default withStyles(styles)(ChittawelaCarousel);
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { red, blue, green } from '@material-ui/core/colors';
import withLayout from '../components/hoc/withLayout';
import { withStyles } from '@material-ui/core/styles';
import StyledCloudinaryImage from '../components/components/UI/StyledCloudinaryImage/StyledCloudinaryImage';
import StyledSlide from '../components/styles/StyledSlide/StyledSlide';
import { Image } from 'cloudinary-react';

// import TagLine from '../components/components/UI/TagLine/TagLine';
// import BigLogo from '../components/components/UI/BigLogo/BigLogo';
// import Banner from '../components/components/UI/Banner/Banner';

const slideTitle = "Now is Time to Soothe Your Soul";
const slideSubTitle = "Gain peace from within" ;
const mediaBackGroundStyles = { overflow: 'hidden' };
const slideBottomStyles = { backgroundColor: 'whitesmoke', overflow: 'hidden' };

const chittawelaSlides = [ 
    {
        publicid: "LandingPage/chittawela_colour_text_under.PNG",
        mediaBackgroundStyle: { mediaBackGroundStyles },
        style: { slideBottomStyles },
        title: slideTitle,
        subtitle: slideSubTitle
    },
    {
        publicid: "LandingPage/001.JPG",
        mediaBackgroundStyle: { mediaBackGroundStyles },
        style: { slideBottomStyles },
        title: "Strength from Within",
        subtitle: slideSubTitle
    },
    {
        publicid: "LandingPage/008.JPG",
        mediaBackgroundStyle: { mediaBackGroundStyles },
        style: { slideBottomStyles },
        title: "Metta",
        subtitle: slideSubTitle
    },
    {
        publicid: "LandingPage/009.JPG",
        mediaBackgroundStyle: { mediaBackGroundStyles },
        style: { slideBottomStyles },
        title: "Back to Your Self",
        subtitle: slideSubTitle
    }   
];

const carouselHeight = 'calc(100vh - 59px)';

const styles = {
    root: {
        top: '59px',
        height: carouselHeight,
        overflow: 'hidden' 
    },
    BackdropProps: {
        top: '59px',
        height: carouselHeight 
    }
};

const slideStyles = {
    backgroundColor: 'whitesmoke',
    color: '#8f7a49'
};

const index = (props) => {
        const { classes } = props;

        return(
        <AutoRotatingCarousel 
            autoplay={true}
            interval={ 5000 }
            open 
            mobile 
            ModalProps={{ BackdropProps: {classes: { root: classes.BackdropProps} } }}
            classes={{ root: classes.root }}>
            { chittawelaSlides.map((slide, i) => (
                <Slide 
                    key={i}
                    media={ <Image cloudName="chittawela" publicId={ slide.publicid }/> }
                    {...slide} />
            ))}
        </AutoRotatingCarousel>
        );
};

export default withLayout(withStyles(styles)(index));

/*
<Banner publicId={ backGroundImage.publicId }>
    <BigLogo publicId={ chittawelaLogo.publicId }/>
    <TagLine text={ chittawelaTagline }/>  
</Banner>
*/


/*
What you do
Why you’re different
What the key benefits are
How to get started
*/

/*
The hero
The feature walkthrough
The “how it works” section
Testimonials (aka, “social proof”)
The signup form
The team section
The pricing section
Frequently asked questions (aka, FAQs)
The resources section
The “trusty” footer


Keep it simple and relevant: Avoid jargon and hyperbole. Focus on the message you want to send and use keywords your reader would use.
Speak to the benefits and create desire: People don’t want a thing — they want the outcome of that thing. Target that outcome with your 
copy and paint a picture that motivates your readers to engage.
Create contrast and bridge the gap: Your readers need to understand their current situation to clearly see how your counterarguments 
provide an obvious solution to the core pains, gains, and jobs they haven’t overcome yet.
*/


/* <StyledCloudinaryImage 
                            publicId={ chittawelaSlides[2].publicId } 
                            style={{
                                maxwidth: '100%',
                            }}
                        /> 
*/

/*
{ chittawelaSlides.map((slide, i) => (
    <Slide
    key={i}
    media={
        <StyledCloudinaryImage 
            publicId={ slide.publicId } 
            style={ slide.slideStyles }
        /> 
    }
    mediaBackgroundStyle={ slide.mediaBackgroundStyle }
    style={ slide.style }
    title={ slide.title }
    subtitle={ slide.subtitle }/>
) )}
*/

/*
<StyledCloudinaryImage 
                                publicId={ "LandingPage/008.JPG" } 
                                style={{  maxWidth: '140%' }}/>
*/
/*
<Slide
                    media={ <Image cloudName="chittawela" publicId={"LandingPage/008.JPG"}/> }
                    mediaBackgroundStyle={{ overflow: 'hidden' }}
                    style={{ backgroundColor: 'whitesmoke' }}
                    title={ chittawelaTagline }
                    subtitle="Just using this will blow your mind." />
*/

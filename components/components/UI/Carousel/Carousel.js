import { Component, Fragment } from 'react';
// import { CloudinaryContext } from 'cloudinary-react';
import withCloudinaryContext from '../../../hoc/withCloudinaryContext';
import Arrow from './Arrow/Arrow';
import ImageSlide from './ImageSlide/ImageSlide';

const GLYPH_LEFT = "<"; 
const GLYPH_RIGHT = ">"; 

class Carousel extends Component {
    state = {
        currentImageIndex: 0
    }

    startAutoSlide = () => {
        const milliseconds = this.props.autoSlideInterval * 1000;
        // Start autoslide
        this.autoSlide = window.setInterval(() => this.nextSlide() , milliseconds);
    }

    stopAutoSlide = () => {
        // Stop autoslide 
        window.clearInterval(this.autoSlide);
    }

    resetAutoSlide = () => {
        this.stopAutoSlide();
        this.startAutoSlide();
    }

    componentDidMount() {
        this.startAutoSlide();
    }
  
    componentWillUnmount() {
        this.stopAutoSlide();
    }

    previousSlide = () => {
        this.getSlide({flagForward: false});
        this.resetAutoSlide();
    }
    
    nextSlide = () => {
        this.getSlide({flagForward: true});
        this.resetAutoSlide();
    }

    getSlide = ({ flagForward }) => {
        const lastIndex = this.props.imgPaths.length - 1;
        const boundary = flagForward ? lastIndex : 0;
        const direction = flagForward ? 1 : -1;
        const shouldResetIndex = this.state.currentImageIndex === boundary;
        const index =  shouldResetIndex ? (lastIndex - boundary) : this.state.currentImageIndex + direction;
    
        this.setState({
          currentImageIndex: index
        });
    }

    render () {
        return (
            <Fragment>
                {/* <CloudinaryContext cloudName="chittawela"> */}
                    <div className={"Carousel"}>
                        <div className={"ArrowLeft"}> 
                            <Arrow 
                                direction="left" 
                                clickFunction={this.previousSlide} 
                                glyph={GLYPH_LEFT}/> 
                        </div>    

                        <ImageSlide 
                            imgPaths={this.props.imgPaths} 
                            selectedSlide={this.state.currentImageIndex}/>

                        <div className={"ArrowRight"}>
                            <Arrow  
                                direction="right" 
                                clickFunction={this.nextSlide} 
                                glyph={GLYPH_RIGHT} /> 
                        </div>    
                    </div>   
                {/* </CloudinaryContext> */}
                <style jsx>{`
                    .Carousel {
	                    display: flex;
	                    flex-direction: row;
	                    align-items: center;
	                    justify-content: space-between;
	                    position: relative; 
	                    margin: 0;
	                    overflow: hidden; 
	                    width: 100vw;
                    }
                    .ArrowLeft {
	                    position: absolute;
	                    left: 0;
	                    z-index: 1;
                    }

                    .ArrowRight {
	                    position: absolute;
	                    right: 0;
	                    z-index: 1;
                    }
                `}
                </style>
            </Fragment>     
        );
    }
}

export default withCloudinaryContext(Carousel);


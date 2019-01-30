import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import StyledSlide from '../../../styles/StyledSlide/StyledSlide';

const Slides = props => {
    const { slidesData } = props;

    return (
    <Fragment>
        { slidesData.map((slide, i) => (
            <StyledSlide 
                key={i}
                media={ <Image cloudName="chittawela" publicId={ slide.publicid }/> }
                { ...slide } 
            />
        ))}
    </Fragment>
    );
};

Slides.propTypes={
    slidesData: PropTypes.arrayOf(
        PropTypes.shape({
            publicid: PropTypes.string.isRequired,
            style: PropTypes.object.isRequired,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired
        }).isRequired
    ).isRequired        
};

export default Slides;


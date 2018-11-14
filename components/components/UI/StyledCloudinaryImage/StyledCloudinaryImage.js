import { Image } from 'cloudinary-react';
// import PropTypes from 'prop-types';
import withCloudinaryContext from '../../../hoc/withCloudinaryContext';

const styledCloudinaryImage = (props) => (
    <Image publicId={ props.publicId } style={ props.style } />  
);


/*
styledCloudinaryImage.propTypes = {
    style: PropTypes.object.isRequired
}
*/

export default withCloudinaryContext(styledCloudinaryImage);
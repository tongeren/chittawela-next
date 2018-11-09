import { Image } from 'cloudinary-react';
import withCloudinaryContext from '../../../hoc/withCloudinaryContext';

const styledCloudinaryImage = (props) => (
    <Image publicId={ props.publicId } style={ props.style } />  
);

export default withCloudinaryContext(styledCloudinaryImage);
import { Image } from 'cloudinary-react';
import withCloudinaryContext from '../../../../hoc/withCloudinaryContext';

const backGroundImage = {
        publicId: "Banburee/IMG_8560.JPG"
};

const bannerImage = () => (
    <Image publicId={ backGroundImage.publicId } style={{ height: '94vh' }} />  
);

export default withCloudinaryContext(bannerImage);
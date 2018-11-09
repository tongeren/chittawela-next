import { Image } from 'cloudinary-react';
import withCloudinaryContext from '../../../hoc/withCloudinaryContext';

const chittawelaLogo = {
    publicId: 'Logos/chittawela_colour_text_under.png'
};

const bigLogo = () => (
    <Image 
        publicId = { chittawelaLogo.publicId } 
        style={{ 
            maxWidth: '80%', 
            alignSelf: 'center',
            maxHeight: '64vh', /* 100-6-20=74 Toolbar=6vh Banner=94vh Logo=20vh*/
            zIndex: '0'
        }} />
);

export default withCloudinaryContext(bigLogo);


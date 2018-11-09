import StyledCloudinaryImage from '../StyledCloudinaryImage/StyledCloudinaryImage';

const bigLogo = (props) => (
    <StyledCloudinaryImage 
        publicId={ props.publicId } 
        style={{ 
            maxWidth: '80%', 
            alignSelf: 'center',
            maxHeight: '64vh', 
            zIndex: '0'
        }} />
);

export default bigLogo;


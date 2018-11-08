import { Fragment } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
// import chittawelaLogo from '../../../../static/logos/chittawela_colour_text_under.png';
// const chittawelaLogo = require('../../../../static/logos/chittawela_colour_text_under.png');

const chittawelaLogo = {
    publicId: 'Logos/chittawela_colour_text_under.png'
};

const bigLogo = () => (
    <CloudinaryContext cloudName="chittawela"> 
        {/* <img className={"Logo"} src={chittawelaLogo} alt="Chittawela"/> */}
        <Image 
            publicId = { chittawelaLogo.publicId } 
            style={{ 
                maxWidth: '80%', 
                alignSelf: 'center',
                maxHeight: '64vh', 
                zIndex: '0'
            }} />
        {/* <style jsx>{`
            .Logo {
                max-width: 80%; 
                align-self: center;
                max-height: 64vh; 
                z-index: 0;
            }
        `}
        </style> */}
    </CloudinaryContext>  
);

export default bigLogo;

/* 100-6-20=74 Toolbar=6vh Banner=94vh Logo=20vh*/
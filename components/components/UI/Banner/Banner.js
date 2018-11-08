import { Fragment } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
// import backGround from '../../../../static/images/Banburee/IMG_8560.JPG';

const backGroundImage = {
        publicId: "Banburee/IMG_8560.JPG"
};

const banner = (props) => (
    <Fragment>    
    <CloudinaryContext cloudName="chittawela">    
        <div className={"Banner"}>
            {/* <img className={["Image", "Animation"].join(' ')} src={backGround} alt="Background"/> */}
            <Image 
                publicId={ backGroundImage.publicId } 
                style={{   
                    filter: 'opacity(100%)', 
                    height: '94vh', 
                    animationName: 'sharpen',
                    animationDelay: '0s',
                    animationDuration: '2.5s',
                    animationTimingFunction: 'ease-out', 
                    animationFillMode: 'both',
                }} />  
            <div className={"Content"}>
                {props.children}
            </div> 
        </div>
        <style jsx>{`
            .Banner {
                display: flex; 
                position: relative; 
                justify-content: center;
                align-items: center; 
                overflow: hidden; 
                align-self: center; 
                height: 94vh; /* let Banner height fill up the remaining free page height */
                z-index: 0; /* make sure the banner is always behind */
            }

            .Content {
                position: absolute; 
                top: 0;
                display: flex;
                flex-direction: column;
                text-align: center;
                height: 80vh; 
                padding-bottom: 8vh;
            }

            /*
            .Image {    
                filter: opacity(100%); 
                height: 94vh; 
            }

            .Animation {
                animation-name: sharpen;
                animation-delay: 0s;
                animation-duration: 2.5s;
                animation-timing-function: ease-out; 
                animation-fill-mode: both;
            }

            */ 

            @keyframes sharpen {
                0% { filter: opacity(50%); }
                20% { filter: opacity(60%); }
                40% { filter: opacity(70%); }
                60% { filter: opacity(80%); }
                80% { filter: opacity(90%); }
                100% { filter: opacity(100%); }
            }
        `}    
        </style>
    </CloudinaryContext>    
    </Fragment>
);

export default banner;

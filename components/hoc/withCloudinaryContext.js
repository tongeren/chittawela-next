import { CloudinaryContext } from 'cloudinary-react';

export default (Component) => (props) => (
    <CloudinaryContext cloudName="chittawela" secure>
        <Component {...props}/>
    </CloudinaryContext>
);
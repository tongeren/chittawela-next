import { CloudinaryContext } from 'cloudinary-react';

export default (WrappedComponent) => (props) => (
    <CloudinaryContext cloudName="chittawela" secure>
        <WrappedComponent {...props}/>
    </CloudinaryContext>
);
import { Fragment } from 'react';
import { Image } from 'cloudinary-react';

const imageSlide = (props) => (
  <Fragment> 
    <div className={"Wrapper"}>
      { props.imgPaths.map((path, i) => <Image key={i} style={{ width: '100vw' }} publicId={path} />) }
    </div>
    <style jsx>{`
      .Wrapper {
        display: grid;
        grid-template-columns: repeat(calc(${props.imgPaths.length}), 1fr);
        transform: translateX(${-100 * props.selectedSlide}vw); 
        transition: transform ease-out 1.2s;
      }
    `}
    </style>
  </Fragment>
); 

export default imageSlide;
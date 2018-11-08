import { Fragment } from 'react';
import withLayout from '../components/hoc/withLayout';
import Carousel from '../components/components/UI/Carousel/Carousel';

const imagesCarousel = [ 
  {
      publicId: "Banburee/CE3710A6.jpg"
  },
  {
      publicId: "Banburee/C01702D5.jpg"
  },
  {
      publicId: "Banburee/IMG_8565.jpg"
  },
  {
      publicId: "Banburee/IMG_8526.jpg"
  }
];

export default withLayout(() => (
    <Fragment>
        <Carousel imgPaths={imagesCarousel.map(image => image.publicId)} autoSlideInterval={3.6} /> 
        <p>LATER</p>
    </Fragment>    
));


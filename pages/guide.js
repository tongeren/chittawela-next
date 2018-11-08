import withLayout from '../components/hoc/withLayout';
import { CloudinaryContext, Image } from 'cloudinary-react';

const wiphatthra = [
  {
      publicId: "Team/wiphatthra.png"
  }
];

export default withLayout(() => (
  <CloudinaryContext cloudName="chittawela">
    <div className={"Main"}>
      <div>
        <Image 
          style={{gridColumnStart: '1', maxWidth: '40vw', padding: '2vw 2vw 2vw 2vw'}} 
          publicId={wiphatthra[0].publicId} />
      </div> 
      <p className={"Text"}> My name is Wiphatthra Tangchit. I'm 33 years old, Thai origin with later on also Dutch nationality grew up in the cultural city the northern part of Thailand: Chiang Mai. Since I was little and the entire youth I got
          opportunities to travel and live in many different communities followed my parents I've had experienced in the difference.
          my passionate always has been learning about people in different culture and see their ways of living. That made me realized at an early stage in my life journey that we all seeking for happiness.being heartfulness it is the way to the happiness. when we're in
          peace and free from within.</p>   
    </div>
    <style jsx>{`
      .Main {
        display: grid;
        grid-template-columns: 40vw 3vw 57vw;
        width: 100vw;
      }

      .Image {
        grid-column-start: 1;
        max-width: 40vw;
        padding: 2vw 2vw 2vw 2vw;
      }

      .Text {
        grid-column-start: 3;
        padding: 2vw 2vw 2vw 2vw;
        align-self: start;
      }
    `}
    </style>  
  </CloudinaryContext>
));

import withLayout from '../components/hoc/withLayout';
import TagLine from '../components/components/UI/TagLine/TagLine';
import BigLogo from '../components/components/UI/BigLogo/BigLogo';
import Banner from '../components/components/UI/Banner/Banner';

const backGroundImage = {
    publicId: "Banburee/IMG_8560.JPG"
};

const chittawelaLogo = {
    publicId: 'Logos/chittawela_colour_text_under.png'
};

const chittawelaTagline = "Now is Time to Soothe Your Soul";

export default withLayout(() => (
    <Banner publicId={ backGroundImage.publicId }>
        <BigLogo publicId={ chittawelaLogo.publicId }/>
        <TagLine text={ chittawelaTagline }/>  
    </Banner>
));


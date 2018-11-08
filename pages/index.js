import withLayout from '../components/hoc/withLayout';
import TagLine from '../components/components/UI/TagLine/TagLine';
import BigLogo from '../components/components/UI/BigLogo/BigLogo';
import Banner from '../components/components/UI/Banner/Banner';

export default withLayout(() => (
    <Banner>
        <BigLogo />
        <TagLine />  
    </Banner>
));


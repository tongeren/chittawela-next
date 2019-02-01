import Slides from './Slides';
import slidesData from '../SlidesData';

const setup = () => {
    const props = {
        slidesData: slidesData
    };

    const wrapper = shallow(<Slides { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<Slides />', () => {
    const { wrapper, props } = setup();      
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component with name 'Fragment' at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('Fragment');
    });

    it(`the first child wrapped within <Fragment /> should be the component '<WithStyles(StyledSlide) />'`, () => {
        expect(wrapper.childAt(0).name()).toBe('WithStyles(StyledSlide)');
    });

    it(`the number of childs wrapped within <Fragment /> need to equal the number of elements in slidesData`, () => {
        expect(wrapper.children().getElements().length).toBe(props.slidesData.length);
    });
    
});

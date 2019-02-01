import LandingPageCarousel from './LandingPageCarousel';

const setup = () => {
    const state = {
        showSubscribeDialog: false,
        showConfirmationDialog: false
    };

    const wrapper = shallow(<LandingPageCarousel />);
    
    return {
        state,
        wrapper
    };
};

describe('LandingPageCarousel', () => {
    const { wrapper } = setup();

    it.skip(`debug`, () => {
       console.log(wrapper.debug());
    });

    it(`should render a component with name 'Fragment' at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('Fragment');
    });

    it(`the first child wrapped within <Fragment /> should be the component '<WithStyles(CarouselContent) />'`, () => {
        expect(wrapper.childAt(0).name()).toBe('WithStyles(CarouselContent)');
    });

    it(`'<WithStyles(CarouselContent) />' should wrap a component <Slides />`, () => {
        expect(wrapper.childAt(0).children().name()).toBe('Slides');
    });

    it(`the second child wrapped within <Fragment /> should be the component '<SubscribeDialog />'`, () => {
        expect(wrapper.childAt(1).name()).toBe('SubscribeDialog');
    });

    it(`the third child wrapped within <Fragment /> should be the component '<ConfirmationDialog />'`, () => {
        expect(wrapper.childAt(2).name()).toBe('ConfirmationDialog');
    });

    // User interactions:

    
});
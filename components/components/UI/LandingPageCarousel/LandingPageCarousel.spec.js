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

    const childNames = ['WithStyles(CarouselContent)', 'SubscribeDialog', 'ConfirmationDialog'];

    it(`the children wrapped by <Fragment /> are ${ childNames.join() }`, () => {
        expect(wrapper.children().map(node => node.name())).toStrictEqual(childNames);
    });

    // User interactions:

    
});
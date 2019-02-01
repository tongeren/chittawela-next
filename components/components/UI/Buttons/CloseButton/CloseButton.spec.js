import CloseButton from './CloseButton';

const doNothing = () => {};

const setup = () => {
    const props = {
        clicked: doNothing, 
        autoFocusStatus: true
    };

    const wrapper = shallow(<CloseButton { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<CloseButton />', () => {
    const { wrapper } = setup();       
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component <WithStyles(withStylingContextConsumer(Button)) /> at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('WithStyles(withStylingContextConsumer(Button))');
    });

});

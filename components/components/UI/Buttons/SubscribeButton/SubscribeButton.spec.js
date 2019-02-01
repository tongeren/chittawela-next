import SubscribeButton from './SubscribeButton';

const doNothing = () => {};

const setup = () => {
    const props = {
        clicked: doNothing, 
        autoFocusStatus: true,
        disableStatus: false
    };

    const wrapper = shallow(<SubscribeButton { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<SubscribeButton />', () => {
    const { wrapper } = setup();       
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component <WithStyles(withStylingContextConsumer(Button)) /> at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('WithStyles(withStylingContextConsumer(Button))');
    });

});


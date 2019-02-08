import sinon from 'sinon';
import SubscribeButton from './SubscribeButton';

const setup = () => {
    const clickCallback = sinon.spy();

    const props = {
        handler: clickCallback, 
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
    const { props, wrapper } = setup();    
    
    afterEach(() => {
        // Restore the default sandbox here in order to not get memory leaks
        sinon.restore();
    });    
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component <WithStyles(withStylingContextConsumer(Button)) /> at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('WithStyles(withStylingContextConsumer(Button))');
    });

});


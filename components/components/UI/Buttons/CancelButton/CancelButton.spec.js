import sinon from 'sinon';
import CancelButton from './CancelButton';

const setup = () => {
    const clickCallback = sinon.spy();

    const props = {
        handler: clickCallback, 
        autoFocusStatus: false
    };

    const wrapper = shallow(<CancelButton { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<CancelButton />', () => {
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
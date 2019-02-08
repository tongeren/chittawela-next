import sinon from 'sinon';
import CloseButton from './CloseButton';

const setup = () => {
    const clickCallback = sinon.spy();

    const props = {
        handler: clickCallback, 
        status: true
    };

    const wrapper = shallow(<CloseButton { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<CloseButton />', () => {
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

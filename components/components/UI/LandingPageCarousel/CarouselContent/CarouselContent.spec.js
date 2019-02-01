// I encounter what seems like a bug in auto-rotating-carousel:
//
// Warning: Received `true` for a non-boolean attribute `mobile`.
//      
// If you want to write it to the DOM, pass a string instead: mobile="true" or mobile={value.toString()}.
// in p (at CarouselContent.spec.js:11) ...
import sinon from 'sinon';
import CarouselContent from './CarouselContent';

const setup = () => {
    const clickCallback = sinon.spy();
 
    const props = {
        classes: {},
        clicked: false,
        onClickHandler: clickCallback,
        children: <p />
    };

    const wrapper = shallow(<CarouselContent { ...props } />);
    
    return {
        props,
        wrapper
    };
};

// Skip for now, see remarks at the top of this file
describe('<CarouselContent />', () => {
    const { wrapper } = setup();       
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component '<CarouselContent />' at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('CarouselContent');
    });
    
});


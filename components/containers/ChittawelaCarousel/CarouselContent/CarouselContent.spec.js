// I encounter what seems like a bug in auto-rotating-carousel:
//
// Warning: Received `true` for a non-boolean attribute `mobile`.
//      
// If you want to write it to the DOM, pass a string instead: mobile="true" or mobile={value.toString()}.
// in p (at CarouselContent.spec.js:11) ...

import { mount } from 'enzyme';
import CarouselContent from './CarouselContent';

const doNothing = () => {};

const setup = () => {
    const props = {
        classes: {},
        startButtonClickedStatus: true, 
        startButtonClickedHandler: doNothing,
        children: <p></p>
    };

    const wrapper = mount(<CarouselContent { ...props } />);
    
    return {
        props,
        wrapper
    };
};

// Skip for now, see remarks at the top of this file
describe.skip('<CarouselContent />', () => {
    const { wrapper } = setup();       
    
    it(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should contain a component '<CarouselContent />'`, () => {
        expect(wrapper).toContainMatchingElement('CarouselContent');
    });

    it(`should contain a component '<AutoRotatingCarousel />'`, () => {
        expect(wrapper).toContainMatchingElement('AutoRotatingCarousel');
    });
    
});


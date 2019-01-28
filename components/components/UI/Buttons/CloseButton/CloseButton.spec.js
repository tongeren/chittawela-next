import { mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import CloseButton from './CloseButton';

const doNothing = () => {};

describe('<CloseButton />', () => {
    let wrapper;
    
    // Use Jest lifecycle method 'beforeEach' to execute code before the assertions
    beforeEach(() => {
        wrapper = mount(<CloseButton clicked={ doNothing } autoFocusStatus />) 
    });         
    
    // it(`debug`, () => {
    //    console.log(wrapper.debug());
    // });

    it(`should render a component with name 'CloseButton'`, () => {
        expect(wrapper.name()).toBe('CloseButton');
    });
    
    it(`should contain a MUI Button component '<Button />'`, () => {
        expect(wrapper.containsMatchingElement(<Button>Close</Button>)).toBe(true);
    })

    it(`contains the matching element '<span>Cancel</span>' created from MUI '<Button />'`, () => {
        expect(wrapper.containsMatchingElement(<span>Close</span>)).toBe(true);
    });

});


import { mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import CancelButton from './CancelButton';

const doNothing = () => {};

describe('<CancelButton />', () => {
    let wrapper;
    
    // Use Jest lifecycle method 'beforeEach' to execute code before the assertions
    beforeEach(() => {
        wrapper = mount(<CancelButton clicked={ doNothing } autoFocusStatus />) 
    });         
    
    // it(`debug`, () => {
    //    console.log(wrapper.debug());
    // });

    it(`should render a component with name 'CancelButton'`, () => {
        expect(wrapper.name()).toBe('CancelButton');
    });
    
    it(`should contain a MUI Button component '<Button />'`, () => {
        expect(wrapper.containsMatchingElement(<Button>Cancel</Button>)).toBe(true);
    })

    it(`contains the matching element '<span>Cancel</span>' created from MUI '<Button />'`, () => {
        expect(wrapper.containsMatchingElement(<span>Cancel</span>)).toBe(true);
    });

});


import { mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import SubscribeButton from './SubscribeButton';

const doNothing = () => {};

describe('<SubscribeButton />', () => {
    let wrapper;
    
    // Use Jest lifecycle method 'beforeEach' to execute code before the assertions
    beforeEach(() => {
        wrapper = mount(<SubscribeButton clicked={ doNothing } autoFocusStatus disableStatus/>) 
    });         
    
    // it(`debug`, () => {
    //    console.log(wrapper.debug());
    // });

    it(`should render a component with name 'SubscribeButton'`, () => {
        expect(wrapper.name()).toBe('SubscribeButton');
    });
    
    it(`should contain a MUI Button component '<Button />'`, () => {
        expect(wrapper.containsMatchingElement(<Button>Subscribe</Button>)).toBe(true);
    })

    it(`contains the matching element '<span>Cancel</span>' created from MUI '<Button />'`, () => {
        expect(wrapper.containsMatchingElement(<span>Subscribe</span>)).toBe(true);
    });

});


import { mount } from 'enzyme';
import SubscribeDialogModal from './SubscribeDialogModal';

const doNothing = () => {};

describe('<SubscribeDialogModal />', () => {
    let wrapper;
    
    // Use Jest lifecycle method 'beforeEach' to execute code before the assertions
    beforeEach(() => {
        wrapper = mount(<SubscribeDialogModal />) 
    });         
    
    it(`debug`, () => {
        console.log(wrapper.debug());
    });

    /*
    it(`should render a component with name 'SubscribeDialogButtons'`, () => {
        expect(wrapper.name()).toBe('SubscribeDialogButtons');
    });

    it(`should contain a component '<CancelButton />'`, () => {
        expect(wrapper).toContainMatchingElement('CancelButton');
    });

    it(`should contain a component '<SubscribeButton />'`, () => {
        expect(wrapper).toContainMatchingElement('SubscribeButton');
    });
    
    it(`should contain a MUI component '<DialogActions />'`, () => {
        expect(wrapper).toContainMatchingElement('DialogActions');
    });
    */
});


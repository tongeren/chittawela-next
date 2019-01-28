import { mount } from 'enzyme';
import ChittawelaCarousel from './ChittawelaCarousel';

describe('ChittawelaCarousel', () => {
    let wrapper;
    // Use Jest lifecycle method 'beforeEach' to execute code before the assertions
    beforeEach(() => wrapper = mount(<ChittawelaCarousel />));

    // it(`debug`, () => {
    //    console.log(wrapper.debug());
    // });

    it(`should render a component with name 'ChittawelaCarousel'`, () => {
        expect(wrapper).toContainMatchingElement('ChittawelaCarousel');
    });

    it(`should render the 'AutoRotatingCarousel' Component`, () => {
        expect(wrapper).toContainMatchingElement('AutoRotatingCarousel');
    });

    it(`should render the 'SubscribeDialogModal' Component`, () => {
        expect(wrapper).toContainMatchingElement('SubscribeDialogModal');
    });

    it(`should render the 'ConfirmationDialogModal' Component`, () => {
        expect(wrapper).toContainMatchingElement('ConfirmationDialogModal');
    });

})
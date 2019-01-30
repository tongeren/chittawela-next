import Slides from './Slides';
import slidesData from '../SlidesData';

describe('<Slides />', () => {
    let wrapper;
    
    // Use Jest lifecycle method 'beforeEach' to execute code before the assertions
    beforeEach(() => {
        wrapper = mount(<Slides slidesData={ slidesData }/>) 
    });         
    
    // it(`debug`, () => {
    //    console.log(wrapper.debug());
    // });

    it(`should render a component with name 'Slides' at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('Slides');
    });

    it(`first child should contain a component '<StyledSlide />'`, () => {
        expect(wrapper.childAt(0)).toContainMatchingElement('StyledSlide');
    });

    it(`first child should contain a component '<Image />'`, () => {
        expect(wrapper.childAt(0)).toContainMatchingElement('Image');
    });
    
});

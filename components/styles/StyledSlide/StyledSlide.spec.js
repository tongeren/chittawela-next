import { mount } from 'enzyme';
import StyledSlide from './StyledSlide';

const setup = () => {
    const props = {
        media: <p></p>,
        subtitle: '',
        title: ''
    };

    const wrapper = mount(<StyledSlide { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<StyledSlide />', () => {
    const { wrapper } = setup();       
    
    // it(`debug`, () => {
    //     console.log(wrapper.debug());
    // });

    it(`component 'StyledSlide' should be present at the root of the DOM tree wrapped with HOC 'withStyles'`, () => {
        expect(wrapper.name()).toBe('WithStyles(StyledSlide)');
    });

    it(`should contain a component '<Slide />'`, () => {
        expect(wrapper).toContainMatchingElement('Slide');
    });

    it(`component 'Slide' should be wrapped with HOC 'withStyles'`, () => {
        expect(wrapper).toContainMatchingElement('WithStyles(Slide)');
    });
    
});

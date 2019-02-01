import Button from './Button';

const setup = () => {
    const props = {
        children: 'TEST'
    };

    const wrapper = shallow(<Button { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<Button />', () => {
    const { wrapper } = setup();       
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component <withStylingContextConsumer(Button) /> at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('withStylingContextConsumer(Button)');
    });

    // const child = wrapper.children();

    // Now shallow render the child
    // dive() on function does not work. See https://github.com/airbnb/enzyme/issues/1647 and https://github.com/airbnb/enzyme/pull/1966
    // const withoutHOC = child.dive();

});

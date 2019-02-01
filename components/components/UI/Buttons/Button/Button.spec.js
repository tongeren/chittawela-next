import Button from './Button';

const setup = () => {
    const props = {
        style: {
            color: 'default',
            size: 'small',
            variant: 'text'
        }, 
        children: ''
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

});

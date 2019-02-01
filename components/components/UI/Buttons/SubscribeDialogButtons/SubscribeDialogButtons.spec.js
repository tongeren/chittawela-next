import SubscribeDialogButtons from './SubscribeDialogButtons';

const doNothing = () => {};

const setup = () => {
    const props = {
        handleCancel: doNothing,
        handleSubscribe: doNothing, 
        validationStatus: true
    };

    const wrapper = shallow(<SubscribeDialogButtons { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<SubscribeDialog />', () => {
    const { wrapper } = setup();       
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component <Fragment /> at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('Fragment');
    });

    const childNames = ['CancelButton', 'SubscribeButton'];
    
    it(`the children wrapped by <Fragment /> are ${ childNames.join() }`, () => {
        expect(wrapper.children().map(node => node.name())).toStrictEqual(childNames);
    });

});


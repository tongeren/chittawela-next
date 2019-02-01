import sinon from 'sinon';
import SubscribeDialogButtons from './SubscribeDialogButtons';

const setup = () => {
    const cancelCallback = sinon.spy();
    const subscribeCallback = sinon.spy();

    const props = {
        handleCancel: cancelCallback,
        handleSubscribe: subscribeCallback, 
        validationStatus: true
    };

    const wrapper = shallow(<SubscribeDialogButtons { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<SubscribeDialogButtons />', () => {
    const { props, wrapper } = setup();       
    
    afterEach(() => {
        // Restore the default sandbox here in order to not get memory leaks
        sinon.restore();
    });    
    
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

    it(`if the user clicks the CancelButton, then handleCancel is called`, () => {
        wrapper.childAt(0).dive().simulate('click');
        sinon.assert.called(props.handleCancel);
    });

    it(`if the user clicks the SubscribeButton, then handleSubscribe is called`, () => {
        wrapper.childAt(1).dive().simulate('click');
        sinon.assert.called(props.handleSubscribe);
    });

});


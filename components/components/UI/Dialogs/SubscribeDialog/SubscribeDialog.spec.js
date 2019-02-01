import sinon from 'sinon';
import SubscribeDialog from './SubscribeDialog';

const setup = () => {
    const closeCallback = sinon.spy();
    const subscribeCallback = sinon.spy();

    const props = {
        showDialog: true,
        onCloseHandler: closeCallback,
        onSubscribeHandler: subscribeCallback
    };

    const state = {
        error: {
            name: true,
            email: true
        },
        draft: {
            name: '',
            email: ''
        }
    };

    const wrapper = shallow(<SubscribeDialog { ...props } />);
    
    return {
        props,
        state,
        wrapper
    };
};

describe('<SubscribeDialog />', () => {
    const { props, wrapper } = setup();       
    
    afterEach(() => {
        // Restore the default sandbox here in order to not get memory leaks
        sinon.restore();
    });       
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component <withStylingContextProvider(Dialog) /> at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('withStylingContextProvider(Dialog)');
    });

    const childNames = ['WithStyles(DialogContentText)', 'EmptyBox', 'UncontrolledInput', 'UncontrolledInput'];
    
    it(`the children wrapped by <withStylingContextProvider(Dialog) /> are ${ childNames.join() }`, () => {
        expect(wrapper.children().map(node => node.name())).toStrictEqual(childNames);
    });

    // User interactions:
    /*
    it(`if the user clicks the button, then the handler is called`, () => {
        const buttonsWrapper = shallow(wrapper.prop('buttons'));
        console.log(buttonsWrapper.debug());
        const cancelButtonWrapper = buttonsWrapper.childAt(0).dive();
        console.log(cancelButtonWrapper.debug());
        const subscribeButtonWrapper = buttonsWrapper.childAt(1).dive();
        console.log(subscribeButtonWrapper.debug());
        subscribeButtonWrapper.simulate('click');
        sinon.assert.called(props.onCloseHandler);
        subscribeButtonWrapper.simulate('click');
        sinon.assert.called(props.onSubscribeHandler);
    });
    */

});

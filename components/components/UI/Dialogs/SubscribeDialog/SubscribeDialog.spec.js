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

    const handlers = {
        handleCancel: props.onCloseHandler, 
        handleSubscribe: props.onSubscribeHandler
    };

    const status = { validationStatus: props.showDialog };

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
        handlers,
        status,
        wrapper
    };
};

describe('<SubscribeDialog />', () => {
    const { props, handlers, status, wrapper } = setup();       
    
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

    const contentWrapper = wrapper.renderProp('content')();
    const childNames = ['WithStyles(DialogContentText)', 'EmptyBox', 'UncontrolledInput', 'UncontrolledInput'];
    
    it(`the render prop 'content' should render ${ childNames.join()} as children of a <Fragment />`, () => {
        expect(contentWrapper.children().map(node => node.name())).toStrictEqual(childNames);
    });

    const buttonsWrapper = wrapper.renderProp('buttons')(handlers, status);

    it(`the render prop 'buttons' should render a component <SubscribeDialogButtons />`, () => {
        expect(buttonsWrapper.name()).toBe('SubscribeDialogButtons');
    });

});

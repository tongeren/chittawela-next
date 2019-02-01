import SubscribeDialog from './SubscribeDialog';

const doNothing = () => {};

const setup = () => {
    const props = {
        showDialog: true,
        onCloseHandler: doNothing,
        onSubscribeHandler: doNothing
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
    const { wrapper } = setup();       
    
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

    // const inside = wrapper.at(0);

    // console.log(inside.debug());

    // User interactions:


});

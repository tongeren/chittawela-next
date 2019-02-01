import ConfirmationDialog from './ConfirmationDialog';

const doNothing = () => {};

const setup = () => {
    const props = {
        showDialog: true,
        onCloseHandler: doNothing
    };

    const wrapper = shallow(<ConfirmationDialog { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<ConfirmationDialog />', () => {
    const { wrapper } = setup();       
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component <withStylingContextProvider(Dialog) /> at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('withStylingContextProvider(Dialog)');
    });

    it(`the only one child wrapped within <withStylingContextProvider(Dialog) /> should be the component '<WithStyles(DialogContentText) />'`, () => {
        expect(wrapper.children().name()).toBe('WithStyles(DialogContentText)');
    });

});


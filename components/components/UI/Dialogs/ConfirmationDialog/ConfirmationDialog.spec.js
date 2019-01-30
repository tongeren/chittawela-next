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

    it(`should contain a component '<WithStyles(Dialog) />'`, () => {
        expect(wrapper.name()).toBe('WithStyles(Dialog)');
    });

    it(`the first child wrapped within <WithStyles(Dialog) /> should be the component '<WithStyles(DialogTitle) />'`, () => {
        expect(wrapper.childAt(0).name()).toBe('WithStyles(DialogTitle)');
    });

    it(`the second child wrapped within <WithStyles(Dialog) /> should be the component '<WithStyles(DialogContent) />'`, () => {
        expect(wrapper.childAt(1).name()).toBe('WithStyles(DialogContent)');
    });

    it(`'<WithStyles(DialogContent) />' should wrap a component <WithStyles(DialogContentText) />`, () => {
        expect(wrapper.childAt(1).children().name()).toBe('WithStyles(DialogContentText)');
    });

    it(`the third child wrapped within <WithStyles(Dialog) /> should be the component '<WithStyles(DialogActions) />'`, () => {
        expect(wrapper.childAt(2).name()).toBe('WithStyles(DialogActions)');
    });

    it(`'<WithStyles(DialogActions) />' should wrap a component <CloseButton />`, () => {
        expect(wrapper.childAt(2).children().name()).toBe('CloseButton');
    });
    
});


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

    it(`should contain a component '<WithStyles(Dialog) />'`, () => {
        expect(wrapper.name()).toBe('WithStyles(Dialog)');
    });

    it(`the first child wrapped within <WithStyles(Dialog) /> should be the component '<WithStyles(DialogTitle) />'`, () => {
        expect(wrapper.childAt(0).name()).toBe('WithStyles(DialogTitle)');
    });

    it(`the second child wrapped within <WithStyles(Dialog) /> should be the component '<WithStyles(DialogContent) />'`, () => {
        expect(wrapper.childAt(1).name()).toBe('WithStyles(DialogContent)');
    });

    it(`'<WithStyles(DialogContent) />' should wrap a first child component <WithStyles(DialogContentText) />`, () => {
        expect(wrapper.childAt(1).childAt(0).name()).toBe('WithStyles(DialogContentText)');
    });

    it(`the third child wrapped within <WithStyles(Dialog) /> should be the component '<SubscribeDialogButtons />'`, () => {
        expect(wrapper.childAt(2).name()).toBe('SubscribeDialogButtons');
    });

});

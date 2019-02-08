import sinon from 'sinon';
import Dialog from './Dialog';

const setup = () => {
    const closeCallback = sinon.spy();
    
    const renderContent = () => <p />;
    const renderButtons = () => <p />;

    const myButtonProps = {
        clicked: closeCallback, 
        text: 'Click me!'
    };

    const buttonRenderFunction = (text, clicked) => <button onClick={ clicked }>text</button>;

    const props = {
        show: true,
        onCloseHandler: closeCallback,
        title: '',
        content: renderContent,
        buttons: renderButtons, 
        handlers: { onClick: closeCallback },
        status: { status: true }       
    };

    const wrapper = shallow(<Dialog { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<Dialog />', () => {
    const { props, wrapper } = setup();       
    
    afterEach(() => {
        // Restore the default sandbox here in order to not get memory leaks
        sinon.restore();
    });      
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component <ContextProvider /> at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('ContextProvider');
    });

    const child = wrapper.children();

    it(`the only one child wrapped within <ContextProvider /> should be the component '<Dialog />'`, () => {
        expect(child.name()).toBe('Dialog');
    });

    // Now shallow render the child
    const withoutHOC = child.dive();

    it(`should render a component <WithStyles(Dialog) /> at the top of the DOM tree of the child`, () => {
        expect(withoutHOC.name()).toBe('WithStyles(Dialog)');
    });

    const childNames = ['WithStyles(DialogTitle)', 'WithStyles(DialogContent)', 'WithStyles(DialogActions)'];
    
    it(`the children wrapped by <WithStyles(Dialog) /> are ${ childNames.join() }`, () => {
        expect(withoutHOC.children().map(node => node.name())).toStrictEqual(childNames);
    });
     
});
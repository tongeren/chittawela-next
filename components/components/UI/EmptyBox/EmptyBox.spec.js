
import EmptyBox from './EmptyBox';

const setup = () => {
    const props = {
        width: '80vw',
        height: '2vh'
    };

    const wrapper = shallow(<EmptyBox { ...props } />);
    
    return {
        props,
        wrapper
    };
};

describe('<EmptyBox />', () => {
    const { wrapper } = setup();       
    
    it.skip(`debug`, () => {
        console.log(wrapper.debug());
    });

    it(`should render a component <Fragment /> at the top of the DOM tree`, () => {
        expect(wrapper.name()).toBe('Fragment');
    });

    const childNames = ['div', 'JSXStyle'];
    
    // This doesn't work yet. See tests/jest/matchers.js.
    /* 
    it(`the children wrapped by <Fragment /> are ${ childNames.join() }`, () => {
        expect(wrapper).childrensNamesEqual(childNames);
    });
    */

    it(`the children wrapped by <Fragment /> are ${ childNames.join() }`, () => {
        expect(wrapper.children().map(node => node.name())).toStrictEqual(childNames);
    });

});

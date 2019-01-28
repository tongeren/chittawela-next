import { shallow } from 'enzyme';
import Backdrop from './Backdrop';

const doNothing = () => {};

describe('<Backdrop />', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Backdrop show clicked={ doNothing }/>));

    // it('debug', () => {
    //    console.log(wrapper.debug()); 
    // });

    it('should render exactly two <div />s', () => {
        expect(wrapper.find('div').length).toEqual(2);
    });

    it('should render precisely one <JSXStyle />', () => {
        expect(wrapper.find('JSXStyle').length).toEqual(1);
    });
});


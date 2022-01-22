import * as React from 'react'
import renderer from 'react-test-renderer';
import Header from '../index';
import { useSelector, useDispatch } from 'react-redux'
import {configure,shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

jest.mock('react-redux');


describe('Header testing', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(() => () => { });
    })
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('Snapshot testing', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('children', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree.children.length).toBe(3);
    })
    test('search element in header',()=>{
        const wrapper = shallow(<Header />);
        const input = wrapper.find('input');
        expect(input.length).toBe(1);
    })
    
})
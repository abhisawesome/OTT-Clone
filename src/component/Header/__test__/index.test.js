import * as React from 'react'
import renderer from 'react-test-renderer';

import Header from '../index';
import { useSelector, useDispatch } from 'react-redux'

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
    
    
})
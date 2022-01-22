import FetchMovie from '../fetchMovie';
import { useSelector, useDispatch } from 'react-redux';
import { renderHook, act } from '@testing-library/react-hooks'


jest.mock('react-redux');


describe('Hook testing', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Ideal case first page', () => {
        useSelector.mockImplementation(() => () => {
            return {}
        });
        useDispatch.mockImplementation(() => () => {
            return {}
        });
        const { result } = renderHook(() => FetchMovie(1, 'Romantic Comedy'));
        expect(result.current.length).toBe(1)
        expect(useSelector.mock.calls.length).toBe(1);
        expect(useDispatch.mock.calls.length).toBe(1);
    })
    test('Second page loading', () => {
        useSelector.mockImplementation(() => () => {
            return {}
        });
        useDispatch.mockImplementation(() => () => {
            return {}
        });
        const { result } = renderHook(() => FetchMovie(2, 'Romantic Comedy'));
        expect(result.current.length).toBe(1)
        expect(useSelector.mock.calls.length).toBe(1);
        expect(useDispatch.mock.calls.length).toBe(1);
    })
    test('Third page loading',()=>{
        useSelector.mockImplementation(() => () => {
            return {}
        });
        useDispatch.mockImplementation(() => () => {
            return {}
        });
        const { result } = renderHook(() => FetchMovie(3, 'Romantic Comedy'));
        
        expect(result.current.length).toBe(1)
        expect(useSelector.mock.calls.length).toBe(1);
        expect(useDispatch.mock.calls.length).toBe(1);
    })
})
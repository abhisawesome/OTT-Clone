import hooks from '../index';
import fetchMovie from '../fetchMovie';

jest.mock('../fetchMovie');

describe('Hook testing', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('Hook function calling',()=>{
        fetchMovie.mockReturnValue(() => ({
            mock:true
        }));
        const result = hooks.fetchMovie(1, 'Romantic Comedy');
        expect(fetchMovie.mock.calls.length).toBe(1);
        
    })
})
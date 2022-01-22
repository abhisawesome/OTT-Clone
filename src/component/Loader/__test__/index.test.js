import renderer from 'react-test-renderer';
import Loader from '../index';

describe('Loader testing',()=>{
    test('Snapshot testing', () => {
        const tree = renderer.create(<Loader times={1} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
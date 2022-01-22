import renderer from 'react-test-renderer';
import Image from '../index';


describe('Image block',()=>{
    test('Snapshot testing',()=>{
        const tree = renderer.create(<Image 
            alt='alternative'
            className='new-class'
            src='src/image.jpg'
            key={1}
        />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

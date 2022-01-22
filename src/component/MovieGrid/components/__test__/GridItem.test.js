import { Suspense, useRef } from 'react';
import renderer from 'react-test-renderer';
import GridItem from '../GridItem';
const data = [{
    "name": "The Birds",
    "poster-image": "poster1.jpg"
},
{
    "name": "Rear Window",
    "poster-image": "poster2.jpg"
}]
describe('Grid Item', () => {
    test('Snapshot test', () => {
        let ref = () => { }
        const tree = renderer.create(
            <Suspense fallback={<div>Loading..</div>}>
                <GridItem
                    lastElementRef={ref}
                    data={data}
                />
            </Suspense>
        )
        expect(tree).toMatchSnapshot();
    })
})
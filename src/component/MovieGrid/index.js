import React, { memo, useCallback, lazy, useRef, useState } from 'react';
import hooks from '../../hooks';
import utils from '../../utils';

const GridItem = lazy(() => import('./components/GridItem'));
const Loader = lazy(() => import('../Loader'));

const MovieGrid = ({ title = 'Romantic Comedy' }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [state] = hooks.fetchMovie(pageNumber, title);
    utils.log('MovieGrid Rendered', { title });
    const { isLoading,
        data = {},
        totalMoviesLoaded,
        totalAvailableMovies } = state;
    const observer = useRef();
    // To check if there is more element to load
    const hasMore = totalMoviesLoaded < totalAvailableMovies;
    // To check if the last element and load
    const pageEndingRef = useCallback(node => {
        if (isLoading) {
            return;
        }
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [isLoading,hasMore])
    return (
        <div >
            <div className='scrollbar-hide'>
                <GridItem data={data[title]} lastElementRef={pageEndingRef} />
            </div>
            {isLoading && (
                <Loader />
            )}
        </div>
    )
}

export default memo(MovieGrid);
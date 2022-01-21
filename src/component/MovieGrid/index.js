import React, { memo,useEffect,useRef } from 'react';
import hooks from '../../hooks';
import GridItem from './components/GridItem';
import utils from '../../utils';
import Loader from '../Loader';
const MovieGrid = ({ title = 'Romantic Comedy', pageNumber = 1 }) => {
    const [state] = hooks.fetchMovie(pageNumber, title);
    utils.log('MovieGrid Rendered', { title });
    const { isLoading, currentPage, data = {} } = state;
    const pageEndingRef = useRef(null);
   
    return (<div>
        {isLoading && (
            <Loader />
        )}
        {!isLoading && (
            <div>
                <GridItem data={data[title]} />
                <div ref={pageEndingRef}/>
            </div>
        )}
    </div>)
}

export default memo(MovieGrid);
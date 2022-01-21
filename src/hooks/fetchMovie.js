import { useEffect } from 'react';
import Page1 from '../../src/api/CONTENTLISTINGPAGE-PAGE1.json';
import Page2 from '../../src/api/CONTENTLISTINGPAGE-PAGE2.json';
import Page3 from '../../src/api/CONTENTLISTINGPAGE-PAGE3.json';
import { useSelector, useDispatch } from 'react-redux';

/**
 * 
 * @param {Number} pageNumRequest 
 * @param {String} title 
 * @returns 
 */
const FetchMovie = (pageNumRequest = 1, title) => {
    const state = useSelector(state => state.movie);
    const dispatch = useDispatch();
    const fetchData = async (pageNumRequest) => {
        await new Promise(resolve => {
            dispatch({ type: 'set_loading', payload: true });
            setTimeout(() => {
                if (pageNumRequest === 2) {
                    dispatch({
                        type: 'add_movie_data',
                        payload: Page2.page
                    })
                } else {
                    dispatch({
                        type: 'add_movie_data',
                        payload: Page3.page
                    })
                }
                resolve()
            }, 5000)
        });
    }
    useEffect(() => {

        if (pageNumRequest === 1) {
            dispatch({
                type: 'add_movie_data',
                payload: Page1.page
            })
        } else {
            fetchData(pageNumRequest);
        }

    }, [pageNumRequest])

    return [state]
}

export default FetchMovie;
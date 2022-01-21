
import { memo } from 'react';
import utils from '../../utils';
import { useDispatch } from 'react-redux';

const Header = () => {
    utils.log('Header rendered !');
    const dispatch = useDispatch();
    const searchFilim = (value) => {
        dispatch({
            type: 'search_movie',
            payload: {
                movieName: value
            }
        })
    }
    return (
        <div className='flex flex-row items-center'>
            <div>
                <img
                    alt='logo'
                    className='h-5 w-5 sm:pl-30'
                    src="images/Back.png"
                />
            </div>
            <div>
                <img alt='logo'
                    className='h-5 w-5 pl-100'
                    src="/images/search.png"
                />

            </div>
            <div >
                <input
                    className="text-black"
                    type="text" placeholder="Search movie.."
                    onChange={(event) => {
                        searchFilim(event.target.value);
                    }}
                />
            </div>

        </div>
    )
}

export default memo(Header);
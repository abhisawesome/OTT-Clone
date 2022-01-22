
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
        //bg-[url('/images/nav_bar.png')]
        <div className="flex items-center justify-between p-4 ">
            <div>
                <img
                    alt='logo'
                    className='h-5 w-5 sm:pl-30'
                    src="images/Back.png"
                />
            </div>

            <div className='flex item-center group' >
                <img
                    alt='logo'
                    className='h-5 w-5 pl-100 block group-hover:hidden'
                    src="images/search.png"
                />

                <input
                    className="text-black hidden group-hover:block"
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
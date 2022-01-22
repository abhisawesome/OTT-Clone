const initialState = {
    isLoading: true,
    currentPage: {},
    data: {},
    movieListFull: {},
    totalMoviesLoaded: 0,
    totalAvailableMovies: 0
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'set_loading': {
            return { ...state, isLoading: action.payload }
        }
        case 'add_movie_data': {
            if (!action.payload) {
                return state;
            }
            const { title } = action.payload;
            if(title === undefined){
                return state;
            }
            // To store the entire movie list that is loaded in-case of backup
            const currentMovieList = state.data[title] ? state.data[title] : []
            // Total movie loaded on the page
            const totalMoviesLoaded = action.payload['page-size-returned']
                ? (state.totalMoviesLoaded + parseInt(action.payload['page-size-returned']))
                : state.totalMoviesLoaded
            // Total available movie for pagination , From API
            const totalAvailableMovies = action.payload['total-content-items']
                ? parseInt(action.payload['total-content-items'])
                : state.totalAvailableMovies;
            return {
                ...state,
                currentPage: action.payload,
                data: {
                    ...state.data,
                    [title]: action.payload['content-items'] 
                     ? currentMovieList.concat(action.payload['content-items'].content) 
                     : currentMovieList
                },
                movieListFull: {
                    ...state.data,
                    [title]: action.payload['content-items'] 
                     ? currentMovieList.concat(action.payload['content-items'].content) 
                     : currentMovieList
                },
                totalMoviesLoaded: totalMoviesLoaded,
                totalAvailableMovies: totalAvailableMovies,
                isLoading: false
            }
        }
        case 'search_movie': {
            const { movieName } = action.payload;
            const {
                currentPage = {},
                movieListFull = {}
            } = state;
            if( !movieName ||movieName === null ){
                return state;
            }
            const currentPageName = currentPage.title
            // const regularExpression = new RegExp(`/^${movieName}/`, 'i');
            // search the movie in data using filter and regex
            let data = {
                ...state.data,
                [currentPageName]: movieListFull[currentPageName]
                    .filter(currentMovieList =>
                        currentMovieList
                        && movieName
                        && movieName.length > 0
                        &&
                        currentMovieList.name.toLowerCase().search(movieName.toLowerCase()) !== -1
                    )
            };
            // if the search input value comes empty then reset the data to original
            if (movieName.length === 0) {
                data = {
                    ...state.data,
                    [currentPageName]: state.movieListFull[currentPageName]
                };
            }

            return { ...state, data };
        }
        default:
            return state
    }
}

export default reducer;
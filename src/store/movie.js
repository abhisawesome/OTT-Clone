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
            const { title } = action.payload;
            const currentMovieList = state.data[title] ? state.data[title] : []
            return {
                ...state,
                currentPage: action.payload,
                data: {
                    ...state.data,
                    [title]: currentMovieList.concat(action.payload['content-items'].content)
                },
                movieListFull: {
                    ...state.data,
                    [title]: currentMovieList.concat(action.payload['content-items'].content)
                },
                totalMoviesLoaded: action.payload['page-size-returned'] ? parseInt(action.payload['page-size-returned']) : state.totalMoviesLoaded,
                totalAvailableMovies: action.payload['total-content-items'] ? parseInt(action.payload['total-content-items']) : state.totalAvailableMovies,
                isLoading: false
            }
        }
        case 'search_movie': {
            const { movieName } = action.payload;
            const {
                currentPage = {},
                movieListFull = {}
            } = state;
            const currentPageName = currentPage.title
            const regularExpression = new RegExp(`/^${movieName}/`, 'i');
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
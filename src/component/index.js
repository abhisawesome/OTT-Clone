import Header from "./Header"
import utils from '../utils';
import MovieGrid from "./MovieGrid";

const Components = () => {
    utils.log('Components rendered !');
    return (
        <div className="primary-color pl-30 sm:pl-30">
            <Header />
            <MovieGrid title='Romantic Comedy' />
        </div>
    )
}

export default Components
import Header from "./Header"
import utils from '../utils';
import MovieGrid from "./MovieGrid";
import { Suspense } from "react";
import Loader from "./Loader";
const Components = () => {
    utils.log('Components rendered !');
    return (
        <div className="primary-color pl-30 sm:pl-30">
            <Header />
            {/* Load the movie grid */}
            <Suspense fallback={<Loader />}>
                <MovieGrid title='Romantic Comedy' />
            </Suspense>
        </div>
    )
}

export default Components
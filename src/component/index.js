import Header from "./Header"
import utils from '../utils';
import MovieGrid from "./MovieGrid";
import { Suspense } from "react";
import Loader from "./Loader";
const Components = () => {
    utils.log('Components rendered !');
    return (
        <div className="primary-color pl-30 sm:pl-30 flex flex-col h-screen">
            <Header />
            {/* Load the movie grid */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
                <Suspense fallback={<Loader />}>
                    <MovieGrid title='Romantic Comedy' />
                </Suspense>
            </div>
        </div>
    )
}

export default Components
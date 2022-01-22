import PropType from 'prop-types';

/**
 * 
 * @param {Object} Props 
 * @returns 
 * 
 * @description Loading custom component
 */
const Loader = ({ times = 9 }) => {
    const newArray = new Array(times).fill(0);

    return (
        <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 pt-10 ">
            {newArray.map((item, index) => {
                return (
                    <div key={index} className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-700 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

Loader.propTypes = {
    times: PropType.number
}

export default Loader;
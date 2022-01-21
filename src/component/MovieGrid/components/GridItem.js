import { memo } from "react";
import utils from "../../../utils";
const Row = ({ data = [], lastElementRef }) => {
    utils.log('Row rendered !');
    return (
        <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 ">
            {data.map((item, index) => {
                if(data.length === index + 1) {
                    return (
                        <div
                            ref={lastElementRef}
                            key={index}
                        >
                            <img
                                alt="poster"
                                src={`/images/${item["poster-image"]}`} />
                            <span>{item.name}</span>
                        </div>
                    )
                }else{
                    return (
                        <div
                            key={index}
                        >
                            <img
                                alt="poster"
                                src={`/images/${item["poster-image"]}`} />
                            <span>{item.name}</span>
                        </div>
                    )
                }
               
            })}
        </div>

    )
}

export default memo(Row);
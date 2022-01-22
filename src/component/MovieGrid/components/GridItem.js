import { memo } from "react";
import utils from "../../../utils";
const Row = ({ data = [], lastElementRef }) => {
    utils.log('Row rendered !');
    return (
        <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-x-[30px] gap-y-[90px] mx-[30px] ">
            {data.map((item, index) => {
                if ((data.length - 10) === index + 1) {
                    return (
                        <div
                            ref={lastElementRef}
                            key={index}
                        >
                            <img
                                alt="poster"
                                src={`images/${item["poster-image"]}`} />
                            <p
                                className="line-clamp-1 mt-[24px]"
                            >
                                {item.name}
                            </p>
                        </div>
                    )
                } else {
                    return (
                        <div
                            key={index}
                            className=""
                        >
                            <img
                                alt="poster"
                                src={`images/${item["poster-image"]}`} />
                            <p
                                className="line-clamp-1 mt-[24px]"
                            >{item.name}
                            </p>
                        </div>
                    )
                }

            })}
        </div>

    )
}

export default memo(Row);
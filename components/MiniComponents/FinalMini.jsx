"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import Data from "../../FAQsData.js";
import { useState } from "react";

export default function FinalMini() {
    let [desc, setDesc] = useState(null);

    function HandleClick(index) {

        if (desc == null) setDesc(index);
        else if(desc!=null && index!=desc)setDesc(index)
        else setDesc(null);
    }

    return (
        <div className="flex justify-center pb-48">
            <div className="w-5/6 px-12">
                <h1 style={{ color: "#F78319" }} className="text-5xl font-bold mt-16">
                    FAQs
                </h1>
                {Data.map((data, index) => (
                    <div key={index} className="faq-container">
                        <div className="bg-white rounded-full w-full h-24 shadow-lg flex justify-between items-center px-12 mt-16" style={{ zIndex: '10' }}>
                            <h1 style={{ color: "#0A56F1" }} className="font-semibold text-2xl">
                                {data.title}
                            </h1>
                            <RiArrowDropDownLine
                                onClick={() => HandleClick(index)} // Pass the index to HandleClick
                                style={{ color: "#0A56F1", width: '4vw', height: '4vw' }}
                                className="ml-16"
                            />
                        </div>
                        {index==desc&&
                        <div
                            style={{
                                borderLeft: '2px solid #a2e0f5',
                                borderRight: '2px solid #a2e0f5',
                                borderBottom: '2px solid #a2e0f5',
                                marginTop: '-2vw',
                                position: 'relative',
                                zIndex: '0',
                            }}
                            className="rounded-lg p-8 border-container"
                        >
                            <h1 className="text-gray-700 text-xl mt-9">{data.desc}</h1>
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

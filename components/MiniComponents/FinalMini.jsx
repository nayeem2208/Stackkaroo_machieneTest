"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import Data from "../../Datas/FAQsData.js";
import { useState } from "react";

export default function FinalMini() {
  let [desc, setDesc] = useState(null);

  function HandleClick(index,event) {
    event.stopPropagation();
    setDesc((prevDesc) => (prevDesc === index ? null : index));
  }

  return (
    <div className="flex justify-center pb-2 md:pb-48">
      <div className="w-full md:w-5/6 px-4 md:px-12">
        <h1
          style={{ color: "#F78319" }}
          className="text-2xl md:text-5xl font-bold mt-8 md:mt-16"
        >
          FAQs
        </h1>
        {Data.map((data, index) => (
          <div key={index} className="faq-container mb-4 md:mb-8">
            <div
              className="bg-white rounded-full w-full h-16 md:h-24 shadow-lg flex justify-between items-center py-2 px-4 md:px-12 mt-8 md:mt-16"
              style={{ zIndex: "10" }}
              onClick={(event) => HandleClick(index,event)}
            >
              <h1
                style={{ color: "#0A56F1" }}
                className="font-semibold text-xs md:text-2xl"
              >
                {data.title}
              </h1>
              <button>
                <RiArrowDropDownLine
                  style={{ color: "#0A56F1", width: "5vw", height: "5vw" }}
                  className="ml-4 md:ml-16"
                />
              </button>
            </div>
            {index === desc && (
              <div
                style={{
                  borderLeft: "2px solid #a2e0f5",
                  borderRight: "2px solid #a2e0f5",
                  borderBottom: "2px solid #a2e0f5",
                  marginTop: "-2vw",
                  position: "relative",
                  zIndex: "0",
                }}
                className="rounded-lg p-4 md:p-8 border-container"
              >
                <h1 className="text-gray-700 text-sm md:text-xl mt-4 md:mt-9">
                  {data.desc}
                </h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import Data from "../../Datas/WhyShouldData";
import EmblaCarousel from "../EmbalaCarousel/Carousel";
import '../EmbalaCarousel/embla.css'
export default function FifthMini() {

  return (
    <div className="flex flex-col items-center mx-auto w-full md:w-5/6 ">
      <div className="flex justify-center ml-6">
        <h1
          className="pt-12 md:pt-24 font-bold text-xl md:text-4xl"
          style={{ color: "#0A56F1", letterSpacing: "3px" }}
        >
          Why should you Choose Stackkaroo's Website Development Service?
        </h1>
      </div>
      <div className="hidden  md:flex flex-wrap justify-center mt-24">
        {Data.map((data, index) => (
          <div>
          <div
            className="hidden md:block mx-6 my-6 text-center flex flex-col justify-center items-center rounded-lg w-80 h-72"
            style={{
              border: "2px solid",
              borderImage: "linear-gradient(180deg, orange, blue) 0.5",
              borderRadius: "8px",
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center",
            }}
          >
            <img
              src={data.imgSrc}
              alt=""
              className="w-16 h-16 mb-4 rounded"
            />
            <h1 className="max-w-64 text-lg">{data.heading}</h1>
          </div>
        </div>
        
        ))}

      </div>
              <div className="block md:hidden mt-8 overflow-hidden max-w-full ">
        <EmblaCarousel slides={Data}/></div>
    </div>
  );
}

import { HiOutlineBars3 } from "react-icons/hi2";

export default function FirstMini() {
  return (
    <div className="w-full h-full mb-4 md:mb-24 mx-6">
            <HiOutlineBars3 className=" w-8 h-8 text-gray-700 mb-2"/>
      <div>
        <h1 className="font-bold text-xs md:text-4xl text-gray-600">
          Boost Your Web Development <br /> Success with Stackkaroo's
        </h1>
      </div>
      <div className="flex  mt-2 md:mt-9">
        <div className="text-left md:mr-10">
          <h1
            style={{ color: "#0A56F1", fontWeight: "950", lineHeight: "0.8" }}
            className="text-3xl md:text-8xl"
          >
            PROJECT
            <br />
            EXECUTION
            <br />
            MODEL
          </h1>
          <button
            style={{ backgroundColor: "#F78319", borderRadius: "15px" }}
            className="text-white py-1 px-3 md:py-2 text-base md:text-xl md:px-8 font-semibold mt-4 md:mt-9"
          >
            Let’s Discuss
          </button>
        </div>
        <div className="w-3/6 " style={{ marginTop: "-7vw" }}>
          <img
            style={{
              width: "100%",
              maxWidth: "38vw",
            }}
            src="/Untitled-design-4.webp"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}

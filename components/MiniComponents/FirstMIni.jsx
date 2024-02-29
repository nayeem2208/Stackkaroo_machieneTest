export default function FirstMini() {
  return (
    <div
      className="w-full h-full"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div>
        <h1 className="font-bold text-4xl text-gray-600">
          Boost Your Web Development <br /> Success with Stackkaroo's
        </h1>
      </div>
      <div className="flex mt-9">
        <div>
          <h1
            style={{ color: "#0A56F1", fontWeight: "950", lineHeight: "0.8" }}
            className=" text-8xl"
          >
            PROJECT
            <br />
            EXECUTION
            <br />
            MODEL
          </h1>
          <button
            style={{ backgroundColor: "#F78319", borderRadius: "15px" }}
            className="text-white py-2 text-xl px-8 font-semibold mt-9"
          >
            Let’s Discuss
          </button>
        </div>
        <div className="w-3/6">
          <img
            style={{
              position: "absolute",
              right: 150,
              top: 120,
              width: "38vw",
            }}
            src="/Untitled-design-4.webp "
            alt=""
            className=" "
          />
        </div>
      </div>
    </div>
  );
}

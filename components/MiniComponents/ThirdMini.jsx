import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function ThirdMini() {
  return (
    <div className="flex justify-center items-center mt-12 md:mt-36 mb-2 md:mb-24 mx-2">
      <div>
        <div className=" flex justify-center">
          <img
            src="Group 169.png"
            className="h-full flex justify-center"
            alt=""
          />
        </div>
        <h1
          style={{ color: "#0A56F1" }}
          className="text-3xl md:text-5xl font-bold text-center mt-12 md:mt-24"
        >
          Agile Model
        </h1>
        <div
          style={{ border: "2px solid gray" }}
          className="md:flex w-full h-full mt-24"
        >
          <div
            style={{
              borderRight: "2px solid gray",
            }}
            className="w-full md:w-3/5 h-full p-2 md:p-12  
             "
          >
            <img src="Group 125.png" className="h-full" alt="" />
          </div>
          <div
            className="p-4 md:p-12 text-gray-700 text-center md:text-left "
            style={{ borderTop: "2px solid gray" }}
          >
            <h1 className="md:max-w-72 md:text-lg">
              The Agile model is not limited to a single approach. It is a
              methodology that emphasizes adaptability and flexibility in
              software development.
              <br />
              <br />
              An Agile model follows the principles outlined in the Agile
              Manifesto and focuses on customer satisfaction, working software,
              and regular feedback. Instead of working on a large project, the
              Agile model breaks it down into smaller increments that can be
              released to customers as they are completed.
            </h1>
            <div className="hidden md:block text-white text-3xl mt-3">
              <button
                style={{ backgroundColor: "#F78319" }}
                className="rounded mx-3"
              >
                <FaArrowLeft className="mx-8 my-2" />
              </button>
              <button
                style={{ backgroundColor: "#F78319" }}
                className="rounded mx-3"
              >
                <FaArrowRight className="mx-8 my-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:hidden text-white text-3xl mt-4">
          <button
            style={{ backgroundColor: "#F78319",borderRadius:'15px' }}
            className=" mx-3"
          >
            <FaArrowLeft className="mx-8 my-2" />
          </button>
          <button
            style={{ backgroundColor: "#F78319",borderRadius:'15px'  }}
            className=" mx-3"
          >
            <FaArrowRight className="mx-8 my-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

import { FaArrowRight,FaArrowLeft  } from "react-icons/fa6";

export default function ThirdMini() {

  return (
    <div className="flex justify-center items-center mt-36 mb-24">
      <div>
        <div className=" flex justify-center">
        <img src="Group 169.png" className="h-full flex justify-center" alt="" />
        </div>
        <h1
          style={{ color: "#0A56F1" }}
          className="text-5xl font-bold text-center mt-24"
        >
          Agile Model
        </h1>
        <div
          style={{ border: "2px solid gray" }}
          className="flex w-full h-full mt-24"
        >
          <div
            style={{ borderRight: "2px solid gray" }}
            className="w-3/5 h-full p-12"
          >
            <img src="Group 125.png" className="h-full" alt="" />
          </div>
          <div className=" p-12 text-gray-700">
            <h1>
              The Agile model is not limited <br/> to a single approach. It is a<br/>
              methodology that emphasizes <br/> adaptability and flexibility in<br/>
              software development.<br/>
              <br/>
               An Agile model follows the <br/>principles
              outlined in the Agile<br/> Manifesto and focuses on<br/> customer
              satisfaction, working<br/> software, and regular<br/> feedback. Instead of
              working<br/> on a large project, the Agile<br/> model breaks it down into<br/>
              smaller increments that can be <br/>released to customers as they<br/> are
              completed.
            </h1>
            <div className="text-white text-3xl mt-3"><button  style={{ backgroundColor: "#F78319"}} className="rounded mx-3"><FaArrowLeft className="mx-8 my-2"/></button>
            <button  style={{ backgroundColor: "#F78319"}} className="rounded mx-3"><FaArrowRight className="mx-8 my-2"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

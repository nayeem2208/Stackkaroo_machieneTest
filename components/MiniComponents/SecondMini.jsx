import { RxDotFilled } from "react-icons/rx";
import { FaDocker, FaNodeJs, FaStar } from "react-icons/fa";
import { BiSolidComponent } from "react-icons/bi";
import { VscCode } from "react-icons/vsc";
import { GoArrowUp, GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";

export default function SecondMini() {
  const lineStyle = {
    height: "1px",
    width: "120%",
    backgroundColor: "black",
    margin: "1vw 0",
    transform: "rotate(-25deg)",
  };

  const gradientLineStyle = {
    width: "70%",
    height: "2px",
    background: "linear-gradient(to right, #FFA500, #007BFF)",
  };

  const generateLines = () => {
    const lines = [];
    for (let i = 0; i < 80; i++) {
      lines.push(<div key={i} style={lineStyle}></div>);
    }
    return lines;
  };

  return (
    <div className="mt-4 md:mt-24 mx-2">
      <div>
        <ul
          className="flex justify-between font-bold md:text-3xl"
          style={{ color: "#0A56F1" }}
        >
          <li className="flex">
            <RxDotFilled className="md:w-10 md:h-10" />
            Flexible
          </li>
          <li className="flex">
            <RxDotFilled className="md:w-10 md:h-10" />
            Client-Centric
          </li>
          <li className="flex">
            <RxDotFilled className="md:w-10 md:h-10" />
            Balanced
          </li>
        </ul>
      </div>
      <h1
        className="text-gray-700 text-md md:text-2xl  text-center mt-4 md:mt-16 max-w-7xl md:mx-8"
        style={{ fontWeight: 500 }}
      >
        Every project is one-of-a-kind, which means it needs to be treated with
        care and 
        attention. In addition to considering the cost, time, and scope, the
        relationship between
         the client and the agency is also crucial in maintaining a
        balance.
      </h1>
      <div
        className="mt-8 md:mt-24 flex mx-3 justify-center h-96 md:h-150"
      >
        {/*first part*/}
        <div style={{ border: "1px solid gray" }} className="w-1/12">
          <div className="h-5/6 w-full overflow-hidden">{generateLines()}</div>
          <div
            style={{ borderTop: "1px solid gray " }}
            className="flex justify-center items-center p-1 md:py-6"
          >
            <FaDocker className="w-6 h-6 md:w-12 md:h-12 mt-2 text-gray-600 " />
          </div>
        </div>
        {/*second part*/}
        <div style={{ border: "1px solid gray" }} className="w-6/12 md:7/12">
          <div className="h-5/6 py-4 px-2 md:p-12">
            <h1 style={{ color: "#F78319" }} className="text-base md:text-4xl font-bold">
              TYPES
            </h1>
            <h1 className="text-sm md:text-2xl font-bold text-gray-700 mt-2" style={{color:'#0A56F1'}}>
              Requirements, Scope,
               Functionalities and Utilization
            </h1>
            <div className="mt-4 md:mt-6 flex ml-1">
              <img src="Group 90.png" className="w-6 h-6 md:w-12 md:h-12" alt="" />
              <h1 className="text-gray-700 text-sm md:text-2xl font-semibold ml-2 md:ml-10 md:mt-2">
                Agile Model
              </h1>
            </div>
            <div style={gradientLineStyle} className="ml-2 my-2 md:my-4"></div>
            <div className=" mt-2 md:mt-6 flex ml-1">
              <img src="Group 141.png" className="w-6 h-6 md:w-12 md:h-12" alt="" />
              <h1 className="text-gray-700 text-sm md:text-2xl font-semibold ml-2 md:ml-10 md:mt-2">
                DevOps Model
              </h1>
            </div>
            <div style={gradientLineStyle} className="ml-2 my-2 md:my-4"></div>
            <div className=" mt-2 md:mt-6 flex ml-1">
              <img src="Group 89.png" className="w-6 h-6 md:w-12 md:h-12" alt="" />
              <h1 className="text-gray-700 text-sm md:text-2xl font-semibold ml-2 md:ml-10 md:mt-2">
                Iterative Model
              </h1>
            </div>
            <div style={gradientLineStyle} className="ml-2 my-2 md:my-4"></div>
            <div className=" mt-2 md:mt-6 flex ml-1">
              <img src="Group 91.png" className="w-6 h-6 md:w-12 md:h-12" alt="" />
              <h1 className="text-gray-700 text-sm md:text-2xl font-semibold ml-2 md:ml-10 md:mt-2">
                Waterfall Model
              </h1>
            </div>
          </div>
          <div className="flex h-1/6" style={{ borderTop: "2px solid gray" }}>
            <div
              style={{ borderRight: "2px solid gray" }}
              className="w-1/6 overflow-hidden "
            >
              {generateLines()}
            </div>
            <div
              style={{ borderRight: "2px solid gray" }}
              className="w-1/6"
            ></div>
            <div
              style={{ borderRight: "2px solid gray" }}
              className="w-3/6 flex justify-center md:py-6 mt-2"
            >
              <GoArrowUpLeft className="w-10 h-10 text-gray-600 mx-2" />
              <GoArrowUp className="w-10 h-10 text-gray-600 " />
              <GoArrowUpRight className="w-10 h-10 text-gray-600 mx-2" />
            </div>
            <div
              style={{ borderRight: "2px solid gray" }}
              className="w-1/6"
            ></div>
            <div className="w-1/6 flex justify-center items-center py-6">
              <BiSolidComponent className="w-6 h-6 md:w-12 md:h-12 text-gray-600 " />
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid gray" }} className="w-5/12 md:w-4/12">
          <div className="h-4/6 text-center py-2">
            <h1 style={{ color: "#F78319" }} className="md:text-4xl font-bold md:mt-2">
              50+
            </h1>
            <h1 className="text-gray-700 text-xs md:text-xl font-semibold" >
              Businesses were <br />introduced last <br /> year on Digital{" "}
              <br /> Platform
            </h1>
            <h1
              style={{ color: "#F78319" }}
              className="md:text-4xl font-bold flex justify-center text-center mt-2 md:mt-6"
            >
              4.6
              <FaStar className="w-3 h-3 md:w-6 md:h-6 mt-1 md:mt-2 ml-1 md:ml-2" />
            </h1>
            <h1 className="text-gray-700 text-xs md:text-xl font-semibold">
              Rating on Google <br /> by our Trusted <br /> Clients
            </h1>
            <h1 style={{ color: "#F78319" }} className="md:text-4xl font-bold mt-2 md:mt-6">
              20+
            </h1>
            <h1 className="text-gray-700 text-xs md:text-xl font-semibold">
              Positive Reviews <br /> on Glassdoor
            </h1>
          </div>
          <div className="h-1/6 flex" style={{ borderTop: "2px solid gray" }}>
            <div
              style={{ borderRight: "2px solid gray" }}
              className="w-1/3"
            ></div>
            <div
              style={{ borderRight: "2px solid gray" }}
              className="w-1/3 flex justify-center items-center py-6"
            >
              <VscCode className="w-12 h-12 text-gray-600 " />
            </div>
            <div
              style={{ borderRight: "1px solid gray" }}
              className="w-1/3"
            ></div>
          </div>
          <div className="h-1/6 flex" style={{ borderTop: "2px solid gray" }}>
            <div
              style={{ borderRight: "2px solid gray" }}
              className="w-1/3"
            ></div>
            <div
              style={{ borderRight: "2px solid gray" }}
              className="w-1/3 overflow-hidden"
            >
              {generateLines()}
            </div>
            <div
              style={{ borderRight: "1px solid gray" }}
              className="w-1/3"
            ></div>
          </div>
        </div>
        <div style={{ border: "1px solid gray" }} className="w-1/12">
          <div
            className="h-1/6 flex justify-center items-center  md:py-6"
            style={{ borderBottom: "2px solid gray" }}
          >
            {" "}
            <FaNodeJs className="w-4 h-4 md:w-12 md:h-12 text-gray-600 " />
          </div>
          <div className="h-5/6 w-full overflow-hidden">{generateLines()}</div>
        </div>
      </div>
    </div>
  );
}

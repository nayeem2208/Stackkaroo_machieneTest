import FirstMini from "./MiniComponents/FirstMIni";
import SecondMini from "./MiniComponents/SecondMini";
import ThirdMini from "./MiniComponents/ThirdMini";

function FirstPart() {
  return (
    <div
      className="w-full h-full flex items-center justify-center py-24"
      style={{
        background:
          "linear-gradient(180deg, rgba(180,230,249,1) 0%, rgba(255,255,255,1) 52%, rgba(232,207,231,1) 100%)",
      }}
    >
      <div className="w-5/6 flex flex-col justify-center">
        {" "}
        <FirstMini />
        <SecondMini/>
        <ThirdMini/>
      </div>
    </div>
  );
}

export default FirstPart;

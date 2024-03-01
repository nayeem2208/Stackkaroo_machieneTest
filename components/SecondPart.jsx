import FifthMini from "./MiniComponents/FifthMini"
import FouthMini from "./MiniComponents/Fouth"


function SecondPart() {
  return (
    <div >
      <div>
     <FouthMini/>
     </div>
     <div className="w-full  justify-center "
      style={{
        background:
          "linear-gradient(180deg,rgba(232,207,231,0.2)  0%, rgba(255,255,255,1) 52%, rgba(180,230,249,0.5) 100%)",
      }}>
        <div className="">
        <FifthMini/>
        </div>
     </div>
    </div>
  )
}

export default SecondPart

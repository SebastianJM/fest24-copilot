
import background from './../images/background2.png';
import finish from './../images/finish.png';
import { useNavigate } from "react-router-dom";

function Finish() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", backgroundColor: "#FFC200", }} >
      <img src={background} style={{width: "100vw", height: "100vh", position: "absolute"}} />
      <img src={finish} style={{width: "60vw", height: "auto", position: "absolute", top: '25vh', left: '20vw'}} />
      <button type="button" className='button-base border-base' style={{width: "15vw", fontSize: "30px", position: "absolute", top: "62vh", left: "42vw"}}
        onClick={() => navigate('/')} >
        <span className="button-text">FINALIZAR</span>
        <span className="button-arrow"> → </span>
      </button>
    </div>
  );
}

export default Finish;

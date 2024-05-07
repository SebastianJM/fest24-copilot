import title from './../images/result.png';
import fire from './../images/fire.png';
import { Link, useLocation } from 'react-router-dom';

function Result() {
    const location = useLocation();
    const result = Math.floor(location.state.time / 60);  

  return (  
    <div style={{width: "100vw", height: "100vh", position: "relative", backgroundColor: "#FFC200"}}>
        <div style={{position: "absolute", top: "7vh", left: "45vw", fontFamily: "Garaje0504", fontSize: "3vh", textAlign: "center"}}>!Felicitaciones!</div>
        <div style={{position: "absolute", top: "12vh", left: "42vw", fontFamily: "Garaje0504", fontSize: "6vh", textAlign: "center"}}><b>AHORRASTE<br /> {60-result} MIN</b></div>
        <img src={fire} style={{width: "3vw", height: "6vh", position: "absolute", top: "18vh", left: "60vw"}} />
        <img src={title} style={{width: "40vw", height: "52vh", position: "absolute", top: "27vh", left: "30vw"}} />
        <div style={{position: "absolute", top: "31vh", left: "57vw", fontFamily: "Garaje0504", fontSize: "6vh", textAlign: "center"}}><b>{result} MIN</b></div>
        <div style={{position: "absolute", top: "42vh", left: "71vw", fontFamily: "Garaje0504", fontSize: "6vh", textAlign: "center"}}><b>1H</b></div>
        <Link to="/" style={{width: "14%", position: "absolute", top: "81vh", left: "45vw"}}>
            <button type="button" className='button-base border-base' style={{width: "100%", height: "75px", fontSize: "30px", marginTop: "3vh"}}><b>FINALIZAR</b></button>
        </Link>
    </div> 
  );
}

export default Result;
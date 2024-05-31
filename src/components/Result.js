import title from './../images/result.png';
import fire from './../images/fire.png';
import footer from './../images/footerResult.png';
import { useNavigate, useLocation } from 'react-router-dom';
import challenges from './../utils/Challenges.js'

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = Math.floor(location.state.time / 60);
  const id = location.state.id;

  return (  
    <div style={{width: "100vw", height: "100vh", position: "relative", backgroundColor: "#FFC200"}}>
        <div style={{position: "absolute", top: "7vh", left: "17vw", fontFamily: "Garaje0504", fontSize: "7.5vh", textAlign: "center", fontWeight: 900}}>!EXCELENTE TRABAJO!</div>
        <div style={{position: "absolute", top: "17vh", left: "18vw", fontFamily: "Garaje0703", fontSize: "3.5vh", textAlign: "center", fontWeight: '500', width: '65vw'}}>{challenges[id].resultSubtitleNormal}<b>{challenges[id].resultSubtitleBlack}</b></div>
        
        <div style={{position: "absolute", top: "34vh", left: "38vw", fontFamily: "Garaje0504", fontSize: "5vh", textAlign: "center"}}><b>AHORRASTE<br />{60-result} MIN</b></div>
        <img src={fire} style={{width: "auto", height: "5vh", position: "absolute", top: "39vh", left: "57vw"}} />
        
        <img src={title} style={{width: "auto", height: "22vh", position: "absolute", top: "49vh", left: "26vw"}} />
        <div style={{position: "absolute", top: "52vh", left: "39vw", fontFamily: "Garaje0504", fontSize: "5vh", textAlign: "center"}}><b>{result} MIN</b></div>
        <div style={{position: "absolute", top: "62vh", left: "65vw", fontFamily: "Garaje0504", fontSize: "5vh", textAlign: "center"}}><b>1H</b></div>

        <img src={footer} style={{width: "80vw", height: "auto", position: "absolute", top: "78vh", left: "10vw"}} />
        
        <button type="button" className='button-base border-base' style={{width: "12vw", fontSize: "30px", position: "absolute", top: "82.5vh", left: "60vw"}}
          onClick={() => navigate('/')}><b>NO, GRACIAS</b></button>
        <button type="button" className='button-base border-base' style={{width: "12vw", fontSize: "30px", position: "absolute", top: "82.5vh", left: "74vw"}}
          onClick={() => navigate('/form')}><b>PARTICIPAR</b></button>
    </div> 
  );
}

export default Result;
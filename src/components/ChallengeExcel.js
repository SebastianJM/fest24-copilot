import React, { useState, useRef } from 'react';
import challengeExcel from './../images/challengeExcel.png';
import background from './../images/background.png';
import { Link } from 'react-router-dom';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';

function ChallengeExcel() {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const timerRef = useRef();
  const postResultAPIURL = 'https://c4q2ua62zbi6buqzrosh5xukk40malxy.lambda-url.us-east-1.on.aws/'

  const navigate = useNavigate();

  function validateAnswer() {
    console.log(timerRef.current.getValue());
    setFeedback("Respuesta incorrecta. Vuelve a intentarlo.")
    if(answer == "3721") {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: timerRef.current.getValue()})
      };
      const response = fetch(postResultAPIURL, requestOptions)
      navigate('/result', { state: { time :  timerRef.current.getValue()} });
    }
    
  }
  return (  
    <div style={{width: "100vw", height: "100vh", position: "relative", backgroundColor: "#C757FF"}}>
        <img src={background} style={{width: "48vw", height: "65vh", position: "absolute"}} />
        <img src={challengeExcel} style={{width: "70vw", height: "50vh", position: "absolute", top: "20vh", left: "16vw"}} />
        <Timer ref={timerRef}></Timer>
        <input className="input-base" style={{position: "absolute", top: "75vh", left: "31vw", width: "24vw", fontFamily: "Garaje-0703", fontSize: "30px"}} value={answer} name="answer" onChange={e => setAnswer(e.target.value)}/>
        <p style={{position: "absolute", top: "83vh", left: "31vw", fontSize: "30px", fontWeight: "bold"}}>{feedback}</p>
        <button type="button" className='button-base border-base' style={{width: "14%", position: "absolute", top: "72vh", left: "57vw", height: "75px", fontSize: "30px", marginTop: "3vh"}}
          onClick={validateAnswer}><b>ENVIAR</b></button>       
    </div> 
  );
}

export default ChallengeExcel;

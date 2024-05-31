import React, { useState, useRef } from 'react';
import background from './../images/background.png';
import clock from './../images/clock.png';
import Timer from './Timer';
import { useLocation, useNavigate } from 'react-router-dom';
import challenges from './../utils/Challenges.js'
import Modal from 'react-modal';

function Steps() {
  const timerRef = useRef();
  const postResultAPIURL = 'https://c4q2ua62zbi6buqzrosh5xukk40malxy.lambda-url.us-east-1.on.aws/'

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;

  const [showModal, setShowModal] = useState(false);

  function validateAnswer() {   
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: timerRef.current.getValue()})
    };
    const response = fetch(postResultAPIURL, requestOptions)
    navigate('/result', { state: { id: id, time :  timerRef.current.getValue()} });      
  }

  function displayTutorial() {
    setShowModal(true);
  }

  function hideTutorial() {
    setShowModal(false);
  }

  const modalCustomStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      margin: '0px',
      padding: '0px',
      transform: 'translate(-50%, -50%)',
      fontFamily: "Garaje-0703",
      fontSize: "25px",
      border: "3px solid",
      borderRight: "8px solid",
      borderBottom: "8px solid",
      borderRadis: '10px'
    },
  }

  return (  
    <div style={{width: "100vw", height: "100vh", position: "relative", backgroundColor: "#C757FF"}}>
        <Modal 
            isOpen={showModal}      
            style={modalCustomStyle}
            overlayClassName="Overlay"
            ariaHideApp={false}
            >
            <div className="box-container">
                <div className="box-header">
                    <span style={{ marginLeft: '40px', fontSize: '60px' }}><b>TUTORIAL</b></span>                  
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '30px', alignContent: 'center', alignItems: 'center'}}>
                  <iframe src={challenges[id].tutorialUrl} style={{width:"85%", height:"76%" }}></iframe>
                  <button type="button" className='button-base border-base' style={{width: "14%", marginTop:'40px'}}
                    onClick={() => hideTutorial()}><b>REGRESAR</b></button>   
                </div>                  
            </div>
        </Modal>

        <img src={background} style={{width: "100vw", height: "100vh", position: "absolute"}} />
        <img src={challenges[id].steps} style={{width: "70vw", height: "auto", position: "absolute", top: "19vh", left: "16vw"}} />
        <img src={clock} style={{width: "105px", height: "auto", position: "absolute", top: "9vh", left: "43vw"}} />
        <Timer stopTimer={showModal} ref={timerRef}></Timer>
        <div style={{ width: "70vw", height: "16vh", position: "absolute", top: challenges[id].stepsButtonTutorialTop, left: "16vw" }} onClick={() => displayTutorial()}></div>
        <button type="button" className='button-base border-base' style={{width: "18vw", position: "absolute", top: "86vh", left: "42vw", marginTop: "3vh"}}
          onClick={validateAnswer}><b>HE TERMINADO</b></button>
    </div> 
  );
}

export default Steps;

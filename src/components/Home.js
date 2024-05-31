import background from './../images/background.png';
import openai from './../images/openai.png';
import title from './../images/title.png';
import './../styles/Home.css';
import { useNavigate } from "react-router-dom";
import { Fragment } from 'react';

function Home() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div style={{width: "100vw", height: "90vh", position: "relative", backgroundColor: "#C757FF"}}>
        <img src={background} style={{width: "100vw", height: "100vh", position: "absolute"}} />  
        <div style={{display: "flex", width: "100vw", height: "100vh", alignContent: "center", alignItems: "center", flexDirection: "column", position: "relative"}}>       
          <img src={title} style={{width: "auto", height: "50vh", marginTop: "13vh"}} />
          <button type="button" className='button-base border-base' style={{width: "18vw", fontSize: "40px", position: "absolute", top: "68vh", left: "41vw", height: '120px'}}
            onClick={() => navigate('/choose')} >
            <span className="button-text">COMENZAR</span>
            <span className="button-arrow"> → </span>
          </button>
        </div>
      </div>
      <div style={{width: "100vw", height: "10vh", position: "relative", backgroundColor: "#8EEE00", display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
        <img src={openai} style={{width: "auto", height: "50%"}} /> 
      </div>
    </Fragment>
  );
}

export default Home;

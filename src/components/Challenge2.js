import title3 from './../images/title4.png';
import background from './../images/background.png';
import { Link } from 'react-router-dom';

function Challenge2() {
  return (  
    <div style={{width: "100vw", height: "100vh", position: "relative", backgroundColor: "#C757FF"}}>
        <img src={background} style={{width: "48vw", height: "65vh", position: "absolute"}} />
        <img src={title3} style={{width: "81vw", height: "78vh", position: "absolute", top: "10vh"}} />
        <Link to="/challengePowerPoint" style={{width: "14%", position: "absolute", top: "63vh", left: "58vw"}}>
            <button type="button" className='button-base border-base' style={{width: "100%", height: "75px", fontSize: "30px", marginTop: "3vh"}}><b>COMENZAR</b></button>
        </Link>
    </div> 
  );
}

export default Challenge2;

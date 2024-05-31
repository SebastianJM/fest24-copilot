import background from './../images/background.png';
import challenges from './../utils/Challenges.js'
import { useLocation, useNavigate } from 'react-router-dom';

function Challenge() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;

  function nextPage() {
    navigate('/steps', { state: { id : id } });
  }
  return (  
    <div style={{width: "100vw", height: "100vh", position: "relative", backgroundColor: "#C757FF"}}>
        <img src={background} style={{width: "100vw", height: "100vh", position: "absolute"}} />
        <img src={challenges[id].title} style={{width: "95vw", height: "auto", position: "absolute", top: "10vh"}} />
        
        <button type="button" className='button-base border-base' style={{width: "18vw", top: challenges[id].challengePageButtonTop, left: '50vw'}} onClick={() => nextPage()}>
          <span className="button-text">COMENZAR</span>
          <span className="button-arrow"> → </span>
        </button>
        
    </div> 
  );
}

export default Challenge;

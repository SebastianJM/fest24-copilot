import title from './../images/title2.png';
import challenge1 from './../images/challenge1.png';
import challenge2 from './../images/challenge2.png';
import challenge3 from './../images/challenge3.png';
import './../styles/Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (  
        <div style={{width: "100vw", height: "100vh", position: "relative", backgroundColor: "#FFC200"}}>
            <img src={title} style={{width: "22vw", height: "17vh", position: "absolute", top: "13vh", left: "18vw"}} />
            <img src={challenge1} style={{width: "44vw", height: "18vh", position: "absolute", top: "25vh", left: "37vw"}} onClick={() => navigate('/challenge1')}/>
            <img src={challenge2} style={{width: "44vw", height: "18vh", position: "absolute", top: "45vh", left: "29vw"}} onClick={() => navigate('/challenge2')}/>
            <img src={challenge3} style={{width: "44vw", height: "18vh", position: "absolute", top: "65vh", left: "21vw"}} onClick={() => navigate('/challenge3')}/>
        </div> 
    );
}

export default Home;

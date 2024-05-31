import title from './../images/title2.png';
import challenges from './../utils/Challenges.js'
import './../styles/Home.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    function nextPage(id) {
        navigate('/challenge', { state: { id : id } });
    }

    return (  
        <div style={{width: "100vw", height: "100vh", position: "relative", backgroundColor: "#FFC200"}}>
            <img src={title} style={{width: "50vw", height: "auto", position: "absolute", top: "10vh", left: "25vw"}} />
            <img src={challenges[0].banner} style={{width: "42vw", height: "auto", position: "absolute", top: "30vh", left: "6vw"}} onClick={() => nextPage(0)}/>
            <img src={challenges[1].banner} style={{width: "42vw", height: "auto", position: "absolute", top: "30vh", left: "53vw"}} onClick={() => nextPage(1)}/>
            <img src={challenges[2].banner} style={{width: "42vw", height: "auto", position: "absolute", top: "50vh", left: "6vw"}} onClick={() => nextPage(2)}/>
            <img src={challenges[3].banner} style={{width: "42vw", height: "auto", position: "absolute", top: "50vh", left: "53vw"}} onClick={() => nextPage(3)}/>
            <img src={challenges[4].banner} style={{width: "42vw", height: "auto", position: "absolute", top: "70vh", left: "6vw"}} onClick={() => nextPage(4)}/>
            <img src={challenges[5].banner} style={{width: "42vw", height: "auto", position: "absolute", top: "70vh", left: "53vw"}} onClick={() => nextPage(5)}/>
        </div> 
    );
}

export default Home;

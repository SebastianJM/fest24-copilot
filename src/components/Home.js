import background from './../images/background.png';
import logo from './../images/logo.png';
import title from './../images/title.png';
import './../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (  
    <div style={{width: "100vw", height: "100vh", position: "relative", backgroundColor: "#C757FF"}}>
        <img src={background} style={{width: "48vw", height: "65vh", position: "absolute"}} />
        <div style={{display: "flex", width: "100vw", height: "100vh", alignContent: "center", alignItems: "center", flexDirection: "column", position: "relative"}}>       
            <img src={logo} style={{width: "13%", height: "auto", marginTop: "13vh"}} />
            <img src={title} style={{width: "29%", height: "auto", marginTop: "4vh"}} />
            <p style={{fontSize: "34px", textAlign: "center", fontWeight: "bold", marginTop: "4vh", width: "40%"}}>Un compañero inteligente que te acompaña durante tus tareas diarias para ahorrarte tiempo haciéndote más productivo.</p>
            <Link to="/choose" style={{width: "15%"}}>
                <button type="button" className='button-base border-base' style={{width: "100%", height: "60px", fontSize: "30px", marginTop: "3vh"}}><b>COMENZAR</b></button>
            </Link>
        </div>
    </div> 
  );
}

export default Home;

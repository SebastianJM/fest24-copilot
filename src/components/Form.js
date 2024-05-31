import React, { useState } from 'react';
import terms from './../images/terms.png';
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function finishForm() {
    navigate('/finish')
  }
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", backgroundColor: "#C757FF", }} >
      <div style={{ display: "flex", flexDirection: "column", width: "50vw", position: 'absolute', top:'24vh', left: '25vw', fontSize: '40px' }}>
        <label style={{ marginBottom: "1vh" }}>
          <b>TU NOMBRE</b>
        </label>
        <textarea
          className="input-base"
          rows={1}
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", paddingTop: "20px", paddingLeft: "20px", fontSize: '40px' }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "50vw", position: 'absolute', top:'39vh', left: '25vw', fontSize: '40px' }}>
        <label style={{ marginBottom: "1vh" }}>
          <b>CORREO</b>
        </label>
        <textarea
          className="input-base"
          rows={1}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", paddingTop: "20px", paddingLeft: "20px", fontSize: '40px' }}
        />
      </div>

      <button type="button" className='button-base border-base' style={{width: "15vw", fontSize: "30px", position: "absolute", top: "56vh", left: "43vw"}}
        onClick={finishForm} >
        <span className="button-text">ENVIAR</span>
        <span className="button-arrow"> → </span>
      </button>

      <img src={terms} style={{width: "50vw", height: "auto", position: "absolute", top: "70vh", left: "25vw"}} />
    </div>
  );
}

export default Form;

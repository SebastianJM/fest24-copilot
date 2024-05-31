import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Choose from './components/Choose';
import './App.css';
import Challenge from './components/Challenge';
import Result from './components/Result';
import Steps from './components/Steps';
import Form from './components/Form';
import Finish from './components/Finish';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/result" element={<Result />} />
          <Route path="/form" element={<Form />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Choose from './components/Choose';
import './App.css';
import Challenge1 from './components/Challenge1';
import Challenge2 from './components/Challenge2';
import Challenge3 from './components/Challenge3';
import ChallengeExcel from './components/ChallengeExcel';
import ChallengePowerPoint from './components/ChallengePowerPoint';
import ChallengeWord from './components/ChallengeWord';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/challenge1" element={<Challenge1 />} />
          <Route path="/challenge2" element={<Challenge2 />} />
          <Route path="/challenge3" element={<Challenge3 />} />
          <Route path="/challengeExcel" element={<ChallengeExcel />} />
          <Route path="/challengePowerPoint" element={<ChallengePowerPoint />} />
          <Route path="/challengeWord" element={<ChallengeWord />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

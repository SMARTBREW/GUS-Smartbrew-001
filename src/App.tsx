import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import StoriesPage from './pages/Stories';
import TeamPage from './pages/Team';
import ProgramsPage from './pages/Programs';
import InternshipPage from './pages/Internship';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/internship" element={<InternshipPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
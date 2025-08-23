import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import StoriesPage from './pages/Stories';
import TeamPage from './pages/Team';
import ProgramsPage from './pages/Programs';
import InternshipPage from './pages/Internship';
import VisionPage from './pages/Vision';
import LeadershipPage from './pages/Leadership';
import PartnersPage from './pages/Partners';
import RecognitionPage from './pages/Recognition';
import VidyaPage from './pages/Vidya';
import PragatiPage from './pages/Pragati';
import InfoDeskPage from './pages/InfoDesk';
import ContactPage from './pages/Contact';
import PartnershipsPage from './pages/Partnerships';
import ReportsPage from './pages/Reports';
import ResearchPage from './pages/Research';
import PoliciesPage from './pages/Policies';
import EmergencyAppealPage from './pages/EmergencyAppeal';

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
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/recognition" element={<RecognitionPage />} />
          <Route path="/vidya" element={<VidyaPage />} />
          <Route path="/pragati" element={<PragatiPage />} />
          <Route path="/info-desk" element={<InfoDeskPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/emergency-appeal" element={<EmergencyAppealPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
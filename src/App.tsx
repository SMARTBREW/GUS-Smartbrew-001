import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import StoriesPage from './pages/Stories';
import TeamPage from './pages/Team';
import EducationPage from './pages/Education';
import HealthPage from './pages/Health';
import GalleryPage from './pages/Gallery';
import VisionPage from './pages/Vision';
import ReportsPage from './pages/Reports';
import EmergencyAppealPage from './pages/EmergencyAppeal';
import ContactPage from './pages/Contact';
import DonatePage from './pages/Donate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import RefundPolicy from './pages/RefundPolicy';
import CertificatesPage from './pages/Certificates';
import MediaPage from './pages/Media';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTopButton from './components/ScrollToTopButton';
import LocomotiveProvider from './components/LocomotiveProvider';

function App() {
  return (
    <Router>
      <LocomotiveProvider>
        <div className="App">
          <ScrollProgress />
          <ScrollToTop />
          <ScrollToTopButton />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/emergency-appeal" element={<EmergencyAppealPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
        </div>
      </LocomotiveProvider>
    </Router>
  );
}

export default App;
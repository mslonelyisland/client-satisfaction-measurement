import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./global/NavBar";
import LandingPage from './components/Landingpage';
import OfficeSurvey from './components/OfficeSurvey';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/clientsurvey" element={<LandingPage />} />
        <Route path="/office/:officeId" element={<OfficeSurvey />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./global/NavBar";
import LandingPage from './components/Landingpage';
import OfficeSurvey from './components/OfficeSurvey';
function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/clientsurvey" element={<LandingPage />} />
        <Route path="/office/:officeId" element={<OfficeSurvey />} />
      </Routes>
    </Router>
  );
}

export default App;

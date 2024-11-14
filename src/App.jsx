import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import HowItWorks from './Components/Howitworks';
import Services from './Components/services';
import Footer from './Components/Footer';
import PortfolioSections from './Components/PortfolioSections';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'; // Import PrivacyPolicy Page
import LogoSlider from './Components/logoSlider.jsx';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <LogoSlider/>
      <HowItWorks />
      <PortfolioSections />
      <Footer />

      {/* Define routes here */}
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;

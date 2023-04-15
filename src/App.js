import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Loadingpage from './pages/Loadingpage';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Prices from './pages/Prices';
import About from './pages/About';
import Values from './pages/Values';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ScrollToTop from './helpers/ScrollToTop';
import Ziropa from './pages/Ziropa';
import MemphisMansion from './pages/MemphisMansion';
import OutdoorGames from './pages/OutdoorGames';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div className="App">
      {
        loading ?

          <Loadingpage />

          :

          <BrowserRouter basename={'/levels'}>
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/ydelser" element={<Services />}></Route>
              <Route path="/cases" element={<Cases />}></Route>
              <Route path="/priser" element={<Prices />}></Route>
              <Route path="/om-os" element={<About />}></Route>
              <Route path="/vaerdier" element={<Values />}></Route>
              <Route path="/cases/ziropa" element={<Ziropa />}></Route>
              <Route path="/cases/memphis-mansion" element={<MemphisMansion />}></Route>
              <Route path="/cases/outdoor-games" element={<OutdoorGames />}></Route>
            </Routes>
            <ContactForm />
            <Footer />
          </BrowserRouter>
      }
    </div>
  );
}

export default App;

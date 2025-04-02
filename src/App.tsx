// src/App.tsx

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/globalStyles';
import { Header } from './components/common/Header';
import { Services } from './pages/Services';
import { About } from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/common/Footer';
import { Hero } from './components/common/Hero';

function App() {
  return (
    <Router basename="/site-fluxomize">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
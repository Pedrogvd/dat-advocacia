import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header.jsx';
import MainSection from './components/MainSection/MainSection.jsx';
import Footer from './components/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <MainSection />
      <Footer />
  </StrictMode>
);

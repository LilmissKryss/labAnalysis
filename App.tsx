import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const PatientPrep = lazy(() => import('./pages/PatientPrep'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Booking = lazy(() => import('./pages/Booking'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen gradient-bg">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex flex-col items-center justify-center h-screen text-teal-600 bg-white">
              <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-bold tracking-widest uppercase text-xs">Lab Analysis Loading...</p>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/prep" element={<PatientPrep />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Prep', path: '/prep' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-teal-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-navy-800 tracking-tight flex flex-col leading-none">
              <span className="text-blue-900 font-serif">Lab Analysis</span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-semibold text-teal-600">Mobile Phlebotomy</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-teal-600 ${location.pathname === link.path ? 'text-teal-600' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-teal-600 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-teal-700 transition-all transform hover:scale-105 teal-glow shadow-lg shadow-teal-100"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-3xl font-bold text-blue-900 border-b border-slate-100 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-teal-600 text-white px-6 py-5 rounded-2xl text-center text-xl font-bold mt-4 shadow-xl shadow-teal-100"
          >
            Book an Appointment
          </Link>
          <div className="flex-grow"></div>
          <div className="pb-12 text-center text-slate-400 text-sm">
            <p>Certified • Insured • Professional</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
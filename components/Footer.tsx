import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, ShieldCheck, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-8">
              <div className="bg-teal-600 p-1.5 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight font-serif">Lab Analysis</span>
            </Link>
            <p className="text-slate-400 mb-10 leading-relaxed font-medium">
              Bringing clinical excellence to your doorstep. Mobile phlebotomy for individuals, families, and facilities.
            </p>
            <div className="flex gap-5">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-teal-400">Services</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link to="/services" className="hover:text-white transition-colors">Individuals</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Facilities</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">The Process</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-teal-400">Support</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link to="/prep" className="hover:text-white transition-colors">Patient Prep</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                 <ShieldCheck className="text-teal-400 w-6 h-6" />
                 <h4 className="font-bold">HIPAA Secure</h4>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                Medical data is handled exclusively via SimplePractice's SOC2 Type II and HIPAA-compliant portal. Your privacy is our priority.
              </p>
              <div className="mt-6 flex gap-4 grayscale opacity-40">
                <img src="https://simplepractice.com/wp-content/uploads/2021/05/SimplePractice_Logo_FullColor.png" alt="SimplePractice" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Square_Inc._logo.svg/1024px-Square_Inc._logo.svg.png" alt="Square" className="h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate-500 font-bold uppercase tracking-widest">
           <p>© 2024 Lab Analysis Mobile. Certified & Licensed.</p>
           <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
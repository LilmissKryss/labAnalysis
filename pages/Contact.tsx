import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[60px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          {/* Info Panel */}
          <div className="lg:w-1/3 bg-blue-900 p-12 lg:p-20 text-white flex flex-col">
            <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
            <p className="text-blue-200 mb-12 text-lg font-medium opacity-80">For facility partnerships, corporate events, or general inquiries.</p>
            
            <div className="space-y-10 flex-grow">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="text-teal-400 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-teal-400 mb-1">Email</p>
                  <p className="text-xl font-bold">hello@labanalysis.com</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-teal-400 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-teal-400 mb-1">Call/Text</p>
                  <p className="text-xl font-bold">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-teal-400 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-teal-400 mb-1">Service Area</p>
                  <p className="text-xl font-bold">Metro & Suburbs</p>
                </div>
              </div>
            </div>

            <div className="mt-20 flex gap-6">
               <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"><Instagram /></a>
               <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"><Linkedin /></a>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:w-2/3 p-12 lg:p-24">
            <div className="mb-12 p-6 bg-teal-50 rounded-3xl border border-teal-100 text-teal-800 text-sm font-medium">
               <strong>Patient Notice:</strong> Please do not send medical records or PHI through this form. All medical data is collected via our secure HIPAA-compliant portal during booking.
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-3 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-teal-600 transition-all outline-none text-blue-900 font-medium" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-3 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-teal-600 transition-all outline-none text-blue-900 font-medium" placeholder="jane@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-blue-900 mb-3 uppercase tracking-wider">Inquiry Type</label>
                <select className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-teal-600 transition-all outline-none text-blue-900 font-medium">
                  <option>General Question</option>
                  <option>Facility Partnership</option>
                  <option>Corporate Wellness Event</option>
                  <option>Media Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-blue-900 mb-3 uppercase tracking-wider">Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-teal-600 transition-all outline-none text-blue-900 font-medium" placeholder="How can we help?"></textarea>
              </div>
              <button className="bg-teal-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-teal-700 transition-all shadow-xl shadow-teal-50 flex items-center justify-center gap-3">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
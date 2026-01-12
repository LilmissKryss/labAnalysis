import React from 'react';
import { Check, Info, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600">Professional mobile service with no hidden administrative fees.</p>
        </header>

        <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden border border-slate-100 mb-16">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-slate-50 border-r border-slate-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Service Rates</h2>
              <div className="space-y-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-slate-400">$</span>
                  <span className="text-7xl font-bold text-blue-900">75</span>
                  <span className="text-xl text-slate-400">/ Mobile Visit</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Covers the travel fee and professional collection of up to 4 vials within our primary service area.
                </p>
                
                <div className="pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-blue-900 mb-4 uppercase tracking-widest text-xs">Add-ons</h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between font-bold text-blue-900">
                      <span>Extra Vials (per 2)</span>
                      <span>$10</span>
                    </li>
                    <li className="flex justify-between font-bold text-blue-900">
                      <span>Specialty Lab Kit Processing</span>
                      <span>$25</span>
                    </li>
                    <li className="flex justify-between font-bold text-blue-900">
                      <span>Extended Travel Radius</span>
                      <span>$15+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <div className="bg-teal-50 rounded-3xl p-8 mb-10 border border-teal-100">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="text-teal-600" />
                  <h3 className="text-xl font-bold text-blue-900">50% Deposit</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  A 50% deposit is required at the time of booking via our secure SimplePractice portal. This ensures your slot is reserved and our phlebotomist is scheduled for your visit.
                </p>
                <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                  <Check className="w-4 h-4" /> Secure Square Integration
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex gap-4">
                  <Info className="text-blue-900 shrink-0 mt-1" />
                  <p className="text-sm text-slate-500 italic">
                    Note: We do not bill insurance directly for the mobile collection fee. However, the processing lab will bill your insurance for the actual tests.
                  </p>
                </div>
              </div>

              <Link to="/booking" className="w-full bg-blue-900 text-white text-center py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-xl shadow-blue-100">
                Book with Deposit
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-teal-900 text-white p-12 rounded-[40px]">
            <h3 className="text-2xl font-bold mb-4">Facility Partnerships</h3>
            <p className="text-teal-100 mb-8 opacity-80 leading-relaxed">We offer volume-based discounts for medical facilities, nursing homes, and corporate wellness events. Contact us for a custom quote.</p>
            <Link to="/contact" className="text-teal-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Request Facility Quote <Check className="w-5 h-5" />
            </Link>
          </div>
          <div className="bg-white p-12 rounded-[40px] border border-slate-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Insurance Info</h3>
            <p className="text-slate-500 mb-0 leading-relaxed">While the mobile fee is out-of-pocket, we provide you with a detailed receipt that you may submit to your HSA or insurance for potential reimbursement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
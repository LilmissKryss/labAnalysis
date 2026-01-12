import React from 'react';
import { ShieldCheck, Calendar, Lock, ExternalLink, ArrowRight, CreditCard } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            {/* Context/Trust Side */}
            <div className="lg:w-2/5 bg-slate-50 p-12 lg:p-20 border-r border-slate-100">
              <h1 className="text-4xl font-bold text-blue-900 mb-8">Secure Your Visit</h1>
              <p className="text-slate-600 mb-12 leading-relaxed">
                For your security and privacy, we use <strong>SimplePractice</strong> to manage all scheduling and medical data. This platform is SOC2 Type II and HIPAA-compliant.
              </p>

              <div className="space-y-10">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Calendar className="text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Live Calendar</h4>
                    <p className="text-sm text-slate-500">Pick the exact slot that works for your schedule.</p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Lock className="text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Encrypted Intake</h4>
                    <p className="text-sm text-slate-500">Complete all HIPAA forms securely before we arrive.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <CreditCard className="text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Square Payment</h4>
                    <p className="text-sm text-slate-500">Securely pay your 50% deposit via integrated Square processing.</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-6 bg-blue-900 rounded-3xl text-white">
                <p className="text-sm font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" /> HIPAA Verified Service
                </p>
              </div>
            </div>

            {/* Action Side */}
            <div className="lg:w-3/5 p-12 lg:p-24 flex flex-col items-center justify-center text-center">
              <div className="mb-12">
                <div className="w-24 h-24 bg-teal-50 rounded-[35px] flex items-center justify-center mb-8 mx-auto">
                  <ShieldCheck className="w-12 h-12 text-teal-600" />
                </div>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Patient Portal</h2>
                <p className="text-slate-500 max-w-sm mx-auto text-lg leading-relaxed">
                  You are about to be redirected to our secure SimplePractice portal to complete your booking.
                </p>
              </div>

              <a 
                href="https://lab-analysis-mobile.clientsecure.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full max-w-md bg-teal-600 text-white px-10 py-7 rounded-3xl text-2xl font-bold hover:bg-teal-700 transition-all shadow-2xl flex items-center justify-center gap-4 hover:scale-105"
              >
                Go to Secure Portal
                <ExternalLink className="w-6 h-6 opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="mt-16 pt-8 border-t border-slate-100 w-full">
                <div className="flex justify-center gap-12 opacity-30 grayscale grayscale-100">
                  <img src="https://simplepractice.com/wp-content/uploads/2021/05/SimplePractice_Logo_FullColor.png" alt="SimplePractice" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Square_Inc._logo.svg/1024px-Square_Inc._logo.svg.png" alt="Square" className="h-6" />
                </div>
                <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  100% SECURE & HIPAA COMPLIANT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
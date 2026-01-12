import React from 'react';
import { Calendar, Droplets, CheckCircle, Ship, Mail, Phone, MessageSquare } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="text-center mb-24">
          <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6">How It Works</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">From the moment you book to the delivery of your samples, we maintain the highest clinical standards.</p>
        </header>

        <div className="space-y-32">
          {/* Detailed Steps */}
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              {
                title: '01. Booking',
                desc: 'Schedule your visit through our secure portal. A 50% deposit via Square secures your spot. You will receive an instant confirmation email with your preparation instructions.',
                icon: <Calendar className="w-8 h-8" />
              },
              {
                title: '02. The Draw',
                desc: 'Our certified phlebotomist arrives at your location. We use hospital-grade equipment and follow strict aseptic techniques to ensure a painless and safe collection.',
                icon: <Droplets className="w-8 h-8" />
              },
              {
                title: '03. Results',
                desc: 'Samples are professionally labeled and delivered to your specified lab. Results are transmitted directly from the laboratory to your ordering physician as usual.',
                icon: <CheckCircle className="w-8 h-8" />
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-8">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Facility Partners Section */}
          <div className="bg-blue-900 rounded-[60px] p-12 lg:p-24 text-white relative overflow-hidden">
             <div className="relative z-10 grid lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="text-4xl font-bold mb-8">For Medical Facilities</h2>
                  <p className="text-blue-100 text-lg mb-10 opacity-90 leading-relaxed">We integrate seamlessly with nursing homes, assisted living facilities, and private clinics to handle their phlebotomy needs.</p>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <CheckCircle className="text-teal-400 shrink-0" />
                      <span>Dedicated recurring schedules (e.g., Tuesday/Thursday rounds).</span>
                    </li>
                    <li className="flex gap-4">
                      <CheckCircle className="text-teal-400 shrink-0" />
                      <span>HIPAA-compliant batch requisition processing.</span>
                    </li>
                    <li className="flex gap-4">
                      <CheckCircle className="text-teal-400 shrink-0" />
                      <span>Square invoicing for easy administrative tracking.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-10 border border-white/20">
                   <h3 className="text-2xl font-bold mb-6 text-teal-400">Sample Handling</h3>
                   <p className="text-sm text-blue-100 mb-8 opacity-80 leading-relaxed">Sample integrity is our highest priority. We follow strict protocols for centrifugation, cooling, and urgent delivery to maintain accuracy.</p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-2xl text-xs font-bold uppercase tracking-widest text-center">Temp Controlled</div>
                      <div className="p-4 bg-white/5 rounded-2xl text-xs font-bold uppercase tracking-widest text-center">Digital Logging</div>
                      <div className="p-4 bg-white/5 rounded-2xl text-xs font-bold uppercase tracking-widest text-center">Biohazard Safe</div>
                      <div className="p-4 bg-white/5 rounded-2xl text-xs font-bold uppercase tracking-widest text-center">Licensed Ops</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
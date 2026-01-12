import React from 'react';
import { Droplets, Coffee, FileText, Shirt, CheckCircle } from 'lucide-react';

const PatientPrep: React.FC = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Patient Preparation</h1>
          <p className="text-xl text-slate-600 font-medium">Follow these steps to ensure a comfortable and efficient collection.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {[
            {
              title: 'Hydrate Well',
              desc: 'Drink plenty of water starting 24 hours before your draw. Hydrated veins are easier to access.',
              icon: <Droplets className="w-8 h-8 text-blue-600" />,
              color: 'bg-blue-50'
            },
            {
              title: 'Check Fasting',
              desc: 'Confirm if your test requires fasting (usually 8-12 hours). No food or drink except water.',
              icon: <Coffee className="w-8 h-8 text-amber-600" />,
              color: 'bg-amber-50'
            },
            {
              title: 'Paperwork Ready',
              desc: 'Have your lab requisition and ID ready for our phlebotomist to verify.',
              icon: <FileText className="w-8 h-8 text-teal-600" />,
              color: 'bg-teal-50'
            },
            {
              title: 'Dress for Access',
              desc: 'Wear loose-fitting clothing with sleeves that can be easily rolled above the elbow.',
              icon: <Shirt className="w-8 h-8 text-purple-600" />,
              color: 'bg-purple-50'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center mb-8`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-[60px] p-12 lg:p-20 text-white">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                 <CheckCircle className="text-teal-400" /> Appointment Day Checklist
              </h2>
              <div className="grid gap-6">
                 {[
                   'Confirm your home entry instructions/gate codes via portal.',
                   'Ensure pets are in a separate room for safety.',
                   'If you have a history of fainting, let our phlebotomist know immediately.',
                   'Have a small snack ready for after your draw if you were fasting.'
                 ].map((text, i) => (
                   <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                      <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 font-bold text-xs">{i+1}</div>
                      <p className="text-blue-100 font-medium">{text}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPrep;
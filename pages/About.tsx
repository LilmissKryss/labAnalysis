import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-blue-900 mb-8 leading-tight">Professional care with a <span className="text-teal-600">gentle touch.</span></h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Founded on the belief that healthcare should be convenient without sacrificing clinical precision. Lab Analysis brings years of high-volume clinical experience to the comfort of your home.
            </p>
            <div className="space-y-6 mb-10">
              <p className="text-slate-500 leading-relaxed">
                Our lead phlebotomist is ASCP certified with over 15 years of experience across level-one trauma centers, pediatric units, and private clinical research. We understand the anxieties associated with blood work and prioritize a calm, efficient, and virtually painless experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
               <div className="flex items-center gap-3">
                  <Award className="text-teal-600" />
                  <span className="font-bold text-blue-900">ASCP Certified</span>
               </div>
               <div className="flex items-center gap-3">
                  <ShieldCheck className="text-teal-600" />
                  <span className="font-bold text-blue-900">Fully Insured</span>
               </div>
               <div className="flex items-center gap-3">
                  <Heart className="text-teal-600" />
                  <span className="font-bold text-blue-900">Patient-First Care</span>
               </div>
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10">
                 <img src="https://images.unsplash.com/photo-1559839734-2b71f15360ee?auto=format&fit=crop&q=80&w=800" alt="Lead Phlebotomist" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-50 rounded-full blur-[100px] -z-10" />
              <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 max-w-[240px]">
                 <div className="flex gap-1 text-teal-600 mb-3">
                    {"★★★★★".split("").map((s,i) => <span key={i}>{s}</span>)}
                 </div>
                 <p className="text-sm font-medium text-slate-600 italic">"The only person I trust with my difficult veins. Always professional and kind."</p>
                 <p className="mt-4 font-bold text-blue-900 text-xs uppercase tracking-widest">— Emily R., Patient</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-[60px] p-12 lg:p-24 shadow-xl border border-slate-50">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
           </div>
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: 'Reliability', desc: 'Punctuality and clinical precision in every visit. We respect your time and your health.', icon: <ShieldCheck className="w-10 h-10 text-teal-600" /> },
                { title: 'Compassion', desc: 'Treating every patient with dignity and care, especially those with laboratory anxiety.', icon: <Heart className="w-10 h-10 text-teal-600" /> },
                { title: 'Professionalism', desc: 'Strict adherence to HIPAA, clinical safety, and sample integrity protocols.', icon: <Users className="w-10 h-10 text-teal-600" /> },
              ].map((val, i) => (
                <div key={i} className="text-center group">
                   <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                      {val.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-blue-900 mb-4">{val.title}</h3>
                   <p className="text-slate-600 leading-relaxed font-medium">{val.desc}</p>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;
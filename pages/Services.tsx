import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Microscope, Stethoscope, Droplets, Heart } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6">Mobile Collection Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Whether for private individuals or medical facilities, we bring professional phlebotomy directly to the point of care.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Individual Care */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[50px] p-12 shadow-xl border border-slate-50 flex flex-col"
          >
            <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center mb-10">
              <User className="w-10 h-10 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">For Individuals & Families</h2>
            <p className="text-slate-600 mb-10 leading-relaxed font-medium">Professional collection for those who value privacy, convenience, or have mobility challenges.</p>
            
            <ul className="space-y-6 flex-grow">
              {[
                { name: 'Routine Lab Work', desc: 'Standard blood panels ordered by your PCP or specialist.', icon: <Microscope className="w-5 h-5 text-teal-600" /> },
                { name: 'Pediatric Draws', desc: 'Gentle, unhurried care for children in a familiar environment.', icon: <Heart className="w-5 h-5 text-teal-600" /> },
                { name: 'Specialty Kits', desc: 'Collection for functional medicine or private lab kits.', icon: <Droplets className="w-5 h-5 text-teal-600" /> },
                { name: 'Homebound Services', desc: 'Critical support for elderly or disabled patients.', icon: <Stethoscope className="w-5 h-5 text-teal-600" /> },
              ].map((s, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="shrink-0">{s.icon}</div>
                  <div>
                    <p className="font-bold text-blue-900">{s.name}</p>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Facility Support */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-900 rounded-[50px] p-12 shadow-xl text-white flex flex-col"
          >
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-10">
              <Building2 className="w-10 h-10 text-teal-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6">For Medical Facilities</h2>
            <p className="text-blue-100 mb-10 leading-relaxed font-medium">Scale your facility's diagnostic capabilities with our professional mobile team.</p>
            
            <ul className="space-y-6 flex-grow">
              {[
                { name: 'Long-Term Care (LTC)', desc: 'Regular rounds for assisted living and nursing facilities.', icon: <Building2 className="w-5 h-5 text-teal-400" /> },
                { name: 'Corporate Wellness', desc: 'On-site biometric screening and health events.', icon: <Stethoscope className="w-5 h-5 text-teal-400" /> },
                { name: 'Clinic Support', desc: 'Supplemental staffing for private practices during high volume.', icon: <User className="w-5 h-5 text-teal-400" /> },
                { name: 'Clinical Trials', desc: 'Standardized sample collection for research organizations.', icon: <Microscope className="w-5 h-5 text-teal-400" /> },
              ].map((s, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="shrink-0">{s.icon}</div>
                  <div>
                    <p className="font-bold text-teal-300">{s.name}</p>
                    <p className="text-sm text-blue-100/70">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Clinical Note */}
        <div className="bg-slate-50 rounded-[40px] p-12 border border-slate-100 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Laboratory Integration</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-0">We deliver to all major laboratory networks including Quest Diagnostics, LabCorp, and specialty functional medicine labs. Sample integrity is maintained via strict temperature-controlled transport protocols.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
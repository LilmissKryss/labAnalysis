import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Clock, Users, MapPin } from 'lucide-react';
import Hero3D from '../components/Hero3D';

const Home: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center pt-20 lg:pt-0">
        <div className="container mx-auto px-6 lg:px-12 z-10 flex flex-col justify-center lg:w-1/2 h-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              Mobile Phlebotomy Excellence
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-blue-900 leading-[1.05] mb-8">
              Clinical Care <br />
              <span className="text-teal-600 italic">Where You Are.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium">
              Lab Analysis brings hospital-grade blood collection to your doorstep. Professional, painless, and perfectly convenient.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/booking"
                className="bg-blue-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-800 transition-all shadow-2xl hover:shadow-blue-200 flex items-center justify-center gap-3 group"
              >
                Book Appointment
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/how-it-works"
                className="bg-white text-blue-900 border border-slate-200 px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                Learn Process
              </Link>
            </div>
            
            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="User" />
                ))}
              </div>
              <div>
                <p className="text-blue-900 font-bold">500+ Patients Served</p>
                <div className="flex gap-1 text-teal-600">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full h-[500px] lg:h-screen lg:absolute lg:right-0 lg:top-0">
          <Hero3D />
        </div>
      </section>

      {/* How It Works (Visual) */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Simple 3-Step Process</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-16 relative"
          >
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/3 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-100 -z-0" />
            
            {[
              { title: 'Secure Booking', desc: 'Pick your time and complete intake forms on our HIPAA-compliant portal.', icon: '01' },
              { title: 'Clinical Visit', desc: 'Our certified phlebotomist arrives at your home with hospital-grade equipment.', icon: '02' },
              { title: 'Lab Delivery', desc: 'We deliver your samples to the lab and results are sent to your doctor.', icon: '03' },
            ].map((step, idx) => (
              <motion.div key={idx} variants={item} className="flex flex-col items-center text-center group relative z-10">
                <div className="w-24 h-24 rounded-[30px] bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-4xl mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-teal-50">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 max-w-xs font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Features */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" className="w-full h-[600px] object-cover" alt="Medical Professional" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-600 rounded-[40px] p-10 text-white z-20 shadow-2xl hidden md:block">
                <CheckCircle className="w-12 h-12 mb-6" />
                <p className="text-2xl font-serif italic mb-2">100%</p>
                <p className="text-sm uppercase tracking-widest font-bold opacity-80">HIPAA Compliant</p>
              </div>
              {/* Organic Shape Decoration */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-teal-100 rounded-full blur-[80px] -z-10" />
            </motion.div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-10 leading-tight">Professionalism without the <span className="text-teal-600">Waiting Room.</span></h2>
              <div className="space-y-10">
                {[
                  { title: 'Certified Experts', desc: 'Our phlebotomists are ASCP certified with over 15 years of clinical experience.', icon: <Users className="text-teal-600 w-8 h-8" /> },
                  { title: 'Secure Handling', desc: 'From secure intake to chain-of-custody specimen handling, safety is our priority.', icon: <ShieldCheck className="text-teal-600 w-8 h-8" /> },
                  { title: 'Family Friendly', desc: 'We specialize in pediatric and geriatric draws, ensuring a calm experience for all.', icon: <CheckCircle className="text-teal-600 w-8 h-8" /> },
                  { title: 'Metro Coverage', desc: 'We service the entire metropolitan area including offices and facilities.', icon: <MapPin className="text-teal-600 w-8 h-8" /> },
                ].map((f, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">{f.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-blue-900 rounded-[60px] p-12 lg:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready for a better experience?</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Skip the lines. Save your time. Secure your mobile appointment today with a simple 50% deposit.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/booking" className="bg-teal-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-teal-500 transition-all shadow-xl hover:scale-105">
                  Book Appointment Now
                </Link>
                <Link to="/contact" className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-12 py-5 rounded-full text-xl font-bold hover:bg-white/20 transition-all">
                  Contact Us
                </Link>
              </div>
              <p className="mt-10 text-blue-300 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> HIPAA Compliant Integration
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
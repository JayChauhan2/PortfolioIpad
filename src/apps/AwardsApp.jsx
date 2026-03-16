import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const AwardCard = ({ award, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="mb-10 will-change-transform"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left bg-white/70 backdrop-blur-lg rounded-[2.5rem] overflow-hidden border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] flex flex-col cursor-pointer group focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
        aria-expanded={isExpanded}
      >
        {/* Award Image */}
        <div className="w-full h-64 bg-gray-100 relative overflow-hidden">
          <img
            src={award.image}
            alt={award.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
        </div>

        <div className="p-8 pb-6 flex items-center justify-between">
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-2 group-hover:text-[#B38728] transition-colors">{award.title}</h3>
            <p className="text-gray-500 text-lg font-medium tracking-wide">
              {award.year}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#FCF6BA]/30 transition-colors shadow-sm">
            {isExpanded ? <ChevronDown size={28} className="text-[#B38728]" /> : <ChevronRight size={28} className="text-[#B38728]" />}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { height: 'auto', opacity: 1 },
                collapsed: { height: 0, opacity: 0 }
              }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden w-full"
            >
              <div className="px-8 pb-8">
                <div className="p-8 bg-gray-50/50 rounded-[2rem] border border-gray-100 text-gray-700 text-lg leading-relaxed font-light shadow-inner whitespace-pre-wrap">
                  {award.description}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

export default function AwardsApp() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const featuredAwards = [
    {
      id: 1,
      title: "TEDx Youth Speaker",
      organization: "",
      year: "2026",
      image: "/TEDTalk.png",
      description: "Presented TED talk on AI and student entrepreneurship. To prepare, I created an Agentic-AI website that would curate speeches from past TED Talks. Site: https://tedtalkbrowser.vercel.app/ - Watch speech: https://youtu.be/1JXjNWVFe5E?si=SeiPdKm59BS7bOis&t=57"
    },
    {
      id: 2,
      title: "Congressional App Challenge",
      organization: "",
      year: "2025",
      image: "/CongressionalApp.png",
      description: "Fine-tuned AI model (38K+ words) for Veterans with PTSD. Recognized as a national winner for innovation and technical excellence. Press: https://wittman.house.gov/news/documentsingle.aspx?DocumentID=6713"
    },
    {
      id: 3,
      title: "National Pin Designer for Virginia TSA",
      organization: "",
      year: "2026",
      image: "/tsa_pin.png",
      description: "Designed outer space-themed pin to represent Virginia at TSA's national conference. The design was produced and sold out at the national event."
    },
  ];

  const otherAwards = [
    { id: 8, title: "World AI Competition for Youth Top 2% Global Finalist", organization: "", year: "2025" },
    { id: 4, title: "Diamond Challenge Semifinalist", organization: "", year: "2026" },
    { id: 13, title: "1st Place - Virginia TSA Animatronics Competition", organization: "", year: "2023" },
    { id: 5, title: "1st Place - Virginia TSA Regional Video Game Design Competition", organization: "", year: "2025" },
    { id: 6, title: "Top 3 - Virginia TSA Software Development Competition", organization: "", year: "2025" },
    { id: 7, title: "Top 3 - Virginia TSA Virtual Reality Simulation Competition", organization: "", year: "2025" },
    { id: 12, title: "Top 10 - Virginia TSA Geospatial Technology", organization: "", year: "2024" },
    { id: 14, title: "College Board National Outstanding Academic Achievement Award", organization: "", year: "2024" },
    { id: 11, title: "College Board 2x National AP Scholar with Distinction Award", organization: "", year: "2024" },
    { id: 10, title: "Center for Information Technology Scholar Award", organization: "", year: "2024" },
    { id: 9, title: "Deep Run High School Principal's Scholar Award", organization: "", year: "2024" },
  ];

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: 200 },
    particles: {
      number: { value: 0 },
      color: { value: ["#B38728", "#8A6623", "#BF953F", "#F1D279"] },
      shape: { type: ["circle", "square"] },
      opacity: { value: 1 },
      size: { value: { min: 4, max: 8 } },
      move: {
        enable: true,
        gravity: { enable: true, acceleration: 12 },
        speed: { min: 10, max: 20 },
        decay: 0.05,
        direction: "bottom",
        outModes: { default: "destroy", top: "none" }
      },
      roll: { enable: true, speed: { min: 5, max: 15 } },
      tilt: { enable: true, move: true, speed: { min: 5, max: 15 } },
      wobble: { enable: true, distance: 30, speed: { min: -7, max: 7 } }
    },
    emitters: [
      {
        direction: "bottom",
        life: { count: 1, duration: 0.1, delay: 0.4 },
        rate: { delay: 0.1, quantity: 200 },
        size: { width: 100, height: 0 },
        position: { x: 50, y: -5 }
      }
    ]
  };

  return (
    <div className="w-full h-full bg-[#f5f5f7] flex flex-col p-8 overflow-y-auto pt-24 text-gray-900 pb-32 overscroll-contain will-change-scroll relative">
      {init && (
        <Particles id="tsparticles" options={particlesOptions} />
      )}
      
      <div className="max-w-3xl mx-auto w-full relative z-10">
        <header className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <h1 className="text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-[#BF953F] via-[#8A6623] to-[#BF953F] bg-clip-text text-transparent">
              Honors & Awards
            </h1>
          </motion.div>
          <p className="text-gray-400 text-xl ml-1 font-medium tracking-wide">Some of my proudest accomplishments.</p>
        </header>

        <section className="mb-20">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B38728]/60 mb-8 ml-2">Featured Awards</h2>
          {featuredAwards.map((award, index) => (
            <AwardCard key={award.id} award={award} index={index} />
          ))}
        </section>

        <section>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B38728]/60 mb-8 ml-2">Other Recognitions</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/70 backdrop-blur-lg rounded-[2.5rem] overflow-hidden border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            {otherAwards.map((award, index) => (
              <div
                key={award.id}
                className={`p-7 px-10 flex items-center justify-between hover:bg-gray-50 transition-colors group ${index !== otherAwards.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
              >
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#B38728] transition-colors">{award.title}</h4>
                </div>
                <span className="text-sm font-bold tabular-nums text-gray-300 tracking-widest">{award.year}</span>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}

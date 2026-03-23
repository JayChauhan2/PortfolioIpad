import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useWindowSize } from '../hooks/useWindowSize';

const renderDescriptionWithLinks = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a 
          key={i} 
          href={part} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#B38728] font-medium hover:underline cursor-pointer transition-all underline-offset-4"
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

const AwardCard = ({ award, index, isMobile }) => {
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
        className={`w-full text-left bg-white/70 backdrop-blur-lg ${isMobile ? 'rounded-[1.5rem]' : 'rounded-[2.5rem]'} overflow-hidden border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] flex flex-col cursor-pointer group focus:outline-none focus:ring-2 focus:ring-yellow-500/20`}
        aria-expanded={isExpanded}
      >
        {/* Award Image */}
        <div className={`w-full ${isMobile ? 'h-48' : 'h-64'} bg-gray-100 relative overflow-hidden`}>
          <img
            src={award.image}
            alt={award.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
        </div>

        <div className={`${isMobile ? 'p-6' : 'p-8'} pb-6 flex items-center justify-between`}>
          <div className="flex-1 min-w-0 pr-4">
            <h3 className={`${isMobile ? 'text-xl' : 'text-3xl'} font-bold text-gray-900 tracking-tight mb-2 group-hover:text-[#B38728] transition-colors`}>{award.title}</h3>
            <p className={`${isMobile ? 'text-sm' : 'text-lg'} text-gray-500 font-medium tracking-wide`}>
              {award.year}
            </p>
          </div>

          <div className={`${isMobile ? 'p-2' : 'p-4'} bg-gray-50 rounded-full group-hover:bg-[#FCF6BA]/30 transition-colors shadow-sm`}>
            {isExpanded ? <ChevronDown size={isMobile ? 20 : 28} className="text-[#B38728]" /> : <ChevronRight size={isMobile ? 20 : 28} className="text-[#B38728]" />}
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
              <div className={`${isMobile ? 'px-4' : 'px-8'} pb-8`}>
                <div className={`${isMobile ? 'p-4 rounded-[1rem] text-sm' : 'p-8 rounded-[2rem] text-lg'} bg-gray-50/50 border border-gray-100 text-gray-700 leading-relaxed font-light shadow-inner whitespace-pre-wrap translate-z-0`}>
                  {renderDescriptionWithLinks(award.description)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

export default function AwardsApp({ onClose }) {
  const [init, setInit] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;

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
      description: "Fine-tuned AI model (38K+ words) for Veterans with PTSD, addressing gap for 15.8 million veterans. Press: https://wittman.house.gov/news/documentsingle.aspx?DocumentID=6713"
    },
    {
      id: 3,
      title: "National Pin Designer for Virginia TSA",
      organization: "",
      year: "2025",
      image: "/MyPin.jpg",
      description: "Designed outer space-themed pin to represent Virginia at the Technology Student Association's national conference. The design sold out."
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
    <div className={`w-full h-full bg-[#f5f5f7] flex flex-col ${isMobile ? 'p-4 pt-6 pb-20' : 'p-8 pt-24 pb-32'} overflow-y-auto text-gray-900 overscroll-contain will-change-scroll relative`}>
      {init && (
        <Particles id="tsparticles" options={particlesOptions} />
      )}

      {/* Back Button */}
      {isMobile && (
        <div className="sticky top-0 left-0 right-0 p-4 bg-[#f5f5f7]/80 backdrop-blur-md z-[100] border-b border-gray-200/50 flex items-center gap-4 -mt-6 -mx-4 mb-6">
          <button
            className="text-blue-500 cursor-pointer font-medium text-lg flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-1"
            onClick={onClose}
          >
            <span>&lt; Back</span>
          </button>
          <span className="font-bold text-gray-900">Awards</span>
        </div>
      )}

      <div className={`max-w-3xl mx-auto w-full relative z-10 ${isMobile ? 'pt-12' : ''}`}>
        {!isMobile && (
          <button
            className="absolute -top-16 -left-4 text-blue-500 cursor-pointer font-medium text-lg flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-1 transition-all hover:translate-x-[-4px]"
            onClick={onClose}
          >
            <span>&lt; Back</span>
          </button>
        )}
        <header className={`${isMobile ? 'mb-8' : 'mb-14'} text-left`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-left"
          >
            <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-extrabold tracking-tighter bg-gradient-to-r from-[#BF953F] via-[#8A6623] to-[#BF953F] bg-clip-text text-transparent`}>
              Honors & Awards
            </h1>
          </motion.div>
          <p className={`text-gray-400 ${isMobile ? 'text-lg' : 'text-xl'} ml-1 font-medium tracking-wide`}>Some of my proudest accomplishments.</p>
        </header>

        <section className="mb-20">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B38728]/60 mb-8 ml-2 text-left">Featured Awards</h2>
          {featuredAwards.map((award, index) => (
            <AwardCard key={award.id} award={award} index={index} isMobile={isMobile} />
          ))}
        </section>

        <section>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B38728]/60 mb-8 ml-2 text-left">Other Recognitions</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/70 backdrop-blur-lg rounded-[2.5rem] overflow-hidden border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            {otherAwards.map((award, index) => (
              <div
                key={award.id}
                className={`p-5 ${isMobile ? 'px-6' : 'px-10'} flex items-center justify-between hover:bg-gray-50 transition-colors group ${index !== otherAwards.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
              >
                <div className="text-left">
                  <h4 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-gray-900 group-hover:text-[#B38728] transition-colors leading-tight`}>{award.title}</h4>
                </div>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold tabular-nums text-gray-300 tracking-widest ml-4 shrink-0`}>{award.year}</span>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}

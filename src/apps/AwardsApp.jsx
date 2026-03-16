import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import tedTalkImg from '../assets/TEDTalk.png';
import congressionalImg from '../assets/congressional_app.png';
import tsaPinImg from '../assets/tsa_pin.png';

const AwardCard = ({ award }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-10">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left bg-white/70 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] flex flex-col cursor-pointer group focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
        aria-expanded={isExpanded}
      >
        {/* Award Image */}
        <div className="w-full h-64 bg-gray-100 relative overflow-hidden">
          <img 
            src={award.image} 
            alt={award.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
        </div>

        <div className="p-8 pb-6 flex items-center justify-between">
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-2 group-hover:text-[#B38728] transition-colors">{award.title}</h3>
            <p className="text-gray-500 text-lg font-medium tracking-wide">
              {award.organization ? `${award.organization} • ` : ''}{award.year}
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#FCF6BA]/30 transition-colors shadow-sm">
            {isExpanded ? <ChevronDown size={28} className="text-[#B38728]" /> : <ChevronRight size={28} className="text-[#B38728]" />}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="overflow-hidden w-full"
            >
              <div className="px-8 pb-8">
                <div className="p-8 bg-gray-50/50 rounded-[2rem] border border-gray-100 text-gray-700 text-lg leading-relaxed font-light shadow-inner">
                  {award.description}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default function AwardsApp() {
  const featuredAwards = [
    { 
      id: 1, 
      title: "TEDx Youth Speaker", 
      organization: "", 
      year: "2026", 
      image: tedTalkImg,
      description: "Presented TED talk on AI and student entrepreneurship. To prepare, I created an Agentic-AI website that would curate speeches from past TED Talks. Site: https://tedtalkbrowser.vercel.app/ - Watch speech: https://youtu.be/1JXjNWVFe5E?si=SeiPdKm59BS7bOis&t=57"
    },
    { 
      id: 2, 
      title: "Congressional App Challenge", 
      organization: "", 
      year: "2025", 
      image: congressionalImg,
      description: "Fine-tuned AI model (38K+ words) for Veterans with PTSD. Recognized as a national winner for innovation and technical excellence. Press: https://wittman.house.gov/news/documentsingle.aspx?DocumentID=6713"
    },
    { 
      id: 3, 
      title: "National Pin Designer for Virginia TSA", 
      organization: "", 
      year: "2026", 
      image: tsaPinImg,
      description: "Designed outer space-themed pin to represent Virginia at TSA's national conference. The design was produced and sold out at the national event."
    },
  ];

  const otherAwards = [
    { id: 8, title: "Top 2% Global Finalist", organization: "World AI Competition for Youth", year: "2025" },
    { id: 4, title: "Semifinalist", organization: "Diamond Challenge", year: "2026" },
    { id: 5, title: "1st Place - Virginia TSA Regional Video Game Design Competition", organization: "Technology Student Association", year: "2025" },
    { id: 6, title: "Top 3 - Virginia TSA Software Development Competition", organization: "Technology Student Association", year: "2025" },
    { id: 7, title: "Top 3 - Virginia TSA Virtual Reality Simulation Competition", organization: "Technology Student Association", year: "2025" },
    { id: 12, title: "Top 10 - Virginia TSA Geospatial Technology", organization: "Technology Student Association", year: "2024" },
    { id: 13, title: "1st Place - Virginia TSA Animatronics Competition", organization: "Technology Student Association (TSA)", year: "2023" },
    { id: 14, title: "National Outstanding Academic Achievement Award", organization: "CollegeBoard", year: "2024" },
    { id: 11, title: "2x National AP Scholar with Distinction Award", organization: "CollegeBoard", year: "2024" },
    { id: 10, title: "CIT Scholar Award", organization: "Deep Run High School", year: "2024" },
    { id: 9, title: "Principal's Scholar Award", organization: "Deep Run High School", year: "2024" },
  ];

  return (
    <div className="w-full h-full bg-[#f5f5f7] flex flex-col p-8 overflow-y-auto pt-24 text-gray-900 pb-32 overscroll-contain">
      <div className="max-w-3xl mx-auto w-full">
        <header className="mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <h1 className="text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
              Honors & Awards
            </h1>
          </motion.div>
          <p className="text-gray-400 text-xl ml-1 font-medium tracking-wide">Some of my proudest accomplishments.</p>
        </header>

        <section className="mb-20">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B38728]/60 mb-8 ml-2">Featured Awards</h2>
          {featuredAwards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </section>

        <section>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B38728]/60 mb-8 ml-2">Other Recognitions</h2>
          <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            {otherAwards.map((award, index) => (
              <div 
                key={award.id} 
                className={`p-7 px-10 flex items-center justify-between hover:bg-gray-50 transition-colors group ${
                  index !== otherAwards.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#B38728] transition-colors">{award.title}</h4>
                  <p className="text-sm text-gray-400 mt-1 font-medium">{award.organization}</p>
                </div>
                <span className="text-sm font-bold tabular-nums text-gray-300 tracking-widest">{award.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

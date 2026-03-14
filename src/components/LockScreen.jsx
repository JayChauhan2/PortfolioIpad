import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LockScreen({ onUnlock }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  const dateString = time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <motion.div 
      className="absolute inset-0 z-50 flex flex-col items-center justify-between py-12 cursor-pointer bg-black/10"
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      onClick={onUnlock}
    >
      <div className="flex flex-col items-center mt-12 z-20">
        <h2 className="text-white/90 text-2xl font-medium mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{dateString}</h2>
        <h1 className="text-white text-8xl font-bold tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          {timeString}
        </h1>
      </div>

      <motion.div 
        className="absolute bottom-6 inset-x-0 flex flex-col items-center z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <p className="text-white/90 text-sm font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-2">Swipe up or click to unlock</p>
        <div className="w-32 h-1.5 bg-white/50 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}

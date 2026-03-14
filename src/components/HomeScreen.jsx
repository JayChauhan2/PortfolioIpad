import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

function AppIcon({ app, onOpenApp }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const moveX = useTransform(mouseXSpring, [-50, 50], [-10, 10]);
  const moveY = useTransform(mouseYSpring, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button 
      variants={itemVariants}
      className="flex flex-col items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded-xl p-1 transition-all group"
      onClick={() => onOpenApp(app.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onOpenApp(app.id);
        }
      }}
      aria-label={`Open ${app.name} app`}
    >
      <motion.div 
        className={`w-16 h-16 md:w-[72px] md:h-[72px] flex items-center justify-center shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer ${app.color}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 20px rgba(255,255,255,0.6)",
          zIndex: 30
        }}
        style={{ 
          borderRadius: 16,
          x: moveX,
          y: moveY,
        }}
      >
        {app.icon}
      </motion.div>
      <span className="text-white/95 text-xs md:text-sm font-semibold tracking-wide drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] mt-1 transition-opacity group-hover:opacity-100">
        {app.name}
      </span>
    </motion.button>
  );
}

export default function HomeScreen({ apps, onOpenApp, currentApp }) {
  return (
    <motion.div 
      className="grid grid-cols-4 md:grid-cols-5 gap-6 gap-y-8 mt-12 w-full max-w-4xl mx-auto z-10 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {apps.map((app) => (
        <AppIcon key={app.id} app={app} onOpenApp={onOpenApp} />
      ))}
    </motion.div>
  );
}

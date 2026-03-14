import { motion } from 'framer-motion';

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

export default function HomeScreen({ apps, onOpenApp, currentApp }) {
  return (
    <motion.div 
      className="grid grid-cols-4 md:grid-cols-5 gap-6 gap-y-8 mt-12 w-full max-w-4xl mx-auto z-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {apps.map((app) => (
        <motion.div 
          key={app.id} 
          variants={itemVariants}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => onOpenApp(app.id)}
        >
          <motion.div 
            className={`w-16 h-16 md:w-[72px] md:h-[72px] flex items-center justify-center shadow-lg transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] overflow-hidden cursor-pointer hover:scale-[1.10] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:z-20 ${app.color}`}
            style={{ 
              borderRadius: 16
            }}
          >
            {app.icon}
          </motion.div>
          <span className="text-white/95 text-xs md:text-sm font-semibold tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] bg-black/10 backdrop-blur-sm px-2 py-0.5 rounded-full mt-1">
            {app.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

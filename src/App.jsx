import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Users, LayoutGrid, Folder, Trophy } from 'lucide-react';
import IPadFrame from './components/IPadFrame';
import StatusBar from './components/StatusBar';
import LockScreen from './components/LockScreen';
import Dock from './components/Dock';
import HomeScreen from './components/HomeScreen';
import PhotosApp from './apps/PhotosApp';
import ContactsApp from './apps/ContactsApp';
import ProjectsApp from './apps/ProjectsApp';
import OrganizationsApp from './apps/OrganizationsApp';
import AwardsApp from './apps/AwardsApp';

const APPS = [
  { 
    id: 'photos', name: 'Photos', 
    icon: <img src="https://upload.wikimedia.org/wikipedia/en/5/5e/Photos_icon_for_OS_X.png" alt="Photos" className="w-full h-full object-cover" />, 
    color: 'bg-white', component: PhotosApp 
  },
  { 
    id: 'contacts', name: 'Contacts', 
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c3/e0/9d/c3e09d8c-fb97-f0be-8463-b011f602c53a/contacts-0-0-1x_U007epad-0-1-0-sRGB-0-85-220.png/512x512bb.jpg" alt="Contacts" className="w-full h-full object-cover" />, 
    color: 'bg-white', component: ContactsApp 
  },
  { 
    id: 'projects', name: 'Projects', 
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="Projects" className="w-full h-full object-cover" />, 
    color: 'bg-white', component: ProjectsApp 
  },
  { 
    id: 'organizations', name: 'Organizations', 
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cf/a1/e7/cfa1e733-abf2-2a89-394f-1de4a5043743/files-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg" alt="Organizations" className="w-full h-full object-cover" />, 
    color: 'bg-white', component: OrganizationsApp 
  },
  { 
    id: 'awards', name: 'Awards', 
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c2/82/bc/c282bc4d-7d60-1c41-3282-1d9accecf0bd/tips-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg" alt="Tips" className="w-full h-full object-cover" />, 
    color: 'bg-white', component: AwardsApp 
  },
];

export default function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [currentApp, setCurrentApp] = useState(null);

  const handleOpenApp = (appId) => {
    setCurrentApp(appId);
  };

  const handleCloseApp = () => {
    setCurrentApp(null);
  };

  const ActiveApp = APPS.find((app) => app.id === currentApp)?.component;

  return (
    <div 
      className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop')" }}
    >
      {/* Subdued shadow overlay to sell the realism of the table surface */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <IPadFrame>
        <StatusBar />
        
        {/* Subtle Status Bar Gradient for readability */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-40"></div>

        <AnimatePresence>
          {!isLocked && (
            <motion.div
              key="home-blur"
              className="absolute inset-0 backdrop-blur-[3px] bg-black/5 pointer-events-none z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isLocked ? (
            <LockScreen key="lock" onUnlock={() => setIsLocked(false)} />
          ) : (
            <motion.div 
              key="home" 
              className="absolute inset-0 pt-8 px-8 z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Home Screen App Grid */}
              <HomeScreen apps={APPS} onOpenApp={handleOpenApp} currentApp={currentApp} />
              <Dock />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active App Overlay */}
        <AnimatePresence>
          {currentApp && ActiveApp && (
            <motion.div
              className="absolute inset-0 z-[60] bg-white flex flex-col shadow-2xl overflow-hidden rounded-[2rem]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* App Content */}
              <div className="w-full h-full relative overflow-hidden" style={{ borderRadius: 32 }}>
                <ActiveApp onClose={handleCloseApp} />
              </div>

              {/* Home Bar for App closing */}
              <div 
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-black/40 dark:bg-white/40 rounded-full z-[100] cursor-pointer hover:bg-black/60 transition-colors"
                onClick={handleCloseApp}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      </IPadFrame>
    </div>
  );
}

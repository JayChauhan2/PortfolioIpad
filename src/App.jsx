import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Users, LayoutGrid, Folder, Trophy } from 'lucide-react';
import IPadFrame from './components/IPadFrame';
import { useWindowSize } from './hooks/useWindowSize';
import StatusBar from './components/StatusBar';
import LockScreen from './components/LockScreen';
import Dock from './components/Dock';
import HomeScreen from './components/HomeScreen';
import ContactsApp from './apps/ContactsApp';
import ProjectsApp from './apps/ProjectsApp';
import OrganizationsApp from './apps/OrganizationsApp';
import AwardsApp from './apps/AwardsApp';

const APPS = [
  {
    id: 'contacts', name: 'Contacts',
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c3/e0/9d/c3e09d8c-fb97-f0be-8463-b011f602c53a/contacts-0-0-1x_U007epad-0-1-0-sRGB-0-85-220.png/512x512bb.jpg" alt="Contacts" className="w-full h-full object-cover" />,
    appBg: 'bg-gray-50', component: ContactsApp
  },
  {
    id: 'projects', name: 'Projects',
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="Projects" className="w-full h-full object-cover" />,
    appBg: 'bg-white', component: ProjectsApp
  },
  {
    id: 'organizations', name: 'Organizations',
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cf/a1/e7/cfa1e733-abf2-2a89-394f-1de4a5043743/files-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg" alt="Organizations" className="w-full h-full object-cover" />,
    appBg: 'bg-gray-50', component: OrganizationsApp
  },
  {
    id: 'awards', name: 'Awards',
    icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c2/82/bc/c282bc4d-7d60-1c41-3282-1d9accecf0bd/tips-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg" alt="Tips" className="w-full h-full object-cover" />,
    appBg: 'bg-white', component: AwardsApp
  },
];

export default function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [currentApp, setCurrentApp] = useState(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const handleOpenApp = (appId) => {
    setCurrentApp(appId);
  };

  const handleHomeButton = () => {
    if (isLocked) {
      setIsLocked(false);
    } else {
      setCurrentApp(null);
    }
  };

  const ActiveApp = APPS.find((app) => app.id === currentApp)?.component;
  const ActiveAppBg = APPS.find((app) => app.id === currentApp)?.appBg || 'bg-white';
  const statusTheme = (!currentApp) ? 'dark' : 'light';

  return (
    <div
      className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={!isMobile ? { backgroundImage: "url('https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=2000')" } : { backgroundColor: '#000' }}
    >
      {/* Subdued shadow overlay to sell the realism of the table surface — desktop only */}
      {!isMobile && <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>}

      <IPadFrame onHomeClick={handleHomeButton}>
        {/* Status bar + gradient — iPad frame only, not shown on mobile */}
        {!isMobile && <StatusBar theme={statusTheme} />}
        {!isMobile && (
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-40" />
        )}

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
          {isLocked && (
            <motion.div
              key="lockscreen-shadows"
              className="absolute inset-0 pointer-events-none z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
            >
              <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
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
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
              inert={currentApp ? "" : undefined}
              aria-hidden={!!currentApp}
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
              className={`absolute inset-0 z-[60] flex flex-col shadow-2xl overflow-hidden ${ActiveAppBg}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* App Content */}
              <div className="w-full h-full relative overflow-hidden bg-transparent">
                <ActiveApp onClose={handleHomeButton} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </IPadFrame>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc-VHqQXwk_rHPsY4g-y_Lc5JXIpxB-iJZoLmWhaZXSlpJEHg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-6 text-[11px] text-white/80 hover:text-white/100 transition-all duration-300 z-[100] font-medium tracking-tight no-underline select-none"
      >
        {isMobile ? 'Feedback? Click here' : 'Have feedback? Share it here'}
      </a>
    </div>
  );
}

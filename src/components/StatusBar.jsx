import { useState, useEffect } from 'react';
import { Wifi } from 'lucide-react';
import { useWindowSize } from '../hooks/useWindowSize';

export default function StatusBar({ theme = 'dark' }) {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const shadowClass = theme === 'light' ? '' : 'drop-shadow-md';
  const batteryColor = theme === 'light' ? 'bg-black' : 'bg-white';

  return (
    <div className={`flex w-full justify-between items-center ${isMobile ? 'px-4' : 'px-6'} py-1.5 font-semibold ${isMobile ? 'text-[11px]' : 'text-[13px]'} z-[100] mt-1 relative pointer-events-none ${textColor}`}>
      <div className={`flex-1 text-left tracking-wide ${shadowClass}`}>
        <span>Jay's iPad</span>
      </div>
      <div className={`flex-1 text-center ${shadowClass}`}>
        {formattedTime}
      </div>
      <div className={`flex-1 flex justify-end items-center ${isMobile ? 'gap-1' : 'gap-1.5'} ${shadowClass}`}>
        <Wifi size={isMobile ? 14 : 16} strokeWidth={2.5} />
        <span className={`${isMobile ? 'text-[10px]' : 'text-[12px]'} font-bold tracking-wider mr-1`}>100%</span>
        <div className="relative flex items-center justify-center opacity-90">
          {/* Main battery body outer frame */}
          <div className={`${isMobile ? 'w-[20px] h-[10px]' : 'w-[23px] h-[11.5px]'} border-[1px] rounded-[3px] p-[1px] flex items-center ${theme === 'light' ? 'border-gray-900/40' : 'border-white/40'}`}>
            <div className={`w-full h-full rounded-[1.5px] ${batteryColor}`}></div>
          </div>
          {/* Battery Top Bump */}
          <div className={`${isMobile ? 'w-[1px] h-[3px]' : 'w-[1.5px] h-[4px]'} rounded-r-[2px] ml-[1px] ${theme === 'light' ? 'bg-gray-900/40' : 'bg-white/40'}`}></div>
        </div>
      </div>
    </div>
  );
}

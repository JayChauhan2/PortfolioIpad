import { useState, useEffect } from 'react';
import { Wifi, Battery } from 'lucide-react';

export default function StatusBar({ theme = 'dark' }) {
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
    <div className={`flex w-full justify-between items-center px-6 py-1.5 font-semibold text-[13px] z-[100] mt-1 relative pointer-events-none ${textColor}`}>
      <div className={`flex-1 text-left tracking-wide ${shadowClass}`}>
        <span>Jay's iPad</span>
      </div>
      <div className={`flex-1 text-center ${shadowClass}`}>
        {formattedTime}
      </div>
      <div className={`flex-1 flex justify-end items-center gap-1.5 ${shadowClass}`}>
        <Wifi size={16} strokeWidth={2.5} />
        <span className="text-[11px] font-bold leading-none mt-[2px] ml-1">100%</span>
        <div className="relative flex items-center">
          <Battery size={22} strokeWidth={1.5} className="opacity-100" />
          <div className={`absolute left-[2.5px] top-[6.5px] bottom-[6.5px] w-[13px] rounded-[1px] ${batteryColor}`}></div>
        </div>
      </div>
    </div>
  );
}

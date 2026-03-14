import { useState, useEffect } from 'react';
import { Wifi, Battery } from 'lucide-react';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  return (
    <div className="flex w-full justify-between items-center px-6 py-1.5 text-white font-semibold text-[13px] z-[100] mt-1 relative pointer-events-none">
      <div className="flex-1 text-left drop-shadow-md tracking-wide">
        <span>Jay's iPad</span>
      </div>
      <div className="flex-1 text-center drop-shadow-md">
        {formattedTime}
      </div>
      <div className="flex-1 flex justify-end items-center gap-1.5 drop-shadow-md">
        <Wifi size={16} strokeWidth={2.5} />
        <span className="text-[11px] font-bold leading-none mt-[2px] ml-1">100%</span>
        <div className="relative flex items-center">
          <Battery size={22} strokeWidth={1.5} className="opacity-100" />
          <div className="absolute left-[2.5px] top-[6.5px] bottom-[6.5px] w-[13px] bg-white rounded-[1px]"></div>
        </div>
      </div>
    </div>
  );
}

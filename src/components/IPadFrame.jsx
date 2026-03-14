import { useWindowSize } from "../hooks/useWindowSize";

export default function IPadFrame({ children }) {
  const { width, height } = useWindowSize();
  
  // Base iPad dimensions (iPad Pro 11-inch roughly 834x1194, landscape is 1194x834)
  // Let's use a standard 4:3 aspect ratio landscape for ease: 1024x768
  // Or 16:10 aspect ratio. Let's use 1180x820 for a modern look.
  const IPAD_WIDTH = 1180;
  const IPAD_HEIGHT = 820;

  // Calculate scale to fit within viewport with some padding
  const padding = 32;
  const scaleX = (width - padding) / IPAD_WIDTH;
  const scaleY = (height - padding) / IPAD_HEIGHT;
  const scale = Math.min(scaleX, scaleY, 1); // Don't scale up past 100%

  return (
    <div className="flex items-center justify-center w-full h-full relative z-10 overflow-hidden">
      {/* Outer Metallic Edge */}
      <div 
        className="relative rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] bg-[#1c1c1e] p-[10px] ring-2 ring-[#555] dark:ring-[#333]"
        style={{
          width: IPAD_WIDTH,
          height: IPAD_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* Inner Black Bezel */}
        <div className="w-full h-full bg-black rounded-[2.5rem] relative p-[12px] shadow-inner">
          
          {/* iPad Inner Screen Layout Mask */}
          <div 
            className="w-full h-full bg-slate-900 relative overflow-hidden rounded-[2rem] bg-[url('/background.png')] bg-cover bg-center"
          >
            {children}
          </div>
          
          {/* Front Camera Array (Landscape Top Center) */}
          <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#111] shadow-inner flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-900/40"></div>
            </div>
            <div className="w-1 h-1 rounded-full bg-green-500/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

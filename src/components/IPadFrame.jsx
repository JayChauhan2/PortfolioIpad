import { useWindowSize } from "../hooks/useWindowSize";

export default function IPadFrame({ children, onHomeClick }) {
  const { width, height } = useWindowSize();
  
  const isMobile = width < 768;
  
  // Base iPad dimensions (iPad Pro 11-inch roughly 834x1194, landscape is 1194x834)
  // Let's use a standard 4:3 aspect ratio landscape for ease: 1024x768
  // Or 16:10 aspect ratio. Let's use 1180x820 for a modern look.
  const IPAD_WIDTH = isMobile ? 820 : 1180;
  const IPAD_HEIGHT = isMobile ? 1180 : 820;

  // Calculate scale to fit within viewport with some padding
  const padding = isMobile ? 0 : 32;
  const scaleX = (width - padding) / IPAD_WIDTH;
  const scaleY = (height - padding) / IPAD_HEIGHT;
  const scale = Math.min(scaleX, scaleY, 1); // Don't scale up past 100%

  return (
    <div className="flex items-center justify-center w-full h-full relative z-10 overflow-hidden">
      {/* Outer Metallic Edge */}
      <div 
        className={`${isMobile ? 'rounded-[2rem]' : 'rounded-[3rem]'} shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] bg-[#1c1c1e] ${isMobile ? 'p-[2px]' : 'p-[10px]'} ring-2 ring-[#555] dark:ring-[#333]`}
        style={{
          width: IPAD_WIDTH,
          height: IPAD_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* Inner Black Bezel - Asymmetrical padding for classic layout */}
        <div className={`w-full h-full bg-black ${isMobile ? 'rounded-[1.8rem]' : 'rounded-[2.5rem]'} relative ${isMobile ? 'pb-[40px] pt-[8px] px-[8px]' : 'pb-[52px] pt-[20px] px-[20px]'} shadow-inner`}>
          
          <div 
            className="w-full h-full bg-slate-900 relative overflow-hidden rounded-[1.5rem] bg-[url('/background.png')] bg-cover bg-center"
          >
            {children}
          </div>

          <div 
            className={`absolute ${isMobile ? 'bottom-[4px]' : 'bottom-[6px]'} left-1/2 transform -translate-x-1/2 ${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-[#111] border-[1.5px] border-[#222] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] cursor-pointer flex items-center justify-center hover:bg-[#151515] active:bg-[#000] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40`}
            onClick={onHomeClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onHomeClick();
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Home"
          >
            <div className="w-3.5 h-3.5 rounded-[4px] border-[1.5px] border-[#444] group-active:border-[#333] transition-colors"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

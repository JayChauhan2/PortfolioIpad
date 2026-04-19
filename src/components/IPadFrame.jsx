import { useWindowSize } from "../hooks/useWindowSize";

export default function IPadFrame({ children, onHomeClick }) {
  const { width, height } = useWindowSize();

  // Use a mobile-first breakpoint — anything narrower than 768px is "phone"
  const isMobile = width < 768;

  if (isMobile) {
    // ── Mobile: no iPad frame at all ──────────────────────────────────────
    // Render the screen contents edge-to-edge, just like a real phone app.
    // A subtle home-indicator pill at the bottom lets the user go back.
    return (
      <div className="relative w-full h-full overflow-hidden bg-slate-900 bg-[url('/background.png')] bg-cover bg-center">
        {children}

        {/* Home indicator pill (mimics iPhone's system gesture bar) */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-[200] flex flex-col items-center gap-1 select-none"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div
            onClick={onHomeClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onHomeClick();
            }}
            tabIndex={0}
            role="button"
            aria-label="Home"
            className="w-28 h-1 rounded-full bg-white/40 hover:bg-white/60 active:bg-white/80 transition-colors cursor-pointer"
          />
        </div>
      </div>
    );
  }

  // ── Desktop / tablet: full iPad hardware frame ─────────────────────────
  const IPAD_WIDTH = 1180;
  const IPAD_HEIGHT = 820;

  const padding = 32;
  const scaleX = (width - padding) / IPAD_WIDTH;
  const scaleY = (height - padding) / IPAD_HEIGHT;
  const scale = Math.min(scaleX, scaleY, 1);

  return (
    <div className="flex items-center justify-center w-full h-full relative z-10 overflow-hidden">
      {/* Outer Metallic Edge */}
      <div
        className="rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] bg-[#1c1c1e] p-[10px] ring-2 ring-[#555] dark:ring-[#333]"
        style={{
          width: IPAD_WIDTH,
          height: IPAD_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "center",
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* Inner Black Bezel */}
        <div className="w-full h-full bg-black rounded-[2.5rem] relative pb-[52px] pt-[20px] px-[20px] shadow-inner">
          <div className="w-full h-full bg-slate-900 relative overflow-hidden rounded-[1.5rem] bg-[url('/background.png')] bg-cover bg-center">
            {children}
          </div>

          {/* Physical Home Button */}
          <div
            className="absolute bottom-[6px] left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border-[1.5px] border-[#222] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] cursor-pointer flex items-center justify-center hover:bg-[#151515] active:bg-[#000] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            onClick={onHomeClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onHomeClick();
            }}
            tabIndex={0}
            role="button"
            aria-label="Home"
          >
            <div className="w-3.5 h-3.5 rounded-[4px] border-[1.5px] border-[#444] group-active:border-[#333] transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}

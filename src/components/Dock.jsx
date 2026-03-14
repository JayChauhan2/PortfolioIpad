import { Linkedin, Github } from 'lucide-react';

export default function Dock() {
  const dockItems = [
    {
      name: 'LinkedIn',
      icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d3/c0/51/d3c051a0-a244-ce4f-7ab1-50c8f327748d/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" alt="LinkedIn" className="w-full h-full object-cover rounded-[22.5%]" />,
      url: 'https://www.linkedin.com/in/jay-chauhan-130144331/',
      bg: 'bg-transparent',
    },
    {
      name: 'GitHub',
      icon: <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5b/c6/e3/5bc6e33d-8636-25c4-a796-5946378e2bff/AppIcon-0-0-1x_U007epad-0-1-P3-85-220.png/512x512bb.jpg" alt="GitHub" className="w-full h-full object-cover rounded-[22.5%]" />,
      url: 'https://github.com/JayChauhan2',
      bg: 'bg-transparent',
    }
  ];

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex gap-5 px-[20px] py-[16px] rounded-[2rem] dock-glass before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:to-transparent before:rounded-[2rem] before:-z-10">
        {dockItems.map((item) => (
          <div key={item.name} className="flex flex-col items-center relative group">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-[60px] h-[60px] md:w-[68px] md:h-[68px] rounded-[22.5%] flex items-center justify-center shadow-md hover:scale-[1.10] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-pointer z-10 ${item.bg}`}
              title={item.name}
            >
              {item.icon}
            </a>
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/95 text-xs md:text-sm font-semibold tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] bg-black/10 backdrop-blur-sm px-2 py-0.5 rounded-full whitespace-nowrap pointer-events-none z-20">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

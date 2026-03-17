import React from 'react';

const projects = [
  {
    id: 'troop-companion',
    name: "AI TroopCompanion",
    category: "NATIONAL WINNER 🏆",
    description: "Led the development of a full-stack AI app for Veterans with PTSD. Won Congress's largest annual app challenge.",
    icon: "/projects/troop_companion_icon.png",
    mainImage: "/projects/troop_companion_main.png",
    link: "https://github.com/jaychauhan",
    gradient: "from-blue-100 to-indigo-50"
  },
  {
    id: 'echo',
    name: "Echo",
    category: "AI SPEECH ANALYSIS",
    description: "Developed a Swift application to improve public speaking through AI-analyzation of audio and video.",
    icon: "/projects/echo_icon.png",
    link: "https://github.com/jaychauhan",
    gradient: "from-purple-100 to-pink-50"
  },
  {
    id: 'plant-detector',
    name: "AI Plant Disease Detector",
    category: "GLOBAL FINALIST 🏅",
    description: "Created an image-recognition tool for recognizing plant diseases; earned global finalist recognition.",
    icon: "/projects/plant_detector_icon.png",
    link: "https://github.com/jaychauhan",
    gradient: "from-green-100 to-emerald-50"
  },
  {
    id: 'square-away',
    name: "Square Away",
    category: "GLOBAL SEMIFINALIST 🏅",
    description: "An Agentic-AI-based math learning site addressing critical gap for homeschooled and underprivileged students.",
    icon: "/projects/square_away_icon.png",
    link: "https://github.com/jaychauhan",
    gradient: "from-orange-100 to-amber-50"
  },
  {
    id: 'ai-literacy',
    name: "Demystifying AI Series",
    category: "LITERACY INITIATIVE",
    description: "Led a school-wide effort to boost AI literacy through a presentation keynote series for 100+ students.",
    icon: "/projects/ai_literacy_icon.png",
    mainImage: "/projects/ai_literacy_main.png",
    link: "https://github.com/jaychauhan",
    gradient: "from-cyan-100 to-sky-50"
  },
  {
    id: 'camera-checkout',
    name: "Camera Check Out",
    category: "COMMUNITY IMPACT",
    description: "Founded a project to save $15,000 in lost camera equipment through efficient tracking. Recognized by local press.",
    icon: "/projects/camera_checkout_icon.png",
    mainImage: "/projects/camera_checkout_main.jpg",
    imagePosition: "center 15%",
    link: "https://www.newsbreak.com/henrico-citizen-560689/4331330998682-henrico-student-s-camera-check-out-project-helping-henrico-schools",
    gradient: "from-gray-100 to-slate-200"
  }
];

export default function ProjectsApp() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-y-auto text-black pb-20">
      <div className="pt-16 px-8 pb-6 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <h1 className="text-4xl font-bold">Today</h1>
        <p className="text-gray-500 font-medium mt-1">LATEST PROJECTS</p>
      </div>

      <div className="p-8 flex flex-col gap-10">
        {projects.map(proj => (
          <div
            key={proj.id}
            className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col cursor-pointer transition-transform hover:scale-[1.01] duration-300"
            onClick={() => window.open(proj.link, '_blank')}
          >
            <div className={`h-64 bg-gradient-to-br ${proj.gradient} flex flex-col justify-between p-6 relative overflow-hidden`}>
              <span className={`text-sm font-semibold uppercase tracking-wider relative z-10 ${proj.mainImage && proj.id !== 'troop-companion' ? 'text-white drop-shadow-md' : 'text-gray-500'}`}>
                {proj.category}
              </span>
              {proj.mainImage ? (
                <div className="absolute inset-0">
                  <img 
                    src={proj.mainImage} 
                    alt={proj.name} 
                    className="w-full h-full object-cover"
                    style={proj.imagePosition ? { objectPosition: proj.imagePosition } : {}}
                  />
                  {proj.id !== 'troop-companion' && <div className="absolute inset-0 bg-black/10 z-0" />}
                </div>
              ) : (
                <div className="flex justify-center flex-1 items-center pb-4">
                  <img src={proj.icon} alt={proj.name} className="h-40 w-40 object-contain drop-shadow-2xl" />
                </div>
              )}
            </div>
            <div className="p-4 flex justify-between items-center bg-white min-h-[96px]">
              <div className="flex gap-4 items-center flex-1">
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center shadow-inner overflow-hidden border border-gray-100">
                  <img src={proj.icon} alt={`${proj.name} icon`} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold truncate">{proj.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{proj.description}</p>
                </div>
              </div>
              <button
                className="ml-4 bg-gray-100 hover:bg-gray-200 text-blue-600 font-bold py-2 px-6 rounded-full text-sm uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(proj.link, '_blank');
                }}
              >
                GET
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full text-center py-10 px-10 text-gray-400 text-sm font-medium">
        <p>Always built with ❤️ by me.</p>
      </div>
    </div>
  );
}

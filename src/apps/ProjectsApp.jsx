export default function ProjectsApp() {
  const projects = [
    { id: 1, name: "Project Alpha", category: "Web App", icon: "🌐", description: "A full-stack React application with real-time features." },
    { id: 2, name: "Project Beta", category: "Mobile App", icon: "📱", description: "React Native application for iOS and Android." },
    { id: 3, name: "Project Gamma", category: "Open Source", icon: "📦", description: "A popular NPM package for state management." },
    { id: 4, name: "Project Delta", category: "AI Tool", icon: "🤖", description: "Machine learning interface built with Python and React." },
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col overflow-y-auto text-black pb-20">
      <div className="pt-16 px-8 pb-6 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <h1 className="text-4xl font-bold">Today</h1>
        <p className="text-gray-500 font-medium mt-1">LATEST PROJECTS</p>
      </div>

      <div className="p-8 flex flex-col gap-8">
        {projects.map(proj => (
          <div key={proj.id} className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col cursor-pointer transition-transform hover:scale-[1.02] duration-300">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-50 flex flex-col justify-between p-6">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{proj.category}</span>
              <div className="text-7xl mb-4">{proj.icon}</div>
            </div>
            <div className="p-4 flex justify-between items-center bg-white h-24">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-3xl shadow-inner">
                  {proj.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{proj.name}</h3>
                  <p className="text-sm text-gray-500">{proj.description}</p>
                </div>
              </div>
              <button className="bg-gray-100 hover:bg-gray-200 text-blue-600 font-bold py-2 px-6 rounded-full text-sm uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                GET
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

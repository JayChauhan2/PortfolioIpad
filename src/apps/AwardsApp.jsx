import { Trophy, Award, Medal, Star } from 'lucide-react';

export default function AwardsApp() {
  const awards = [
    { id: 1, title: "Employee of the Year", organization: "Tech Corp Inc.", year: "2023", icon: <Trophy size={48} className="text-yellow-500" /> },
    { id: 2, title: "Hackathon Winner", organization: "Global Devfest", year: "2022", icon: <Award size={48} className="text-blue-500" /> },
    { id: 3, title: "Open Source Contributor", organization: "React Foundation", year: "2021", icon: <Medal size={48} className="text-gray-400" /> },
    { id: 4, title: "Best Design Concept", organization: "Design Awards", year: "2021", icon: <Star size={48} className="text-purple-500" /> },
  ];

  return (
    <div className="w-full h-full bg-slate-900 flex flex-col p-8 overflow-y-auto pt-16 text-white pb-20">
      <div className="flex items-center gap-4 mb-10">
        <Trophy size={40} className="text-yellow-500" />
        <h1 className="text-4xl font-bold tracking-tight">Awards & Honors</h1>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {awards.map((award) => (
          <div key={award.id} className="bg-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-4 border border-slate-700 shadow-xl hover:bg-slate-700/80 transition-colors cursor-pointer group">
            <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-700 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
              {award.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">{award.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{award.organization}</p>
            </div>
            <div className="px-4 py-1 bg-slate-900 rounded-full text-xs font-bold text-slate-500 tracking-widest mt-2 border border-slate-700">
              {award.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { MapPin, Calendar, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { useWindowSize } from '../hooks/useWindowSize';

export default function OrganizationsApp({ onClose }) {
  const [expandedId, setExpandedId] = useState(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const journeyOrgs = [
    {
      id: 1,
      name: "Camera Check Out",
      role: "Lead Automation Software Developer",
      dates: "Feb 2025 – Oct 2025",
      location: "Richmond, VA",
      image: "https://img.icons8.com/color/512/compact-camera.png",
      description: [
        "Primary full-stack developer for app serving 90+ customers/week.",
        "Automated student lending process to save $15K+ in missing cameras, lenses, and hard drives.",
        "Developed a 300+ line Flask application with Bootstrap (front-end) and PostgreSQL, syncing ∼150 IDs with Google Sheets via a Google Cloud REST API.",
        "Optimized transaction workflows, saving 30 seconds per operation and increasing overall productivity by 20% (16 hrs/month).",
        "Architected platform for expansion to 1,000+ users across multiple county high schools, resulting in county news feature."
      ]
    },
    {
      id: 2,
      name: "Virginia Commonwealth University (VCU)",
      role: "Biostatistics Researcher",
      dates: "May 2025 – Nov 2025",
      location: "Richmond, VA",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/VCU_typeface.svg",
      description: [
        "Data Science Researcher for the Graduate Program Director of Biostatistics at VCU.",
        "Executed a novel approach to create a Connectome Matrix using MRI scans with MRtrix3 software.",
        "Used UNIX filesystem and Mac Terminal to run FSL and FreeSurfer commands for preprocessing (SNR +30%), cortical reconstruction (<0.2mm accuracy), and volumetric segmentation (>75% accuracy).",
        "Conducted self-directed research on Duchenne Muscular Dystrophy and reported findings to the program director."
      ]
    },
    {
      id: 3,
      name: "VCU Engineering – STARS Program",
      role: "Data Science Researcher",
      dates: "Jul 2023",
      location: "Richmond, VA",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/VCU_typeface.svg",
      description: [
        "Selected as 1 of 34 students in the competitive Supporting Tech Achievement for Richmond Students (STARS) engineering program.",
        "Applied regression analysis on 1,000+ point flood dataset to identify correlations between precipitation and climate resilience per household in Virginia.",
        "Led development and presentation of findings to 30+ audience members and judges.",
        "Applied data visualization in Alteryx; communicated weekly with mentor, leading to a news feature."
      ]
    }
  ];

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-50 text-black font-sans">
      {/* Top Navigation Bar */}
      <div className={`flex items-center justify-between px-6 pb-3 ${isMobile ? 'pt-6' : 'pt-10'} border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-20 shadow-sm`}>
        <div className="flex items-center gap-6">
          <button
            className="text-blue-500 cursor-pointer font-medium text-lg flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-1 transition-colors"
            onClick={onClose}
          >
            <span>&lt; Back</span>
          </button>
          <h2 className="font-bold text-xl tracking-tight text-gray-900">
            Experience
          </h2>
        </div>
      </div>

      <div className={`w-full flex-1 flex overflow-hidden ${isMobile ? 'flex-col' : ''}`}>
        {/* Sidebar */}
        {!isMobile && (
          <aside className="w-64 border-r border-gray-200 bg-gray-50/50 p-6 flex flex-col h-full">
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 px-2">Locations</h3>
            <nav className="space-y-2">
              <button
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 bg-blue-600 text-white shadow-md shadow-blue-100 font-bold"
              >
                <Briefcase size={20} />
                <span className="text-lg">Journey</span>
              </button>
            </nav>
          </div>
        </aside>
        )}

        {/* Main Content Area */}
        <main className="flex-1 bg-white overflow-y-auto custom-scrollbar">
          <div className={`px-8 ${isMobile ? 'pt-8' : 'pt-16'} max-w-3xl mx-auto mb-20`}>
            <div className="mb-12 text-left">
              <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-black text-gray-900 mb-4 tracking-tight`}>Journey</h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                I love fast-paced environments and am looking to challenge myself, always.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className={`relative ${isMobile ? 'pl-4' : 'pl-10'}`}>
              {/* Vertical Line */}
              <div className={`absolute ${isMobile ? 'left-1' : 'left-4'} top-0 bottom-0 w-1 bg-gray-50`}></div>

              <div className="space-y-8">
                {journeyOrgs.map((org) => (
                  <div key={org.id} className="relative">
                    {/* Timeline Dot */}
                    <div className={`absolute ${isMobile ? '-left-[20px]' : '-left-[32px]'} top-9 w-4 h-4 rounded-full bg-gray-300 border-4 border-white z-10 shadow-sm`}></div>

                    {/* Experience Card */}
                    <div
                      onClick={() => toggleAccordion(org.id)}
                      className={`cursor-pointer bg-white ${isMobile ? 'p-4' : 'p-6'} rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg ${expandedId === org.id ? 'shadow-md border-blue-100' : ''}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} gap-4 md:gap-6`}>
                          <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} flex-shrink-0 flex items-center justify-center p-1`}>
                            <img
                              src={org.image}
                              alt={org.name}
                              className="w-full h-full object-contain transition-all"
                              onError={(e) => { e.target.src = `https://via.placeholder.com/150/f1f5f9/64748b?text=${org.name[0]}`; }}
                            />
                          </div>
                          <div className="text-left">
                            <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{org.name}</h3>
                            <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-2">{org.role}</p>
                            <div className={`flex ${isMobile ? 'flex-col gap-1' : 'gap-4'} text-xs text-gray-400 font-bold uppercase`}>
                              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gray-300" /> {org.dates}</span>
                              <span className="flex items-center gap-1.5"><MapPin size={12} className="text-gray-300" /> {org.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-300 pt-1">
                          {expandedId === org.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </div>

                      {/* Collapsible Content */}
                      {expandedId === org.id && (
                        <div className="mt-6 pt-6 border-t border-gray-50 animate-in fade-in slide-in-from-top-2 duration-300">
                          <ul className="space-y-3">
                            {org.description.map((item, i) => (
                              <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed font-medium">
                                <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}} />
    </div>
  );
}

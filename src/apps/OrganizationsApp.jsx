import { useState } from 'react';
import { Folder as FolderIcon, FileText, ExternalLink, MapPin, Calendar, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

export default function OrganizationsApp({ onClose }) {
  const [activeView, setActiveView] = useState('accepted');
  const [expandedId, setExpandedId] = useState(null);

  const resumeLink = "https://docs.google.com/document/d/1jos1zdzfCV9BhdBBNIXAm29DDxN1-hkT/edit?usp=sharing&ouid=112197956071955748407&rtpof=true&sd=true";

  const acceptedOrgs = [
    {
      id: 8,
      name: "Virginia Drive45",
      role: "Lead Mobile App Dev",
      dates: "Oct 2025 - Present",
      location: "On-site",
      image: "https://img.icons8.com/color/512/car.png",
      description: [
        "Led team of developers to reduce manual driving log time by 88% using web-app.",
        "Led development of mobile app tracking 200+ weekly logs, projected to save 780 hrs./year for parents.",
        "Architected app for scalability to 2,500+ statewide users and 15+ Driver’s Ed teachers across VA.",
        "Integrated stakeholder feedback from parents, students, and administrators into product design w/ a fast turnaround time of <1 month including development and customer outreach."
      ]
    },
    {
      id: 7,
      name: "Technology Student Association",
      role: "School Treasurer",
      dates: "Sep 2025 - Present",
      location: "Henrico, VA",
      image: "https://tsaweb.org/ResourcePackages/Bootstrap5/assets/dist/img/TSA_logo.png",
      description: [
        "Coordinated $13K+ in comp. fees, cut processing time 25%; raised $1000+ from 8 corp. donors; led 6 state & school promo campaigns reaching 500+ people.",
        "Worked with officer team to restructure organization leading to Top 3 chapter placement in the state with <1/2 the members of the previous year."
      ]
    },
    {
      id: 5,
      name: "VCU - Biostatistics",
      role: "Lead Researcher",
      dates: "May 2025 - Nov 2025",
      location: "Richmond, VA",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/VCU_typeface.svg",
      description: [
        "Head Data Science Researcher for Graduate Program Director of Biostatistics at VCU.",
        "Executed a novel approach to create Connectome Matrix using MRI scans with MrTrix3 software.",
        "Self-directed research on Duchenne Muscular Dystrophy and reported findings to director.",
        "Used UNIX filesystem and Mac Terminal to execute FSL and FreeSurfer commands for preprocessing files (improving signal-to-noise ratio by 30%), cortical reconstruction (w/ <0.2mm accuracy) and volumetric segmentation (w/ >75% accuracy).",
        "Presented complex results weekly, demonstrating ability to translate technical insights for decision-making."
      ]
    },
    {
      id: 4,
      name: "Camera Check Out",
      role: "Lead Automation Dev",
      dates: "Feb 2025 - Oct 2025",
      location: "Henrico, VA",
      image: "https://img.icons8.com/color/512/compact-camera.png",
      description: [
        "Primary back-end developer for app serving 90+/week customers & lead comms. teacher.",
        "Automated system for head comms teacher to track ~70/wk. student logs for lending class eqpt., saving 15K+ dollars in missing cameras, lenses, and hard drives.",
        "Developed 300+ line Flask application with Bootstrap (front-end) & PostgreSQL database to sync ~150 IDs with Google Sheet cells using a Google Cloud REST API.",
        "Optimized transaction workflows, saving 30 seconds per operation and increasing overall productivity by 20% (~16 hours/month).",
        "Scaled platform for potential expansion to 1,000+ users across multiple county high schools, enabling broader impact and adoption."
      ]
    },
    {
      id: 6,
      name: "FORTYTWO LABS",
      role: "Job Shadow/Intern",
      dates: "Jun 2025 - Jul 2025",
      location: "On-site",
      image: "https://static.wixstatic.com/media/061147_75bc500a62fd477cac1c5c0b7825cc6c~mv2.png/v1/crop/x_0,y_24,w_387,h_145/fill/w_211,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo.png",
      description: [
        "“Most startups fail in the first five years.” That’s what Nilesh Dhande, founder-CEO of Fortytwo Labs, told me as I shadowed him last summer.",
        "In conversations about his quantum-safe products, I gained countless insights from Dhande and other executives.",
        "Learned that true innovation comes from Zero-to-One thinking."
      ]
    },
    {
      id: 3,
      name: "Technology Student Association",
      role: "School Secretary",
      dates: "Oct 2024 - Sep 2025",
      location: "Part-time",
      image: "https://tsaweb.org/ResourcePackages/Bootstrap5/assets/dist/img/TSA_logo.png",
      description: [
        "Assistant to the chapter officers in managing membership and records.",
        "Streamlined communication processes for a chapter of 50+ members."
      ]
    },
    {
      id: 2,
      name: "NASA Space Grant",
      role: "Intern",
      dates: "Oct 2023 - Mar 2024",
      location: "Remote",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
      description: [
        "Selected to the Virginia Space Coast Scholars program, learned NASA mission design and Earth science technologies.",
        "Created an original technical mission report about reducing CO2 emissions using scientific balloons.",
        "Developed research skills, report writing, and mission architecture design."
      ]
    },
    {
      id: 1,
      name: "VCU - College of Engineering",
      role: "Student Researcher",
      dates: "Jul 2023",
      location: "Richmond, VA",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/VCU_typeface.svg",
      description: [
        "Analyzed 1000+ line flood data to identify correlations between precipitation levels and household size.",
        "Utilized regression analysis for proposing strategies to improve climate resilience in Virginia.",
        "Applied data visualization techniques in Alteryx & learned basics of data analysis visualization.",
        "Led development and presentation of findings to 30+ audience members and judges.",
        "Communicated weekly with mentor & peers about developments, leading to news-article feature by VCU."
      ]
    }
  ];

  const rejectedOrgs = [
    { id: 101, name: "SPARC", image: "https://logo.clearbit.com/sparc.camp" },
    { id: 105, name: "Artifact Accelerator (Founders Inc.)", image: "https://logo.clearbit.com/f.inc" },
    { id: 104, name: "MIT Blueprint", image: "https://logo.clearbit.com/hackmit.org" },
    { id: 102, name: "Rockefeller University SSRP", image: "https://logo.clearbit.com/rockefeller.edu" },
    { id: 106, name: "MIT", image: "https://logo.clearbit.com/mit.edu" },
    { id: 103, name: "University of Pennsylvania", image: "https://logo.clearbit.com/upenn.edu" },
    { id: 107, name: "Carnegie Mellon", image: "https://logo.clearbit.com/cmu.edu" },
  ];

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleResumeClick = () => {
    window.open(resumeLink, '_blank');
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-50 text-black font-sans">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-6 pb-3 pt-10 border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-6">
          <button
            className="text-blue-500 cursor-pointer font-medium text-lg flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-1 transition-colors"
            onClick={onClose}
          >
            <span>&lt; Back</span>
          </button>
          <h2 className="font-bold text-xl tracking-tight text-gray-900">
            {activeView === 'accepted' ? 'Experience' : 'Rejected Applications'}
          </h2>
        </div>
      </div>

      <div className="w-full flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-200 bg-gray-50/50 p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 px-2">Locations</h3>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveView('accepted')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${activeView === 'accepted'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-100 font-bold'
                  : 'text-gray-600 hover:bg-gray-200/50 font-semibold'
                  }`}
              >
                <Briefcase size={20} />
                <span className="text-lg">Accepted</span>
              </button>

              <button
                onClick={() => setActiveView('rejected')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${activeView === 'rejected'
                  ? 'bg-red-600 text-white shadow-md shadow-red-100 font-bold'
                  : 'text-gray-600 hover:bg-gray-200/50 font-semibold'
                  }`}
              >
                <FolderIcon size={20} />
                <span className="text-lg">Rejected</span>
              </button>
            </nav>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <button
              onClick={handleResumeClick}
              className="w-full flex items-center justify-between group px-4 py-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-500 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <FileText size={22} />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-gray-900">Résumé</p>
                  <p className="text-sm text-gray-400 font-medium">External Link</p>
                </div>
              </div>
              <ExternalLink size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-white overflow-y-auto custom-scrollbar">
          {activeView === 'accepted' ? (
            <div className="px-8 pt-16 max-w-3xl mx-auto mb-20">
              <div className="mb-12">
                <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Experience Journey</h1>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">
                  I love fast-paced environments and am looking to challenge myself, always.
                </p>
              </div>

              {/* Vertical Timeline */}
              <div className="relative pl-10">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-50"></div>

                <div className="space-y-8">
                  {acceptedOrgs.map((org) => (
                    <div key={org.id} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[32px] top-9 w-5 h-5 rounded-full bg-gray-300 border-4 border-white z-10 shadow-sm"></div>

                      {/* Experience Card */}
                      <div
                        onClick={() => toggleAccordion(org.id)}
                        className={`cursor-pointer bg-white p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg ${expandedId === org.id ? 'shadow-md border-blue-100' : ''}`}
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div className="flex items-center gap-6">
                            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center p-1">
                              <img
                                src={org.image}
                                alt={org.name}
                                className="w-full h-full object-contain transition-all"
                                onError={(e) => { e.target.src = `https://via.placeholder.com/150/f1f5f9/64748b?text=${org.name[0]}`; }}
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{org.name}</h3>
                              <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-2">{org.role}</p>
                              <div className="flex gap-4 text-xs text-gray-400 font-bold uppercase">
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
          ) : (
            <div className="p-8 max-w-2xl mx-auto flex flex-col pt-16 items-start text-left">
              <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Rejected from</h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
                Every setback becomes a reminder to keep trying harder the next time.
              </p>

              <div className="w-full bg-white/70 backdrop-blur-lg rounded-[2.5rem] overflow-hidden border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                {rejectedOrgs.map((org, index) => (
                  <div
                    key={org.id}
                    className={`p-6 px-10 flex items-center justify-between hover:bg-gray-50 transition-colors group ${index !== rejectedOrgs.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {org.name}
                    </h4>
                    <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-red-400 group-hover:scale-125 transition-all"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
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

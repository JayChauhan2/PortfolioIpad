import { Folder as FolderIcon, FileText } from 'lucide-react';

export default function OrganizationsApp({ onClose }) {
  const orgs = [
    { id: 1, name: "Tech Corp Inc.", role: "Software Engineer", duration: "2022 - Present", type: "folder" },
    { id: 2, name: "Startup LLC", role: "Frontend Developer", duration: "2020 - 2022", type: "folder" },
    { id: 3, name: "University", role: "Research Assistant", duration: "2018 - 2020", type: "folder" },
    { id: 4, name: "Resume.pdf", type: "file" }
  ];

  return (
    <div className="w-full h-full flex flex-col bg-gray-50 text-black">
      {/* Top Navigation */}
      <div className="flex items-center justify-between px-4 pb-3 pt-10 border-b border-gray-200 bg-white shadow-sm z-10">
        <div className="flex items-center gap-4">
          <button 
            className="text-blue-500 font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-1" 
            onClick={onClose}
          >
            &lt; Browse
          </button>
          <span className="font-semibold text-sm">Accepted</span>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="w-full flex-1 flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 bg-gray-50 pt-4 flex flex-col">
          <div className="px-4 py-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Locations</h3>
            <ul className="space-y-1">
              <li 
                className="flex items-center gap-2 px-2 py-1 bg-cyan-100 text-cyan-900 rounded-md font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                tabIndex={0}
              >
                <span className="text-blue-500">💻</span> Accepted
              </li>
              <li 
                className="flex items-center gap-2 px-2 py-1 text-gray-700 hover:bg-gray-200 rounded-md font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                tabIndex={0}
              >
                <span className="text-red-400">☁️</span> Rejected
              </li>
            </ul>
          </div>
        </div>

        {/* Files Area */}
        <div className="flex-1 bg-white p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">Organizations</h1>
          <div className="grid grid-cols-4 gap-6">
            {orgs.map((org) => (
              <button 
                key={org.id} 
                className="flex flex-col items-center gap-2 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg p-2 transition-all"
                aria-label={`${org.type === "folder" ? "Folder" : "File"}: ${org.name}`}
              >
                {org.type === "folder" ? (
                  <div className="relative">
                    <FolderIcon size={80} className="text-blue-400 group-hover:text-blue-500 transition-colors" fill="currentColor" />
                  </div>
                ) : (
                  <div className="relative">
                    <FileText size={80} className="text-gray-400 group-hover:text-gray-500 transition-colors bg-white rounded-md shadow-sm border border-gray-200 p-2" />
                  </div>
                )}
                <span className="text-sm font-medium text-center line-clamp-2 max-w-[100px]">{org.name}</span>
                {org.role && <span className="text-xs text-gray-400 -mt-1">{org.duration}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

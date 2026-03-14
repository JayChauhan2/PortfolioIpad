import { Phone, Mail, MapPin, Cake, GraduationCap, Github, Linkedin, Twitter, Copy } from 'lucide-react';

export default function ContactsApp({ onClose }) {
  return (
    <div className="w-full h-full flex flex-col bg-gray-50 text-black relative">
      {/* Top Navigation Bar */}
      <div className="w-full px-6 pt-10 pb-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
        <button 
          className="text-blue-500 cursor-pointer font-medium text-lg flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-1" 
          onClick={onClose}
          aria-label="Back to Browse"
        >
          &lt; Back
        </button>
        <span className="font-semibold text-lg">Jay's Card</span>
        <button className="text-blue-500 font-medium text-lg w-16 text-right focus:outline-none focus:text-blue-700">Edit</button>
      </div>
      
      {/* Centered Content Area */}
      <div className="flex-1 w-full flex flex-col pt-10 pb-16 items-center overflow-y-auto">
        <div className="w-24 h-24 aspect-square flex-shrink-0 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4 bg-gray-100">
          <img src="/MyProfile.png" alt="Jay Chauhan" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-3xl font-semibold mb-6">Jay</h2>
        
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-100 flex items-start justify-between gap-3 group">
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium">email</p>
                <p className="text-blue-500">JayChauhan3@gmail.com</p>
              </div>
            </div>
            <button 
              className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:scale-95 cursor-pointer"
              aria-label="Copy email address"
            >
              <Copy size={18} />
            </button>
          </div>
          <div className="p-4 border-b border-gray-100 flex items-start gap-3">
            <MapPin size={20} className="text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium">home</p>
              <p>Glen Allen, Virginia</p>
            </div>
          </div>
          <div className="p-4 border-b border-gray-100 flex items-start gap-3">
            <GraduationCap size={20} className="text-gray-400 mt-1 shrink-0" />
            <div>
              <p className="text-sm font-medium">education</p>
              <p className="leading-relaxed">Center, honor student of the Center for Information Technology magnet program at Deepend High School</p>
            </div>
          </div>
          <div className="p-4 flex items-start gap-3">
            <Cake size={20} className="text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium">birthday</p>
              <p>January 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

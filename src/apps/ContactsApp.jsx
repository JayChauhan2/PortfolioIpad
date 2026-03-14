import { Phone, Mail, MapPin, Cake, GraduationCap, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactsApp({ onClose }) {
  return (
    <div className="w-full h-full flex flex-col bg-gray-50 text-black relative">
      {/* Top Navigation Bar */}
      <div className="w-full px-6 py-4 flex justify-between items-center bg-white/50 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
        <span className="text-blue-500 cursor-pointer font-medium text-lg flex items-center gap-1" onClick={onClose}>
          &lt; Back
        </span>
        <span className="font-semibold text-lg">Jay's Card</span>
        <span className="text-blue-500 font-medium text-lg w-16 text-right">Edit</span>
      </div>
      
      {/* Centered Content Area */}
      <div className="flex-1 w-full flex flex-col pt-10 pb-16 items-center overflow-y-auto">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-4 border-white shadow-lg flex items-center justify-center text-white text-3xl font-bold mb-4">
          J
        </div>
        <h2 className="text-3xl font-semibold mb-6">Jay (You)</h2>
        
        <div className="flex gap-4 mb-8">
          <button className="flex flex-col items-center gap-1 w-20 py-2 bg-white rounded-xl shadow-sm border border-gray-100 text-blue-500">
            <Mail size={20} />
            <span className="text-xs font-medium">message</span>
          </button>
          <button className="flex flex-col items-center gap-1 w-20 py-2 bg-white rounded-xl shadow-sm border border-gray-100 text-blue-500">
            <Phone size={20} />
            <span className="text-xs font-medium">call</span>
          </button>
        </div>

        <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-100 flex items-start gap-3">
            <Phone size={20} className="text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium">mobile</p>
              <p className="text-blue-500">(555) 123-4567</p>
            </div>
          </div>
          <div className="p-4 border-b border-gray-100 flex items-start gap-3">
            <Mail size={20} className="text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium">email</p>
              <p className="text-blue-500">hello@example.com</p>
            </div>
          </div>
          <div className="p-4 border-b border-gray-100 flex items-start gap-3">
            <MapPin size={20} className="text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium">home</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
          <div className="p-4 border-b border-gray-100 flex items-start gap-3">
            <GraduationCap size={20} className="text-gray-400 mt-1" />
            <div>
              <p className="text-sm font-medium">education</p>
              <p>B.S. in Computer Science</p>
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

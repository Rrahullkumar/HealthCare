import { useState } from "react";
import {
  BarChart3,
  Clock,
  Calendar,
  Users,
  FileText,
  MessageCircle,
  Settings,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const topMenuItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Clock, label: "History" },
    { icon: Calendar, label: "Calendar" },
    { icon: Users, label: "Appointments" },
    { icon: BarChart3, label: "Statistics" },
    { icon: FileText, label: "Tests" },
    { icon: MessageCircle, label: "Chat" },
    { icon: Users, label: "Support" },
  ];

  const bottomMenuItem = { icon: Settings, label: "Setting" };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-50 text-blue-600 md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-blue-100 bg-opacity-50 md:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-40 w-64 h-screen bg-blue-30 border-r border-gray-200 px-4 py-6 flex flex-col justify-between transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          <h3 className="text-gray-400 text-sm font-medium mb-4">General</h3>
          <div className="space-y-2">
            {topMenuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                  item.active
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Settings at bottom */}
        <div className="mt-8">
          <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-50">
            <bottomMenuItem.icon className="w-5 h-5" />
            <span className="font-medium">{bottomMenuItem.label}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
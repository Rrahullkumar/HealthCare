import React from 'react';
import { Search, Bell, Plus, Calendar, MessageCircle, BarChart3, Settings, Clock, Users, FileText, Activity, Heart, User, ChevronLeft, ChevronRight } from 'lucide-react';

// Header Component
const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div className="text-2xl font-bold">
          <span className="text-cyan-400">Health</span>
          <span className="text-gray-800">care.</span>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center cursor-pointer">
          <Plus className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
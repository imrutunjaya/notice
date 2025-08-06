import React from 'react';
import { Shield, Search } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="bg-gray-50 text-gray-700 px-4 py-1 text-xs border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>🇮🇳 Government of India | Ministry of Education</span>
          <div className="flex items-center space-x-2">
            <button className="hover:text-blue-600">हिंदी</button>
            <span>|</span>
            <button className="hover:text-blue-600">English</button>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">National Education Portal</h1>
              <p className="text-xs text-gray-600">Digital India • NEP 2020</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded px-3 py-1">
              <Search className="w-4 h-4 mr-2 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="bg-transparent placeholder-gray-500 text-gray-700 outline-none text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
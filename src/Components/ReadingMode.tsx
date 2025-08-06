import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, BookOpen, Eye, Settings } from 'lucide-react';
import { Subject } from '../types';

interface ReadingModeProps {
  subject: Subject;
  onClose: () => void;
}

export const ReadingMode: React.FC<ReadingModeProps> = ({ subject, onClose }) => {
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.6);
  const [showSettings, setShowSettings] = useState(false);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-3">
          <Eye className="w-6 h-6 text-blue-600" />
          <div>
            <h1 className="text-lg font-semibold text-gray-800">{subject.code}</h1>
            <p className="text-sm text-gray-600">Reading Mode</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseFontSize}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            title="Decrease font size"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-600 min-w-[3rem] text-center">
            {fontSize}px
          </span>
          <button
            onClick={increaseFontSize}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            title="Increase font size"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            title="Reading settings"
          >
            <Settings className="w-5 h-5" />
          </button>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            title="Close reading mode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Line Height:</label>
              <input
                type="range"
                min="1.2"
                max="2.0"
                step="0.1"
                value={lineHeight}
                onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                className="w-20"
              />
              <span className="text-sm text-gray-600">{lineHeight}</span>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div 
          className="max-w-4xl mx-auto p-8"
          style={{ fontSize: `${fontSize}px`, lineHeight }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{subject.title}</h1>
            <div className="flex items-start space-x-2 text-gray-700 mb-6">
              <BookOpen className="w-5 h-5 mt-1 flex-shrink-0 text-blue-600" />
              <p className="leading-relaxed">{subject.objective}</p>
            </div>
          </div>

          <div className="space-y-8">
            {subject.units.map((unit, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {unit.title}
                </h2>
                <div className="space-y-3">
                  {unit.content.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-700 leading-relaxed">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {subject.practicals && (
              <div className="border-l-4 border-green-500 pl-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Practicals
                </h2>
                <div className="space-y-2">
                  {subject.practicals.map((practical, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      • {practical}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
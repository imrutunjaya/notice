import React from 'react';
import { BookOpen, Target, Beaker, StickyNote, Eye } from 'lucide-react';
import { Subject } from '../types';

interface SubjectViewProps {
  subject: Subject;
  onCreateNote: (subjectCode: string, unitTitle: string) => void;
  onOpenReader: (subject: Subject) => void;
}

export const SubjectView: React.FC<SubjectViewProps> = ({
  subject,
  onCreateNote,
  onOpenReader,
}) => {
  return (
    <div className="p-4 max-w-5xl mx-auto bg-white min-h-screen">
      <div className="bg-gray-50 border rounded p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">{subject.code}</h1>
              <h2 className="text-sm text-gray-600">{subject.title}</h2>
            </div>
          </div>
          <button
            onClick={() => onOpenReader(subject)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-all"
          >
            <Eye className="w-4 h-4" />
            <span>Reading Mode</span>
          </button>
        </div>
        
        <div className="flex items-start space-x-2 bg-white border rounded p-3 mt-3">
          <Target className="w-4 h-4 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-sm mb-1 text-gray-800">Course Objective</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{subject.objective}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {subject.units.map((unit, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>{unit.title}</span>
                </h3>
                <button
                  onClick={() => onCreateNote(subject.code, unit.title)}
                  className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition-all"
                >
                  <StickyNote className="w-3 h-3" />
                  <span>Note</span>
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <ul className="space-y-2">
                {unit.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2 p-2 bg-gray-50 rounded hover:bg-gray-100 transition-all">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {subject.practicals && (
          <div className="bg-gray-50 border border-gray-200 rounded p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center space-x-2">
              <Beaker className="w-4 h-4 text-blue-600" />
              <span>Practicals</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {subject.practicals.map((practical, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-700 px-2 py-1 rounded text-xs border border-gray-200"
                >
                  {practical}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
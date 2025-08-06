import React from 'react';
import { BookOpen, GraduationCap, X, Award, Users, Clock } from 'lucide-react';
import { Semester } from '../types';

interface SemesterSelectorProps {
  semesters: Semester[];
  isOpen: boolean;
  onClose: () => void;
  onSelectSemester: (semester: Semester) => void;
}

export const SemesterSelector: React.FC<SemesterSelectorProps> = ({
  semesters,
  isOpen,
  onClose,
  onSelectSemester,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded shadow-lg max-w-4xl w-full max-h-[85vh] overflow-hidden border">
        <div className="flex items-center justify-between p-4 border-b bg-gray-50">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">Select Semester</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[calc(85vh-80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {semesters.map((semester) => (
              <div
                key={semester.id}
                onClick={() => onSelectSemester(semester)}
                className="cursor-pointer bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-300 rounded p-4 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                      {semester.id}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-800">
                        {semester.title}
                      </h3>
                      <p className="text-xs text-gray-600">{semester.totalCredits}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  {semester.subjects.slice(0, 2).map((subject, index) => (
                    <div key={index} className="flex items-start space-x-2 p-2 bg-gray-50 rounded text-xs">
                      <BookOpen className="w-3 h-3 text-gray-500 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-800">{subject.code}</span>
                        <p className="text-gray-600">{subject.title.split('(')[0].trim()}</p>
                      </div>
                    </div>
                  ))}
                  {semester.subjects.length > 2 && (
                    <div className="text-xs text-blue-600 p-2">
                      <span>+{semester.subjects.length - 2} more subjects</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t border-gray-200 pt-2">
                  <span className="text-xs text-gray-600">{semester.subjects.length} Subjects</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
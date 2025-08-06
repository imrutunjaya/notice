import React from 'react';
import { X, Edit, Calendar, Tag, BookOpen } from 'lucide-react';
import { Note } from '../types';

interface NoteViewerProps {
  note: Note;
  onEdit: () => void;
}

export const NoteViewer: React.FC<NoteViewerProps> = ({
  note,
  onEdit,
}) => {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-6 h-6 text-gray-700" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{note.title}</h2>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <Tag className="w-3 h-3" />
                <span>{note.subjectCode}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>Updated: {new Date(note.updatedAt).toLocaleDateString()}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onEdit}
            className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Edit className="w-4 h-4" />
            <span>Edit</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
            <p className="text-sm text-gray-600">
              <strong>Subject:</strong> {note.subjectCode} | <strong>Unit:</strong> {note.unitTitle}
            </p>
          </div>
          
          <div className="prose max-w-none bg-white p-6 rounded-lg shadow-sm border">
            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed text-base">
              {note.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
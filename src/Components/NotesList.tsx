import React, { useState } from 'react';
import { FileText, Search, Calendar, Tag, Trash2, Edit, Eye } from 'lucide-react';
import { Note } from '../types';

interface NotesListProps {
  notes: Note[];
  onEditNote: (note: Note) => void;
  onDeleteNote: (noteId: string) => void;
  onViewNote: (note: Note) => void;
}

export const NotesList: React.FC<NotesListProps> = ({
  notes,
  onEditNote,
  onDeleteNote,
  onViewNote,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjects = Array.from(new Set(notes.map(note => note.subjectCode)));

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = !selectedSubject || note.subjectCode === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const sortedNotes = filteredNotes.sort((a, b) => 
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-3 mb-4">
          <FileText className="w-6 h-6 text-gray-700" />
          <h2 className="text-xl font-semibold text-gray-800">All Notes</h2>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            {notes.length}
          </span>
        </div>
        
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          >
            <option value="">All Subjects</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {sortedNotes.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">No notes found</h3>
            <p className="text-gray-400">
              {searchTerm || selectedSubject ? 'Try adjusting your filters' : 'Create your first note to get started'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedNotes.map((note) => (
              <div
                key={note.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-800 flex-1 mr-3">
                    {note.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => onViewNote(note)}
                     className="p-1 hover:bg-blue-100 hover:text-blue-600 rounded transition-colors"
                      title="View note"
                    >
                      <Eye className="w-4 h-4 text-gray-500" />
                    </button>
                    <button
                      onClick={() => onEditNote(note)}
                     className="p-1 hover:bg-orange-100 hover:text-orange-600 rounded transition-colors"
                      title="Edit note"
                    >
                      <Edit className="w-4 h-4 text-gray-500" />
                    </button>
                    <button
                      onClick={() => onDeleteNote(note.id)}
                     className="p-1 hover:bg-red-100 hover:text-red-600 rounded transition-colors"
                      title="Delete note"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <span className="flex items-center space-x-1">
                    <Tag className="w-3 h-3" />
                    <span>{note.subjectCode}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-2">
                  {note.content.substring(0, 150)}
                  {note.content.length > 150 && '...'}
                </p>
                
                <div className="mt-2 text-xs text-gray-400">
                  Unit: {note.unitTitle}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
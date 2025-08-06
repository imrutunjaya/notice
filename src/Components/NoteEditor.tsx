import React, { useState, useEffect } from 'react';
import { Save, X, FileText, Calendar } from 'lucide-react';
import { Note } from '../types';

interface NoteEditorProps {
  note?: Note;
  subjectCode?: string;
  unitTitle?: string;
  onSave: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onClose: () => void;
}

export const NoteEditor: React.FC<NoteEditorProps> = ({
  note,
  subjectCode = '',
  unitTitle = '',
  onSave,
  onClose,
}) => {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  useEffect(() => {
    if (!note && subjectCode && unitTitle) {
      setTitle(`Notes: ${subjectCode} - ${unitTitle}`);
    }
  }, [note, subjectCode, unitTitle]);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;

    onSave({
      title: title.trim(),
      content: content.trim(),
      subjectCode: note?.subjectCode || subjectCode,
      unitTitle: note?.unitTitle || unitTitle,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-3">
          <FileText className="w-6 h-6 text-blue-600" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Note Editor</h2>
            {note && (
              <p className="text-sm text-gray-600 flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Last updated: {new Date(note.updatedAt).toLocaleDateString()}</span>
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleSave}
            disabled={!title.trim() || !content.trim()}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Note Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter note title..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Start writing your notes..."
            className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm leading-relaxed"
          />
        </div>

        <div className="text-sm text-gray-500">
          <p>Subject: {note?.subjectCode || subjectCode}</p>
          <p>Unit: {note?.unitTitle || unitTitle}</p>
          <p className="mt-2">Tip: Use Ctrl+S to save quickly</p>
        </div>
      </div>
    </div>
  );
};
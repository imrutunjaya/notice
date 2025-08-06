import { useState, useEffect } from 'react';
import { Note } from '../types';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('study-app-notes');
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes).map((note: any) => ({
          ...note,
          createdAt: new Date(note.createdAt),
          updatedAt: new Date(note.updatedAt),
        }));
        setNotes(parsedNotes);
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    }
  }, []);

  const saveNotes = (updatedNotes: Note[]) => {
    setNotes(updatedNotes);
    localStorage.setItem('study-app-notes', JSON.stringify(updatedNotes));
  };

  const addNote = (noteData: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: Note = {
      ...noteData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    saveNotes([...notes, newNote]);
    return newNote;
  };

  const updateNote = (id: string, noteData: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    const updatedNotes = notes.map(note =>
      note.id === id
        ? { ...note, ...noteData, updatedAt: new Date() }
        : note
    );
    saveNotes(updatedNotes);
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    saveNotes(updatedNotes);
  };

  const getNotesBySubject = (subjectCode: string) => {
    return notes.filter(note => note.subjectCode === subjectCode);
  };

  const getNote = (id: string) => {
    return notes.find(note => note.id === id);
  };

  return {
    notes,
    addNote,
    updateNote,
    deleteNote,
    getNotesBySubject,
    getNote,
  };
};
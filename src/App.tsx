import React from 'react';
import { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import { Header } from './components/Header';
import { SemesterSelector } from './components/SemesterSelector';
import { TabBar } from './components/TabBar';
import { SubjectView } from './components/SubjectView';
import { NoteEditor } from './components/NoteEditor';
import { ReadingMode } from './components/ReadingMode';
import { NotesList } from './components/NotesList';
import { NoteViewer } from './components/NoteViewer';
import { semesterData } from './data/semesterData';
import { useNotes } from './hooks/useNotes';
import { useTabs } from './hooks/useTabs';
import { Semester, Subject, Note } from './types';

function App() {
  const [showSemesterSelector, setShowSemesterSelector] = useState(false);
  const [readingMode, setReadingMode] = useState<Subject | null>(null);
  const { notes, addNote, updateNote, deleteNote, getNote } = useNotes();
  const { tabs, addTab, setActiveTab, closeTab, getActiveTab } = useTabs();

  useEffect(() => {
    setShowSemesterSelector(true);
  }, []);

  const handleSelectSemester = (semester: Semester) => {
    setShowSemesterSelector(false);
    // Create tabs for each subject in the semester
    semester.subjects.forEach(subject => {
      addTab({
        title: subject.code,
        type: 'subject',
        data: subject,
      });
    });
  };

  const handleCreateNote = (subjectCode: string, unitTitle: string) => {
    addTab({
      title: `New Note - ${subjectCode}`,
      type: 'note',
      data: { subjectCode, unitTitle, isNew: true },
    });
  };

  const handleOpenReader = (subject: Subject) => {
    setReadingMode(subject);
  };

  const handleSaveNote = (noteData: any) => {
    const savedNote = addNote(noteData);
    const activeTab = getActiveTab();
    if (activeTab && activeTab.type === 'note') {
      // Update tab to show saved note
      activeTab.data = { ...savedNote, isNew: false };
      activeTab.title = savedNote.title;
    }
  };

  const handleUpdateNote = (noteId: string, noteData: any) => {
    updateNote(noteId, noteData);
    const activeTab = getActiveTab();
    if (activeTab && activeTab.type === 'note') {
      activeTab.title = noteData.title;
    }
  };

  const handleNewTab = () => {
    setShowSemesterSelector(true);
  };

  const handleNotesTab = () => {
    addTab({
      title: 'All Notes',
      type: 'notes-list',
      data: {},
    });
  };

  const handleEditNote = (note: Note) => {
    addTab({
      title: `Edit: ${note.title}`,
      type: 'note',
      data: { ...note, isNew: false },
    });
  };

  const handleViewNote = (note: Note) => {
    addTab({
      title: note.title,
      type: 'reader',
      data: note,
    });
  };

  const activeTab = getActiveTab();

  if (readingMode) {
    return (
      <ReadingMode
        subject={readingMode}
        onClose={() => setReadingMode(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <SemesterSelector
        semesters={semesterData}
        isOpen={showSemesterSelector}
        onClose={() => setShowSemesterSelector(false)}
        onSelectSemester={handleSelectSemester}
      />

      {tabs.length > 0 ? (
        <div className="min-h-screen flex flex-col">
          <TabBar
            tabs={tabs}
            onTabClick={setActiveTab}
            onTabClose={closeTab}
            onNewTab={handleNewTab}
            onNotesTab={handleNotesTab}
          />
          
          <div className="flex-1 overflow-hidden bg-white">
            {activeTab && (
              <>
                {activeTab.type === 'subject' && (
                  <div className="h-full overflow-y-auto">
                    <SubjectView
                      subject={activeTab.data}
                      onCreateNote={handleCreateNote}
                      onOpenReader={handleOpenReader}
                    />
                  </div>
                )}
                
                {activeTab.type === 'note' && (
                  <NoteEditor
                    note={activeTab.data.isNew ? undefined : activeTab.data}
                    subjectCode={activeTab.data.subjectCode}
                    unitTitle={activeTab.data.unitTitle}
                    onSave={handleSaveNote}
                    onClose={() => closeTab(activeTab.id)}
                  />
                )}

                {activeTab.type === 'notes-list' && (
                  <NotesList
                    notes={notes}
                    onEditNote={handleEditNote}
                    onDeleteNote={deleteNote}
                    onViewNote={handleViewNote}
                  />
                )}

                {activeTab.type === 'reader' && activeTab.data.content && (
                  <NoteViewer
                    note={activeTab.data}
                    onEdit={() => handleEditNote(activeTab.data)}
                  />
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              National Education Portal
            </h1>
            <p className="text-sm text-gray-600 mb-6 max-w-lg mx-auto">
              Access your academic curriculum and create notes with government-approved educational content
            </p>
            <button
              onClick={() => setShowSemesterSelector(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-all"
            >
              Select Semester
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

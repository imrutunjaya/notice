import React from 'react';
import { X, BookOpen, FileText, Eye, Plus, List } from 'lucide-react';
import { Tab } from '../types';

interface TabBarProps {
  tabs: Tab[];
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  onNewTab: () => void;
  onNotesTab: () => void;
}

export const TabBar: React.FC<TabBarProps> = ({
  tabs,
  onTabClick,
  onTabClose,
  onNewTab,
  onNotesTab,
}) => {
  const getTabIcon = (type: string) => {
    switch (type) {
      case 'subject':
        return <BookOpen className="w-4 h-4" />;
      case 'note':
        return <FileText className="w-4 h-4" />;
      case 'reader':
        return <Eye className="w-4 h-4" />;
      case 'notes-list':
        return <List className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex items-center bg-white border-b border-gray-200 overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center space-x-2 px-4 py-2 border-r border-gray-200 cursor-pointer min-w-0 max-w-xs group transition-all ${
            tab.isActive
              ? 'bg-blue-50 border-b-2 border-b-blue-500 text-blue-800'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
          onClick={() => onTabClick(tab.id)}
        >
          <div className={`${tab.isActive ? 'text-blue-600' : 'text-gray-500'}`}>
            {getTabIcon(tab.type)}
          </div>
          <span className="truncate text-sm font-medium">{tab.title}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(tab.id);
            }}
            className="opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-600 rounded p-1 transition-all"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
      <div className="flex">
        <button
          onClick={onNotesTab}
          className="p-2 hover:bg-gray-50 hover:text-blue-600 transition-all border-r border-gray-200"
          title="All Notes"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={onNewTab}
          className="p-2 hover:bg-gray-50 hover:text-blue-600 transition-all"
          title="New Tab"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
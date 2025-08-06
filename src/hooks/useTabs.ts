import { useState } from 'react';
import { Tab } from '../types';

export const useTabs = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  const addTab = (tab: Omit<Tab, 'id' | 'isActive'>) => {
    const newTab: Tab = {
      ...tab,
      id: Date.now().toString(),
      isActive: false,
    };
    
    setTabs(prevTabs => [
      ...prevTabs.map(t => ({ ...t, isActive: false })),
      { ...newTab, isActive: true }
    ]);
    
    return newTab.id;
  };

  const setActiveTab = (tabId: string) => {
    setTabs(prevTabs =>
      prevTabs.map(tab => ({
        ...tab,
        isActive: tab.id === tabId,
      }))
    );
  };

  const closeTab = (tabId: string) => {
    setTabs(prevTabs => {
      const updatedTabs = prevTabs.filter(tab => tab.id !== tabId);
      
      // If we closed the active tab, make the last tab active
      if (prevTabs.find(tab => tab.id === tabId)?.isActive && updatedTabs.length > 0) {
        updatedTabs[updatedTabs.length - 1].isActive = true;
      }
      
      return updatedTabs;
    });
  };

  const updateTab = (tabId: string, updates: Partial<Tab>) => {
    setTabs(prevTabs =>
      prevTabs.map(tab =>
        tab.id === tabId ? { ...tab, ...updates } : tab
      )
    );
  };

  const getActiveTab = () => {
    return tabs.find(tab => tab.isActive);
  };

  return {
    tabs,
    addTab,
    setActiveTab,
    closeTab,
    updateTab,
    getActiveTab,
  };
};
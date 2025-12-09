import React, { useState } from 'react';
import { User, Settings as SettingsIcon, AlertCircle, Lock, Mail, Type } from 'lucide-react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon },
    { id: 'account', label: 'Account', icon: AlertCircle },
  ];

  return (
    <div className="bg-gray-100 p-1 rounded-xl flex items-center mb-8">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 flex items-center justify-center py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              isActive 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
            }`}
          >
            <Icon size={18} className={`mr-2 ${isActive ? 'text-gray-900' : 'text-gray-400'}`} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
export default TabNavigation;
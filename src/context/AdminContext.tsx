
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AdminContextType {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
  editableContent: Record<string, string>;
  updateContent: (key: string, value: string) => void;
}

const defaultContent = {
  'hero-title': 'Votre Défense, Notre Engagement',
  'hero-subtitle': 'Excellence juridique au service de vos droits. Notre cabinet d\'avocats expert vous accompagne dans toutes vos démarches légales.',
  'hero-slogan': 'Votre justice, notre priorité.',
  'specialties-title': 'Nos Domaines d\'Expertise',
  'specialties-subtitle': 'Notre cabinet vous accompagne dans différents domaines du droit avec une expertise reconnue et un engagement sans faille pour vos intérêts.',
  'cta-title': 'Besoin d\'un Conseil Juridique?',
  'cta-text': 'Notre équipe d\'avocats expérimentés est prête à vous accompagner. Prenez rendez-vous pour une consultation initiale gratuite et discutons de votre situation.',
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [editableContent, setEditableContent] = useState<Record<string, string>>(defaultContent);

  const toggleAdminMode = () => {
    setIsAdminMode(prev => !prev);
  };

  const updateContent = (key: string, value: string) => {
    setEditableContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <AdminContext.Provider value={{ isAdminMode, toggleAdminMode, editableContent, updateContent }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

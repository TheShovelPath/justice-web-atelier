
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AdminContextType {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
  editableContent: Record<string, string>;
  updateContent: (key: string, value: string) => void;
}

// Contenu par défaut étendu pour inclure tous les textes modifiables sur toutes les pages
const defaultContent = {
  // Page d'accueil - Hero Section
  'hero-title': 'Votre Défense, Notre Engagement',
  'hero-subtitle': 'Excellence juridique au service de vos droits. Notre cabinet d\'avocats expert vous accompagne dans toutes vos démarches légales.',
  'hero-slogan': 'Votre justice, notre priorité.',
  
  // Page d'accueil - Specialties Section
  'specialties-title': 'Nos Domaines d\'Expertise',
  'specialties-subtitle': 'Notre cabinet vous accompagne dans différents domaines du droit avec une expertise reconnue et un engagement sans faille pour vos intérêts.',
  
  // Page d'accueil - CTA Section
  'cta-title': 'Besoin d\'un Conseil Juridique?',
  'cta-text': 'Notre équipe d\'avocats expérimentés est prête à vous accompagner. Prenez rendez-vous pour une consultation initiale gratuite et discutons de votre situation.',
  
  // Page Services
  'services-title': 'Nos Services Juridiques',
  'services-subtitle': 'Une expertise complète pour répondre à vos besoins légaux',
  'droit-affaires-title': 'Droit des affaires',
  'droit-affaires-desc': 'Accompagnement juridique pour les entreprises, conseils sur les contrats commerciaux et résolution des litiges commerciaux.',
  'droit-famille-title': 'Droit de la famille',
  'droit-famille-desc': 'Divorce, garde d\'enfants, successions et régimes matrimoniaux. Nous vous assistons dans ces moments délicats.',
  'droit-penal-title': 'Droit pénal',
  'droit-penal-desc': 'Défense des particuliers et des entreprises face aux poursuites pénales, avec une approche stratégique.',
  'droit-immobilier-title': 'Droit immobilier',
  'droit-immobilier-desc': 'Litiges, contrats et transactions immobilières. Expertise pour sécuriser vos projets immobiliers.',
  
  // Page Contact
  'contact-title': 'Contactez-Nous',
  'contact-subtitle': 'Notre équipe est à votre écoute pour répondre à toutes vos questions',
  'contact-address': '123 Avenue de la Justice, 75001 Paris, France',
  'contact-phone': '+33 1 23 45 67 89',
  'contact-email': 'contact@cabinet-avocat.fr',
  'contact-hours': 'Lundi - Vendredi: 9h00 - 18h00',
  
  // Page À propos
  'about-title': 'À Propos de Notre Cabinet',
  'about-subtitle': 'Une équipe d\'avocats engagés pour votre succès juridique',
  'about-mission': 'Notre mission est de fournir des conseils juridiques de qualité supérieure avec intégrité, professionnalisme et dévouement aux intérêts de nos clients.',
  'about-vision': 'Notre vision est de devenir le cabinet d\'avocats de référence, reconnu pour son excellence et son approche centrée sur le client.',
  'about-history': 'Fondé en 2005, notre cabinet n\'a cessé de se développer pour devenir un acteur majeur du paysage juridique français.',
  
  // Éléments du footer
  'footer-address': '123 Avenue de la Justice, 75001 Paris',
  'footer-phone': '+33 1 23 45 67 89',
  'footer-email': 'contact@cabinet-avocat.fr',
  'footer-copyright': '© 2023 Cabinet d\'Avocats. Tous droits réservés.',
  
  // Éléments de témoignages
  'testimonial-title': 'Ce Que Disent Nos Clients',
  'testimonial-subtitle': 'La satisfaction de nos clients est notre plus grande réussite',
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

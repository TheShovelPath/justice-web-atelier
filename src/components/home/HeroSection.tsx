
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import EditableContent from '@/components/admin/EditableContent';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-elegant/10 dark:from-royal-dark dark:to-royal/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className="space-y-6">
            <div className="inline-block mb-2">
              <span className="text-sm font-medium bg-royal text-white px-3 py-1 rounded-full">
                <EditableContent contentKey="header-cabinet" tag="span">
                  Cabinet d'Avocats
                </EditableContent>
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-royal-dark dark:text-white leading-tight">
              <EditableContent 
                contentKey="hero-title" 
                tag="span"
              >
                Votre Défense, <br />
                <span className="text-gold">Notre Engagement</span>
              </EditableContent>
            </h1>
            
            <EditableContent 
              contentKey="hero-subtitle" 
              tag="p"
              className="text-lg md:text-xl text-royal/80 dark:text-elegant mt-4 max-w-lg"
            >
              Excellence juridique au service de vos droits. Notre cabinet d'avocats expert vous accompagne dans toutes vos démarches légales.
            </EditableContent>
            
            <EditableContent 
              contentKey="hero-slogan" 
              tag="h2"
              className="font-playfair text-2xl text-royal dark:text-gold-light font-semibold mt-6"
            >
              Votre justice, notre priorité.
            </EditableContent>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="btn-primary">
                <Link to="/contact">
                  <Phone size={16} />
                  <EditableContent contentKey="hero-cta" tag="span">
                    Demandez une consultation gratuite
                  </EditableContent>
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-royal/30 hover:border-royal dark:border-elegant/30 dark:hover:border-white">
                <Link to="/a-propos">
                  <EditableContent contentKey="hero-cta-secondary" tag="span">
                    En savoir plus
                  </EditableContent>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right column: Balance of justice animation */}
          <div className="flex justify-center">
            <div className="text-9xl md:text-[10rem] animate-balance-rotate text-gold relative">
              ⚖️
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-full">
                <div className="flex justify-center gap-3 mt-6">
                  <span className="w-3 h-3 rounded-full bg-royal animate-pulse"></span>
                  <span className="w-3 h-3 rounded-full bg-elegant animate-pulse delay-150"></span>
                  <span className="w-3 h-3 rounded-full bg-gold animate-pulse delay-300"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

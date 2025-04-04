import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const specialties = [
  {
    id: 1,
    title: "Droit des affaires",
    description: "Accompagnement juridique pour les entreprises, conseils sur les contrats commerciaux et résolution des litiges commerciaux.",
    icon: "💼",
    link: "/services#droit-affaires"
  },
  {
    id: 2,
    title: "Droit de la famille",
    description: "Divorce, garde d'enfants, successions et régimes matrimoniaux. Nous vous assistons dans ces moments délicats.",
    icon: "👪",
    link: "/services#droit-famille"
  },
  {
    id: 3,
    title: "Droit pénal",
    description: "Défense des particuliers et des entreprises face aux poursuites pénales, avec une approche stratégique.",
    icon: "⚖️",
    link: "/services#droit-penal"
  },
  {
    id: 4,
    title: "Droit immobilier",
    description: "Litiges, contrats et transactions immobilières. Expertise pour sécuriser vos projets immobiliers.",
    icon: "🏢",
    link: "/services#droit-immobilier"
  }
];

const SpecialtiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-royal/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-royal dark:text-white mb-4">
            Nos Domaines d'Expertise
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-royal/70 dark:text-elegant max-w-2xl mx-auto">
            Notre cabinet vous accompagne dans différents domaines du droit avec une expertise reconnue et un engagement sans faille pour vos intérêts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <Card 
              key={specialty.id}
              className="service-card border hover:shadow-lg dark:bg-royal-dark/40 dark:border-elegant/10 dark:hover:border-gold/20 transition-all group"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <CardTitle className="text-xl font-playfair text-royal-dark dark:text-white">
                  {specialty.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-royal/70 dark:text-elegant/90 mb-6">
                  {specialty.description}
                </CardDescription>
                <Link 
                  to={specialty.link}
                  className="inline-flex items-center gap-1 text-royal dark:text-gold hover:gap-2 transition-all duration-300 font-medium"
                >
                  En savoir plus <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;

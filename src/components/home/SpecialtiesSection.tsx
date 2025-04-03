
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import EditableContent from '@/components/admin/EditableContent';

const specialties = [
  {
    id: 1,
    titleKey: "droit-affaires-title",
    descriptionKey: "droit-affaires-desc",
    icon: "💼",
    link: "/services#droit-affaires"
  },
  {
    id: 2,
    titleKey: "droit-famille-title",
    descriptionKey: "droit-famille-desc",
    icon: "👪",
    link: "/services#droit-famille"
  },
  {
    id: 3,
    titleKey: "droit-penal-title",
    descriptionKey: "droit-penal-desc",
    icon: "⚖️",
    link: "/services#droit-penal"
  },
  {
    id: 4,
    titleKey: "droit-immobilier-title",
    descriptionKey: "droit-immobilier-desc",
    icon: "🏢",
    link: "/services#droit-immobilier"
  }
];

const SpecialtiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-royal/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <EditableContent 
            contentKey="specialties-title"
            tag="h2"
            className="font-playfair text-3xl md:text-4xl font-bold text-royal dark:text-white mb-4"
          >
            Nos Domaines d'Expertise
          </EditableContent>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <EditableContent 
            contentKey="specialties-subtitle"
            tag="p"
            className="text-royal/70 dark:text-elegant max-w-2xl mx-auto"
          >
            Notre cabinet vous accompagne dans différents domaines du droit avec une expertise reconnue et un engagement sans faille pour vos intérêts.
          </EditableContent>
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
                  <EditableContent contentKey={specialty.titleKey}>
                    {specialty.titleKey === "droit-affaires-title" ? "Droit des affaires" :
                     specialty.titleKey === "droit-famille-title" ? "Droit de la famille" :
                     specialty.titleKey === "droit-penal-title" ? "Droit pénal" : "Droit immobilier"}
                  </EditableContent>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-royal/70 dark:text-elegant/90 mb-6">
                  <EditableContent contentKey={specialty.descriptionKey}>
                    {specialty.descriptionKey === "droit-affaires-desc" ? 
                      "Accompagnement juridique pour les entreprises, conseils sur les contrats commerciaux et résolution des litiges commerciaux." :
                     specialty.descriptionKey === "droit-famille-desc" ?
                      "Divorce, garde d'enfants, successions et régimes matrimoniaux. Nous vous assistons dans ces moments délicats." :
                     specialty.descriptionKey === "droit-penal-desc" ?
                      "Défense des particuliers et des entreprises face aux poursuites pénales, avec une approche stratégique." :
                      "Litiges, contrats et transactions immobilières. Expertise pour sécuriser vos projets immobiliers."}
                  </EditableContent>
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

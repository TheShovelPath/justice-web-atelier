
import React, { useEffect } from 'react';
import { ArrowRight, Briefcase, Users, Scale, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Services data
const services = [
  {
    id: "droit-affaires",
    title: "Droit des affaires",
    icon: Briefcase,
    description: "Accompagnement juridique pour les entreprises, conseils sur les contrats commerciaux et résolution des litiges commerciaux.",
    details: [
      "Création et gestion d'entreprises",
      "Contrats commerciaux",
      "Fusions et acquisitions",
      "Droit de la concurrence",
      "Litiges commerciaux",
      "Protection de la propriété intellectuelle"
    ]
  },
  {
    id: "droit-famille",
    title: "Droit de la famille",
    icon: Users,
    description: "Divorce, garde d'enfants, successions et régimes matrimoniaux. Nous vous assistons dans ces moments délicats.",
    details: [
      "Divorce et séparation",
      "Garde d'enfants et pension alimentaire",
      "Adoption",
      "Succession et héritage",
      "Protection des majeurs vulnérables",
      "Régimes matrimoniaux"
    ]
  },
  {
    id: "droit-penal",
    title: "Droit pénal",
    icon: Scale,
    description: "Défense des particuliers et des entreprises face aux poursuites pénales, avec une approche stratégique.",
    details: [
      "Défense pénale",
      "Droit pénal des affaires",
      "Infractions routières",
      "Crimes et délits",
      "Assistance aux victimes",
      "Procédures d'appel"
    ]
  },
  {
    id: "droit-immobilier",
    title: "Droit immobilier",
    icon: Building,
    description: "Litiges, contrats et transactions immobilières. Expertise pour sécuriser vos projets immobiliers.",
    details: [
      "Transactions immobilières",
      "Baux commerciaux et d'habitation",
      "Copropriété",
      "Litiges immobiliers",
      "Construction et urbanisme",
      "Gestion locative"
    ]
  }
];

const ServicesPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-royal dark:text-white mb-4">
            Nos Services Juridiques
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-royal/70 dark:text-elegant max-w-2xl mx-auto text-lg">
            Notre cabinet d'avocats vous accompagne dans différents domaines du droit avec une expertise reconnue et un engagement sans faille pour vos intérêts.
          </p>
        </div>

        {/* Services overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <Card 
              key={service.id}
              className="service-card border hover:shadow-lg dark:bg-royal-dark/40 dark:border-elegant/10 dark:hover:border-gold/20 transition-all group h-full"
            >
              <CardHeader>
                <div className="text-4xl mb-4">
                  <service.icon className="text-gold h-12 w-12" />
                </div>
                <CardTitle className="text-xl font-playfair text-royal-dark dark:text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-royal/70 dark:text-elegant/90 mb-6">
                  {service.description}
                </CardDescription>
                <div 
                  className="inline-flex items-center gap-1 text-royal dark:text-gold hover:gap-2 transition-all duration-300 font-medium cursor-pointer"
                  onClick={() => document.getElementById(service.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  En savoir plus <ArrowRight size={16} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed services */}
        <div className="space-y-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="scroll-mt-24 bg-white dark:bg-royal-dark/40 p-8 rounded-lg shadow-md border border-elegant/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <service.icon className="text-gold h-10 w-10" />
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-royal-dark dark:text-white">
                  {service.title}
                </h2>
              </div>
              
              <p className="text-royal/70 dark:text-elegant mb-8 text-lg">
                {service.description}
              </p>
              
              <h3 className="font-playfair text-xl font-semibold text-royal dark:text-gold-light mb-4">
                Nos prestations en {service.title.toLowerCase()}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="mt-1 text-gold">✓</div>
                    <p className="text-royal/90 dark:text-elegant">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

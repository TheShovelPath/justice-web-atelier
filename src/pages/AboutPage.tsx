
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

const teamMembers = [
  {
    id: 1,
    name: "Marie Dupont",
    title: "Associée principale",
    specialty: "Droit des affaires",
    image: "https://i.pravatar.cc/300?img=1",
    bio: "Avec plus de 15 ans d'expérience, Me Dupont est spécialisée dans le conseil aux entreprises et la résolution de litiges commerciaux."
  },
  {
    id: 2,
    name: "Pierre Lambert",
    title: "Associé",
    specialty: "Droit immobilier",
    image: "https://i.pravatar.cc/300?img=3",
    bio: "Expert en transactions immobilières et résolution de litiges liés à la propriété, Me Lambert accompagne clients particuliers et professionnels."
  },
  {
    id: 3,
    name: "Sophie Laurent",
    title: "Avocate",
    specialty: "Droit de la famille",
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Spécialisée en droit familial, Me Laurent apporte une approche humaine et efficace aux procédures de divorce et de garde d'enfants."
  },
  {
    id: 4,
    name: "Jean Moreau",
    title: "Avocat",
    specialty: "Droit pénal",
    image: "https://i.pravatar.cc/300?img=7",
    bio: "Fort d'une expérience significative en défense pénale, Me Moreau représente avec rigueur les intérêts de ses clients face à la justice."
  }
];

const milestones = [
  {
    year: "2005",
    title: "Fondation du cabinet",
    description: "Création du cabinet par Me Marie Dupont avec une vision d'excellence juridique et d'accompagnement personnalisé."
  },
  {
    year: "2010",
    title: "Expansion des spécialités",
    description: "Intégration du département de droit immobilier et renforcement de l'équipe avec l'arrivée de nouveaux associés."
  },
  {
    year: "2015",
    title: "Nouveaux bureaux",
    description: "Déménagement dans nos locaux actuels au cœur de Paris pour mieux servir notre clientèle grandissante."
  },
  {
    year: "2020",
    title: "Numérisation des services",
    description: "Développement de notre plateforme de consultation en ligne pour améliorer l'accessibilité à nos services juridiques."
  },
  {
    year: "2025",
    title: "Extension internationale",
    description: "Ouverture de notre réseau de partenaires internationaux pour accompagner nos clients au-delà des frontières."
  }
];

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-elegant/5 dark:bg-royal/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="accent-border-left pl-6">
                  <h1 className="font-playfair text-4xl md:text-5xl font-bold text-royal dark:text-white mb-6">
                    À Propos de Notre Cabinet
                  </h1>
                </div>
                <p className="text-royal/80 dark:text-elegant text-lg mb-6 animate-fade-in-left">
                  Fondé en 2005, notre cabinet d'avocats s'est construit sur des valeurs d'excellence, d'intégrité et d'engagement. 
                  Notre mission est d'offrir à nos clients des solutions juridiques personnalisées et efficaces.
                </p>
                <p className="text-royal/80 dark:text-elegant mb-6 animate-fade-in-left delay-100">
                  Avec une équipe d'avocats expérimentés dans différents domaines du droit, 
                  nous accompagnons particuliers et entreprises dans la résolution de leurs problématiques juridiques, 
                  toujours avec la même passion et le même dévouement.
                </p>
                <div className="flex gap-4 animate-fade-in-left delay-200">
                  <div className="flex flex-col items-center p-4 bg-white dark:bg-royal-dark/40 shadow rounded-lg">
                    <span className="text-royal dark:text-gold text-3xl font-bold">15+</span>
                    <span className="text-royal/60 dark:text-elegant/60 text-sm">Années d'expérience</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white dark:bg-royal-dark/40 shadow rounded-lg">
                    <span className="text-royal dark:text-gold text-3xl font-bold">500+</span>
                    <span className="text-royal/60 dark:text-elegant/60 text-sm">Clients satisfaits</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white dark:bg-royal-dark/40 shadow rounded-lg">
                    <span className="text-royal dark:text-gold text-3xl font-bold">4</span>
                    <span className="text-royal/60 dark:text-elegant/60 text-sm">Domaines juridiques</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative animate-fade-in-right">
                <div className="absolute inset-0 bg-royal rounded-lg opacity-10 transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Cabinet d'avocats" 
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-royal dark:text-white mb-4">
                Notre Équipe d'Avocats
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-royal/70 dark:text-elegant max-w-2xl mx-auto">
                Une équipe d'experts juridiques dévoués à la défense de vos intérêts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white dark:bg-royal-dark/40 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-royal-dark dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-gold font-medium">{member.title}</p>
                    <p className="text-sm text-royal/60 dark:text-elegant/60 mb-4">
                      Spécialité: {member.specialty}
                    </p>
                    <p className="text-royal/70 dark:text-elegant/80">
                      {member.bio}
                    </p>
                    <a href="#" className="inline-flex items-center gap-1 text-royal dark:text-gold hover:gap-2 transition-all duration-300 font-medium mt-4">
                      Profil complet <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-elegant/5 dark:bg-royal/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-royal dark:text-white mb-4">
                Notre Histoire
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-royal/70 dark:text-elegant max-w-2xl mx-auto">
                Découvrez l'évolution de notre cabinet d'avocats au fil des années.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-elegant dark:bg-elegant/20"></div>
              
              {/* Timeline events */}
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative z-10 mb-12 flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div 
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <div className="bg-white dark:bg-royal-dark/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                      <div className="text-gold text-lg font-bold mb-2">{milestone.year}</div>
                      <h3 className="font-playfair text-xl font-bold text-royal-dark dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-royal/70 dark:text-elegant/80">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gold rounded-full border-4 border-white dark:border-royal-dark shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="accent-border-left pl-6 mb-6">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-royal dark:text-white">
                    Nos Valeurs
                  </h2>
                </div>
                <p className="text-royal/80 dark:text-elegant mb-8">
                  Chez notre cabinet, nous sommes guidés par des principes fondamentaux qui façonnent notre approche du droit et notre relation avec nos clients.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-gold/20 dark:bg-gold/10 p-3 h-12 w-12 flex items-center justify-center rounded-lg text-xl">
                      👑
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-royal-dark dark:text-white mb-2">
                        Excellence
                      </h3>
                      <p className="text-royal/70 dark:text-elegant/80">
                        Nous visons l'excellence dans tous nos services juridiques, en nous tenant constamment informés des évolutions du droit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-gold/20 dark:bg-gold/10 p-3 h-12 w-12 flex items-center justify-center rounded-lg text-xl">
                      🤝
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-royal-dark dark:text-white mb-2">
                        Intégrité
                      </h3>
                      <p className="text-royal/70 dark:text-elegant/80">
                        L'honnêteté et l'éthique sont au cœur de notre pratique. Nous maintenons les plus hauts standards professionnels.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-gold/20 dark:bg-gold/10 p-3 h-12 w-12 flex items-center justify-center rounded-lg text-xl">
                      ❤️
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-royal-dark dark:text-white mb-2">
                        Empathie
                      </h3>
                      <p className="text-royal/70 dark:text-elegant/80">
                        Nous comprenons que chaque cas est unique et personnel. Notre approche est empathique et centrée sur le client.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-gold/20 dark:bg-gold/10 p-3 h-12 w-12 flex items-center justify-center rounded-lg text-xl">
                      🔍
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-royal-dark dark:text-white mb-2">
                        Rigueur
                      </h3>
                      <p className="text-royal/70 dark:text-elegant/80">
                        Notre méthodologie rigoureuse et notre attention aux détails garantissent la qualité de nos conseils et de notre représentation juridique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                    alt="Cabinet image 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                    alt="Cabinet image 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Cabinet image 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Cabinet image 4" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

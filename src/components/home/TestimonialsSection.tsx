
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Cliente, Divorce",
    image: "https://i.pravatar.cc/150?img=5",
    content: "Dans une période difficile de ma vie, l'équipe du cabinet m'a offert un soutien juridique exceptionnel et humain. Leur expertise en droit de la famille a été déterminante pour la résolution de mon divorce."
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "PDG, Entreprise Tech",
    image: "https://i.pravatar.cc/150?img=8",
    content: "Un accompagnement juridique de premier ordre pour notre entreprise. Leurs conseils en droit des affaires nous ont permis de sécuriser nos contrats et d'éviter plusieurs contentieux potentiels."
  },
  {
    id: 3,
    name: "Émilie Renaud",
    role: "Cliente, Litige Immobilier",
    image: "https://i.pravatar.cc/150?img=1",
    content: "Face à un litige immobilier complexe, l'expertise et la rigueur de ce cabinet ont fait toute la différence. Résultat obtenu au-delà de mes espérances. Je recommande vivement leurs services."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-elegant/5 dark:bg-royal-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-royal dark:text-white mb-4">
            Témoignages Clients
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-royal/70 dark:text-elegant max-w-2xl mx-auto">
            Découvrez ce que nos clients disent à propos de notre engagement et de notre expertise juridique.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative px-4 py-8">
            {/* Testimonial Card */}
            <div className="bg-white dark:bg-royal-dark/50 p-8 md:p-10 rounded-xl shadow-lg border border-elegant/20 dark:border-elegant/10 relative">
              {/* Quote mark */}
              <div className="absolute top-6 left-6 text-6xl text-gold/20 font-serif">
                "
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-20 h-20 overflow-hidden rounded-full border-2 border-gold min-w-[5rem]">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-royal/80 dark:text-elegant mb-6 italic relative z-10">
                    {testimonials[activeIndex].content}
                  </p>
                  
                  <div>
                    <h3 className="font-playfair font-bold text-royal dark:text-white text-lg">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-royal/60 dark:text-elegant/80">
                      {testimonials[activeIndex].role}
                    </p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-gold" : "bg-elegant dark:bg-elegant/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-0 -translate-y-1/2 dark:bg-royal-dark/50 dark:border-elegant/20"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-0 -translate-y-1/2 dark:bg-royal-dark/50 dark:border-elegant/20"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

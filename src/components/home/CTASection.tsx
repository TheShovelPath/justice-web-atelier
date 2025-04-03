
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import EditableContent from '@/components/admin/EditableContent';

const CTASection = () => {
  return (
    <section className="py-16 bg-royal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <EditableContent 
            contentKey="cta-title"
            tag="h2"
            className="font-playfair text-3xl md:text-4xl font-bold mb-6"
          >
            Besoin d'un Conseil Juridique?
          </EditableContent>
          
          <EditableContent 
            contentKey="cta-text"
            tag="p"
            className="text-white/80 text-lg mb-8"
          >
            Notre équipe d'avocats expérimentés est prête à vous accompagner. 
            Prenez rendez-vous pour une consultation initiale gratuite et discutons de votre situation.
          </EditableContent>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-royal hover:bg-elegant hover:text-royal-dark">
              <Link to="/contact" className="flex items-center gap-2">
                <Calendar size={18} />
                Prendre rendez-vous
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

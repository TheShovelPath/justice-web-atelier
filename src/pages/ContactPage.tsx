
import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
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
            Contactez Notre Cabinet
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-royal/70 dark:text-elegant max-w-2xl mx-auto text-lg">
            Notre équipe d'avocats est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos démarches juridiques.
          </p>
        </div>

        {/* Contact information and form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="bg-white dark:bg-royal-dark/40 p-8 rounded-lg shadow-md border border-elegant/20">
            <h2 className="font-playfair text-2xl font-bold text-royal dark:text-gold-light mb-6">
              Coordonnées
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-royal/10 dark:bg-gold/10 p-3 rounded-full">
                  <MapPin className="text-royal dark:text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-royal-dark dark:text-white mb-1">Adresse</h3>
                  <p className="text-royal/70 dark:text-elegant">
                    123 Avenue de la Justice<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-royal/10 dark:bg-gold/10 p-3 rounded-full">
                  <Phone className="text-royal dark:text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-royal-dark dark:text-white mb-1">Téléphone</h3>
                  <p className="text-royal/70 dark:text-elegant">
                    <a href="tel:+33123456789" className="hover:text-gold transition-colors">
                      +33 1 23 45 67 89
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-royal/10 dark:bg-gold/10 p-3 rounded-full">
                  <Mail className="text-royal dark:text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-royal-dark dark:text-white mb-1">Email</h3>
                  <p className="text-royal/70 dark:text-elegant">
                    <a href="mailto:contact@cabinet-avocats.fr" className="hover:text-gold transition-colors">
                      contact@cabinet-avocats.fr
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-royal/10 dark:bg-gold/10 p-3 rounded-full">
                  <Clock className="text-royal dark:text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-royal-dark dark:text-white mb-1">Horaires</h3>
                  <p className="text-royal/70 dark:text-elegant">
                    Lundi - Vendredi: 9h00 - 18h00<br />
                    Samedi: Sur rendez-vous<br />
                    Dimanche: Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white dark:bg-royal-dark/40 p-8 rounded-lg shadow-md border border-elegant/20">
            <h2 className="font-playfair text-2xl font-bold text-royal dark:text-gold-light mb-6">
              Envoyez-nous un message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-royal-dark dark:text-elegant mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-elegant/30 dark:border-elegant/10 rounded-md focus:ring-2 focus:ring-royal dark:focus:ring-gold outline-none bg-white dark:bg-royal-dark/60 text-royal-dark dark:text-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-royal-dark dark:text-elegant mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-elegant/30 dark:border-elegant/10 rounded-md focus:ring-2 focus:ring-royal dark:focus:ring-gold outline-none bg-white dark:bg-royal-dark/60 text-royal-dark dark:text-white"
                    placeholder="Votre email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-royal-dark dark:text-elegant mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-elegant/30 dark:border-elegant/10 rounded-md focus:ring-2 focus:ring-royal dark:focus:ring-gold outline-none bg-white dark:bg-royal-dark/60 text-royal-dark dark:text-white"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-royal-dark dark:text-elegant mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-elegant/30 dark:border-elegant/10 rounded-md focus:ring-2 focus:ring-royal dark:focus:ring-gold outline-none bg-white dark:bg-royal-dark/60 text-royal-dark dark:text-white"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <Button type="submit" className="btn-primary w-full">
                Envoyer
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="rounded-lg overflow-hidden shadow-md h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047557402!2d2.3002508154744867!3d48.87456397928957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc49f3849c5%3A0x7b25a5c5c5a28351!2s1%20Av.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1649330989548!5m2!1sfr!2sfr" 
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte du cabinet d'avocats"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

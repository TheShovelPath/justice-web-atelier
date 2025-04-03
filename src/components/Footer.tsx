
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Settings } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toggleAdminMode } = useAdmin();
  
  return (
    <footer className="bg-royal-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-gold text-2xl">⚖️</span>
              <div>
                <span className="font-playfair font-bold text-xl block leading-none">Cabinet</span>
                <span className="font-playfair text-sm tracking-wider">AVOCATS</span>
              </div>
            </div>
            <p className="text-elegant mb-6">
              Cabinet d'avocats spécialisé offrant une expertise en droit des affaires, 
              droit de la famille, droit pénal et droit immobilier.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Expertise */}
          <div>
            <h3 className="font-playfair font-bold text-xl mb-6 text-gold-light">Nos Expertises</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#droit-affaires" className="text-elegant hover:text-gold transition-colors">
                  Droit des affaires
                </Link>
              </li>
              <li>
                <Link to="/services#droit-famille" className="text-elegant hover:text-gold transition-colors">
                  Droit de la famille
                </Link>
              </li>
              <li>
                <Link to="/services#droit-penal" className="text-elegant hover:text-gold transition-colors">
                  Droit pénal
                </Link>
              </li>
              <li>
                <Link to="/services#droit-immobilier" className="text-elegant hover:text-gold transition-colors">
                  Droit immobilier
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h3 className="font-playfair font-bold text-xl mb-6 text-gold-light">Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/a-propos" className="text-elegant hover:text-gold transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-elegant hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-elegant hover:text-gold transition-colors">
                  Nous Contacter
                </Link>
              </li>
              <li>
                <button 
                  onClick={toggleAdminMode}
                  className="text-elegant hover:text-gold transition-colors flex items-center gap-1"
                >
                  <Settings size={16} />
                  Administration
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-playfair font-bold text-xl mb-6 text-gold-light">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="mt-1"><MapPin size={18} className="text-gold" /></div>
                <span className="text-elegant">
                  123 Avenue de la Justice<br />
                  75008 Paris, France
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-gold" />
                <a href="tel:+33123456789" className="text-elegant hover:text-gold transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-gold" />
                <a href="mailto:contact@cabinet-avocats.fr" className="text-elegant hover:text-gold transition-colors">
                  contact@cabinet-avocats.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-elegant/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-elegant text-sm mb-4 md:mb-0">
            © {currentYear} Cabinet d'Avocats. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-elegant hover:text-gold transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-elegant hover:text-gold transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

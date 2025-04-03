
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-royal-dark/95 shadow-md backdrop-blur-md py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-royal dark:text-white"
        >
          <span className="text-gold">⚖️</span>
          <div>
            <span className="font-playfair font-bold text-xl block leading-none">Cabinet</span>
            <span className="font-playfair text-sm tracking-wider">AVOCATS</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium hover:text-royal transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300 
                  ${location.pathname === item.path ? 
                    'text-royal dark:text-gold after:w-full' : 
                    'text-royal-dark dark:text-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* Consultation CTA (visible on desktop) */}
          {!isMobile && (
            <Button asChild className="btn-primary hidden md:flex">
              <Link to="/contact">
                <Phone size={16} />
                Consultation gratuite
              </Link>
            </Button>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-royal-dark shadow-lg animate-fade-in py-4">
          <nav className="flex flex-col container mx-auto px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`py-3 border-b border-elegant/20 font-medium 
                  ${location.pathname === item.path ? 
                    'text-royal dark:text-gold' : 
                    'text-royal-dark dark:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="btn-primary mt-4">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Phone size={16} />
                Consultation gratuite
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

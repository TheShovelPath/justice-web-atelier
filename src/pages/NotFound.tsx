
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-elegant/5 dark:bg-royal/5 py-24">
        <div className="text-center px-4">
          <div className="text-9xl font-playfair font-bold text-royal dark:text-gold">404</div>
          <h1 className="text-2xl md:text-3xl font-playfair font-bold text-royal-dark dark:text-white mt-4 mb-6">
            Page non trouvée
          </h1>
          <p className="text-royal/70 dark:text-elegant max-w-md mx-auto mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
            Veuillez retourner à l'accueil ou contacter notre équipe si vous avez besoin d'aide.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/">
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    id: 1,
    title: "Les points essentiels du droit immobilier en 2025",
    excerpt: "Découvrez les changements récents dans la législation immobilière et comment ils pourraient affecter vos transactions.",
    category: "Droit immobilier",
    date: "3 Avril 2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    slug: "/blog/points-essentiels-droit-immobilier-2025"
  },
  {
    id: 2,
    title: "Comment protéger votre entreprise des litiges commerciaux",
    excerpt: "Les stratégies juridiques préventives pour sécuriser vos relations commerciales et éviter les contentieux coûteux.",
    category: "Droit des affaires",
    date: "27 Mars 2025",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    slug: "/blog/proteger-entreprise-litiges-commerciaux"
  },
  {
    id: 3,
    title: "Divorce: les erreurs à éviter pour protéger vos droits",
    excerpt: "Guide pratique des écueils fréquents lors d'une procédure de divorce et comment les éviter pour préserver vos intérêts.",
    category: "Droit de la famille",
    date: "15 Mars 2025",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    slug: "/blog/divorce-erreurs-eviter"
  }
];

const BlogPreviewSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-royal dark:text-white mb-4">
              Blog Juridique
            </h2>
            <p className="text-royal/70 dark:text-elegant max-w-2xl">
              Conseils juridiques, actualités et analyses par nos experts.
            </p>
          </div>
          
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-royal dark:text-gold hover:gap-3 transition-all duration-300 font-medium mt-4 md:mt-0"
          >
            Tous les articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="overflow-hidden hover:shadow-lg transition-all dark:bg-royal-dark/40 dark:border-elegant/10"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium bg-royal/10 dark:bg-gold/20 text-royal dark:text-gold px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-royal/60 dark:text-elegant/60">
                    {post.date}
                  </span>
                </div>
                <CardTitle className="font-playfair text-xl text-royal-dark dark:text-white">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-royal/80 dark:text-elegant/80">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              
              <CardFooter>
                <Link 
                  to={post.slug}
                  className="inline-flex items-center gap-1 text-royal dark:text-gold hover:gap-2 transition-all duration-300 font-medium"
                >
                  Lire l'article <ArrowRight size={16} />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;

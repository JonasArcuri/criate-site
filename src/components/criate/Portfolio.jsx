
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    title: 'Plataforma IA para E-commerce',
    category: 'Inteligência Artificial',
    imageQuery: 'AI platform for e-commerce dashboard',
    description: 'Sistema de recomendação personalizada e análise preditiva para otimizar vendas online.',
  },
  {
    title: 'Aplicativo Mobile Inovador',
    category: 'Design UX/UI',
    imageQuery: 'innovative mobile app interface design',
    description: 'Interface intuitiva e experiência de usuário fluida para um app de bem-estar.',
  },
  {
    title: 'Dashboard de Business Intelligence',
    category: 'Análise de Dados',
    imageQuery: 'business intelligence dashboard visualization',
    description: 'Visualização de dados complexos para tomada de decisões estratégicas em tempo real.',
  },
];

const Portfolio = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        delay: i * 0.15,
      },
    }),
  };

  return (
    <section id="portfolio" className="section-padding bg-muted/50 scroll-animate">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block">Nosso Trabalho</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Casos de <span className="gradient-text-criate">Sucesso</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Veja como ajudamos empresas a alcançar resultados incríveis através de soluções criativas e tecnológicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-card rounded-xl shadow-soft overflow-hidden group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={item.title} src="https://images.unsplash.com/photo-1522071820081-009f0129c7da" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-primary/80 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">{item.category}</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{item.description}</p>
                <Button variant="ghost" size="sm" className="self-start p-0 text-primary group-hover:underline">
                  Ver Projeto <ExternalLink size={14} className="ml-1.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn btn-outline px-8 py-3 text-base" asChild>
            <a href="#">
              Ver Todos os Projetos <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

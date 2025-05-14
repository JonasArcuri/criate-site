
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, MessageSquare as MessageSquareQuote, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const resultsData = {
  stats: [
    { value: "+320%", label: "Aumento em Leads Qualificados", icon: <TrendingUp className="text-primary" />, color: "primary" },
    { value: "92%", label: "Satisfação de Clientes B2B", icon: <Users className="text-secondary" />, color: "secondary" },
    { value: "Top 5%", label: "Performance em Campanhas Outbound", icon: <Award className="text-highlight" />, color: "highlight" },
  ],
  testimonials: [
    {
      quote: "Estava com questões no marketing, falta de pessoal, até que encontrei a Criaté. A solução de gerenciamento por IA além de diminuir meus custos, trouxe mais estabilidade e dados pra nossa gestão mensal",
      name: "Miguel",
      title: "CO- Fundador, Up&Gás",
      logoName: "upegas.jpeg",
      logoQuery: "modern tech company logo blue and silver"
    },
    {
      quote: "Lucas, Leo y su equipo nos han acompañado desde 2023 con mucho compromiso. Nos ayudaron con la parte de marketing, nos representaron en Brasil y también implementaron automatizaciones simples que facilitaron bastante nuestro control interno de proyectos. Es un equipo joven, pero muy profesional y confiable. Estamos contentos de contar con ellos.",
      name: "Eddy",
      title: "CEO, Devecem",
      logoName: "eddy.jpeg",
      logoQuery: "innovative corporation logo green and black"
    },
     {
      quote: "L’équipe de Criaté a fait un excellent travail. Grâce à eux, nous avons pu structurer notre marketing de manière plus claire et cohérente. Ce que j’ai vraiment apprécié, c’est la dimension humaine qu’ils apportent, surtout dans la création d’un chatbot qui semble réellement dialoguer comme une personne. C’est fluide, naturel et très efficace. Une belle collaboration.",
      name: "Frederic",
      title: "FCAD, Dubai",
      logoName: "frederic.jpeg",
      logoQuery: "industrial company logo strong and geometric orange"
    }
  ],
};

const Results = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="results" className="section-padding bg-muted/30 scroll-animate">
      <div className="container mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2 block">Nossos Resultados</span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Impacto Real para Negócios <span className="gradient-text-criate-premium">Como o Seu</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Não apenas prometemos, nós entregamos. Veja como nossas estratégias transformam o potencial de empresas B2B em crescimento concreto.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {resultsData.stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-card p-6 rounded-xl shadow-soft border-l-4 border-${stat.color} flex items-center space-x-4 card-glow-border hover:shadow-medium transition-shadow duration-300`}
              >
                <div className={`p-3 bg-${stat.color}/10 rounded-full`}>
                  {React.cloneElement(stat.icon, { size: 28 })}
                </div>
                <div>
                  <p className={`text-2xl md:text-3xl font-bold text-${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
            O que Nossos Clientes Dizem
          </motion.h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {resultsData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card p-6 rounded-xl shadow-soft flex flex-col items-start card-glow-border hover:shadow-medium transition-shadow duration-300"
              >
                <MessageSquareQuote size={36} className="text-primary mb-4 opacity-70" />
                <p className="text-muted-foreground mb-5 text-base leading-relaxed italic flex-grow">"{testimonial.quote}"</p>
                <div className="w-full pt-5 border-t border-border/50 mt-auto">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-3 overflow-hidden border-2 border-border">
                      <img  className= "w-13 h-13 object-contain p-1.1" 
                      alt={`Logo ${testimonial.title}`}
                      src={`/logos/${testimonial.logoName}`}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
           <motion.div variants={itemVariants} className="text-center mt-16">
            <Button variant="default" size="lg" className="btn-secondary px-8 py-4 text-base h-auto shadow-glow-secondary" asChild>
              <a href="#contact">
                Quero Resultados Assim
              </a>
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Results;

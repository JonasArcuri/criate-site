
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 12 } },
  };
  
  const stats = [
    { value: "150+", label: "Projetos Ativos", icon: <Target size={20} className="text-highlight" /> },
    { value: "9 Países", label: "Atuação Global", icon: <Users size={20} className="text-secondary" /> },
    { value: "IA Experts", label: "Tecnologia de Ponta", icon: <BrainCircuit size={20} className="text-primary" /> },
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="section-padding pt-36 md:pt-48 pb-20 md:pb-32 relative overflow-hidden min-h-screen flex items-center dark-abstract-bg"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xs z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6"
            variants={itemVariants}
          >
            Transformamos Empresas B2B com <br className="hidden md:inline"/>
            <span className="gradient-text-criate-premium">Estratégia e Inteligência Artificial</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10"
            variants={itemVariants}
          >
            Geração de Demanda Outbound, Branding de Impacto e Automações com IA para escalar seus resultados no mercado nacional e internacional.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button variant="default" size="lg" className="btn-primary px-8 py-4 text-base h-auto shadow-glow-primary" onClick={scrollToContact}>
                Solicite uma Conversa
                <ArrowRight className="ml-2.5 h-5 w-5" />
            </Button>
             <Button variant="outline-primary" size="lg" className="px-8 py-4 text-base h-auto" asChild>
                <a href="#methodology">
                  Nossa Metodologia
                </a>
            </Button>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants} // Re-use container for staggering these items too
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-card/50 backdrop-blur-sm p-5 rounded-xl border border-border/70 shadow-soft text-center"
              >
                <div className="flex justify-center items-center mb-2">
                  {stat.icon}
                  <span className="ml-2 text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

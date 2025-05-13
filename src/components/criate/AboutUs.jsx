
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Award, Users, Globe, Zap } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { value: "150+", label: "Projetos B2B Ativos", icon: <Award size={24} className="text-primary" /> },
    { value: "9 Países", label: "Presença Internacional", icon: <Globe size={24} className="text-secondary" /> },
    { value: "Top Tier", label: "Parceiros Estratégicos", icon: <Users size={24} className="text-accent" /> },
  ];

  return (
    <section id="about" className="section-padding bg-background scroll-animate">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse-glow opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/5 rounded-lg blur-2xl transform rotate-12 animate-pulse-glow opacity-50 delay-1000"></div>
            
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-hard">
              <img  class="w-full h-full object-cover" alt="Equipe Criaté em discussão estratégica sobre projetos B2B e IA" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block">Quem Somos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Criatividade com Método, <span className="gradient-text-criate-premium">Performance com Alma.</span>
            </h2>
            <p className="text-muted-foreground mb-5 text-lg">
              Na Criaté, somos mais que uma agência. Somos seus parceiros estratégicos na conquista de resultados B2B exponenciais. Unimos a vanguarda da inteligência artificial com a profundidade do branding estratégico e a precisão da geração de demanda outbound.
            </p>
            <p className="text-muted-foreground mb-8">
              Nossa missão é clara: impulsionar o crescimento de empresas ambiciosas, como a sua, através de soluções personalizadas que geram autoridade, previsibilidade e oportunidades reais de negócio no cenário nacional e internacional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card p-4 rounded-lg shadow-soft text-center border border-border/50">
                  {stat.icon}
                  <p className="text-xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
             <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft border border-border/50">
                <Zap size={36} className="text-highlight mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Nosso Diferencial</h4>
                  <p className="text-sm text-muted-foreground">Abordagem consultiva, foco em resultados mensuráveis e uma paixão incansável por inovação que se traduz em crescimento real para nossos clientes.</p>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

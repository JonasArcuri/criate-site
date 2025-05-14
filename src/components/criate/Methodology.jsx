
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChartBig, Megaphone, Target, Zap, Search, TrendingUp, Lightbulb, Settings2, CheckCircle } from 'lucide-react';

const pillars = [
  {
    id: 1,
    icon: <Search size={36} className="text-primary" />,
    title: "Diagnóstico Estratégico",
    description: "Mergulhamos no seu negócio, mercado e concorrência para identificar oportunidades e desafios, construindo um mapa claro para o crescimento.",
    details: [
      "Análise de Mercado e Persona",
      "Auditoria de Presença Digital",
      "Mapeamento de Jornada do Cliente",
      "Definição de KPIs e Metas"
    ],
    color: "primary"
  },
  {
    id: 2,
    icon: <Lightbulb size={36} className="text-secondary" />,
    title: "Posicionamento & Branding de Impacto",
    description: "Criamos uma identidade de marca forte e um posicionamento único que ressoa com seu público-alvo e destaca sua proposta de valor.",
    details: [
      "Desenvolvimento de Proposta de Valor Única (UVP)",
      "Criação ou Refinamento de Identidade Visual",
      "Narrativa de Marca e Storytelling",
      "Estratégia de Conteúdo de Autoridade"
    ],
    color: "secondary"
  },
  {
    id: 3,
    icon: <Megaphone size={36} className="text-highlight" />,
    title: "Geração de Demanda Outbound",
    description: "Implementamos campanhas de prospecção ativa e personalizada, utilizando dados e tecnologia para conectar você com leads qualificados.",
    details: [
      "Definição de Ideal Customer Profile (ICP)",
      "Criação de Listas Segmentadas e Inteligentes",
      "Desenvolvimento de Cadências de Prospecção Multicanal",
      "Gestão e Otimização de Campanhas"
    ],
    color: "highlight"
  },
  {
    id: 4,
    icon: <Zap size={36} className="text-accent" />,
    title: "Automação com IA",
    description: "Integramos inteligência artificial para otimizar processos, personalizar interações e escalar suas operações de marketing e vendas com eficiência.",
    details: [
      "Implementação de Ferramentas de IA",
      "Automação de Fluxos de Marketing e Vendas",
      "Personalização em Escala com IA",
      "Análise Preditiva e Otimização Contínua"
    ],
    color: "accent"
  }
];

const Methodology = () => {
  const [activePillar, setActivePillar] = useState(pillars[0].id);

  const pillarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: 'spring', stiffness: 100 },
    }),
  };

  const detailsVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <section id="methodology" className="section-padding bg-muted/30 scroll-animate">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2 block">Nossa Abordagem</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Os 4 Pilares da <span className="gradient-text-criate-premium">Transformação B2B e B2C</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Nossa metodologia testada e aprovada garante que cada etapa da sua jornada conosco seja estratégica, mensurável e focada em resultados reais.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              custom={index}
              variants={pillarVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => setActivePillar(pillar.id)}
              className={`p-6 rounded-xl shadow-soft cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-medium
                ${activePillar === pillar.id ? `bg-card border-2 border-${pillar.color} shadow-hard` : 'bg-card border border-border/50'}`}
            >
              <div className={`mb-4 inline-flex p-3 bg-${pillar.color}/10 rounded-lg`}>
                {pillar.icon}
              </div>
              <h3 className={`text-xl font-semibold text-foreground mb-2`}>{pillar.title}</h3>
              <p className={`text-sm ${activePillar === pillar.id ? 'text-muted-foreground/90' : 'text-muted-foreground/70'} mb-4`}>{pillar.description}</p>
              {activePillar === pillar.id && (
                <motion.div
                  variants={detailsVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-4 pt-4 border-t border-border/30"
                >
                  <h4 className="text-sm font-semibold text-foreground mb-2">Principais Entregas:</h4>
                  <ul className="space-y-1.5">
                    {pillar.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-xs text-muted-foreground/80">
                        <CheckCircle size={14} className={`text-${pillar.color} mr-2 mt-0.5 flex-shrink-0`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;

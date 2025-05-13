
import React from 'react';
import { motion } from 'framer-motion';
import { BarChartBig, Palette, Megaphone, BookOpen, Settings2, Bot, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: <Palette size={28} className="text-primary" />,
    title: 'Posicionamento e Branding Estratégico',
    description: 'Construímos marcas B2B poderosas que se destacam, geram autoridade e conquistam a confiança do mercado.',
    color: 'primary',
    tags: ['Identidade de Marca', 'Narrativa', 'Conteúdo']
  },
  {
    icon: <Megaphone size={28} className="text-secondary" />,
    title: 'Campanhas de Outbound Personalizado',
    description: 'Geramos um fluxo constante de leads qualificados através de prospecção ativa, inteligente e multicanal.',
    color: 'secondary',
    tags: ['Prospecção Ativa', 'ICP', 'Cadências Inteligentes']
  },
  {
    icon: <BookOpen size={28} className="text-highlight" />,
    title: 'Criação de Playbooks Comerciais',
    description: 'Desenvolvemos manuais estratégicos que padronizam e otimizam seus processos de vendas, acelerando resultados.',
    color: 'highlight',
    tags: ['Processos de Vendas', 'Treinamento', 'Escalabilidade']
  },
  {
    icon: <Zap size={28} className="text-accent" />,
    title: 'Implementação de Fluxos e Automação com IA',
    description: 'Utilizamos inteligência artificial para automatizar tarefas, personalizar a comunicação e otimizar a jornada do cliente.',
    color: 'accent',
    tags: ['IA para Vendas', 'Automação de Marketing', 'CRM IA']
  },
];

const Solutions = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="solutions" className="section-padding bg-background scroll-animate">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block">Nossas Soluções</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Soluções B2B Inteligentes para <span className="gradient-text-criate-premium">Crescimento Acelerado</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Cada solução é desenhada para enfrentar os desafios específicos do mercado B2B, entregando resultados mensuráveis e impacto duradouro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-card rounded-xl shadow-medium p-6 md:p-8 flex flex-col group card-glow-border hover:scale-[1.02] transition-transform duration-300"
            >
              <div className={`mb-5 inline-flex p-3.5 bg-${solution.color}/10 rounded-lg self-start`}>
                {solution.icon}
              </div>
              <h3 className={`text-xl font-semibold text-foreground mb-3 text-${solution.color}`}>{solution.title}</h3>
              <p className="text-muted-foreground text-sm mb-5 flex-grow">{solution.description}</p>
              <div className="mb-6">
                {solution.tags.map(tag => (
                  <span key={tag} className={`text-xs font-medium bg-${solution.color}/10 text-${solution.color} px-2.5 py-1 rounded-full mr-2 mb-2 inline-block`}>
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="link" className={`p-0 text-${solution.color} self-start group-hover:underline mt-auto`} onClick={scrollToContact}>
                Quero saber mais <span className="ml-1.5 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

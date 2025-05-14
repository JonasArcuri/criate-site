
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    { 
      title: 'Soluções Chave', 
      links: [
        { name: 'Geração de Demanda B2B e B2C', href: '#solutions' }, 
        { name: 'Branding Estratégico', href: '#solutions' }, 
        { name: 'Automação com IA', href: '#solutions' },
        { name: 'Playbooks Comerciais', href: '#solutions' }
      ] 
    },
    { 
      title: 'A Criaté', 
      links: [
        { name: 'Quem Somos', href: '#about' }, 
        { name: 'Metodologia', href: '#methodology' }, 
        { name: 'Resultados', href: '#results' },
        { name: 'Carreiras (Em breve)', href: '#' }
      ] 
    },
    { 
      title: 'Recursos', 
      links: [
        { name: 'Blog (Em breve)', href: '#' }, 
        { name: 'Estudos de Caso', href: '#results' }, 
        { name: 'Fale Conosco', href: '#contact' },
        { name: 'FAQ', href: '#' }
      ] 
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={18}/>, href: 'https://linkedin.com/company/criate-placeholder' },
    { name: 'Instagram', icon: <Instagram size={18}/>, href: 'https://instagram.com/criate_placeholder' },
    { name: 'Youtube', icon: <Youtube size={18}/>, href: 'https://youtube.com/criate_placeholder' },
  ];

  return (
    <footer className="bg-card text-muted-foreground border-t border-border/70 pt-section-sm pb-element-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          <div className="pr-8">
            <a href="#home" className="flex items-center gap-2.5 mb-5 group w-fit">
              <img src="/logo-criate.png" alt="Criaté Logo" className="h-12 w-12 group-hover:opacity-80 transition-opacity" />
              <span className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                Criaté
              </span>
            </a>
            <p className="text-sm mb-6 max-w-sm">
              Especialistas em impulsionar empresas B2B e B2C através de estratégias de outbound, branding e inteligência artificial.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(social => (
                 <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                   className="p-2.5 bg-muted/60 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-all duration-300 transform hover:scale-110">
                   {social.icon}
                 </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h5 className="text-base font-semibold text-foreground uppercase tracking-wider mb-5">{section.title}</h5>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground/80 mb-4 sm:mb-0">
            &copy; {currentYear} Criaté Soluções Estratégicas Ltda. Todos os direitos reservados. CNPJ: XX.XXX.XXX/0001-XX
          </p>
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-muted/60 hover:bg-primary text-primary hover:text-primary-foreground rounded-full transition-all duration-300 transform hover:scale-105"
            aria-label="Voltar ao topo"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

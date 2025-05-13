
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Metodologia', href: '#methodology' },
    { name: 'Soluções', href: '#solutions' },
    { name: 'Resultados', href: '#results' },
    // CTA de contato já está no header fixo, mas pode ser adicionado aqui se necessário
  ];

  // const logoText = "Criaté";

  const scrollToContact = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled || mobileMenuOpen ? 'bg-background/80 shadow-medium backdrop-blur-lg border-b border-border/50' : 'bg-transparent pt-2 md:pt-4'}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#home" className="flex items-center gap-2.5 group">
            <motion.div whileHover={{ rotate: [0, 10, -5, 0], scale: 1.05 }} transition={{ duration: 0.4 }}>
              <img src="/logo-criate.png" alt="Criaté Logo" className="h-18 w-18 md:h-10 md:w-10" />
            </motion.div>
            <span className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
              {/* {logoText} */}
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group pb-1.5"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button variant="default" className="btn-primary text-xs uppercase tracking-wider font-semibold" onClick={scrollToContact}>
              Fale com a Criaté
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none p-2.5 rounded-md hover:bg-muted/50 transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden bg-background/95 backdrop-blur-md shadow-hard absolute top-full left-0 right-0 pb-6 border-t border-border"
        >
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-muted-foreground hover:text-primary transition-colors py-3 px-3.5 text-left text-base hover:bg-muted/50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="default" className="btn-primary w-full mt-4 py-3.5 text-sm uppercase tracking-wider font-semibold" onClick={scrollToContact}>
                Fale com a Criaté
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;

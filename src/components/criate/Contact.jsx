
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simula envio
    
    setIsSubmitting(false);
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado pelo seu contato. Responderemos em breve.",
      className: "bg-primary text-primary-foreground border-primary/30",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactDetails = [
    { icon: <Mail size={20} className="text-primary" />, text: ' Lucas@influencehub360.com', href: 'mailto:contato@criate.com' },
    { icon: <Phone size={20} className="text-primary" />, text: '+55 11 98525-5719', href: 'tel:+5511987654321' },
    { icon: <MessageSquare size={20} className="text-primary" />, text: 'WhatsApp Direto', href: 'https://wa.me/5511987654321?text=Olá! Gostaria de saber mais sobre a Criaté.' },
    { icon: <MapPin size={20} className="text-primary" />, text: 'Av. Inovação, 123 - São Paulo, SP', href: '#' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={22} />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram size={22} />, href: '#', name: 'Instagram' },
  ];

  return (
    <section id="contact" className="section-padding bg-background scroll-animate">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block">Fale Conosco</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Vamos Criar Algo <span className="gradient-text-criate">Incrível Juntos?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Estamos ansiosos para ouvir sobre seus projetos e ideias. Entre em contato e vamos transformar sua visão em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-card p-6 md:p-8 rounded-xl shadow-medium"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Seu nome completo" />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="seu.email@dominio.com" />
              </div>
              <div>
                <label htmlFor="subject" className="form-label">Assunto</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="form-input" placeholder="Sobre o que gostaria de falar?" />
              </div>
              <div>
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} required rows="4" className="form-input resize-none" placeholder="Descreva sua ideia ou necessidade..."></textarea>
              </div>
              <Button type="submit" className="btn btn-primary w-full py-3 text-base" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Enviar <Send size={18} className="ml-2" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="space-y-8 pt-2"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-5">Nossos Contatos</h3>
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <a key={detail.text} href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-3 group p-3 hover:bg-muted/70 rounded-lg transition-colors">
                    {detail.icon}
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">{detail.text}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-5">Siga-nos</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.name}
                    className="p-3 bg-muted/50 hover:bg-primary/10 text-primary rounded-full transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

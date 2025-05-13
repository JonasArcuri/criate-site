
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Zap, TrendingUp, BrainCircuit, Send, Loader2, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const StrategicContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio para CRM/Email
    // Em um projeto real, aqui seria a chamada para a API (Supabase Functions, etc.)
    console.log("Form Data Submitted: ", formData);
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    
    setIsSubmitting(false);
    toast({
      title: "Diagnóstico Solicitado!",
      description: "Sua mensagem foi enviada. Nossa equipe de especialistas entrará em contato em breve.",
      className: "bg-secondary text-secondary-foreground border-secondary/30",
    });
    setFormData({ name: '', company: '', email: '', phone: '', interest: '', message: '' });
  };

  const contactPoints = [
    { icon: <Mail size={20} className="text-primary" />, text: 'contato@criate.com.br', href: 'mailto:contato@criate.com.br' },
    { icon: <Phone size={20} className="text-primary" />, text: '+55 (11) 5555-CRIA (2742)', href: 'tel:+551155552742' },
    { icon: <Linkedin size={20} className="text-primary" />, text: 'LinkedIn Criaté', href: 'https://linkedin.com/company/criate-placeholder', target: '_blank' },
  ];

  const interests = [
    "Geração de Demanda Outbound",
    "Branding Estratégico",
    "Automação com IA",
    "Diagnóstico Completo",
    "Outro"
  ];

  return (
    <section id="contact" className="section-padding bg-background scroll-animate dark-abstract-bg">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block">Conecte-se</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Pronto para Elevar sua Estratégia B2B?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Vamos conversar sobre como a Criaté pode impulsionar seu crescimento. Preencha o formulário ou escolha um dos botões de ação rápida.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-3 bg-card p-6 md:p-8 rounded-xl shadow-hard border border-border/70"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Solicite um Diagnóstico Estratégico</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="form-label">Nome Completo*</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="form-input" />
                </div>
                <div>
                  <label htmlFor="company" className="form-label">Empresa*</label>
                  <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} required className="form-input" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="form-label">Email Corporativo*</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="form-input" />
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Telefone/WhatsApp*</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="form-input" />
                </div>
              </div>
              <div>
                <label htmlFor="interest" className="form-label">Principal Interesse*</label>
                <select name="interest" id="interest" value={formData.interest} onChange={handleChange} required className="form-input">
                  <option value="" disabled>Selecione uma área...</option>
                  {interests.map(interest => <option key={interest} value={interest}>{interest}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="form-label">Sua Mensagem (Opcional)</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows="3" className="form-input resize-none" placeholder="Conte-nos um pouco sobre seus desafios..."></textarea>
              </div>
              <Button type="submit" variant="default" size="lg" className="btn-primary w-full py-3.5 text-base shadow-glow-primary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Agendar Diagnóstico <Send size={18} className="ml-2.5" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-2 space-y-8 pt-2"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-5">Ações Rápidas</h3>
              <div className="space-y-3">
                <Button variant="default" size="lg" className="btn-secondary w-full justify-start py-3.5 text-base shadow-glow-secondary" asChild>
                  <a href="https://wa.me/551155552742?text=Olá! Gostaria de agendar um diagnóstico com a Criaté." target="_blank" rel="noopener noreferrer">
                    <TrendingUp size={20} className="mr-3" /> Quero Gerar Demanda
                  </a>
                </Button>
                <Button variant="default" size="lg" className="btn-highlight w-full justify-start py-3.5 text-base shadow-glow-highlight" asChild>
                   <a href="mailto:contato@criate.com.br?subject=Interesse em Branding Estratégico">
                    <BrainCircuit size={20} className="mr-3" /> Preciso de Branding e IA
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-5 mt-10">Canais Diretos</h3>
              <div className="space-y-4">
                {contactPoints.map((detail) => (
                  <a key={detail.text} href={detail.href} target={detail.target || undefined} rel="noopener noreferrer" className="flex items-center gap-3 group p-3 hover:bg-muted/70 rounded-lg transition-colors">
                    {detail.icon}
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">{detail.text}</span>
                  </a>
                ))}
                 <div className="flex items-center gap-3 p-3">
                    <MapPin size={20} className="text-primary" />
                    <span className="text-muted-foreground">São Paulo, SP - Brasil (Atendimento Global)</span>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategicContact;

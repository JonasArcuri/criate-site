
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/criate/Navbar';
import Hero from '@/components/criate/Hero';
import AboutUs from '@/components/criate/AboutUs';
import Methodology from '@/components/criate/Methodology';
import Solutions from '@/components/criate/Solutions';
import Results from '@/components/criate/Results';
import StrategicContact from '@/components/criate/StrategicContact';
import Footer from '@/components/criate/Footer';
import ScrollObserver from '@/components/criate/ScrollObserver';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

function App() {
  return (
    <ScrollObserver>
      <div className="min-h-screen bg-background text-foreground font-sans" data-theme="dark">
        <Navbar />
        <main className="overflow-x-hidden">
          <Hero />
          <AboutUs />
          <Methodology />
          <Solutions />
          <Results />
          <StrategicContact />
        </main>
        <Footer />
        <Toaster />
        <div className="floating-cta">
          <Button
            variant="default"
            size="lg"
            className="btn-primary rounded-full shadow-hard hover:shadow-glow-primary !px-5 !py-5"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Fale com a Criaté"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </ScrollObserver>
  );
}

export default App;


import React from 'react';
import Hero from '@/components/home/Hero';
import QuienesSomos from '@/components/home/QuienesSomos';
import ProductosDestacados from '@/components/home/ProductosDestacados';
import Testimonios from '@/components/home/Testimonios';
import ContactoCTA from '@/components/home/ContactoCTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <QuienesSomos />
        <ProductosDestacados />
        <Testimonios />
        <ContactoCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

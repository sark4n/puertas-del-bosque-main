
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const ContactoCTA = () => {
  return (
    <section className="py-16 bg-charcoal text-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">¿Necesitas Asesoría Personalizada?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Nuestro equipo de expertos está disponible para ayudarte a encontrar la mejor solución 
            para tu proyecto. Contáctanos hoy mismo y recibe atención personalizada.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Phone size={24} className="text-wood-light mr-2" />
              <span className="text-xl">+56 9 5608 9058</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail size={24} className="text-wood-light mr-2" />
              <span className="text-xl">contacto@puertasdelbosque.cl</span>
            </div>
          </div>
          
          <Link 
            to="/contacto" 
            className="bg-wood hover:bg-wood-dark text-white font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center"
          >
            Contáctanos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactoCTA;


import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contacto/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacto: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Banner */}
        <div className="bg-gradient-to-r from-charcoal to-wood-dark text-white py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4 text-white">Contacto</h1>
            <p className="text-lg max-w-2xl">
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos en 
              contacto contigo a la brevedad.
            </p>
          </div>
        </div>
        
        {/* Formulario y datos de contacto */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Formulario */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                <ContactForm />
              </div>
              
              {/* Datos de contacto */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                <div className="bg-offwhite rounded-lg p-8 shadow-md mb-8">
                  <div className="space-y-6">
                    <div className="flex">
                      <MapPin size={24} className="text-wood mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-1">Dirección</h3>
                        <p className="text-gray-700">
                          Ruta G730, Parcela Nº 71, Chorombo Alto – María Pinto<br />
                          Santiago, Chile
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone size={24} className="text-wood mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-1">Teléfono</h3>
                        <p className="text-gray-700">+56 9 7559 6939</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Mail size={24} className="text-wood mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-gray-700">contacto@puertasdelbosque.cl</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Clock size={24} className="text-wood mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-1">Horario de Atención</h3>
                        <p className="text-gray-700">
                          Lunes a Viernes: 9:00 - 18:00<br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mapa estático */}
                <div className="rounded-lg overflow-hidden shadow-md h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15825.479127242712!2d-71.25186574063272!3d-33.50405248258696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2scl!4v1747675161533!5m2!1sen!2scl" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Puertas El Bosque"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;

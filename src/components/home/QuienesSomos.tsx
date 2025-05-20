
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const QuienesSomos = () => {
  return (
    <section className="py-16 bg-offwhite">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/vx58YFnW/foto1.jpg"
                  alt="Taller de carpintería Puertas del Bosque"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 -z-10">
                <div className="bg-wood w-48 h-48 rounded-lg opacity-20"></div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Quiénes Somos</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              En <strong>Puertas del Bosque</strong> nos dedicamos a la fabricación de puertas de madera y molduras 
              de alta calidad desde 2025. Nuestra pasión por la madera y el trabajo artesanal 
              nos permite buscar convertirnos en líderes en el mercado chileno.
            </p>
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-wood mt-1 mr-3 flex-shrink-0" />
                <p>Profesionales con más de 40 años de experiencia en el rubro maderero.</p>
              </div>
              <div className="flex items-start mb-4">
                <CheckCircle className="text-wood mt-1 mr-3 flex-shrink-0" />
                <p>Utilizamos maderas seleccionadas y técnicas artesanales de fabricación.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-wood mt-1 mr-3 flex-shrink-0" />
                <p>Productos personalizados adaptados a las necesidades de cada cliente.</p>
              </div>
            </div>
            <Link 
              to="/nosotros" 
              className="inline-block bg-charcoal hover:bg-black text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Conoce Nuestra Historia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;

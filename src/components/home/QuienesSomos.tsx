
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const QuienesSomos = () => {
  return (
    <section className="py-16 bg-beige-calido">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/vx58YFnW/foto1.jpg"
                  alt="Taller de carpintería Puertas Del Bosque"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 -z-10">
                <div className="bg-marron-nogal w-48 h-48 rounded-lg opacity-20"></div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Quiénes Somos</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Contamos con equipos de fabricación y comercialización con más de 40 años de experiencia, en Puertas Del Bosque nos dedicamos a la fabricación de puertas y molduras de madera con enfoque en la excelencia. Nuestra pasión por la nobleza de la madera y el trabajo tecnificado que posicionan a nuestra empresa entre las más avanzadas del rubro en Chile.
            </p>
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-marron-nogal mt-1 mr-3 flex-shrink-0" />
                <p>Contamos con profesionales con más de 40 años de experiencia en el sector maderero.</p>
              </div>
              <div className="flex items-start mb-4">
                <CheckCircle className="text-marron-nogal mt-1 mr-3 flex-shrink-0" />
                <p>Empleamos maquinaria de última generación que optimiza cada fase del proceso productivo, sin perder el toque artesanal que distingue nuestros productos.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-marron-nogal mt-1 mr-3 flex-shrink-0" />
                <p>Seleccionamos cuidadosamente las maderas para garantizar carácter, resistencia y belleza en cada pieza.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-marron-nogal mt-1 mr-3 flex-shrink-0" />
                <p>Diseñamos soluciones personalizadas para cada cliente, adaptándonos a sus necesidades técnicas, funcionales y estéticas.</p>
              </div>
            </div>
            <Link 
              to="/nosotros" 
              className="inline-block bg-azul-petroleo hover:bg-verde-bosque text-white font-medium py-3 px-6 rounded-md transition-colors"
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

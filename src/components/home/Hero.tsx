
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[500px] md:h-[600px] bg-verde-bosque" 
         style={{ backgroundImage: "linear-gradient(rgba(46, 79, 62, 0.8), rgba(46, 79, 62, 0.8)), url('https://i.ibb.co/39913533/slide3.jpg')" }}>
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Puertas y molduras de madera de alta calidad
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              En Puertas Del Bosque, creamos puertas y molduras que combinan elegancia, resistencia y diseño. Utilizamos materias primas seleccionadas, técnicas avanzadas refinadas y tecnología de punta, lo que nos permite alcanzar altos niveles de eficiencia y producir con estándares superiores de calidad, durabilidad y estética.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/productos" 
                className="bg-marron-nogal hover:bg-azul-petroleo text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Ver Productos
              </Link>
              <Link 
                to="/contacto" 
                className="bg-transparent border-2 border-beige-calido hover:bg-beige-calido hover:text-verde-bosque text-beige-calido font-medium py-3 px-6 rounded-md transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

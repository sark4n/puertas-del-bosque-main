
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[500px] md:h-[600px]" 
         style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/39913533/slide3.jpg')" }}>
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
                className="bg-wood hover:bg-wood-dark text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Ver Productos
              </Link>
              <Link 
                to="/contacto" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-charcoal text-white font-medium py-3 px-6 rounded-md transition-colors"
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

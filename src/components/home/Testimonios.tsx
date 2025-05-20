
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonios } from '@/data/testimonios';

const Testimonios = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonio = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
  };

  const prevTestimonio = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonios.length) % testimonios.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonio();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en Puertas del Bosque para sus proyectos de puertas y molduras.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="relative h-[300px] md:h-[250px]">
            {testimonios.map((testimonio, index) => (
              <div
                key={testimonio.id}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <Quote className="text-wood opacity-20 w-12 h-12 mb-4" />
                  <p className="text-gray-700 italic mb-6">{testimonio.contenido}</p>
                  <div className="flex items-center">
                    {testimonio.imagen && (
                      <img 
                        src={testimonio.imagen} 
                        alt={testimonio.nombre}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    )}
                    <div>
                      <h4 className="font-bold">{testimonio.nombre}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonio.cargo}
                        {testimonio.empresa && `, ${testimonio.empresa}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  activeIndex === index ? 'bg-wood scale-125' : 'bg-gray-400'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonio}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonio}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;

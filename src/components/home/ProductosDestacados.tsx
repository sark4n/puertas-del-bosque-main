
import React from 'react';
import { Link } from 'react-router-dom';
import { productos } from '@/data/productos';

const ProductosDestacados = () => {
  // Get only featured products
  const productosDestacados = productos.filter(producto => producto.destacado);

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Productos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos de alta calidad elaborados con las mejores 
            maderas y técnicas artesanales que aseguran durabilidad y elegancia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {productosDestacados.map((producto) => (
            <div 
              key={producto.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                <Link 
                  to={`/productos?categoria=${producto.categoria}`}
                  className="text-marron-nogal hover:text-azul-petroleo font-medium inline-flex items-center transition-colors"
                >
                  Ver Detalles
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/productos" 
            className="bg-marron-nogal hover:bg-azul-petroleo text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductosDestacados;

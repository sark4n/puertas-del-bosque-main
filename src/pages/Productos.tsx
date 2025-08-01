
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductoCard from '@/components/productos/ProductoCard';
import { productos, Producto } from '@/data/productos';

const Productos: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoriaParam = queryParams.get('categoria');

  const [categoriaActiva, setCategoriaActiva] = useState<string>(categoriaParam || 'todos');
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>(productos);

  // Filter products when category changes
  useEffect(() => {
    if (categoriaActiva === 'todos') {
      setProductosFiltrados(productos);
    } else {
      setProductosFiltrados(productos.filter((producto) => producto.categoria === categoriaActiva));
    }
  }, [categoriaActiva]);

  // Handle category change from URL
  useEffect(() => {
    if (categoriaParam) {
      setCategoriaActiva(categoriaParam);
    }
  }, [categoriaParam]);

  const handleCategoriaChange = (categoria: string) => {
    setCategoriaActiva(categoria);
  };

  const categoriasProductos = [
    { id: 'todos', nombre: 'Todos los Productos' },
    { id: 'enchapadas', nombre: 'Enchapadas' },
    { id: 'corta-fuegos', nombre: 'Corta Fuegos' },
    { id: 'mdf-prepintadas', nombre: 'MDF Prepintadas' },
    { id: 'hidro-repelentes', nombre: 'Hidro Repelentes' },
    { id: 'terciado', nombre: 'Terciado' },
    { id: 'cholguan', nombre: 'Cholguan' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Banner */}
        <div className="bg-gradient-to-r from-marron-nogal to-azul-petroleo text-white py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4 text-white">Nuestros Productos</h1>
            <p className="text-lg max-w-2xl">
              Descubre nuestra amplia variedad de puertas y molduras fabricadas con las mejores 
              maderas y acabados de alta calidad.
            </p>
          </div>
        </div>
        
        {/* Categorías y Productos */}
        <section className="py-12">
          <div className="container-custom">
            {/* Categorías */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
                {categoriasProductos.map((categoria) => (
                  <button
                    key={categoria.id}
                    onClick={() => handleCategoriaChange(categoria.id)}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      categoriaActiva === categoria.id
                        ? 'bg-marron-nogal text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {categoria.nombre}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Productos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productosFiltrados.length > 0 ? (
                productosFiltrados.map((producto) => (
                  <ProductoCard key={producto.id} producto={producto} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-medium text-gray-500">
                    No se encontraron productos en esta categoría
                  </h3>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Productos;


import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GaleriaGrid from '@/components/galeria/GaleriaGrid';
import { galeria, ImagenGaleria } from '@/data/galeria';

const Galeria: React.FC = () => {
  const [filtro, setFiltro] = useState<'todos' | 'productos' | 'fabrica'>('todos');
  const [imagenesFiltradas, setImagenesFiltradas] = useState<ImagenGaleria[]>(galeria);

  const handleFiltroChange = (nuevoFiltro: 'todos' | 'productos' | 'fabrica') => {
    setFiltro(nuevoFiltro);
    
    if (nuevoFiltro === 'todos') {
      setImagenesFiltradas(galeria);
    } else {
      setImagenesFiltradas(galeria.filter(img => img.categoria === nuevoFiltro));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Banner */}
        <div className="bg-gradient-to-r from-charcoal to-gray-700 text-white py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4 text-white">Galería de Trabajos</h1>
            <p className="text-lg max-w-2xl">
              Explora nuestros proyectos y productos terminados que muestran la calidad y 
              artesanía de Famavir.
            </p>
          </div>
        </div>
        
        {/* Galería */}
        <section className="py-12">
          <div className="container-custom">
            {/* Filtros */}
            <div className="mb-8">
              <div className="flex justify-center space-x-4">
                <FilterButton 
                  active={filtro === 'todos'} 
                  onClick={() => handleFiltroChange('todos')}
                >
                  Todos
                </FilterButton>
                <FilterButton 
                  active={filtro === 'productos'} 
                  onClick={() => handleFiltroChange('productos')}
                >
                  Productos
                </FilterButton>
                <FilterButton 
                  active={filtro === 'fabrica'} 
                  onClick={() => handleFiltroChange('fabrica')}
                >
                  Fabrica
                </FilterButton>
              </div>
            </div>
            
            {/* Grid de imágenes */}
            <GaleriaGrid imagenes={imagenesFiltradas} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-md font-medium transition-colors ${
        active
          ? 'bg-wood text-white'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
};

export default Galeria;

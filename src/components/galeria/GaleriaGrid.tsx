
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ImagenGaleria } from '@/data/galeria';

interface GaleriaGridProps {
  imagenes: ImagenGaleria[];
}

const GaleriaGrid: React.FC<GaleriaGridProps> = ({ imagenes }) => {
  const [selectedImage, setSelectedImage] = useState<ImagenGaleria | null>(null);

  const openLightbox = (imagen: ImagenGaleria) => {
    setSelectedImage(imagen);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {imagenes.map((imagen) => (
          <div
            key={imagen.id}
            className="rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform hover:scale-[1.02]"
            onClick={() => openLightbox(imagen)}
          >
            <div className="relative h-64 md:h-72">
              <img
                src={imagen.imagen}
                alt={imagen.titulo}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                {/* <div className="p-4 text-white">
                  <h3 className="font-medium">{imagen.titulo}</h3>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.imagen}
                alt={selectedImage.titulo}
                className="w-full h-auto"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors"
                onClick={closeLightbox}
              >
                <X size={20} />
              </button>
            </div>
            {/* <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{selectedImage.titulo}</h3>
              {selectedImage.descripcion && (
                <p className="text-gray-600">{selectedImage.descripcion}</p>
              )}
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default GaleriaGrid;

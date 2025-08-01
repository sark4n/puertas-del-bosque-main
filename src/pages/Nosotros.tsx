import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Nosotros: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Banner */}
        <div className="bg-gradient-to-r from-azul-petroleo to-verde-bosque text-white py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4 text-white">Sobre Nosotros</h1>
            <p className="text-lg max-w-2xl">
              Conoce la historia, valores y compromiso de Puertas Del Bosque, empresa chilena dedicada a la fabricación de puertas y molduras de madera. Nuestra misión es dar forma a espacios duraderos y elegantes, combinando tecnología avanzada, materias primas seleccionadas y el arte de la carpintería tradicional.
            </p>
          </div>
        </div>
        
        {/* Historia */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Puertas Del Bosque es la continuadora de empresas del rubro, continuando así la fabricación de puertas de excelencia en la comuna de María Pinto, en un entorno natural de más de 10 hectáreas, donde se emplaza nuestra planta industrial de 3.000 m² destinada a producción y almacenamiento. Hoy, contamos con un equipo de 20 colaboradores distribuidos en áreas de fabricación, ventas, administración y logística, con una capacidad productiva que alcanza las 40.000 puertas mensuales.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Desde nuestros orígenes, hemos definido una política comercial enfocada en agregar valor a nuestros productos, incorporar tecnología de punta a nuestros procesos y mantener un compromiso firme con los plazos de entrega y la satisfacción del cliente.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/foto2.jpg"
                    alt="Historia de Puertas Del Bosque"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 -z-10">
                  <div className="bg-marron-nogal w-48 h-48 rounded-lg opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Compromiso con la calidad */}
        <section className="py-16 bg-beige-calido">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compromiso con la Calidad</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                En Puertas Del Bosque, la calidad no es una opción: es nuestro estándar.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-marron-nogal/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-marron-nogal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Materias Primas Seleccionadas</h3>
                <p className="text-gray-700">
                  Trabajamos con maderas de alta durabilidad, estética superior y origen sostenible. Usamos especies nativas chilenas y maderas importadas certificadas.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-marron-nogal/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-marron-nogal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Tecnología y Artesanía</h3>
                <p className="text-gray-700">
                  Integramos maquinaria de última generación a procesos artesanales, logrando acabados precisos y eficientes que conservan el carácter único de cada pieza.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-marron-nogal/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-marron-nogal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Control de Calidad Riguroso</h3>
                <p className="text-gray-700">
                  Cada producto atraviesa múltiples etapas de inspección. Nuestro equipo de calidad asegura que cada puerta y moldura supere los estándares antes de llegar al cliente.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Misión y visión */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-marron-nogal">Nuestra Misión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fabricar puertas y molduras de madera con los más altos estándares de calidad, combinando tecnología de punta con técnicas artesanales, para entregar soluciones duraderas, funcionales y estéticamente superiores.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Nos destacamos por una atención personalizada, asesoría directa y propuestas a medida que acompañan cada proyecto desde su inicio.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-marron-nogal">Nuestra Visión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser referentes en Chile en la fabricación de puertas y molduras de madera, reconocidos por la excelencia, sostenibilidad e innovación de nuestros productos.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Expandir nuestra presencia en mercados internacionales, llevando el sello de calidad de la carpintería chilena más allá de nuestras fronteras, manteniendo intactos nuestros valores de honestidad, compromiso y respeto por nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
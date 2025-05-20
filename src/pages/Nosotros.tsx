
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Nosotros: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Banner */}
        <div className="bg-gradient-to-r from-wood-dark to-charcoal text-white py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4 text-white">Sobre Nosotros</h1>
            <p className="text-lg max-w-2xl">
              Conoce la historia y valores de Puertas del Bosque, empresa chilena dedicada a la 
              fabricación de puertas y molduras de madera desde 2005.
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
                  Nuestra Compañía nace al Mercado Nacional en el mes de Febrero de 2013, en la comuna de María Pinto; en un emplazamiento de más de 10 hectáreas y un galpón industrial para la producción y almacenamiento de más de 9.500 metros cuadrados. Hoy contamos con 35 colaboradores en las áreas de Fabricación, Ventas, Administración y Logística, con una vasta experiencia en este exigente mercado y con una capacidad productiva de 50.000 puertas mensuales.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nuestra Empresa ha definido una política comercial acorde a las exigencias y necesidades del mercado, incorporando con esto productos con mayor valor agregado, nuevas tecnologías incorporadas al proceso productivo, un firme compromiso con los plazos de entrega y una clara orientación al Cliente.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nuestra Empresa ha definido una política comercial acorde a las exigencias y necesidades del mercado, incorporando con esto productos con mayor valor agregado, nuevas tecnologías incorporadas al proceso productivo, un firme compromiso con los plazos de entrega y una clara orientación al Cliente.

                  Esta orientación se traduce en claros compromisos con nuestros Clientes:

                  Entregar productos garantizados en su calidad y por sobre el estándar vigente.
                  Cumplir fielmente con los plazos acordados de entrega.
                  Mejorar la oferta de productos en diseño y calidad.
                  Ofrecer al mercado mayores y mejores alternativas de productos.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/foto2.jpg"
                    alt="Historia de Puertas del Bosque"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 -z-10">
                  <div className="bg-wood w-48 h-48 rounded-lg opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Compromiso con la calidad */}
        <section className="py-16 bg-offwhite">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compromiso con la Calidad</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                En Puertas del Bosque, la calidad no es solo una promesa, es nuestro estándar.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-wood/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Materias Primas Seleccionadas</h3>
                <p className="text-gray-700">
                  Utilizamos maderas de la mejor calidad, seleccionadas cuidadosamente por su durabilidad, 
                  belleza y sostenibilidad. Trabajamos principalmente con especies nativas chilenas y 
                  maderas importadas certificadas.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-wood/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Tecnología y Artesanía</h3>
                <p className="text-gray-700">
                  Combinamos tecnología de punta con técnicas artesanales tradicionales. 
                  Nuestro equipo de carpinteros expertos garantiza acabados perfectos en 
                  cada pieza que fabricamos.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-wood/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Control de Calidad Riguroso</h3>
                <p className="text-gray-700">
                  Cada producto pasa por múltiples inspecciones durante el proceso de fabricación. 
                  Nuestro departamento de calidad verifica que cada pieza cumpla con los estándares 
                  antes de ser entregada al cliente.
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
                <h3 className="text-2xl font-bold mb-4 text-wood">Nuestra Misión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fabricar puertas y molduras de madera de la más alta calidad, combinando 
                  técnicas artesanales con tecnología moderna, para satisfacer las necesidades 
                  de nuestros clientes con productos duraderos, funcionales y estéticamente superiores.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Buscamos ser reconocidos por nuestra excelencia en servicio al cliente, 
                  ofreciendo asesoría personalizada y soluciones a medida para cada proyecto.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-wood">Nuestra Visión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser la empresa líder en fabricación de puertas y molduras de madera en Chile, 
                  reconocida por la excelencia de sus productos y su compromiso con la 
                  sostenibilidad y la innovación.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Expandir nuestro alcance a nivel internacional, llevando la calidad de la 
                  carpintería chilena a nuevos mercados, manteniendo siempre nuestros valores 
                  de excelencia, honestidad y compromiso con el cliente.
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

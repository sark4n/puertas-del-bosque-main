
export type Testimonio = {
  id: string;
  nombre: string;
  cargo: string;
  empresa?: string;
  contenido: string;
  imagen?: string;
};

export const testimonios: Testimonio[] = [
  {
    id: '1',
    nombre: 'Carlos Mendoza',
    cargo: 'Arquitecto',
    empresa: 'Mendoza Arquitectos',
    contenido: 'Las puertas de Puertas del Bosque han sido una excelente elección para nuestros proyectos residenciales. La calidad de la madera y el acabado es excepcional.',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    nombre: 'María Fernández',
    cargo: 'Diseñadora de Interiores',
    contenido: 'He recomendado los productos de Puertas del Bosque a todos mis clientes. Las molduras son precisas y dan un toque de elegancia a cualquier espacio.',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    nombre: 'Roberto Álvarez',
    cargo: 'Gerente de Construcción',
    empresa: 'Constructora del Sur',
    contenido: 'Trabajamos con Puertas del Bosque en más de 20 proyectos y siempre han cumplido con los plazos de entrega y la calidad prometida. Socios confiables.',
    imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

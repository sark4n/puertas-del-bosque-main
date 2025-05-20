export type Producto = {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  categoria: 'enchapadas' | 'corta-fuegos' | 'mdf-prepintadas' | 'hidro-repelentes'| 'terciado'| 'cholguan' ;
  destacado?: boolean;
};

export const productos: Producto[] = [
  {
    id: '1',
    nombre: 'Puerta Relbun',
    descripcion: 'Puerta de madera sólida de roble con diseño clásico y acabado premium.',
    imagen: '/public/images/enchapadas/enchapada1.jpg',
    categoria: 'enchapadas',
    destacado: true
  },
  {
    id: '2',
    nombre: 'Puerta Maqui',
    descripcion: 'Puerta moderna de nogal con líneas limpias y estilo minimalista.',
    imagen: '/public/images/enchapadas/enchapada2.jpg',
    categoria: 'enchapadas',
    destacado: true
  },
  {
    id: '3',
    nombre: 'Puerta Maqui II',
    descripcion: 'Puerta sólida de caoba con gran resistencia y durabilidad.',
    imagen: '/public/images/enchapadas/enchapada3.jpg',
    categoria: 'enchapadas'
  },
  {
    id: '4',
    nombre: 'Puerta Maqui III',
    descripcion: 'Puerta de pino con acabado rústico, ideal para casas de campo.',
    imagen: '/public/images/enchapadas/enchapada4.jpg',
    categoria: 'enchapadas'
  },
  {
    id: '5',
    nombre: 'Puerta Guayacan',
    descripcion: 'Puerta sólida de caoba con gran resistencia y durabilidad.',
    imagen: '/public/images/enchapadas/enchapada5.jpg',
    categoria: 'enchapadas',
    destacado: true
  },
  {
    id: '6',
    nombre: 'Puerta F-30',
    descripcion: 'Moldura de líneas simples para espacios contemporáneos.',
    imagen: '/public/images/corta-fuegos/corta-fuegos.jpg',
    categoria: 'corta-fuegos'
  },
  {
    id: '7',
    nombre: 'Puerta Maqui III',
    descripcion: 'Elegante puerta corrediza de cerezo, ideal para ahorrar espacio.',
    imagen: '/public/images/mdf-prepintadas/mdf-prepintada1.jpg',
    categoria: 'mdf-prepintadas'
  },
  {
    id: '8',
    nombre: 'Puerta Guayacan',
    descripcion: 'Puerta sólida de lenga chilena, madera de gran calidad y durabilidad.',
    imagen: '/public/images/mdf-prepintadas/mdf-prepintada2.jpg',
    categoria: 'mdf-prepintadas'
  },
  {
    id: '9',
    nombre: 'Puerta Lisa Prepintada',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/mdf-prepintadas/mdf-prepintada3.jpg',
    categoria: 'mdf-prepintadas'
  },
  {
    id: '10',
    nombre: 'Puerta Relbun',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/mdf-prepintadas/mdf-prepintada4.jpg',
    categoria: 'mdf-prepintadas'
  },
  {
    id: '11',
    nombre: 'Medio Cuerpo',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/mdf-prepintadas/mdf-prepintada5.jpg',
    categoria: 'mdf-prepintadas'
  },
  {
    id: '12',
    nombre: 'Medio Cuerpo y Celosia',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/mdf-prepintadas/mdf-prepintada6.jpg',
    categoria: 'mdf-prepintadas'
  },
  {
    id: '13',
    nombre: 'Puerta Maqui III',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/hidro-repelentes/hidro-repelente1.jpg',
    categoria: 'hidro-repelentes'
  },
  {
    id: '14',
    nombre: 'Puerta Guayacan',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/hidro-repelentes/hidro-repelente2.jpg',
    categoria: 'hidro-repelentes'
  },
  {
    id: '15',
    nombre: 'Puerta Lisa Pre Pintada',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/hidro-repelentes/hidro-repelente3.jpg',
    categoria: 'hidro-repelentes'
  },
  {
    id: '16',
    nombre: 'Puerta Relbun',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/hidro-repelentes/hidro-repelente4.jpg',
    categoria: 'hidro-repelentes'
  },
  {
    id: '17',
    nombre: 'Puerta Medio Cuerpo',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/hidro-repelentes/hidro-repelente5.jpg',
    categoria: 'hidro-repelentes'
  },
  {
    id: '18',
    nombre: 'Medio Cuerpo y Celosia',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/hidro-repelentes/hidro-repelente6.jpg',
    categoria: 'hidro-repelentes'
  },
  {
    id: '19',
    nombre: 'Lisa Desnuda',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/terciado/terciado1.jpg',
    categoria: 'terciado'
  }, 
  {
    id: '20',
    nombre: 'Medio Cuerpo',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/terciado/terciado2.jpg',
    categoria: 'terciado'
  }, 
  {
    id: '21',
    nombre: 'Medio Cuerpo y Celosia',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/terciado/terciado3.jpg',
    categoria: 'terciado'
  },
  {
    id: '22',
    nombre: 'Lisa Desnuda',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/cholguan/cholguan1.jpg',
    categoria: 'cholguan'
  }, 
  {
    id: '23',
    nombre: 'Medio Cuerpo',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/cholguan/cholguan2.jpg',
    categoria: 'cholguan'
  }, 
  {
    id: '24',
    nombre: 'Medio Cuerpo y Celosia',
    descripcion: 'Moldura con tallados artesanales para espacios exclusivos.',
    imagen: '/public/images/cholguan/cholguan3.jpg',
    categoria: 'cholguan'
  },      
];
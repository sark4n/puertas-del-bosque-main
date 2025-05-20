
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-wood-light">Puertas del Bosque</h3>
            <p className="mb-4 text-gray-300">
              Empresa chilena dedicada a la fabricación de puertas de madera y molduras de la más alta calidad desde 2005.
            </p>
            {/*
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-wood-light transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-wood-light transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-wood-light transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>*/}
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-wood-light">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-wood-light transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-300 hover:text-wood-light transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-300 hover:text-wood-light transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-wood-light transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-wood-light transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-wood-light">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-wood-light" />
                <span className="text-gray-300">Ruta G730, Parcela Nº 71, Chorombo Alto – María Pinto, Chile</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-wood-light" />
                <span className="text-gray-300">+56 9 7559 6939</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-wood-light" />
                <span className="text-gray-300">contacto@puertasdelBosque.cl</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-wood-light" />
                <span className="text-gray-300">Lun-Vie: 9:00 - 18:00<br /></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 mt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Puertas del Bosque. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

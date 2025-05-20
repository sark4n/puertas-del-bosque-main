
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Package, Image, Info, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo y Título */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src="/images/logo2.png" 
              alt="Puertas del Bosque Logo" 
              className="h-10 mr-3" 
            />
            <span className="text-2xl font-bold text-wood">Puertas del Bosque</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Home size={18} />} onClick={closeMenu}>
              Inicio
            </NavLink>
            <NavLink to="/productos" icon={<Package size={18} />} onClick={closeMenu}>
              Productos
            </NavLink>
            <NavLink to="/galeria" icon={<Image size={18} />} onClick={closeMenu}>
              Galería
            </NavLink>
            <NavLink to="/nosotros" icon={<Info size={18} />} onClick={closeMenu}>
              Nosotros
            </NavLink>
            <NavLink to="/contacto" icon={<Phone size={18} />} onClick={closeMenu}>
              Contacto
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-wood focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-6 space-y-4">
            <NavLink to="/" icon={<Home size={18} />} onClick={closeMenu} mobile>
              Inicio
            </NavLink>
            <NavLink to="/productos" icon={<Package size={18} />} onClick={closeMenu} mobile>
              Productos
            </NavLink>
            <NavLink to="/galeria" icon={<Image size={18} />} onClick={closeMenu} mobile>
              Galería
            </NavLink>
            <NavLink to="/nosotros" icon={<Info size={18} />} onClick={closeMenu} mobile>
              Nosotros
            </NavLink>
            <NavLink to="/contacto" icon={<Phone size={18} />} onClick={closeMenu} mobile>
              Contacto
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

const NavLink = ({ to, children, icon, onClick, mobile = false }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center text-gray-800 hover:text-wood transition-colors ${
        mobile ? 'py-2 px-4 block border-b border-gray-200' : ''
      }`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="font-medium">{children}</span>
    </Link>
  );
};

export default Header;

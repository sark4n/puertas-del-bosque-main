
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast.error('Por favor completa todos los campos obligatorios');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real application, you would send the form data to a server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
      
      // Reset form
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
      });
    } catch (error) {
      toast.error('Ha ocurrido un error al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
      <div className="mb-6">
        <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
          Nombre <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent"
          placeholder="Tu nombre completo"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent"
          placeholder="tu@email.com"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent"
          placeholder="+56 9 1234 5678"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
          Mensaje <span className="text-red-600">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent"
          placeholder="Escribe tu mensaje aquí..."
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-wood hover:bg-wood-dark text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
      >
        {isSubmitting ? (
          <span>Enviando...</span>
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Enviar Mensaje
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;

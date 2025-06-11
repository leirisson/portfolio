import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message
    const whatsappMessage = `Nome: ${formData.name}%0AEmail: ${formData.email}%0AMensagem: ${formData.message}`;
    const whatsappNumber = "5592994529227"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vamos Conversar</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pronto para automatizar seus processos e implementar IA no seu negócio? 
            Entre em contato e vamos transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Entre em Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-verde-folium/10 rounded-full">
                    <Phone className="h-6 w-6 text-verde-folium" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telefone</p>
                    <p className="text-gray-600">+55 (92) 99452-9227</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-azul-tecno/10 rounded-full">
                    <Mail className="h-6 w-6 text-azul-tecno" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">leirisonsouza99@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-terracota/10 rounded-full">
                    <MapPin className="h-6 w-6 text-terracota" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Localização</p>
                    <p className="text-gray-600">Manaus-Amazonas, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-verde-folium/10 to-azul-tecno/10 p-6 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-3">Por que escolher meus serviços?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-verde-folium" />
                  <span>Consultoria gratuita inicial</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-verde-folium" />
                  <span>Soluções personalizadas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-verde-folium" />
                  <span>Suporte contínuo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-verde-folium" />
                  <span>Resultados garantidos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-folium focus:border-transparent transition-colors duration-200"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-folium focus:border-transparent transition-colors duration-200"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verde-folium focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Conte-me sobre seu projeto ou necessidade de automação..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? 'bg-green-500 hover:bg-green-600'
                    : isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-verde-folium hover:bg-azul-tecno shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Enviado com Sucesso!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar pelo WhatsApp</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              * Campos obrigatórios. Ao enviar, você será redirecionado para o WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
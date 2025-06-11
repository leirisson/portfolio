import { Heart, Code, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code className="h-8 w-8 text-verde-folium" />
                <Zap className="h-4 w-4 text-azul-tecno absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold">João Silva</h3>
                <p className="text-sm text-gray-400">Automação & IA</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialista em transformar processos complexos em soluções automatizadas inteligentes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-verde-folium transition-colors duration-200">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#habilidades" className="text-gray-400 hover:text-verde-folium transition-colors duration-200">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-gray-400 hover:text-verde-folium transition-colors duration-200">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-verde-folium transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>+55 (11) 99999-9999</p>
              <p>joao@exemplo.com</p>
              <p>São Paulo, Brasil</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>para transformar negócios através da tecnologia</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 João Silva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
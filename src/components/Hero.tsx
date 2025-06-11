import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-branco-neutro via-white to-blue-50 flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Automação &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-verde-folium to-azul-tecno">
              Inteligência Artificial
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformo processos complexos em soluções automatizadas inteligentes. 
            Especialista em n8n, Node.js e integração de APIs para otimizar seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contato"
              className="bg-verde-folium text-white px-8 py-4 rounded-full font-semibold hover:bg-azul-tecno transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Vamos Conversar</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <button className="border-2 border-verde-folium text-verde-folium px-8 py-4 rounded-full font-semibold hover:bg-verde-folium hover:text-white transition-all duration-300 flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-verde-folium mb-2">50+</div>
              <div className="text-gray-600">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-azul-tecno mb-2">100%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-terracota mb-2">3+</div>
              <div className="text-gray-600">Anos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-verde-folium mb-2">24/7</div>
              <div className="text-gray-600">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
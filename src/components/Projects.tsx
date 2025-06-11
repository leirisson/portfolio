import { ExternalLink, Github, Zap, Bot, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Automação E-commerce',
      description: 'Plataforma completa de automação para e-commerce com integração de estoque, pedidos e CRM. Reduziu 90% do trabalho manual e aumentou a eficiência operacional.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['n8n', 'Node.js', 'PostgreSQL', 'Webhook'],
      icon: Zap,
      color: 'verde-folium',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Chatbot Inteligente com IA',
      description: 'Assistente virtual avançado com processamento de linguagem natural, capaz de responder perguntas complexas e executar tarefas automatizadas.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['OpenAI', 'n8n', 'whatsapp'],
      icon: Bot,
      color: 'azul-tecno',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Integração Multi-Plataforma',
      description: 'Sistema que conecta mais de 15 plataformas diferentes, sincronizando dados em tempo real e automatizando fluxos de trabalho complexos.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['REST API', 'GraphQL', 'Docker', 'Redis'],
      icon: Globe,
      color: 'terracota',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projetos em Destaque</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos mais impactantes que desenvolvi, demonstrando soluções 
            reais para problemas complexos de automação e IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border border-gray-100"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute top-4 left-4 p-2 rounded-full bg-${project.color}/10 backdrop-blur-sm`}>
                  <project.icon className={`h-6 w-6 text-${project.color}`} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-${project.color}/5 text-${project.color} rounded-full text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className={`flex items-center space-x-2 px-4 py-2 bg-${project.color} text-white rounded-lg hover:bg-${project.color}/90 transition-colors duration-200 flex-1 justify-center`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Ver Projeto</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-verde-folium to-azul-tecno text-white px-8 py-3 rounded-full font-semibold hover:from-azul-tecno hover:to-verde-folium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Ver Mais Projetos</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
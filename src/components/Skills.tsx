import { Code, Database, Zap, Bot, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Automação',
      icon: Zap,
      color: 'verde-folium',
      skills: ['n8n', 'Power Automate']
    },
    {
      title: 'Backend',
      icon: Code,
      color: 'azul-tecno',
      skills: ['Node.js', 'Fastify', 'Express', 'TypeScript', 'JavaScript', 'REST APIs']
    },
    {
      title: 'Banco de Dados',
      icon: Database,
      color: 'terracota',
      skills: ['PostgreSQL', 'Prisma ORM', 'SQL']
    },
    {
      title: 'IA',
      icon: Bot,
      color: 'verde-folium',
      skills: ['OpenAI API', 'Chatbots', 'NLP']
    },
    {
      title: 'DevOps',
      icon: Settings,
      color: 'terracota',
      skills: ['Docker', 'Linux']
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Habilidades Técnicas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologias e ferramentas que uso para criar soluções de automação e IA de classe mundial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full bg-${category.color}/10 mr-4`}>
                  <category.icon className={`h-6 w-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`inline-block bg-${category.color}/5 text-${category.color} px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certification badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Certificações & Reconhecimentos</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-verde-folium font-semibold">n8n</span>
            </div>
            {/* <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-azul-tecno font-semibold">AWS Solutions Architect</span>
            </div> */}
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-terracota font-semibold">OpenAI API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'CEO, TechCorp',
      content: 'João transformou completamente nossos processos. A automação que ele criou nos economiza 40 horas por semana e aumentou nossa produtividade em 300%.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Pedro Silva',
      role: 'Diretor de Operações, E-commerce Plus',
      content: 'O chatbot com IA que o João desenvolveu revolucionou nosso atendimento. Reduzimos o tempo de resposta em 90% e aumentamos a satisfação do cliente.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Ana Costa',
      role: 'Gerente de TI, InnovaTech',
      content: 'Profissional excepcional! Entregou um sistema de integração complexo em tempo recorde. Sua expertise em automação é impressionante.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const achievements = [
    {
      metric: '90%',
      description: 'Redução no tempo de processos manuais',
      color: 'verde-folium'
    },
    {
      metric: '100%',
      description: 'Taxa de satisfação dos clientes',
      color: 'azul-tecno'
    },
    {
      metric: '50+',
      description: 'Projetos entregues com sucesso',
      color: 'terracota'
    },
    {
      metric: '24h',
      description: 'Tempo médio de resposta',
      color: 'verde-folium'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Dizem Meus Clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados reais de clientes que transformaram seus negócios com automação e IA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-verde-folium/20" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Resultados Comprovados</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.description} className="text-center">
                <div className={`text-4xl font-bold text-${achievement.color} mb-2`}>
                  {achievement.metric}
                </div>
                <div className="text-gray-600 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
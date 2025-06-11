import { User, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Especialista em serviços de TI com experiência em automações de processos com inteligência artificial, focado em criar soluções que transformam negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p>
                Sou Leirisson, desenvolvedor full stack e especialista em automações inteligentes com
                foco em soluções práticas e eficientes.
              </p>
              <p>
                Trabalho com tecnologias modernas como <br />Node.js, Fastify, TypeScript, PostgreSQL, Prisma, React, Tailwind CSS e
                automações com IA generativa para otimizar rotinas como:
                Contas a pagar e a receber
                Gestão de contratos
                Controle de ponto e RH
                Atendimento automatizado via WhatsApp
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-verde-folium/10 to-azul-tecno/10 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <User className="h-8 w-8 text-verde-folium mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Experiência</h3>
              </div>
              <p className="text-gray-700">
                Mais com projetos de automação entregues, desde pequenas integrações
                até sistemas complexos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-azul-tecno/10 to-terracota/10 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-azul-tecno mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Foco</h3>
              </div>
              <p className="text-gray-700">
                Resultados mensuráveis: redução no tempo de processos manuais
                e aumento  na eficiência operacional.
              </p>
            </div>

            <div className="bg-gradient-to-br from-terracota/10 to-verde-folium/10 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-terracota mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Inovação</h3>
              </div>
              <p className="text-gray-700">
                Sempre explorando as mais recentes tecnologias em IA e automação
                para entregar soluções de ponta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
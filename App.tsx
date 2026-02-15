
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Scale, 
  Briefcase, 
  HeartHandshake, 
  CheckCircle2, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp,
  Award,
  Clock,
  ArrowRight,
  Gavel,
  Home,
  FileText
} from 'lucide-react';

// --- Types & Interfaces ---
interface AreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FaqItemProps {
  question: string;
  answer: string;
}

// --- Constants ---
const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20uma%20consulta%20jurídica.";

// --- Components ---

const CTAButton: React.FC<{ className?: string; text?: string; pulse?: boolean }> = ({ className = "", text = "FALAR COM ESPECIALISTA AGORA", pulse = true }) => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold rounded-lg transition-all duration-300 shadow-xl transform hover:scale-105 active:scale-95 text-sm md:text-base tracking-wider uppercase ${pulse ? 'animate-bounce-subtle' : ''} ${className}`}
  >
    <MessageCircle className="w-6 h-6" />
    {text}
  </a>
);

const SectionHeading: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className={`text-2xl md:text-4xl font-extrabold mb-4 uppercase tracking-tight ${light ? 'text-white' : 'text-legal-dark'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-base md:text-lg max-w-2xl mx-auto font-light ${light ? 'text-gray-300' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
    <div className={`w-20 h-1.5 mx-auto mt-6 rounded-full ${light ? 'bg-legal-accent' : 'bg-legal-gold'}`}></div>
  </div>
);

const AreaCard: React.FC<AreaProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
    <div className="mb-6 p-3 bg-gray-50 rounded-xl w-fit group-hover:bg-legal-accent/10 transition-colors duration-300">
      <div className="text-legal-gold group-hover:text-legal-accent transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-legal-dark mb-3 uppercase tracking-tight">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed font-light">
      {description}
    </p>
  </div>
);

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 hover:text-legal-gold transition-colors duration-200"
      >
        <span className="font-semibold text-legal-dark text-lg pr-4">{question}</span>
        {isOpen ? <ChevronUp className="flex-shrink-0 text-legal-gold" /> : <ChevronDown className="flex-shrink-0 text-gray-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
        <p className="text-gray-600 font-light leading-relaxed pb-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white text-legal-dark overflow-x-hidden font-sans">
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
      `}</style>

      {/* Hero Section - Dark (Impact & Authority) */}
      <header className="relative bg-legal-dark py-20 md:py-32 overflow-hidden">
        {/* Background Texture/Gradient */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-legal-accent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-legal-gold rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 bg-legal-accent/10 border border-legal-accent/20 px-4 py-1.5 rounded-full">
              <ShieldCheck className="w-5 h-5 text-legal-accent" />
              <span className="text-legal-accent text-xs md:text-sm font-bold tracking-widest uppercase">
                20 Anos de Experiência Jurídica
              </span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight uppercase">
              Defenda seus Direitos com <span className="text-legal-accent">Comprometimento</span> e Autoridade
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Soluções jurídicas personalizadas em Direito Civil, Família, Previdenciário e Trabalhista. Atuação com transparência, empatia e o rigor de duas décadas de prática jurídica.
            </p>

            <div className="flex flex-col items-center gap-6">
              <CTAButton />
              <div className="flex items-center gap-4 text-gray-400 text-xs md:text-sm">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/${i+10}/40/40`} 
                      className="w-8 h-8 rounded-full border-2 border-legal-dark" 
                      alt="Cliente satisfeito" 
                    />
                  ))}
                </div>
                <span>Mais de +1.500 casos atendidos com sucesso</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trusted By / Stats Bar */}
      <section className="bg-gray-50 border-y border-gray-100 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center opacity-80">
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl font-extrabold text-legal-dark">20</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Anos de Carreira</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl font-extrabold text-legal-dark">1.5k+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Processos Atuados</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl font-extrabold text-legal-dark">98%</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Transparência Total</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl font-extrabold text-legal-dark">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Foco no Cliente</span>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas - Light Section (Clarity) */}
      <section id="servicos" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Especialidades de Atuação"
            subtitle="Oferecemos suporte jurídico completo nas áreas que mais impactam sua vida e seu patrimônio."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AreaCard 
              icon={<Users className="w-8 h-8" />}
              title="Direito de Família"
              description="Divórcios, guarda de filhos, pensão alimentícia e inventários. Atuação humanizada para momentos delicados."
            />
            <AreaCard 
              icon={<Award className="w-8 h-8" />}
              title="Previdenciário"
              description="Planejamento de aposentadoria, auxílio-doença, BPC/LOAS e revisões de benefícios junto ao INSS."
            />
            <AreaCard 
              icon={<Briefcase className="w-8 h-8" />}
              title="Direito Trabalhista"
              description="Defesa dos direitos do trabalhador e consultoria empresarial para demandas laborais complexas."
            />
            <AreaCard 
              icon={<Scale className="w-8 h-8" />}
              title="Direito Civil"
              description="Indenizações, danos morais, contratos, direito de propriedade e responsabilidade civil em geral."
            />
            <AreaCard 
              icon={<Gavel className="w-8 h-8" />}
              title="Empresarial"
              description="Suporte para empresas em contratos, gestão de conflitos societários e proteção patrimonial."
            />
            <AreaCard 
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Direito do Consumidor"
              description="Ações contra abusos de bancos, operadoras de telefonia, planos de saúde e compras online."
            />
          </div>

          <div className="mt-16 text-center">
            <CTAButton text="TENHO UM PROBLEMA JURÍDICO" />
          </div>
        </div>
      </section>

      {/* Experience & Humanities - Gradient/Texture Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-legal-dark via-[#1a2b4b] to-legal-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-legal-accent rounded-2xl"></div>
                <img 
                  src="https://picsum.photos/seed/legalpro/800/1000" 
                  alt="Advogado" 
                  className="rounded-2xl shadow-2xl relative z-10 w-full object-cover grayscale-[20%]"
                />
                <div className="absolute -bottom-8 -right-8 bg-legal-accent p-8 rounded-2xl z-20 shadow-xl hidden md:block">
                  <p className="text-white font-extrabold text-4xl mb-1">20+</p>
                  <p className="text-white text-xs uppercase tracking-widest font-bold">Anos de Experiência</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight uppercase tracking-tight">
                Mais que Processos, <span className="text-legal-accent">Vidas e Direitos</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                A advocacia moderna exige técnica apurada, mas acima de tudo, exige <strong>Humanidade e Empatia</strong>. Em 20 anos de prática jurídica, aprendi que cada cliente traz uma história que merece ser ouvida com dedicação absoluta.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  { icon: <HeartHandshake />, text: "Atendimento Humanizado e Próximo" },
                  { icon: <FileText />, text: "Transparência Total em cada Movimentação" },
                  { icon: <Clock />, text: "Agilidade e Rigor nos Prazos" },
                  { icon: <ShieldCheck />, text: "Comprometimento com a Melhor Solução" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white group">
                    <div className="bg-legal-accent/20 p-2 rounded-lg text-legal-accent group-hover:bg-legal-accent group-hover:text-white transition-all duration-300">
                      {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                    </div>
                    <span className="font-semibold text-base md:text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>

              <CTAButton className="w-full md:w-auto" text="AGENDAR CONSULTA DE AVALIAÇÃO" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Alternating Contrast */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="O que dizem os clientes"
            subtitle="A confiança é o pilar do nosso trabalho. Veja o depoimento de quem já teve seus problemas solucionados."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Carlos Eduardo", role: "Empresário", text: "Excelente profissional. Resolveu uma demanda trabalhista complexa com rapidez e muita transparência. Recomendo fortemente." },
              { name: "Maria Silva", role: "Aposentada", text: "Graças ao doutor, consegui minha aposentadoria após anos de luta com o INSS. Um atendimento muito humano e educado." },
              { name: "João Pedro", role: "Cliente de Direito Civil", text: "Sempre fui mantido informado sobre cada passo do meu processo. A empatia e o cuidado com o cliente são os diferenciais aqui." }
            ].map((test, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 italic font-light relative">
                <div className="absolute -top-4 left-8 text-6xl text-legal-accent opacity-20 font-serif">"</div>
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{test.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/seed/${idx+50}/40/40`} alt={test.name} />
                  </div>
                  <div>
                    <p className="font-bold text-legal-dark text-sm uppercase">{test.name}</p>
                    <p className="text-legal-gold text-[10px] font-bold uppercase tracking-wider">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Reducing Friction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading title="Dúvidas Frequentes" />
          
          <div className="space-y-2">
            <FaqItem 
              question="Quanto custa uma consulta jurídica?"
              answer="Os honorários são avaliados caso a caso, seguindo rigorosamente a tabela da OAB e considerando a complexidade da demanda. No primeiro contato, explicamos toda a estrutura de custos de forma transparente."
            />
            <FaqItem 
              question="Atendem em todo o Brasil?"
              answer="Sim. Com a digitalização dos processos (PJe), atuamos em tribunais de todo o país de forma remota, mantendo a mesma qualidade e proximidade do atendimento presencial."
            />
            <FaqItem 
              question="Como acompanho o meu processo?"
              answer="Nossa equipe envia relatórios mensais e informamos imediatamente qualquer movimentação relevante via WhatsApp ou E-mail. Você nunca fica sem saber o que está acontecendo."
            />
            <FaqItem 
              question="Quais documentos preciso para começar?"
              answer="Depende da área de atuação. Geralmente, RG, CPF e comprovante de residência são básicos. Para áreas específicas como trabalhista ou previdenciária, orientamos a lista completa no primeiro atendimento."
            />
          </div>

          <div className="mt-16 bg-legal-dark p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-legal-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 uppercase">Ainda tem dúvidas sobre o seu caso?</h3>
            <p className="text-gray-400 mb-8 font-light max-w-xl mx-auto">
              Não deixe seus direitos prescreverem. Clique no botão abaixo e fale agora mesmo com um especialista.
            </p>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-legal-dark py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Scale className="text-legal-accent w-6 h-6" />
                <span className="text-white font-extrabold text-xl tracking-tighter uppercase">Advocacia <span className="text-legal-accent">Especializada</span></span>
              </div>
              <p className="text-gray-500 text-sm font-light">
                © {new Date().getFullYear()} Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-legal-accent transition-colors"><ShieldCheck className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-legal-accent transition-colors"><Briefcase className="w-6 h-6" /></a>
              <a href={WHATSAPP_LINK} className="text-gray-400 hover:text-legal-accent transition-colors"><MessageCircle className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest leading-loose font-bold max-w-2xl mx-auto">
              IMPORTANTE: Estas informações não substituem a consulta direta com um advogado. O atendimento via WhatsApp não constitui relação advogado-cliente automática até a formalização do contrato de honorários.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href={WHATSAPP_LINK}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <MessageCircle className="text-white w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

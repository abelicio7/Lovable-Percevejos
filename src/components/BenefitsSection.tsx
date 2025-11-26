import { CheckCircle2 } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Passo a passo completo da receita natural",
    "Como aplicar corretamente em todos os lugares infestados",
    "Método para impedir que os percevejos voltem",
    "Dicas extras de limpeza e proteção da casa",
    "Lista de ingredientes fáceis de encontrar em Moçambique",
    "Técnicas para eliminar ovos e larvas escondidos",
    "Orientações de segurança para aplicação",
    "Frequência ideal de aplicação para resultados duradouros",
  ];

  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              O Que Você Vai Aprender no eBook
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Tudo que você precisa para eliminar os percevejos de uma vez por todas:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20 animate-in fade-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-xl p-6 md:p-8 text-center">
            <p className="text-xl md:text-2xl font-bold text-primary-foreground">
              E o melhor: você vai receber tudo isso em um guia simples, direto e fácil de
              seguir, mesmo que nunca tenha feito nada parecido antes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

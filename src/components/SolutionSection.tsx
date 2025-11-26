import { Shield, Leaf, TrendingUp, Clock } from "lucide-react";
import ingredientsImage from "@/assets/natural-ingredients.jpg";

const SolutionSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Ingredientes que você encontra facilmente em Moçambique",
    },
    {
      icon: Shield,
      title: "Seguro",
      description: "Não prejudica crianças, animais ou o meio ambiente",
    },
    {
      icon: TrendingUp,
      title: "Eficaz",
      description: "Elimina percevejos adultos, ninfas e ovos",
    },
    {
      icon: Clock,
      title: "Rápido",
      description: "Resultados visíveis em poucos dias",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              A Solução Natural Que Você Estava Esperando
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra o método comprovado que milhares de famílias moçambicanas já usaram
              para eliminar percevejos de forma definitiva e segura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={ingredientsImage}
                alt="Ingredientes naturais para eliminar percevejos"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Este eBook Vai Ensinar Você:
                </h3>
                <p className="text-lg text-muted-foreground">
                  Uma receita caseira poderosa, usando apenas ingredientes naturais e
                  acessíveis, que vai acabar com os percevejos de vez da sua casa.
                </p>
              </div>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg animate-in fade-in slide-in-from-right duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-primary rounded-full p-2 flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

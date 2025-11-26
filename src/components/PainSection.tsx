import { AlertCircle } from "lucide-react";

const PainSection = () => {
  const painPoints = [
    "Noites mal dormidas com coceiras insuportáveis",
    "Manchas de sangue nas roupas de cama",
    "Vergonha de receber visitas em casa",
    "Dinheiro desperdiçado com produtos que não funcionam",
    "Medo de espalhar percevejos para outros lugares",
    "Alergias e irritações na pele",
  ];

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Você Está Cansado de Sofrer com Percevejos?
            </h2>
            <p className="text-xl text-muted-foreground">
              Sabemos o quanto é difícil conviver com essa praga...
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 text-left">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-lg shadow-sm animate-in fade-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{point}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              E o pior de tudo é que os produtos químicos:
            </p>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg">
              <p className="text-lg text-foreground">
                São caros, perigosos para a saúde da sua família, e muitas vezes{" "}
                <span className="font-bold">NÃO RESOLVEM o problema!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;

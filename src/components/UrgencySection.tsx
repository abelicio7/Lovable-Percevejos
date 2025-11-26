import { AlertTriangle, Clock } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-16 md:py-20 bg-destructive/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle className="w-10 h-10 text-destructive animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Atenção: Oferta Por Tempo Limitado
            </h2>
          </div>

          <div className="bg-background p-8 rounded-xl shadow-lg border-2 border-destructive space-y-6">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div className="space-y-3">
                <p className="text-xl font-semibold text-foreground">
                  Este guia pode sair do ar a qualquer momento!
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Não podemos garantir que este material continuará disponível nos próximos
                  dias. Muitas pessoas já estão usando este método, e quanto mais pessoas
                  souberem, maior a chance de não conseguirmos manter o preço acessível.
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg">
              <p className="text-lg text-foreground font-medium text-center">
                <span className="font-bold text-accent">IMPORTANTE:</span> Cada dia que
                passa com percevejos na sua casa é mais um dia de sofrimento, coceira e
                noites mal dormidas. Não deixe para amanhã o que você pode resolver HOJE!
              </p>
            </div>

            <div className="text-center space-y-2">
              <p className="text-2xl font-bold text-destructive">
                ⚠️ Vagas Limitadas Para Garantir Suporte de Qualidade
              </p>
              <p className="text-muted-foreground">
                Garanta o seu acesso agora antes que seja tarde demais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;

import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Smartphone } from "lucide-react";
import happyHomeImage from "@/assets/happy-home.jpg";

const CTASection = () => {
  const handleCTAClick = () => {
    // This would redirect to payment page or open payment modal
    window.open("https://percevejos.vercel.app");
  };

  return (
    <section id="cta-section" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Chegou a Hora de Se Livrar dos Percevejos de Vez!
            </h2>
            <p className="text-xl text-muted-foreground">
              Acesso imediato ao guia completo por um preço especial
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-10 border-2 border-primary/20 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground line-through text-xl">
                    De: 500 MT
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-5xl md:text-6xl font-bold text-primary">199</p>
                    <p className="text-2xl font-semibold text-primary">MT</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Oferta especial por tempo limitado
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">Acesso imediato após pagamento</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">Guia completo em formato digital</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">Suporte via WhatsApp incluído</p>
                  </div>
                </div>

                <div className="bg-secondary p-4 rounded-lg flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground mb-1">Garantia de Satisfação</p>
                    <p className="text-sm text-muted-foreground">
                      Se não funcionar, devolvemos seu dinheiro. Sem perguntas.
                    </p>
                  </div>
                </div>

                <Button
                  variant="cta-large"
                  size="xl"
                  onClick={handleCTAClick}
                  className="w-full"
                >
                  Quero Eliminar os Percevejos Agora!
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Smartphone className="w-5 h-5" />
                  <p>Pagamento seguro via M-Pesa ou E-Mola</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={happyHomeImage}
                  alt="Família feliz em casa sem percevejos"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center space-y-4 pt-6">
            <p className="text-xl font-semibold text-foreground">
              Imagine acordar amanhã sem coceiras e finalmente dormir em paz...
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Por menos do que custa um jantar fora, você pode resolver este problema de uma
              vez por todas e reconquistar o conforto da sua casa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

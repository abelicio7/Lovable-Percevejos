import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-clean-bed.jpg";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-nature-green-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="text-background space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Elimine Percevejos de Forma Natural
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-background/95">
              Solução Definitiva e Segura!
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-background/90">
                  Ingredientes 100% naturais disponíveis no Brasil
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-background/90">
                  Resultados em menos de 7 dias
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-background/90">
                  Método seguro para crianças e animais
                </p>
              </div>
            </div>
            <div className="pt-4">
              <Button
                variant="cta-large"
                size="xl"
                onClick={scrollToCTA}
                className="w-full sm:w-auto"
              >
                Quero Eliminar os Percevejos Agora!
              </Button>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <img
                src={heroImage}
                alt="Cama limpa e confortável sem percevejos"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

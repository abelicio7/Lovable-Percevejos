import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      location: "Maputo",
      text: "Estava desesperada com os percevejos na minha casa. Tentei tudo, mas nada funcionava. Com este guia, em apenas 5 dias já não via mais nenhum! Incrível!",
      rating: 5,
    },
    {
      name: "João Macamo",
      location: "Beira",
      text: "Gastei muito dinheiro com produtos caros da loja e nada resolvia. Esta receita natural funcionou de verdade! Minha família está dormindo tranquila novamente.",
      rating: 5,
    },
    {
      name: "Ana Cossa",
      location: "Nampula",
      text: "O melhor é que os ingredientes são fáceis de encontrar aqui em Moçambique. Fiz a receita no mesmo dia e os resultados apareceram rapidinho. Recomendo!",
      rating: 5,
    },
    {
      name: "Carlos Nhachungue",
      location: "Matola",
      text: "Tinha vergonha de receber visitas por causa dos percevejos. Agora minha casa está limpa e protegida. Valeu cada metical investido neste guia!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Veja o Que Dizem Quem Já Eliminou os Percevejos
            </h2>
            <p className="text-xl text-muted-foreground">
              Centenas de famílias moçambicanas já reconquistaram o conforto das suas casas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-primary mb-3" />
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">{testimonial.text}</p>
                <div className="border-t border-border pt-3">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg text-center">
            <p className="text-lg font-semibold text-foreground">
              Estas são apenas algumas das centenas de famílias que já eliminaram percevejos
              usando este método natural!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

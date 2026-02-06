import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "María G.",
    country: "🇲🇽",
    text: "Nunca había programado en mi vida. En un fin de semana creé la app para mi restaurante con menú y pedidos. Increíble.",
  },
  {
    name: "Carlos R.",
    country: "🇨🇴",
    text: "Llevaba meses pagando Adalo $45/mes. Me pasé a Lovable y en 3 días tenía algo mejor por $5. No tiene comparación.",
  },
  {
    name: "Andrea M.",
    country: "🇪🇨",
    text: "El taller me enseñó paso a paso. Ahora tengo mi tienda online funcionando y recibiendo pedidos.",
  },
];

const TestimonialsSection = () => (
  <section className="relative py-20 md:py-28 surface-elevated">
    <div className="container mx-auto">
      <AnimatedSection>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Mira lo que nuestros clientes están{" "}
          <span className="gradient-text">creando</span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground">
          Emprendedores reales de Latinoamérica usando Lovable con nuestro taller
        </p>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg text-sm font-bold text-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    {t.name} {t.country}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="mt-10 text-center">
          <a
            href="https://www.facebook.com/IANexusonline"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-primary/50 px-6 py-3 font-semibold text-primary transition-all hover:bg-primary/10"
          >
            Ver más proyectos de la comunidad →
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TestimonialsSection;

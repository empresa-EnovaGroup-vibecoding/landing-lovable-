import { AlertTriangle, TrendingDown, Frown, Ban } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const wastedItems = [
  {
    icon: TrendingDown,
    text: "Gastas 50 créditos probando porque no sabes qué escribirle a la IA",
  },
  {
    icon: Frown,
    text: "Tu app sale fea o rota porque no usaste las instrucciones correctas",
  },
  {
    icon: Ban,
    text: "Se te acaban los créditos y no tienes nada terminado",
  },
  {
    icon: AlertTriangle,
    text: "Terminas frustrado pensando que Lovable no sirve",
  },
];

const WastedCreditsSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="container relative z-10 mx-auto">
      <AnimatedSection>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Lo que pasa cuando compras{" "}
          <span className="text-destructive">solo créditos (sin guía)</span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground">
          Los créditos sin método son créditos desperdiciados
        </p>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {wastedItems.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="group flex h-full flex-col items-center rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-center transition-all hover:border-destructive/40">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/20">
                <item.icon className="h-7 w-7 text-destructive" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.text}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <div className="mt-12 rounded-2xl glass-card-strong p-8 text-center">
          <p className="text-xl font-bold md:text-2xl">
            Con nuestro método, usas{" "}
            <span className="gradient-text">10 créditos en vez de 50</span>{" "}
            para el mismo resultado
          </p>
          <p className="mt-3 text-muted-foreground">
            Porque te damos los prompts probados que ya funcionaron para +100
            emprendedores
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WastedCreditsSection;

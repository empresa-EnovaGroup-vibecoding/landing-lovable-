import { MessageSquare, Code2, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: MessageSquare,
    title: "Sin Código",
    desc: "Le hablas como si fuera un amigo y la IA programa por ti",
  },
  {
    icon: Code2,
    title: "Profesional",
    desc: "Genera código limpio que puedes exportar y es tuyo para siempre",
  },
  {
    icon: Zap,
    title: "Rápido",
    desc: "Lo que un programador tarda semanas, Lovable lo hace en horas",
  },
];

const SolutionSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="container mx-auto">
      <AnimatedSection>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Conoce Lovable: Tu <span className="gradient-text">Programador Personal</span> con IA
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground">
          Le escribes lo que quieres en español. La IA lo construye en minutos. Así de simple.
        </p>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-primary/40">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl gradient-bg">
                <f.icon className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="mt-10 text-center">
          <a
            href="https://madewithlovable.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-primary/50 px-6 py-3 font-semibold text-primary transition-all hover:bg-primary/10"
          >
            Ver lo que otros han creado →
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SolutionSection;

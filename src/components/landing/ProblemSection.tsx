import { DollarSign, Lock, CodeXml, Compass, TrendingDown, Frown, Ban, AlertTriangle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: DollarSign,
    text: "Contratar un programador cuesta $500 - $1,000 USD y tarda semanas",
  },
  {
    icon: Lock,
    text: "Usas Adalo o Wix, pagas mensual, y si dejas de pagar pierdes TODO",
  },
  {
    icon: CodeXml,
    text: "No sabes programar y sientes que la tecnología no es para ti",
  },
  {
    icon: Compass,
    text: "Tienes la idea pero no sabes por dónde empezar",
  },
];

const wastedItems = [
  {
    icon: TrendingDown,
    text: "Pruebas 5 herramientas de IA y ninguna hace lo que necesitas",
  },
  {
    icon: Frown,
    text: "Tu app sale fea o rota porque no tienes el proceso correcto",
  },
  {
    icon: Ban,
    text: "Inviertes semanas y no tienes nada terminado",
  },
  {
    icon: AlertTriangle,
    text: "Terminas frustrado pensando que la IA no sirve para esto",
  },
];

const ProblemSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="container relative z-10 mx-auto">
      {/* Part 1: General pain */}
      <AnimatedSection>
        <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
          ¿Te identificas con <span className="gradient-text">esto</span>?
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="group flex h-full flex-col items-center rounded-xl glass-card p-6 text-center transition-all hover:border-primary/40 hover:glow-shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl gradient-bg">
                <item.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{item.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Part 2: Wasted credits pain — same section, flows naturally */}
      <AnimatedSection delay={0.5}>
        <h3 className="mb-10 mt-20 text-center text-2xl font-bold md:text-3xl">
          Y si intentas hacerlo solo{" "}
          <span className="text-destructive">sin un sistema, pasa esto:</span>
        </h3>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {wastedItems.map((item, i) => (
          <AnimatedSection key={`w-${i}`} delay={0.5 + i * 0.1}>
            <div className="group flex h-full flex-col items-center rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-center transition-all hover:border-destructive/40">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/20">
                <item.icon className="h-7 w-7 text-destructive" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{item.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Bridge to solution */}
      <AnimatedSection delay={1}>
        <div className="mt-12 rounded-2xl glass-card-strong p-8 text-center">
          <p className="text-xl font-bold md:text-2xl">
            Por eso creamos el{" "}
            <span className="gradient-text">Sistema Lanza Tu App</span>
          </p>
          <p className="mt-3 text-muted-foreground">
            Modelos validados + herramienta pro + taller completo.
            Todo lo que necesitas para ir de la idea al primer cobro.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;

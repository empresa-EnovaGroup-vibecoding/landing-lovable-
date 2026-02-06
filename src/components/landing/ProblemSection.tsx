import { DollarSign, Lock, CodeXml, Compass } from "lucide-react";
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

const ProblemSection = () => (
  <section className="relative py-20 md:py-28 surface-elevated">
    <div className="container mx-auto">
      <AnimatedSection>
        <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
          ¿Te identificas con <span className="gradient-text">esto</span>?
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="group flex h-full flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40 hover:glow-shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl gradient-bg">
                <item.icon className="h-7 w-7 text-foreground" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{item.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;

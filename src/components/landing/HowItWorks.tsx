import { Lightbulb, Rocket, DollarSign } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: Lightbulb,
    title: "Elige tu modelo o idea",
    desc: "Toma nuestros modelos validados o describe tu propia idea desde cero",
  },
  {
    icon: Rocket,
    title: "La IA construye por ti",
    desc: "La herramienta crea tu sistema en minutos. Tú solo ajustas y personalizas",
  },
  {
    icon: DollarSign,
    title: "Publica y empieza a cobrar",
    desc: "Tu app queda online para que cualquiera la use desde su celular — y tú cobras por ella",
  },
];

const HowItWorks = () => (
  <section className="relative py-20 md:py-28 particles-bg">
    <div className="container relative z-10 mx-auto">
      <AnimatedSection>
        <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
          3 pasos: de la idea al{" "}
          <span className="gradient-text">primer cobro</span>
        </h2>
      </AnimatedSection>

      <div className="relative grid gap-8 md:grid-cols-3">
        {/* Connector line */}
        <div className="absolute left-0 right-0 top-12 hidden h-0.5 md:block" style={{ background: "linear-gradient(90deg, #FF6B35, #FFA62B)" }} />

        {steps.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg gradient-bg glow-shadow-sm">
                <s.icon className="h-9 w-9 text-primary-foreground" />
              </div>
              <span className="mb-2 text-sm font-semibold text-primary">Paso {i + 1}</span>
              <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

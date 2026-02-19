import { LayoutTemplate, Rocket, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import LovableLogo from "./LovableLogo";

const pillars = [
  {
    icon: LayoutTemplate,
    title: "Modelos Validados",
    subtitle: "Plantillas listas para usar",
    desc: "Sistemas completos: delivery, inventario, CRM, agendamiento y más. Copias, pegas y la IA construye por ti.",
  },
  {
    icon: Rocket,
    title: "Lovable Pro — Tu Herramienta",
    subtitle: "Cuenta oficial · 300 créditos · 100% legal",
    desc: "La herramienta de IA que genera apps completas con solo describirle lo que quieres. Tu código es tuyo para siempre — lo descargas, lo publicas y funciona sin pagar mensualidad.",
  },
  {
    icon: GraduationCap,
    title: "Taller Paso a Paso",
    subtitle: "De la idea al primer cobro",
    desc: "Videos cortos que te guían desde cero aunque nunca hayas tocado tecnología. Incluye estrategias de monetización.",
  },
];

const SolutionSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="container relative z-10 mx-auto">
      <AnimatedSection>
        <span className="mb-4 block text-center text-sm font-semibold uppercase tracking-wider text-primary">
          Nuestro sistema
        </span>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          El <span className="gradient-text">Sistema Lanza Tu App</span>: 3
          pilares
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground">
          No adivinas. No experimentas. Sigues un sistema probado que ya
          funcionó +50 veces. Tú solo eliges qué quieres crear.
        </p>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((f, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="flex flex-col items-center rounded-xl glass-card p-8 text-center transition-all hover:border-primary/40 hover:glow-shadow-sm">
              <div className="mb-2 text-sm font-semibold text-primary">
                Pilar {i + 1}
              </div>
              {i === 1 ? (
                <div className="mb-5">
                  <LovableLogo className="h-10 w-auto" />
                </div>
              ) : (
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl gradient-bg shadow-lg">
                  <f.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              )}
              <h3 className="mb-1 text-xl font-bold">{f.title}</h3>
              {f.subtitle && (
                <p className="mb-3 text-xs font-semibold text-primary">{f.subtitle}</p>
              )}
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

    </div>
  </section>
);

export default SolutionSection;

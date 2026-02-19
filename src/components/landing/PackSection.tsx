import { Rocket, GraduationCap, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const toolFeatures = [
  "300 créditos Pro (el doble del plan oficial de $25 USD)",
  "+5 créditos diarios de regalo",
  "Más de 500 mensajes para crear",
  "Hosting incluido",
  "Dominio personalizado",
  "Sin marca de agua",
  "Código exportable (tuyo para siempre)",
];

const workshopFeatures = [
  "Acceso de por vida al taller completo",
  "Desde cero, sin experiencia previa",
  "Modelos validados de creación de sistemas",
  "Sistemas campeones que ya generan ingresos",
  "Cómo publicar y cobrar por tu app",
  "Estrategias para conseguir clientes",
];

const PackSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="container relative z-10 mx-auto">
      <AnimatedSection>
        <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
          Todo lo que incluye el <span className="gradient-text">Sistema Lanza Tu App</span>
        </h2>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Card 1 — Herramienta Lovable Pro */}
        <AnimatedSection delay={0.1}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:scale-[1.02] hover:border-[#E8306E] hover:shadow-[0_0_30px_rgba(232,48,110,0.15)]">
            {/* Badge */}
            <div className="absolute right-4 top-4 z-20 rounded-full bg-muted/80 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur-sm">
              Valor <span className="line-through decoration-destructive">$50 USD</span>
            </div>

            {/* Visual header — tool image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dpmt0pzhb/image/upload/v1770431323/Prueba_Lovable_fxblik.png"
                alt="Vista previa de Lovable Pro"
                className="h-full w-full object-cover"
              />
              {/* Overlay gradient for readability */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg" style={{ background: "linear-gradient(135deg, #FF751A, #E8306E, #9D26D9)" }}>
                  <Rocket className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Herramienta Lovable Pro</h3>
              </div>
            </div>

            {/* Features */}
            <div className="p-6 pt-5">
              <ul className="space-y-3">
                {toolFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Card 2 — Taller Paso a Paso */}
        <AnimatedSection delay={0.2}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:scale-[1.02] hover:border-[#E8306E] hover:shadow-[0_0_30px_rgba(232,48,110,0.15)]">
            {/* Badge */}
            <div className="absolute right-4 top-4 z-20 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground" style={{ background: "linear-gradient(135deg, #FF751A, #E8306E, #9D26D9)" }}>
              BONUS GRATIS
            </div>

            {/* Visual header — workshop image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dpmt0pzhb/image/upload/v1770430928/lovable_q3ci4u.png"
                alt="Vista previa del taller"
                className="h-full w-full object-cover"
              />
              {/* Overlay gradient for readability */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg" style={{ background: "linear-gradient(135deg, #FF751A, #E8306E, #9D26D9)" }}>
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Taller Paso a Paso</h3>
              </div>
            </div>

            {/* Features */}
            <div className="p-6 pt-5">
              <ul className="space-y-3">
                {workshopFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Pricing */}
      <AnimatedSection delay={0.3}>
        <div className="mt-14 text-center">
          <p className="mb-2 text-2xl text-muted-foreground line-through decoration-destructive decoration-2">
            $152 USD
          </p>
          <p className="mb-2 text-5xl font-extrabold md:text-6xl">
            <span className="gradient-text">$9 USD</span>
          </p>
          <p className="mb-4 text-lg text-muted-foreground">
            $155 MXN | $33.000 COP
          </p>
          <span className="mb-8 inline-block rounded-full cta-button px-5 py-2 text-sm">
            PAGO ÚNICO — No es suscripción
          </span>

          <div className="mt-6">
            <a
              href="https://wa.me/584264399792?text=Hola%20quiero%20pagar%20mi%20Lovable%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg cta-button px-8 py-4 text-lg"
            >
              QUIERO MI ACCESO AHORA →
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PackSection;

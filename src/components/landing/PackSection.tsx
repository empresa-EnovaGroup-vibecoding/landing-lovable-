import { Rocket, GraduationCap, Check, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const toolFeatures = [
  "200 créditos Pro (el doble del plan oficial de $25 USD)",
  "+5 créditos diarios de regalo",
  "Más de 500 mensajes para crear",
  "Hosting incluido",
  "Dominio personalizado",
  "Sin marca de agua",
  "Código exportable (tuyo para siempre)",
];

const workshopFeatures = [
  "Acceso de por vida",
  "Desde cero, sin experiencia previa",
  "Plantillas de proyectos validados",
  "Metodología para transformar ideas en productos",
  "Cómo construir con IA en días",
  "Estrategias para conseguir clientes",
];

const BrowserMockup = () => (
  <div className="relative mx-auto max-w-3xl">
    {/* Glow behind browser */}
    <div
      className="absolute -inset-8 rounded-3xl opacity-40 blur-3xl"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(20 100% 60% / 0.35), hsl(263 70% 50% / 0.2), transparent 70%)",
      }}
    />

    {/* Browser frame */}
    <div className="relative overflow-hidden rounded-xl border border-border/60 shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border/40 bg-[hsl(230,35%,12%)] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[hsl(0,70%,55%)]" />
          <span className="h-3 w-3 rounded-full bg-[hsl(45,90%,55%)]" />
          <span className="h-3 w-3 rounded-full bg-[hsl(130,50%,50%)]" />
        </div>
        <div className="ml-3 flex flex-1 items-center gap-2 rounded-md bg-[hsl(230,30%,15%)] px-3 py-1 text-xs text-muted-foreground">
          <Globe className="h-3 w-3 shrink-0" />
          <span>lovable.dev</span>
        </div>
      </div>

      {/* Browser content — simulated Lovable UI */}
      <div className="flex h-48 md:h-64 bg-[hsl(230,50%,7%)]">
        {/* Sidebar */}
        <div className="hidden w-14 shrink-0 border-r border-border/30 bg-[hsl(230,40%,9%)] p-2 sm:block md:w-48">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-6 w-6 rounded-md" style={{ background: "linear-gradient(135deg, hsl(20,100%,60%), hsl(35,100%,58%))" }} />
            <span className="hidden text-xs font-semibold text-foreground md:inline">Mi Proyecto</span>
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="mb-2 flex items-center gap-2 rounded-md px-2 py-1.5"
              style={{
                background: i === 1 ? "hsl(230,30%,15%)" : "transparent",
              }}
            >
              <div className="h-3 w-3 rounded bg-muted-foreground/30" />
              <div
                className="hidden h-2 rounded bg-muted-foreground/20 md:block"
                style={{ width: `${50 + i * 12}%` }}
              />
            </div>
          ))}
        </div>

        {/* Main content area */}
        <div className="flex flex-1 flex-col p-3 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-foreground/20 md:w-36" />
            <div className="flex gap-2">
              <div className="h-6 w-16 rounded-md" style={{ background: "linear-gradient(135deg, hsl(20,100%,60%), hsl(35,100%,58%))" }} />
              <div className="h-6 w-6 rounded-md bg-muted" />
            </div>
          </div>
          <div className="flex flex-1 gap-3">
            {/* Code-like area */}
            <div className="flex-1 rounded-lg bg-[hsl(230,40%,10%)] p-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="mb-1.5 flex items-center gap-2">
                  <span className="text-[10px] text-muted-foreground/40">{i}</span>
                  <div
                    className="h-2 rounded"
                    style={{
                      width: `${20 + Math.sin(i * 2) * 40 + 30}%`,
                      background:
                        i % 3 === 0
                          ? "hsl(263,70%,50%,0.3)"
                          : i % 2 === 0
                          ? "hsl(20,100%,60%,0.25)"
                          : "hsl(215,20%,65%,0.15)",
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Preview area */}
            <div className="hidden flex-1 rounded-lg border border-border/20 bg-[hsl(230,35%,12%)] p-3 md:block">
              <div className="mb-2 h-3 w-20 rounded bg-foreground/15" />
              <div className="mb-1.5 h-2 w-full rounded bg-muted-foreground/10" />
              <div className="mb-1.5 h-2 w-3/4 rounded bg-muted-foreground/10" />
              <div className="mt-3 h-8 w-20 rounded-md" style={{ background: "linear-gradient(135deg, hsl(20,100%,60%), hsl(35,100%,58%))" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PackSection = () => (
  <section className="relative py-20 md:py-28 surface-elevated particles-bg">
    <div className="container relative z-10 mx-auto">
      <AnimatedSection>
        <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
          Todo lo que incluye tu <span className="gradient-text">Pack Lanza Tu App HOY</span>
        </h2>
      </AnimatedSection>

      {/* Browser Mockup */}
      <AnimatedSection delay={0.05}>
        <div className="mb-14">
          <BrowserMockup />
        </div>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Card 1 — Herramienta Lovable Pro */}
        <AnimatedSection delay={0.1}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:scale-[1.02] hover:border-[hsl(20,100%,60%)] hover:shadow-[0_0_30px_hsl(20,100%,60%,0.15)]">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg" style={{ background: "linear-gradient(135deg, hsl(20,100%,60%), hsl(35,100%,58%))" }}>
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
          <div className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:scale-[1.02] hover:border-[hsl(20,100%,60%)] hover:shadow-[0_0_30px_hsl(20,100%,60%,0.15)]">
            {/* Badge */}
            <div className="absolute right-4 top-4 z-20 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground" style={{ background: "linear-gradient(135deg, hsl(20,100%,60%), hsl(35,100%,58%))" }}>
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
                <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg" style={{ background: "linear-gradient(135deg, hsl(20,100%,60%), hsl(35,100%,58%))" }}>
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
            $25 USD
          </p>
          <p className="mb-2 text-5xl font-extrabold md:text-6xl">
            <span className="gradient-text">$5 USD</span>
          </p>
          <p className="mb-4 text-lg text-muted-foreground">
            $100 MXN | $19.000 COP
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

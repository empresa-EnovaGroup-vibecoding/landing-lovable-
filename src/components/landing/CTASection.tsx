import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section className="relative overflow-hidden py-20 md:py-28">
    {/* Intense gradient background */}
    <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-glow)" }} />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

    <div className="container relative z-10 mx-auto text-center">
      <AnimatedSection>
        <h2 className="mb-4 text-3xl font-extrabold md:text-5xl">
          Tu app profesional está a un{" "}
          <span className="gradient-text">click de distancia</span>
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
          Herramienta Pro + Taller + Plantillas. Todo incluido.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="mb-2 text-3xl font-extrabold md:text-4xl">
          <span className="gradient-text">$5 USD</span>{" "}
          <span className="text-lg text-muted-foreground">| $100 MXN | $19.000 COP</span>
        </p>
        <span className="mb-8 inline-block rounded-full gradient-bg px-5 py-2 text-sm font-semibold text-foreground">
          PAGO ÚNICO
        </span>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <div className="mt-6">
          <a
            href="https://wa.me/584264399792?text=Hola%20quiero%20mi%20acceso%20a%20Lovable%20Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg gradient-bg px-10 py-4 text-lg font-semibold text-foreground transition-all hover:shadow-lg glow-shadow animate-pulse-glow"
          >
            Quiero empezar ahora →
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            Esta página fue creada con Lovable en minutos. Tú también puedes hacerlo. ✨
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;

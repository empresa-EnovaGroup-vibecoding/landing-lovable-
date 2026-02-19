import AnimatedSection from "./AnimatedSection";

const WA_LINK =
  "https://wa.me/584264399792?text=Hola%2C%20quiero%20comprar%20los%20300%20cr%C3%A9ditos%20de%20Lovable%20%2B%20el%20taller%20para%20dominar%20la%20herramienta";

interface ValueItem {
  label: string;
  value: string;
}

const VALUE_ITEMS: ValueItem[] = [
  { label: "Herramienta Lovable Pro (300 créditos)", value: "$50 USD" },
  { label: "Taller paso a paso (de la idea al cobro)", value: "$47 USD" },
  { label: "Modelos validados de sistemas", value: "$35 USD" },
  { label: "Estrategias de monetización", value: "$20 USD" },
];

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background glows */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-radial-glow)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(255,107,53,0.05), transparent)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-3xl text-center">

        {/* 1. FUTURE PACING */}
        <AnimatedSection>
          <h2 className="mb-3 text-3xl font-extrabold md:text-5xl">
            En 7 días puedes tener tu propia app generando ingresos
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg">
            <span className="gradient-text font-semibold">
              O puedes seguir pensando en "algún día"...
            </span>
          </p>
        </AnimatedSection>

        {/* 2. VALUE STACK */}
        <AnimatedSection delay={0.1}>
          <div className="mx-auto mb-8 max-w-xl rounded-2xl glass-card p-6 text-left">
            <h3 className="mb-4 text-center text-base font-bold uppercase tracking-widest text-muted-foreground">
              Lo que recibes hoy
            </h3>
            <ul className="space-y-3">
              {VALUE_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-border/30 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-foreground">{item.label}</span>
                  <span className="shrink-0 text-sm font-semibold text-muted-foreground">
                    Valor {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t border-border/50 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-muted-foreground">
                  Valor total:
                </span>
                <span className="text-sm font-bold text-muted-foreground line-through">
                  $152 USD
                </span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-bold text-foreground">
                  Tú pagas hoy:
                </span>
                <span className="text-2xl font-extrabold gradient-text">
                  $9 USD
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. URGENCY BOX */}
        <AnimatedSection delay={0.15}>
          <div className="mx-auto mb-6 max-w-md rounded-xl border border-primary/30 bg-primary/5 p-4">
            <p className="text-sm font-semibold text-primary">
              Precio de comunidad LATAM — puede subir en cualquier momento
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              +100 emprendedores ya accedieron a este precio
            </p>
          </div>
        </AnimatedSection>

        {/* 4. PRICE DISPLAY */}
        <AnimatedSection delay={0.2}>
          <p className="mb-1 text-sm text-muted-foreground line-through">
            $152 USD
          </p>
          <p className="mb-2 text-4xl font-extrabold md:text-5xl">
            <span className="gradient-text">$9 USD</span>
          </p>
          <p className="mb-3 text-base text-muted-foreground">
            $155 MXN | $33.000 COP
          </p>
          <span className="mb-10 inline-block rounded-full cta-button px-5 py-2 text-sm">
            PAGO ÚNICO
          </span>
        </AnimatedSection>

        {/* 5. CTA BUTTON */}
        <AnimatedSection delay={0.25}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mb-6 block w-full max-w-md rounded-lg cta-button py-4 text-center text-lg font-bold animate-pulse-glow"
          >
            QUIERO EMPEZAR AHORA →
          </a>
        </AnimatedSection>

        {/* 6. GUARANTEE */}
        <AnimatedSection delay={0.3}>
          <p className="mx-auto mb-6 max-w-sm text-sm text-muted-foreground">
            Tu código es tuyo para siempre. Lo descargas, lo publicas, funciona
            sin pagar mensualidad.
          </p>
        </AnimatedSection>

        {/* 7. CLOSING LINE */}
        <AnimatedSection delay={0.35}>
          <p className="text-base font-semibold text-foreground">
            Únete a +100 emprendedores en México, Colombia y Ecuador que ya
            lanzaron con este sistema.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;

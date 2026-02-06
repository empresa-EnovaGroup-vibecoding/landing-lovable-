import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      "https://wa.me/584264399792?text=Hola%20quiero%20mi%20acceso%20a%20Lovable%20Pro",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden py-20 md:py-28">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      {/* Radial glow */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Text */}
          <div>
            <AnimatedSection>
              <span className="mb-6 inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
                +1 año ayudando a emprendedores en LATAM
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Crea tu App o Web Profesional con IA —{" "}
                <span className="gradient-text">Sin Saber Programar</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mb-8 max-w-lg text-lg text-muted-foreground md:text-xl">
                Recibe la herramienta más poderosa del mundo para crear aplicaciones + un taller
                paso a paso. Todo por el precio de un café.
              </p>
            </AnimatedSection>
          </div>

          {/* Right - Form */}
          <AnimatedSection delay={0.3}>
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-2xl">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-sm" />
              <form onSubmit={handleSubmit} className="relative space-y-4">
                <h3 className="mb-2 text-center text-xl font-bold">Empieza ahora</h3>
                <p className="mb-6 text-center text-sm text-muted-foreground">
                  Completa tus datos y recibe acceso inmediato
                </p>

                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="tel"
                  placeholder="+52 / +57 / +593"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />

                <button
                  type="submit"
                  className="w-full rounded-lg gradient-bg py-3.5 text-base font-semibold text-foreground transition-all hover:gradient-bg-hover hover:shadow-lg glow-shadow-sm hover:glow-shadow"
                >
                  Quiero empezar ahora →
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Pago único. Sin suscripción. Tu app es tuya para siempre.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

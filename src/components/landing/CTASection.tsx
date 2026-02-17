import { useState } from "react";
import { z } from "zod";
import AnimatedSection from "./AnimatedSection";

const WA_LINK =
  "https://wa.me/584264399792?text=Hola%20quiero%20mi%20acceso%20al%20Sistema%20Lanza%20Tu%20App";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "El nombre es requerido")
    .max(100, "Máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(255, "Máximo 255 caracteres"),
  phone: z
    .string()
    .trim()
    .min(1, "El teléfono es requerido")
    .max(20, "Máximo 20 caracteres")
    .regex(/^[+\d\s()-]+$/, "Formato de teléfono inválido"),
});

interface ValueItem {
  label: string;
  value: string;
}

const VALUE_ITEMS: ValueItem[] = [
  { label: "Herramienta Lovable Pro (200 créditos)", value: "$50 USD" },
  { label: "Taller paso a paso (de la idea al cobro)", value: "$47 USD" },
  { label: "Modelos validados de sistemas", value: "$35 USD" },
  { label: "Estrategias de monetización", value: "$20 USD" },
];

const INPUT_CLASS =
  "w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm";

const CTASection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    window.open(WA_LINK, "_blank");
  };

  const updateField = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

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
                  $5 USD
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
            <span className="gradient-text">$5 USD</span>
          </p>
          <p className="mb-3 text-base text-muted-foreground">
            $100 MXN | $19.000 COP
          </p>
          <span className="mb-10 inline-block rounded-full cta-button px-5 py-2 text-sm">
            PAGO ÚNICO
          </span>
        </AnimatedSection>

        {/* 5. LEAD CAPTURE FORM */}
        <AnimatedSection delay={0.25}>
          <div className="relative mx-auto mb-6 max-w-md rounded-2xl glass-card-strong p-8 shadow-2xl">
            <div
              className="absolute -inset-px rounded-2xl opacity-50"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,107,53,0.2), rgba(255,166,43,0.2))",
              }}
            />
            <form onSubmit={handleSubmit} className="relative space-y-4">
              <h3 className="mb-1 text-center text-xl font-bold">
                Empieza ahora
              </h3>
              <p className="mb-5 text-center text-sm text-muted-foreground">
                Completa tus datos y recibe acceso inmediato
              </p>

              <div>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  maxLength={100}
                  value={formData.name}
                  onChange={updateField("name")}
                  aria-label="Nombre completo"
                  className={INPUT_CLASS}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  maxLength={255}
                  value={formData.email}
                  onChange={updateField("email")}
                  aria-label="Correo electrónico"
                  className={INPUT_CLASS}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="+52 / +57 / +593"
                  maxLength={20}
                  value={formData.phone}
                  onChange={updateField("phone")}
                  aria-label="Teléfono o WhatsApp"
                  className={INPUT_CLASS}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-destructive" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg cta-button py-3.5 text-base animate-pulse-glow"
              >
                QUIERO EMPEZAR AHORA →
              </button>
            </form>
          </div>
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

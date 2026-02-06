import { Rocket, GraduationCap, Check } from "lucide-react";
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

const PackSection = () => (
  <section className="relative py-20 md:py-28 surface-elevated">
    <div className="container mx-auto">
      <AnimatedSection>
        <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
          Todo lo que incluye tu <span className="gradient-text">Pack EmprendeDigital</span>
        </h2>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Card 1 */}
        <AnimatedSection delay={0.1}>
          <div className="h-full rounded-2xl border border-border bg-card p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-bg">
                <Rocket className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold">Herramienta Lovable Pro</h3>
            </div>
            <ul className="space-y-3">
              {toolFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Card 2 */}
        <AnimatedSection delay={0.2}>
          <div className="h-full rounded-2xl border border-border bg-card p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-bg">
                <GraduationCap className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold">Taller Paso a Paso</h3>
            </div>
            <ul className="space-y-3">
              {workshopFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
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
          <span className="mb-8 inline-block rounded-full gradient-bg px-5 py-2 text-sm font-semibold text-foreground">
            PAGO ÚNICO — No es suscripción
          </span>

          <div className="mt-6">
            <a
              href="https://wa.me/584264399792?text=Hola%20quiero%20pagar%20mi%20Lovable%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg gradient-bg px-8 py-4 text-lg font-semibold text-foreground transition-all hover:shadow-lg glow-shadow-sm hover:glow-shadow"
            >
              Quiero mi acceso ahora →
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PackSection;

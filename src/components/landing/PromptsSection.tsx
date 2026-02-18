import { LayoutTemplate, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const models = [
  {
    label: "Sistema de inventario",
    time: "15 min",
    description: "Control de stock con entradas, salidas, alertas de nivel bajo y reportes",
  },
  {
    label: "Sistema de agendamiento",
    time: "15 min",
    description: "Calendario, pagos automáticos y recordatorios para salones y servicios",
  },
  {
    label: "CRM para tu negocio",
    time: "20 min",
    description: "Gestión de clientes, seguimiento de ventas y reportes automáticos",
  },
  {
    label: "Sistema de delivery local",
    time: "25 min",
    description: "Pedidos online, rutas de entrega y cobros automáticos para tu zona",
  },
];

const PromptsSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="container relative z-10 mx-auto">
      <AnimatedSection>
        <div className="mb-4 flex items-center justify-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Incluido en el Sistema Lanza Tu App
          </span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Modelos validados de sistemas{" "}
          <span className="gradient-text">— listos para crear</span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground">
          Elige tu modelo, sigue las instrucciones y la IA construye el sistema
          por ti. En minutos, no en semanas.
        </p>
      </AnimatedSection>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-xl glass-card p-6 transition-all hover:border-primary/40 hover:glow-shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LayoutTemplate className="h-4 w-4 text-primary" />
                  <span className="text-sm font-bold">{p.label}</span>
                </div>
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-primary-foreground"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF751A, #E8306E, #9D26D9)",
                  }}
                >
                  {p.time}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.6}>
        <p className="mt-10 text-center text-lg font-semibold">
          Nadie más te da esto. Solo{" "}
          <span className="gradient-text">Nexus Digital</span>.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default PromptsSection;

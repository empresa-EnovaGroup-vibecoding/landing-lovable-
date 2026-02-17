import { Check, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const comparisonRows = [
  { feature: "Créditos Lovable Pro", nexus: true, others: true },
  { feature: "Precio", nexus: "$5 USD", others: "$15 - $17 USD" },
  { feature: "Taller paso a paso", nexus: true, others: false },
  { feature: "Modelos validados listos para usar", nexus: true, others: false },
  { feature: "Prompts exactos (no desperdicias créditos)", nexus: true, others: false },
  { feature: "Estrategias de monetización", nexus: true, others: false },
  { feature: "Soporte por WhatsApp", nexus: true, others: false },
  { feature: "Comunidad de emprendedores", nexus: true, others: false },
];

const CellValue = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-primary" />
    ) : (
      <X className="mx-auto h-5 w-5 text-destructive" />
    );
  }
  return <span className="text-sm font-semibold">{value}</span>;
};

const NexusVsOthersTable = () => (
  <section className="relative py-20 md:py-28 surface-elevated particles-bg">
    <div className="container relative z-10 mx-auto">
      <AnimatedSection>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Nexus Digital vs{" "}
          <span className="text-destructive">Otros Vendedores</span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground">
          Otros te venden solo los créditos. Nosotros te damos Lovable Pro
          + taller + los prompts exactos para que{" "}
          <span className="font-semibold text-foreground">
            no desperdicies ni un crédito
          </span>.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl glass-card-strong">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b border-border/50">
                <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                  Incluye
                </th>
                <th className="p-4">
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold text-primary-foreground"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(20,100%,60%), hsl(35,100%,58%))",
                      }}
                    >
                      RECOMENDADO
                    </span>
                    <span className="gradient-text text-sm font-bold">
                      Sistema Lanza Tu App
                    </span>
                    <span className="text-xs text-muted-foreground">
                      $5 USD
                    </span>
                  </div>
                </th>
                <th className="p-4">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      Otros Vendedores
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Solo créditos · $15 - $17 USD
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} className="border-b border-border/30 last:border-0">
                  <td className="p-4 text-left text-sm text-muted-foreground">
                    {row.feature}
                  </td>
                  <td
                    className="p-4"
                    style={{
                      borderLeft: "2px solid #FF6B35",
                      borderRight: "2px solid #FFA62B",
                      background: "rgba(255,107,53,0.05)",
                    }}
                  >
                    <CellValue value={row.nexus} />
                  </td>
                  <td className="p-4 text-muted-foreground">
                    <CellValue value={row.others} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-center text-lg font-semibold">
          No solo te damos créditos.{" "}
          <span className="gradient-text">Te enseñamos a crear tu app en 1 día.</span>
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default NexusVsOthersTable;

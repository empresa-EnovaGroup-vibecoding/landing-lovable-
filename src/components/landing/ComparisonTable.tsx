import { Check, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const rows = [
  {
    feature: "Precio",
    lovable: "$5 USD único",
    adalo: "$45 USD/mes",
    wix: "$17 USD/mes",
    dev: "$500-1000 USD",
  },
  {
    feature: "El código es tuyo",
    lovable: true,
    adalo: false,
    wix: false,
    dev: true,
  },
  {
    feature: "Sin programar",
    lovable: true,
    adalo: true,
    wix: true,
    dev: false,
  },
  {
    feature: "IA construye por ti",
    lovable: true,
    adalo: false,
    wix: false,
    dev: false,
  },
  {
    feature: "Si dejas de pagar",
    lovable: "Tu app sigue",
    adalo: "Pierdes todo",
    wix: "Pierdes todo",
    dev: "Depende",
  },
];

const CellValue = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-primary" />
    ) : (
      <X className="mx-auto h-5 w-5 text-destructive" />
    );
  }
  return <span className="text-sm">{value}</span>;
};

const ComparisonTable = () => (
  <section className="relative py-20 md:py-28 particles-bg">
    <div className="container relative z-10 mx-auto">
      <AnimatedSection>
        <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
          ¿Por qué Lovable y <span className="gradient-text">no otra herramienta</span>?
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="overflow-x-auto rounded-xl glass-card-strong">
          <table className="w-full min-w-[640px] text-center">
            <thead>
              <tr className="border-b border-border/50">
                <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                  Característica
                </th>
                <th className="relative p-4 text-sm font-bold">
                  <div className="absolute inset-0 rounded-t-lg" style={{ 
                    border: "2px solid transparent",
                    borderImage: "linear-gradient(135deg, #FF6B35, #FFA62B) 1",
                    borderBottom: "none"
                  }} />
                  <span className="relative gradient-text font-bold">Lovable Pro<br/>(con nosotros)</span>
                </th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Adalo</th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Wix</th>
                <th className="p-4 text-sm font-medium text-muted-foreground">Programador</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/30 last:border-0">
                  <td className="p-4 text-left text-sm font-medium text-muted-foreground">
                    {row.feature}
                  </td>
                  <td className="relative p-4" style={{ 
                    borderLeft: "2px solid #FF6B35",
                    borderRight: "2px solid #FFA62B",
                    background: "rgba(255,107,53,0.05)"
                  }}>
                    <span className="relative font-semibold">
                      <CellValue value={row.lovable} />
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">
                    <CellValue value={row.adalo} />
                  </td>
                  <td className="p-4 text-muted-foreground">
                    <CellValue value={row.wix} />
                  </td>
                  <td className="p-4 text-muted-foreground">
                    <CellValue value={row.dev} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ComparisonTable;

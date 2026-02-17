import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "¿Qué herramienta usan para crear las apps?",
    a: "Usamos Lovable, una herramienta de IA que genera apps completas con solo describirle lo que quieres en español. Es como tener un programador que trabaja en segundos. Tú recibes acceso Pro con 200 créditos como parte del sistema.",
  },
  {
    q: "¿Necesito saber programar?",
    a: "Para nada. Le escribes en español lo que quieres, por ejemplo: 'Hazme un sistema de inventario con alertas' y la IA lo construye en minutos. Si sabes enviar un mensaje de WhatsApp, puedes crear tu app.",
  },
  {
    q: "¿Puedo cobrar por las apps que creo?",
    a: "Sí. El taller incluye estrategias para publicar tu sistema y configurar cobros automáticos. Muchos alumnos ya generan ingresos recurrentes con las apps que crearon.",
  },
  {
    q: "¿Es pago mensual?",
    a: "No. Es pago único de $5 USD. Recibes la herramienta pro, el taller completo, los modelos validados y las estrategias de monetización. Todo lo que crees es tuyo para siempre.",
  },
  {
    q: "¿Cómo sé que no es estafa?",
    a: "Llevamos más de 1 año con clientes reales en México, Colombia y Ecuador. Puedes ver los testimonios en video de emprendedores que ya lanzaron sus apps con nuestro sistema.",
  },
];

const FAQSection = () => (
  <section className="relative py-20 md:py-28 surface-elevated particles-bg">
    <div className="container relative z-10 mx-auto max-w-3xl">
      <AnimatedSection>
        <h2 className="mb-14 text-center text-3xl font-bold md:text-4xl">
          Preguntas <span className="gradient-text">frecuentes</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl glass-card px-6"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;

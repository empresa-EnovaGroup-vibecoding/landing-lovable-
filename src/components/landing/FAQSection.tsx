import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "¿Necesito saber programar?",
    a: "Para nada. Le escribes en español lo que quieres, por ejemplo: 'Hazme una app para mi negocio de comida con menú y fotos' y la IA lo construye en minutos. Si sabes enviar un mensaje de WhatsApp, sabes usar Lovable.",
  },
  {
    q: "¿Los créditos se acaban rápido?",
    a: "Los créditos solo se gastan mientras construyes. Cada crédito es un mensaje a la IA. Con 200 créditos puedes crear entre 3 y 5 apps completas. Una vez lista tu app, funciona para siempre sin gastar nada más.",
  },
  {
    q: "¿Es pago mensual?",
    a: "No. Es pago único de $5 USD. Recibes 200 créditos Pro para crear tus apps y webs. Todo lo que crees es tuyo para siempre: lo descargas, lo publicas y funciona sin pagar más. Los créditos son tu material de construcción. Si en el futuro quieres crear nuevos proyectos, renuevas tus créditos desde $5 USD.",
  },
  {
    q: "¿Qué pasa si dejo de pagar?",
    a: "Tu app sigue funcionando. Puedes descargar el código a GitHub y alojarlo gratis en Vercel o Netlify. Tu trabajo es tuyo.",
  },
  {
    q: "¿Cómo sé que no es estafa?",
    a: "Llevamos más de 1 año con clientes reales en México, Colombia y Ecuador. Puedes ver nuestra trayectoria en facebook.com/IANexusonline",
  },
  {
    q: "¿Puedo usarlo desde el celular?",
    a: "Sí, funciona desde el navegador. Para mayor comodidad recomendamos computadora, pero muchos clientes empezaron desde el teléfono.",
  },
  {
    q: "¿Por qué tan barato?",
    a: "Creemos que pagar $25 USD mensuales es una barrera para emprendedores en Latinoamérica. Ofrecemos este precio de apoyo a la comunidad para que la tecnología no te detenga por falta de presupuesto.",
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

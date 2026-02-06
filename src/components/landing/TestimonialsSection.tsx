import AnimatedSection from "./AnimatedSection";

const videoTestimonials = [
  {
    name: "María G.",
    country: "🇲🇽",
    description: "Creó la app de su restaurante en un fin de semana",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Carlos R.",
    country: "🇨🇴",
    description: "Migró de Adalo a Lovable y ahorró $40/mes",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Andrea M.",
    country: "🇪🇨",
    description: "Lanzó su tienda online recibiendo pedidos",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const TestimonialsSection = () => (
  <section className="relative py-20 md:py-28 surface-elevated particles-bg">
    <div className="container relative z-10 mx-auto">
      <AnimatedSection>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Mira lo que nuestros clientes están{" "}
          <span className="gradient-text">creando</span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground">
          Emprendedores reales de Latinoamérica usando Lovable con nuestro taller
        </p>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-3">
        {videoTestimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="group flex h-full flex-col rounded-xl glass-card p-4 transition-all hover:border-primary/60 hover:glow-shadow-sm">
              {/* Video embed */}
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  src={t.videoUrl}
                  title={`Testimonio de ${t.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Client info */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #FFA62B)",
                    boxShadow: "0 0 12px rgba(255,107,53,0.3)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    {t.name} {t.country}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.description}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="mt-10 text-center">
          <a
            href="https://www.facebook.com/IANexusonline"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-primary/50 px-6 py-3 font-semibold text-primary transition-all hover:bg-primary/10"
          >
            Ver más proyectos de la comunidad →
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TestimonialsSection;

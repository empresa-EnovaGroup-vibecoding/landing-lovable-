import { useState, useRef } from "react";
import { Play } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const videoTestimonials = [
  {
    name: "Felipe V.",
    country: "🇨🇴",
    description: "Creó su proyecto desde cero sin experiencia técnica",
    vertical: true,
    videoUrl:
      "https://res.cloudinary.com/dpmt0pzhb/video/upload/v1770421445/testimonio_estabilizacion_sin_muletillas_Felipe_Ve_au2qev.mp4",
  },
  {
    name: "Esaul M.",
    country: "🇲🇽",
    description: "Construyó su herramienta de ventas con Lovable",
    vertical: false,
    videoUrl:
      "https://res.cloudinary.com/dpmt0pzhb/video/upload/v1770421437/Recorte_de_VIDEO_ESAUL_1_MIN_fnnagr.mp4",
  },
  {
    name: "Yobran T.",
    country: "🇪🇨",
    description: "Lanzó su plataforma de cursos online",
    vertical: false,
    videoUrl:
      "https://res.cloudinary.com/dpmt0pzhb/video/upload/v1770421437/yobran_plataforma_de_cursos_umomxl.mp4",
  },
  {
    name: "Jhon R.",
    country: "🇨🇴",
    description: "Automatizó su negocio con una app personalizada",
    vertical: true,
    videoUrl:
      "https://res.cloudinary.com/dpmt0pzhb/video/upload/v1770421403/Cliente_Jhon_v3jpj1.mp4",
  },
];

const VideoCard = ({
  testimonial,
}: {
  testimonial: (typeof videoTestimonials)[0];
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="group flex h-full flex-col rounded-xl glass-card p-3 transition-all hover:border-primary/60 hover:glow-shadow-sm">
      {/* Video container */}
      <div className="relative mb-4 w-full overflow-hidden rounded-xl bg-black"
           style={{ aspectRatio: testimonial.vertical ? "9/16" : "16/9" }}>
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          controls={isPlaying}
          preload="metadata"
          playsInline
          onPause={handlePause}
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          className="absolute inset-0 h-full w-full rounded-xl object-contain"
        />

        {/* Play overlay */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            aria-label={`Reproducir testimonio de ${testimonial.name}`}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 transition-opacity hover:bg-black/30"
          >
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #FF751A, #E8306E, #9D26D9)",
                boxShadow: "0 0 24px rgba(232,48,110,0.4)",
              }}
            >
              <Play className="h-7 w-7 fill-white text-white ml-1" />
            </div>
          </button>
        )}
      </div>

      {/* Client info */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground shadow-lg"
          style={{
            background: "linear-gradient(135deg, #FF751A, #E8306E, #9D26D9)",
            boxShadow: "0 0 12px rgba(232,48,110,0.3)",
          }}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold">
            {testimonial.name} {testimonial.country}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="container relative z-10 mx-auto">
      <AnimatedSection>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Ellos empezaron sin saber nada.{" "}
          <span className="gradient-text">Hoy tienen su app funcionando.</span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground">
          Emprendedores reales de LATAM que usaron nuestro sistema para lanzar
        </p>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {videoTestimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <VideoCard testimonial={t} />
          </AnimatedSection>
        ))}
      </div>

    </div>
  </section>
);

export default TestimonialsSection;

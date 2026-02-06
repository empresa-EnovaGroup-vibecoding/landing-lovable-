import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import appDashboard from "@/assets/app-dashboard.jpg";
import appEcommerce from "@/assets/app-ecommerce.jpg";
import appProject from "@/assets/app-project.jpg";
import appSocial from "@/assets/app-social.jpg";
import appCrypto from "@/assets/app-crypto.jpg";
import appRestaurant from "@/assets/app-restaurant.jpg";
import appCrm from "@/assets/app-crm.jpg";
import appFitness from "@/assets/app-fitness.jpg";
import appLanding from "@/assets/app-landing.jpg";
import appBooking from "@/assets/app-booking.jpg";
import appChat from "@/assets/app-chat.jpg";
import appAdmin from "@/assets/app-admin.jpg";

const appScreenshots = [
  appDashboard, appEcommerce, appProject, appSocial,
  appCrypto, appRestaurant, appCrm, appFitness,
  appLanding, appBooking, appChat, appAdmin,
];

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
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* App screenshots mosaic background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-4 opacity-[0.15]" style={{ transform: "rotate(-5deg) scale(1.2)" }}>
          {appScreenshots.map((src, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden border border-border/20 h-32 md:h-40"
              style={{ 
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Form */}
          <div>
            <AnimatedSection>
              <span className="mb-6 inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
                +1 año ayudando a emprendedores en LATAM
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Crea tu App o Web Profesional con IA —{" "}
                <span className="gradient-text">Sin Saber Programar</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="mb-6 max-w-lg text-lg text-muted-foreground md:text-xl">
                Aprende desde cero a construir{" "}
                <span className="font-semibold" style={{ background: "linear-gradient(135deg, #FF6B35, #FFA62B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  aplicaciones reales con IA
                </span>{" "}
                sin escribir una línea de código
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mb-8 max-w-lg text-base text-muted-foreground">
                Recibe la herramienta más poderosa del mundo para crear aplicaciones + un taller
                paso a paso. Todo por el precio de un café.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="relative rounded-2xl glass-card-strong p-8 shadow-2xl">
                <div className="absolute -inset-px rounded-2xl opacity-50" style={{ background: "linear-gradient(135deg, rgba(255,107,53,0.2), rgba(255,166,43,0.2))" }} />
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
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="+52 / +57 / +593"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full rounded-lg cta-button py-3.5 text-base"
                  >
                    QUIERO EMPEZAR AHORA →
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    Pago único. Sin suscripción. Tu app es tuya para siempre.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Heart with floating apps */}
          <AnimatedSection delay={0.3}>
            <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
              {/* Floating app cards */}
              <div className="absolute top-4 right-4 md:top-8 md:right-8 glass-card rounded-lg p-3 shadow-lg animate-float z-10">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full" style={{ background: "linear-gradient(135deg, #FF6B35, #FFA62B)" }} />
                  <div>
                    <div className="text-xs font-semibold">E-Commerce App</div>
                    <div className="text-[10px] text-muted-foreground">3,200 Remixes</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-12 left-0 md:left-4 glass-card rounded-lg p-3 shadow-lg z-10" style={{ animation: "float 4s ease-in-out infinite 1s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-secondary" />
                  <div>
                    <div className="text-xs font-semibold">Dashboard Pro</div>
                    <div className="text-[10px] text-muted-foreground">5,100 Remixes</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-4 md:left-12 glass-card rounded-lg p-3 shadow-lg z-10" style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-accent" />
                  <div>
                    <div className="text-xs font-semibold">Landing Builder</div>
                    <div className="text-[10px] text-muted-foreground">2,800 Remixes</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-8 md:right-16 glass-card rounded-lg p-3 shadow-lg z-10" style={{ animation: "float 4.5s ease-in-out infinite 1.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full" style={{ background: "linear-gradient(135deg, #2196F3, #7B2FF7)" }} />
                  <div>
                    <div className="text-xs font-semibold">CRM System</div>
                    <div className="text-[10px] text-muted-foreground">1,900 Remixes</div>
                  </div>
                </div>
              </div>

              {/* Heart */}
              <div className="relative">
                <svg
                  viewBox="0 0 200 180"
                  className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 0 40px rgba(255,107,53,0.3))" }}
                >
                  <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="30%" stopColor="#FF3CAC" />
                      <stop offset="60%" stopColor="#7B2FF7" />
                      <stop offset="100%" stopColor="#2196F3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 170 C20 110 0 70 0 50 C0 22 22 0 50 0 C70 0 88 14 100 30 C112 14 130 0 150 0 C178 0 200 22 200 50 C200 70 180 110 100 170Z"
                    fill="url(#heartGradient)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(255,107,53,0.4), transparent 70%)" }} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

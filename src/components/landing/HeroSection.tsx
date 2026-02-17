import AnimatedSection from "./AnimatedSection";
import LovableLogo from "./LovableLogo";
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

const WA_LINK =
  "https://wa.me/584264399792?text=Hola%20quiero%20mi%20acceso%20al%20Sistema%20Lanza%20Tu%20App";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden py-20 md:py-28">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* App screenshots mosaic background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-4 opacity-[0.15]"
          style={{ transform: "rotate(-5deg) scale(1.2)" }}
        >
          {appScreenshots.map((src, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden border border-border/20 h-32 md:h-40"
              style={{ animationDelay: `${i * 0.3}s` }}
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
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial-glow)" }}
      />

      <div className="container relative z-10 mx-auto">
        {/* Center-aligned hero copy */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span
              className="mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-bold text-primary-foreground"
              style={{ background: "linear-gradient(135deg, #FF6B35, #FFA62B)" }}
            >
              SISTEMA LANZA TU APP
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Crea tu app con IA y cobra por ella{" "}
              <span className="gradient-text">— sin programar una línea</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="mb-4 max-w-xl text-lg text-muted-foreground md:text-xl">
              Te damos{" "}
              <span
                className="font-semibold"
                style={{
                  background: "linear-gradient(135deg, #FF6B35, #FFA62B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                modelos validados + Lovable Pro (200 créditos) + taller paso a paso
              </span>{" "}
              para que lances en días, no en meses.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mb-8 text-base font-medium text-muted-foreground">
              +100 emprendedores en LATAM ya lanzaron con este sistema
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block rounded-lg px-10 py-4 text-lg font-bold"
            >
              QUIERO EMPEZAR AHORA →
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Pago único $5 USD. Sin suscripción.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 opacity-60">
              <span className="text-xs text-muted-foreground">Incluye herramienta oficial</span>
              <LovableLogo className="h-4 w-auto" />
            </div>
          </AnimatedSection>
        </div>

        {/* App Showcase */}
        <AnimatedSection delay={0.35}>
          <div className="relative mt-16 flex items-center justify-center">
            {/* Glow behind the screenshot */}
            <div
              className="absolute inset-0 rounded-3xl opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,107,53,0.45) 0%, rgba(123,47,247,0.25) 55%, transparent 80%)",
              }}
            />

            {/* Floating card — E-Commerce App (top-left) */}
            <div
              className="absolute -top-6 left-0 sm:left-8 lg:-left-8 glass-card rounded-lg p-3 shadow-lg z-10 animate-float"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-6 w-6 flex-shrink-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, #FF6B35, #FFA62B)" }}
                />
                <div>
                  <div className="text-xs font-semibold whitespace-nowrap">E-Commerce App</div>
                  <div className="text-[10px] text-muted-foreground">3,200 Remixes</div>
                </div>
              </div>
            </div>

            {/* Floating card — Dashboard Pro (top-right) */}
            <div
              className="absolute -top-6 right-0 sm:right-8 lg:-right-8 glass-card rounded-lg p-3 shadow-lg z-10"
              style={{ animation: "float 4s ease-in-out infinite 1s" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 flex-shrink-0 rounded-full bg-secondary" />
                <div>
                  <div className="text-xs font-semibold whitespace-nowrap">Dashboard Pro</div>
                  <div className="text-[10px] text-muted-foreground">5,100 Remixes</div>
                </div>
              </div>
            </div>

            {/* Main featured screenshot */}
            <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-border/40 shadow-2xl glow-shadow-sm overflow-hidden">
              <img
                src={appDashboard}
                alt="Ejemplo de app creada con el Sistema Lanza Tu App"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              {/* Subtle inner top shine */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
              />
            </div>

            {/* Floating card — Landing Builder (bottom-left) */}
            <div
              className="absolute -bottom-6 left-0 sm:left-8 lg:-left-8 glass-card rounded-lg p-3 shadow-lg z-10"
              style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 flex-shrink-0 rounded-full bg-accent" />
                <div>
                  <div className="text-xs font-semibold whitespace-nowrap">Landing Builder</div>
                  <div className="text-[10px] text-muted-foreground">2,800 Remixes</div>
                </div>
              </div>
            </div>

            {/* Floating card — CRM System (bottom-right) */}
            <div
              className="absolute -bottom-6 right-0 sm:right-8 lg:-right-8 glass-card rounded-lg p-3 shadow-lg z-10"
              style={{ animation: "float 4.5s ease-in-out infinite 1.5s" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-6 w-6 flex-shrink-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, #2196F3, #7B2FF7)" }}
                />
                <div>
                  <div className="text-xs font-semibold whitespace-nowrap">CRM System</div>
                  <div className="text-[10px] text-muted-foreground">1,900 Remixes</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;

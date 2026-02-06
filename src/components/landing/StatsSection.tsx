import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: 100, prefix: "+ de ", label: "clientes satisfechos" },
  { number: 50, prefix: "+ de ", label: "apps creadas por nuestros clientes" },
  { number: 20, prefix: "+ de ", label: "lecciones en el taller" },
  { number: 3, prefix: "", suffix: " países", label: "México, Colombia y Ecuador" },
];

const CountUp = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="relative py-16 md:py-20 border-t border-b border-border/50 particles-bg" style={{ background: "hsl(230, 45%, 8%)" }}>
    <div className="container relative z-10 mx-auto">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {stats.map((stat, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="flex flex-col items-center text-center">
              <CountUp target={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="mt-3 mb-4 h-1 w-16 rounded-full" style={{ background: "linear-gradient(90deg, #FF6B35, #FFA62B)" }} />
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;

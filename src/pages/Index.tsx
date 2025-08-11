import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import heroImage from "@/assets/hero-ams.jpg";
import { Plane, ShieldCheck, GaugeCircle, Wrench, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // SEO
  useEffect(() => {
    const title = "Skyward Airline Management System | Modern Aviation Platform";
    const description =
      "Skyward Airline Management System: modern, real-time platform for airline operations, crew, revenue, and maintenance.";
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, []);

  // Signature interaction: pointer-reactive gradient
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 50, y: 30 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  const Feature = ({
    icon: Icon,
    title,
    desc,
    delay,
  }: {
    icon: any;
    title: string;
    desc: string;
    delay?: number;
  }) => (
    <Reveal delay={delay} className="glass rounded-xl p-6 hover-scale shadow-elevated">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="font-display text-lg">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </Reveal>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-cta-gradient shadow-elevated" />
            <span className="font-display text-base tracking-tight">Skyward AMS</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="story-link">Features</a>
            <a href="#solutions" className="story-link">Solutions</a>
            <a href="#security" className="story-link">Security</a>
            <a href="#contact" className="story-link">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button variant="gradient" className="">Request a demo</Button>
          </div>
        </div>
      </header>

      <main id="home">
        {/* HERO */}
        <section
          onMouseMove={onMove}
          ref={heroRef}
          className="relative overflow-hidden"
        >
          <div
            className="bg-hero-gradient"
            style={{
              // @ts-ignore CSS var
              "--mx": `${coords.x}%`,
              // @ts-ignore CSS var
              "--my": `${coords.y}%`,
            } as React.CSSProperties}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Sleek airliner silhouette taking off at night over runway with cyan light trails"
                fetchPriority="high"
                className="absolute inset-0 h-[80vh] w-full object-cover opacity-40 select-none pointer-events-none"
              />
              <div className="relative container mx-auto flex min-h-[80vh] flex-col items-center justify-center text-center">
                <Reveal as="h1" className="font-display text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
                  Airline Management System
                </Reveal>
                <Reveal delay={80} className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
                  Operate smarter. From flight ops to revenue and maintenance, Skyward unifies your airline in one real-time platform.
                </Reveal>
                <Reveal delay={140} className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="gradient" size="lg" className="">
                    Get a demo
                  </Button>
                  <Button variant="hero" size="lg" className="">
                    Explore features
                  </Button>
                </Reveal>

                <Reveal delay={200} className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                  {[
                    { label: "99.99% uptime" },
                    { label: "Realtime dashboards" },
                    { label: "Enterprise security" },
                  ].map((item, i) => (
                    <div key={i} className="glass rounded-md px-3 py-2 text-xs text-muted-foreground">
                      {item.label}
                    </div>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="container mx-auto py-20 md:py-28">
          <Reveal as="h2" className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-center">
            Built for modern airlines
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Feature
              icon={Plane}
              title="Operations Control"
              desc="Live flight tracking, disruption recovery, turnarounds, and slot coordination—all in one view."
            />
            <Feature
              icon={Users2}
              title="Crew & Roster"
              desc="Duty compliance, fatigue rules, roster optimization, and crew self-service mobile workflows."
              delay={80}
            />
            <Feature
              icon={GaugeCircle}
              title="Revenue & Yield"
              desc="Dynamic pricing, ancillaries, and promo controls with clear revenue insights."
              delay={140}
            />
            <Feature
              icon={Wrench}
              title="Maintenance & Safety"
              desc="Predictive maintenance, MEL tracking, work orders, and digital logbooks to reduce AOG."
              delay={200}
            />
          </div>
        </section>

        {/* SECURITY / COMPLIANCE */}
        <section id="security" className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-hero-gradient opacity-40" />
          <div className="relative container mx-auto grid gap-8 lg:grid-cols-2 items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="glass rounded-2xl p-6 md:p-8 shadow-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-xl">Enterprise-grade security</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>Single Sign-On (SSO) and granular access control</li>
                  <li>Audit trails, approvals, and immutable logs</li>
                  <li>Data encryption in transit and at rest</li>
                </ul>
                <div className="mt-6">
                  <Button variant="hero">Read our security brief</Button>
                </div>
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <div className="rounded-2xl border border-border/60 p-6">
                <h4 className="font-display text-lg mb-2">Why Skyward</h4>
                <p className="text-sm text-muted-foreground">
                  A unified system means faster decisions, fewer handoffs, and better passenger experiences.
                  Designed with ops leaders and station managers for reliability at scale.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="container mx-auto py-16 md:py-24 text-center">
          <Reveal as="h2" className="font-display text-2xl md:text-3xl font-semibold">
            Ready for takeoff?
          </Reveal>
          <Reveal delay={100} className="mt-3 text-muted-foreground max-w-xl mx-auto">
            See how Skyward AMS transforms operations, boosts on-time performance, and drives revenue. Tailored demo in under 30 minutes.
          </Reveal>
          <Reveal delay={160} className="mt-8 flex items-center justify-center gap-3">
            <Button size="lg" variant="gradient">Request a demo</Button>
            <Button size="lg" variant="hero">Talk to sales</Button>
          </Reveal>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Skyward Airline Management System",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              description:
                "Airline Management System for operations, crew, revenue, and maintenance.",
            }),
          }}
        />
      </main>

      <footer className="border-t border-border/60 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Skyward. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a className="story-link" href="#">Privacy</a>
            <a className="story-link" href="#">Terms</a>
            <a className="story-link" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

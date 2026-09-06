import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";

import dewy1 from "@/assets/dewy-1.jpg";
import dewy2 from "@/assets/dewy-2.jpg";
import hd1 from "@/assets/hd-1.jpg";
import hd2 from "@/assets/hd-2.jpg";
import glass1 from "@/assets/glass-1.jpg";
import glass2 from "@/assets/glass-2.jpg";
import airbrush1 from "@/assets/airbrush-1.jpg";
import airbrush2 from "@/assets/airbrush-2.jpg";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Bridal Portfolio — Kishaley Makeup Artist, Pondicherry" },
      {
        name: "description",
        content:
          "Explore Kishaley's bridal portfolio categorized by options: Muhurtham Makeup, Reception Makeup, Engagement Makeup, and Christian Wedding.",
      },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

const portfolioOptions = [
  {
    id: "muhurtham",
    title: "Muhurtham Makeup",
    desc: "Traditional silk saree, temple jewelry & timeless South Indian bridal grandeur.",
    photos: [dewy1, dewy2],
    journalNote: "Artistry Insight: Muhurtham ceremonies demand lightweight yet sweat-resistant skin prep under intense ritual mandap lighting. Rich gold jewelry & vibrant silk draping are balanced with warm glowing tones.",
  },
  {
    id: "reception",
    title: "Reception Makeup",
    desc: "Glamorous evening looks, rich lehengas & modern bridal elegance.",
    photos: [hd1, hd2],
    journalNote: "Artistry Insight: Reception glamour focuses on high-definition 4K camera diffusion and dramatic eye artistry that holds up under stage spotlights and long evening celebrations.",
  },
  {
    id: "engagement",
    title: "Engagement Makeup",
    desc: "Fresh, radiant skin prep and soft romantic tones for pre-wedding celebrations.",
    photos: [glass1, glass2],
    journalNote: "Artistry Insight: Pre-wedding engagement functions call for a soft velvet glass-skin finish. Subtle highlights and romantic rosy undertones complement evening gown or soft pastel drape attire.",
  },
  {
    id: "christian-wedding",
    title: "Christian Wedding",
    desc: "Ethereal, glowing white-gown makeup with delicate hair florals & veil draping.",
    photos: [airbrush1, airbrush2],
    journalNote: "Artistry Insight: White bridal gowns require precise color-matching and luminous skin finish that prevents flashback under flash photography while creating an ethereal, fresh morning glow.",
  },
];

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const activeOption = portfolioOptions.find((o) => o.id === selectedCategory);

  const handleOptionClick = (id: string) => {
    if (selectedCategory === id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(id);
      setTimeout(() => {
        galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal font-sans text-cream antialiased overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-charcoal/92 backdrop-blur-md shadow-md">
        <div className="mx-auto flex h-16 sm:h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <img src="/logo.png" alt="Kishaley Makeup Artist" className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 rounded-full object-contain shadow-xs" />
            <span className="truncate font-serif text-base sm:text-xl font-bold tracking-tight text-goldlight">
              Kishaley Makeup Artist
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:gap-8 text-sm font-medium text-cream/75 md:flex">
            {[
              ["/",          "Home"],
              ["/#about",    "About"],
              ["/services",  "Services"],
              ["/portfolio", "Portfolio"],
              ["/journal",   "Journal"],
              ["/#contact",  "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={`transition-colors hover:text-gold font-medium whitespace-nowrap ${href === "/portfolio" ? "text-gold font-bold" : ""}`}
              >
                {label}
              </a>
            ))}
          </nav>

          <a href="/#contact" className="hidden btn-primary text-xs sm:inline-flex whitespace-nowrap">
            Book Now
          </a>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-20 bg-charcoal2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="mb-2.5 sm:mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-rose">
            Bridal Gallery
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            Portfolio by <span className="shimmer">Occasion</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-xs sm:text-base text-cream/80 leading-relaxed">
            Select a bridal occasion below to explore our signature transformations and artistry notes.
          </p>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioOptions.map((opt) => {
              const isSelected = selectedCategory === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleOptionClick(opt.id)}
                  className={`flex flex-col text-left p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-charcoal2 border-gold shadow-2xl scale-[1.02]"
                      : "glass-card-dark border-gold/25 hover:border-gold/60 hover:-translate-y-1 shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-serif text-lg">✦</span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-ivory">
                    {opt.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-cream/75 leading-relaxed flex-1">
                    {opt.desc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between text-xs">
                    <span className="text-gold font-semibold">{isSelected ? "Viewing Category ↓" : "Click to View Category →"}</span>
                    <span className="text-cream/50">✦</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Option Image Display Container */}
          {selectedCategory && activeOption && (
            <div ref={galleryRef} className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl border border-gold/30 bg-charcoal2 p-6 sm:p-10 text-center animate-fade-in scroll-mt-24">
              <span className="text-gold font-serif text-2xl">✦</span>
              <h2 className="mt-2 font-serif text-2xl sm:text-4xl font-bold text-ivory">
                {activeOption.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-cream/75 max-w-xl mx-auto">
                {activeOption.desc}
              </p>

              {/* Small Journal Text Note */}
              <div className="mt-6 mb-8 mx-auto max-w-2xl text-left bg-charcoal/80 p-5 rounded-2xl border border-gold/20 shadow-md">
                <div className="flex items-center gap-2 mb-2 text-rose text-xs font-bold uppercase tracking-wider">
                  <span>✦ Journal Note from Jayakala</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-cream/90 italic">
                  "{activeOption.journalNote}"
                </p>
              </div>

              {/* Image Grid displaying loaded photos */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {activeOption.photos.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-gold/30 shadow-lg bg-charcoal p-1"
                  >
                    <img
                      src={imgSrc}
                      alt={`${activeOption.title} preview ${idx + 1}`}
                      className="h-full w-full rounded-xl object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
                {[...Array(Math.max(0, 4 - activeOption.photos.length))].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gold/30 bg-charcoal/60 p-4 text-center"
                  >
                    <span className="text-gold/40 font-serif text-2xl">✦</span>
                    <span className="mt-2 text-xs font-semibold text-gold/60">More Photos Coming Soon</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/15 bg-charcoal2 py-10 text-center text-xs text-cream/50">
        <p>© 2026 Kishaley Makeup Artist. Portfolio Page · Pondicherry</p>
      </footer>
    </div>
  );
}

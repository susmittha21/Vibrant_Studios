import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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
  },
  {
    id: "reception",
    title: "Reception Makeup",
    desc: "Glamorous evening looks, rich lehengas & modern bridal elegance.",
  },
  {
    id: "engagement",
    title: "Engagement Makeup",
    desc: "Fresh, radiant skin prep and soft romantic tones for pre-wedding celebrations.",
  },
  {
    id: "christian-wedding",
    title: "Christian Wedding",
    desc: "Ethereal, glowing white-gown makeup with delicate hair florals & veil draping.",
  },
];

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const activeOption = portfolioOptions.find((o) => o.id === selectedCategory);

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
            Select a bridal occasion below to explore our signature transformations.
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
                  onClick={() => setSelectedCategory(isSelected ? null : opt.id)}
                  className={`flex flex-col text-left p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-charcoal2 border-gold shadow-2xl scale-[1.02]"
                      : "glass-card-dark border-gold/25 hover:border-gold/60 hover:-translate-y-1 shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-serif text-lg">✦</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose bg-rose/10 px-2.5 py-1 rounded-full border border-rose/20">
                      Option
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-ivory">
                    {opt.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-cream/75 leading-relaxed flex-1">
                    {opt.desc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between text-xs">
                    <span className="text-gold font-semibold">{isSelected ? "Viewing Category" : "Click to View Photos"}</span>
                    <span className="text-cream/50">→</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Option Image Display Container */}
          {selectedCategory && activeOption && (
            <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl border border-gold/30 bg-charcoal2 p-8 text-center animate-fade-in">
              <span className="text-gold font-serif text-xl">✦</span>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-ivory">
                {activeOption.title} Gallery
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-cream/75 max-w-xl mx-auto">
                {activeOption.desc}
              </p>

              {/* Reserved Image Spaces */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gold/30 bg-charcoal/60 p-4 text-center"
                  >
                    <span className="text-gold/40 font-serif text-2xl">📸</span>
                    <span className="mt-2 text-xs font-semibold text-gold/60">Photo Space {i}</span>
                    <span className="mt-1 text-[10px] text-cream/40">Images will be displayed here</span>
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

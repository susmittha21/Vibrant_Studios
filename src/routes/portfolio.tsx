import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";

import hd1 from "@/assets/hd-1.jpg";
import hd2 from "@/assets/hd-2.jpg";
import muhurtham1 from "@/assets/muhurtham-1.jpeg";
import muhurtham2 from "@/assets/muhurtham-2.jpeg";
import muhurtham3 from "@/assets/muthurtham-3.jpeg";
import muhurtham4 from "@/assets/muhurtham-4.jpeg";
import muhurtham5 from "@/assets/muhurtham-5.jpeg";
import muhurtham6 from "@/assets/muhurtham-6.jpeg";
import muhurtham7 from "@/assets/muhurtham-7.jpeg";
import muhurtham8 from "@/assets/muhurtham-8.jpeg";
import reception1 from "@/assets/reception-1.jpg";
import reception2 from "@/assets/reception-2.jpg";
import reception3 from "@/assets/reception-3.jpg";
import reception4 from "@/assets/reception-4.jpg";
import reception5 from "@/assets/reception-5.jpg";
import reception6 from "@/assets/reception-6.jpeg";
import reception7 from "@/assets/reception-7.jpeg";
import engagement1 from "@/assets/engagemnet-1.jpeg";
import engagement2 from "@/assets/engagement-2.jpeg";
import engagement3 from "@/assets/engagment-3.jpeg";
import christianWedding1 from "@/assets/christian-wedding-1.jpeg";
import christianWedding2 from "@/assets/christian-wedding-2.jpeg";
import christianWedding3 from "@/assets/christian-wedding-3.jpeg";
import airbrush1 from "@/assets/airbrush-1.jpg";
import airbrush2 from "@/assets/airbrush-2.jpg";
import airbrush3 from "@/assets/airbrush-3.jpg";

const INSTAGRAM = "https://www.instagram.com/kishaley_makeupartist";
const WHATSAPP = "https://wa.me/919894144977";
const PHONE1 = "+91 98941 44977";
const PHONE2 = "+91 75989 17977";

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
    photos: [muhurtham1, muhurtham2, muhurtham3, muhurtham4, muhurtham5, muhurtham6, muhurtham7, muhurtham8],
    videos: ["/videos/airbrush-video1.mp4"],
    journalNote: "Artistry Insight: Muhurtham ceremonies demand lightweight yet sweat-resistant skin prep under intense ritual mandap lighting. Rich gold jewelry & vibrant silk draping are balanced with warm glowing tones.",
  },
  {
    id: "reception",
    title: "Reception Makeup",
    desc: "Glamorous evening looks, rich lehengas & modern bridal elegance.",
    photos: [reception1, reception2, reception3, reception4, reception5, hd1, hd2, reception6, reception7],
    videos: ["/videos/hdvideo1.mp4", "/videos/hdvideo2.mp4"],
  },
  {
    id: "engagement",
    title: "Engagement Makeup",
    desc: "Fresh, radiant skin prep and soft romantic tones for pre-wedding celebrations.",
    photos: [engagement1, engagement2, engagement3],
    videos: ["/videos/glassskinvideo1.mp4"],
    journalNote: "Artistry Insight: Pre-wedding engagement functions call for a soft velvet glass-skin finish. Subtle highlights and romantic rosy undertones complement evening gown or soft pastel drape attire.",
  },
  {
    id: "christian-wedding",
    title: "Christian Wedding",
    desc: "Ethereal, glowing white-gown makeup with delicate hair florals & veil draping.",
    photos: [christianWedding1, christianWedding2, christianWedding3, airbrush1, airbrush2, airbrush3],
    journalNote: "Artistry Insight: White bridal gowns require precise color-matching and luminous skin finish that prevents flashback under flash photography while creating an ethereal, fresh morning glow.",
  },
];

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const activeOption = portfolioOptions.find((o) => o.id === selectedCategory);

  useEffect(() => {
    const categoryFromHash = window.location.hash.slice(1);
    if (!portfolioOptions.some((option) => option.id === categoryFromHash)) return;

    setSelectedCategory(categoryFromHash);
    window.setTimeout(() => {
      galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

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
    <div className="min-h-screen bg-ivory font-sans text-wine antialiased overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-16 sm:h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <img src="/logo.png" alt="Kishaley Makeup Artist" className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 rounded-full object-contain shadow-xs" />
            <span className="truncate font-serif text-base sm:text-xl font-bold tracking-tight text-wine">
              Kishaley Makeup Artist
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:gap-8 text-sm font-medium text-wine/75 md:flex">
            {[
              ["/",          "Home"],
              ["/#about",    "About"],
              ["/services",  "Services"],
              ["/portfolio", "Portfolio"],
              ["/academy",   "Academy"],
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
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-20 bg-champagne">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="mb-2.5 sm:mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-rose">
            Bridal Gallery
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-golddark tracking-tight">
            Portfolio by Occasion
          </h1>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-xs sm:text-base text-wine/75 leading-relaxed">
            Select a bridal occasion below to explore our signature transformations and artistry notes.
          </p>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-16 sm:py-24 bg-ivory">
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
                      ? "bg-champagne border-gold shadow-2xl scale-[1.02]"
                      : "glass-card-light border-gold/25 hover:border-gold/60 hover:-translate-y-1 shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-serif text-lg">✦</span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-wine">
                    {opt.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-wine/70 leading-relaxed flex-1">
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
            <div ref={galleryRef} className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl border border-gold/30 bg-champagne p-6 sm:p-10 text-center animate-fade-in scroll-mt-24">
              <span className="text-gold font-serif text-2xl">✦</span>
              <h2 className="mt-2 font-serif text-2xl sm:text-4xl font-bold text-wine">
                {activeOption.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-wine/70 max-w-xl mx-auto">
                {activeOption.desc}
              </p>

              {/* Gallery displaying loaded photos and videos */}
              <div className="mt-6 grid grid-cols-1 items-start sm:grid-cols-2 md:grid-cols-4 gap-4">
                {activeOption.photos.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="group relative self-start overflow-hidden rounded-2xl border border-gold/30 shadow-lg bg-charcoal3 p-1"
                  >
                    <img
                      src={imgSrc}
                      alt={`${activeOption.title} preview ${idx + 1}`}
                      className="h-auto w-full rounded-xl object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
                {activeOption.videos?.map((videoSrc, idx) => (
                  <div
                    key={`video-${idx}`}
                    className="group relative self-start overflow-hidden rounded-2xl border border-gold/30 shadow-lg bg-charcoal p-1"
                  >
                    <video
                      src={videoSrc}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={`${activeOption.title} video preview ${idx + 1}`}
                      className="h-auto w-full rounded-xl object-contain"
                    />
                  </div>
                ))}
                {[...Array(Math.max(0, 4 - activeOption.photos.length - (activeOption.videos?.length ?? 0)))].map((_, i) => (
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
      <footer className="border-t border-gold/15 bg-charcoal2 text-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-3 sm:mb-4">
                <img src="/logo.png" alt="Kishaley" className="h-10 w-10 rounded-full object-contain sm:h-12 sm:w-12" />
                <span className="font-serif text-base font-bold text-goldlight sm:text-lg">Kishaley Makeup Artist</span>
              </div>
              <p className="text-xs leading-relaxed text-cream/60">Since 2014. 2000+ happy brides. Studio in Pondicherry.</p>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold/80 sm:mb-4">Quick Links</p>
              <ul className="flex flex-col gap-2 text-xs text-cream/75 sm:text-sm">
                {[["/", "Home"], ["/#about", "About"], ["/services", "Services"], ["/portfolio", "Portfolio"], ["/academy", "Academy"], ["/journal", "Journal"], ["/#contact", "Book Now"]].map(([href, label]) => (
                  <li key={href}><a href={href} className="font-medium transition hover:text-gold">{label}</a></li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold/80 sm:mb-4">Get In Touch</p>
              <div className="flex flex-col gap-2.5 text-xs text-cream/75 sm:gap-3 sm:text-sm">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="font-semibold transition hover:text-gold">@kishaley_makeupartist</a>
                <a href={`tel:${PHONE1.replace(/\s/g, "")}`} className="font-medium transition hover:text-gold">{PHONE1}</a>
                <a href={`tel:${PHONE2.replace(/\s/g, "")}`} className="font-medium transition hover:text-gold">{PHONE2}</a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-medium transition hover:text-gold">WhatsApp 24/7</a>
                <p className="text-cream/60">Pondicherry, Tamil Nadu</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gold/10 pt-6 text-center text-[11px] text-cream/40 sm:mt-10 sm:pt-8">
            <p>© 2026 Kishaley Makeup Artist. Crafted with care in Pondicherry · India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

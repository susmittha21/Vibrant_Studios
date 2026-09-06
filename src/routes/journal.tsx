import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import dewyService     from "@/assets/dewy-service.jpg";
import homeHdLook      from "@/assets/home-hd-look.png";
import cosmeticsFlatlay from "@/assets/cosmetics-flatlay.jpg";
import homeAirbrushLook from "@/assets/home-airbrush-look.jpg";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({
    meta: [
      { title: "Bridal Journal & Beauty Insights — Kishaley Makeup Artist" },
      {
        name: "description",
        content:
          "Expert bridal makeup advice by Jayakala: Dewy vs Glass Skin, choosing HD makeup for 4K photography, and the wedding day skin prep ritual.",
      },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
});

const INSTAGRAM = "https://www.instagram.com/kishaley_makeupartist";
const WHATSAPP  = "https://wa.me/919894144977";
const PHONE1    = "+91 98941 44977";
const PHONE2    = "+91 75989 17977";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2.5 sm:mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-rose">
      {children}
    </p>
  );
}

function GoldDivider() {
  return (
    <div className="mx-auto flex max-w-5xl items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 text-gold" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold/70" />
      <span className="text-sm sm:text-base text-gold font-serif">✦</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold/70" />
    </div>
  );
}

const articles = [
  {
    title: "Dewy Finish vs Glass Skin: Which is Right for Your Ceremony?",
    category: "Bridal Guide",
    readTime: "4 min read",
    summary:
      "Understanding the subtle difference between luminous hydration and pore-perfect velvety glass skin — and how traditional venue lighting influences the choice.",
    img: dewyService,
    alt: "Dewy bridal makeup look by Kishaley",
  },
  {
    title: "Why HD Makeup is Crucial for 4K Wedding Videography",
    category: "Technique",
    readTime: "5 min read",
    summary:
      "Modern cinematic cameras capture every micro-detail. Discover how high-definition light-scattering pigments keep your skin flawless on screen without cakey buildup.",
    img: homeHdLook,
    alt: "High definition bridal makeup by Kishaley",
  },
  {
    title: "The Ultimate 30-Day Bridal Skin Preparation Ritual",
    category: "Skin Care",
    readTime: "6 min read",
    summary:
      "Great makeup begins with healthy skin. Jayakala's step-by-step checklist of hydration, gentle exfoliation and stress management leading up to your wedding morning.",
    img: cosmeticsFlatlay,
    alt: "Cosmetics flatlay palette and beauty essentials",
  },
  {
    title: "The Airbrush Advantage: Tear-Proof & Humidity-Resistant Makeup",
    category: "Bridal Tips",
    readTime: "3 min read",
    summary:
      "From emotional morning pheras to humid evening receptions, learn why micro-fine airbrushing is the gold standard for endurance.",
    img: homeAirbrushLook,
    alt: "Airbrush bridal makeup by Kishaley",
  },
];

function JournalPage() {
  return (
    <div className="min-h-screen bg-charcoal font-sans text-cream antialiased overflow-x-hidden">
      {/* ══ NAVBAR ══ */}
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
                className={`transition-colors hover:text-gold font-medium whitespace-nowrap ${href === "/journal" ? "text-gold font-bold" : ""}`}
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

      {/* ══ HERO BANNER ══ */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-20 bg-charcoal2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <SectionLabel>The Journal</SectionLabel>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            Bridal Beauty <span className="shimmer">&amp; Insights</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-xs sm:text-base text-cream/80 leading-relaxed">
            Professional advice, bridal guides, and behind-the-scenes artistry notes from Jayakala.
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* ══ ARTICLES GRID ══ */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2">
            {articles.map((a) => (
              <article
                key={a.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl glass-card-dark border border-gold/25 shadow-md hover:border-gold hover:shadow-xl transition duration-300"
              >
                {/* Ribbon Symbol at Top Right */}
                <div className="absolute top-0 right-4 z-20 flex flex-col items-center">
                  <div className="bg-gradient-to-b from-amber-400 via-gold to-amber-600 text-charcoal shadow-lg px-2.5 py-1.5 rounded-b-sm font-bold text-[11px] tracking-wider uppercase flex items-center gap-1 border-x border-b border-gold/50">
                    <svg className="w-3.5 h-4 fill-charcoal" viewBox="0 0 24 24">
                      <path d="M5 3h14a2 2 0 0 1 2 2v16l-7-4-7 4V5a2 2 0 0 1 2-2z" />
                    </svg>
                  </div>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal2 border-b border-gold/10">
                  <img
                    src={a.img}
                    alt={a.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-rose">
                    <span>{a.category}</span>
                    <span className="text-gold/40">·</span>
                    <span className="text-cream/60">{a.readTime}</span>
                  </div>
                  <h2 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-ivory group-hover:text-gold transition">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-cream/75">{a.summary}</p>
                  <div className="mt-auto pt-6">
                    <a href="/#contact" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:underline transition">
                      Discuss This Look for Your Big Day →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-16 sm:py-24 bg-charcoal2">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
            Ready to plan your wedding day look?
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 max-w-lg text-cream/75 text-xs sm:text-sm leading-relaxed">
            Schedule a personalized one-on-one bridal consultation with Jayakala.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="/#contact" className="btn-primary text-xs sm:text-sm py-2.5 px-5 sm:py-3 sm:px-7">
              Book a Consultation ✦
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline text-xs sm:text-sm py-2.5 px-5 sm:py-3 sm:px-7">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-gold/15 bg-charcoal">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <img src="/logo.png" alt="Kishaley" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain" />
                <span className="font-serif text-base sm:text-lg font-bold text-goldlight">Kishaley Makeup Artist</span>
              </div>
              <p className="text-xs leading-relaxed text-cream/50">Since 2014. 2000+ happy brides. Studio in Pondicherry.</p>
            </div>
            <div>
              <p className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-widest text-gold/80">Quick Links</p>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-cream/70">
                {[["/","Home"],["/#about","About"],["/services","Services"],["/#portfolio","Portfolio"],["/journal","Journal"],["/#contact","Book Now"]].map(([h,l])=>(
                  <li key={h}><a href={h} className="hover:text-gold transition font-medium">{l}</a></li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <p className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-widest text-gold/80">Get In Touch</p>
              <div className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-cream/70">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-gold transition font-semibold">@kishaley_makeupartist</a>
                <a href={`tel:${PHONE1.replace(/\s/g, "")}`} className="hover:text-gold transition font-medium">{PHONE1}</a>
                <a href={`tel:${PHONE2.replace(/\s/g, "")}`} className="hover:text-gold transition font-medium">{PHONE2}</a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-gold transition font-medium">WhatsApp 24/7</a>
                <p>Pondicherry, Tamil Nadu</p>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 border-t border-gold/10 pt-6 sm:pt-8 text-center text-[11px] sm:text-xs text-cream/40">
            <p>© 2026 Kishaley Makeup Artist. Crafted with care in Pondicherry · India</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" style={{animation:"pulse-soft 2.5s infinite"}} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 active:scale-95">
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  );
}

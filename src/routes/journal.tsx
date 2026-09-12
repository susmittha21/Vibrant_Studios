import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { ReactNode } from "react";

import journalMakeupBrushes from "@/assets/journal-makeup-brushes.jpg";
import journalSkincare from "@/assets/journal-skincare.jpg";
import journalBeautyTools from "@/assets/journal-beauty-tools.jpg";
import journalFlowers from "@/assets/journal-flowers.jpg";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({
    meta: [
      { title: "Bridal Journal & Beauty Insights — Kishaley Makeup Artist, Pondicherry" },
      {
        name: "description",
        content:
          "Expert bridal makeup advice by Jayakala: Dewy vs Glass Skin, choosing HD makeup for 4K photography, and wedding day skin prep rituals in Pondicherry.",
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

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  img: string;
  alt: string;
  imgPos?: string;
  content: string[];
  keyTakeaways: string[];
}

const articles: Article[] = [
  {
    id: "dewy-vs-glass-skin",
    title: "Dewy Finish vs Glass Skin: Which is Right for Your Ceremony?",
    category: "Bridal Guide",
    readTime: "4 min read",
    summary:
      "Understanding the subtle difference between luminous hydration and pore-perfect velvety glass skin — and how coastal humidity & venue lighting guide the right choice.",
    img: journalMakeupBrushes,
    alt: "Makeup brushes and cosmetics arranged for beauty preparation",
    imgPos: "object-center",
    content: [
      "When planning your wedding look, choosing between a Dewy Finish and Glass Skin comes down to skin type, climate, and the ceremony setting.",
      "A Dewy Finish is all about lit-from-within radiance. We focus on intense moisture prep, lightweight illuminating bases, and soft cream highlights. It gives a youthful, fresh-faced glow that looks breathtaking in morning rituals and natural outdoor daylight.",
      "Glass Skin, on the other hand, is a porcelain-smooth, poreless aesthetic. It balances high reflectivity with velvety oil-control. Using specialized layering of lightweight hydrating primers and micro-fine smoothing powders, blemishes and texture vanish without feeling heavy.",
      "For South Indian weddings in Pondicherry, Glass Skin is often preferred for long evening receptions with heavy spotlighting, while Dewy Finish is a favorite for intimate morning temple ceremonies."
    ],
    keyTakeaways: [
      "Dewy: Best for dry to normal skin & daylight morning ceremonies.",
      "Glass Skin: Best for combination skin & dramatic evening stage lighting.",
      "Both styles are customized with sweat-resistant setting sprays to withstand coastal humidity."
    ]
  },
  {
    id: "hd-makeup-4k",
    title: "Why HD Makeup is Crucial for 4K Wedding Videography",
    category: "Technique",
    readTime: "5 min read",
    summary:
      "Modern cinematic 4K camera lenses capture every micro-detail. Discover how high-definition light-scattering pigments prevent cakey buildup under bright stage lighting.",
    img: journalBeautyTools,
    alt: "Beauty products arranged for a makeup routine",
    imgPos: "object-[center_20%]",
    content: [
      "Traditional bridal makeup often relied on thick layers of pancake foundation to cover blemishes. However, with today's ultra-high-definition 4K lenses and cinema-grade lighting, heavy makeup immediately appears powdery and unnatural.",
      "High Definition (HD) makeup uses micronized quartz, silica, and light-diffusing silicones. These ultra-fine pigments scatter light across your face, blurring imperfections while allowing natural skin texture to show through seamlessly.",
      "HD formulas prevent flashback — that unwanted white chalky cast caused by heavy flash photography. The finish looks completely weightless and authentic to the naked eye while appearing flawless in high-resolution photo albums and cinematic films.",
    ],
    keyTakeaways: [
      "Micronized pigments blend seamlessly without settling into fine lines.",
      "100% flashback-proof formulation designed specifically for professional wedding cameras.",
      "Provides full, buildable coverage that feels like a breathable second skin."
    ]
  },
  {
    id: "bridal-skin-prep",
    title: "The Ultimate 30-Day Bridal Skin Preparation Ritual",
    category: "Skin Care",
    readTime: "6 min read",
    summary:
      "Flawless makeup always begins with healthy, well-prepped skin. Jayakala's step-by-step checklist of hydration, gentle exfoliation, and routine care leading up to your wedding.",
    img: journalSkincare,
    alt: "Skincare moisturizer prepared for a beauty routine",
    imgPos: "object-[center_20%]",
    content: [
      "Your wedding makeup is only as good as the canvas underneath. Starting your preparation 30 to 45 days prior ensures your skin is plump, hydrated, and receptive on your big morning.",
      "Rule #1: Commit to a gentle CTM (Cleansing, Toning, Moisturizing) routine twice daily. Incorporate hyaluronic acid serums on damp skin to boost intracellular hydration.",
      "Rule #2: Avoid introducing brand-new strong chemical peels or aggressive facial treatments within 3 weeks of your wedding date to prevent unexpected allergic breakouts or barrier peeling.",
      "Rule #3: Daily SPF protection and 2.5 to 3 liters of water daily keep skin calm and radiant. During our pre-bridal consultation, we analyze your skin barrier to customize the primers and foundations for your wedding day."
    ],
    keyTakeaways: [
      "30 Days Out: Focus on hydration, barrier repair, and gentle exfoliation.",
      "7 Days Out: Stick strictly to tested products; no experimental salon treatments.",
      "Wedding Morning: Arrive with a clean, pre-cleansed face ready for luxury skin prep."
    ]
  },
  {
    id: "airbrush-longevity",
    title: "The Airbrush Advantage: Tear-Proof & Humidity-Resistant Makeup",
    category: "Bridal Tips",
    readTime: "3 min read",
    summary:
      "From emotional morning pheras to humid evening receptions, learn why micro-fine airbrushing is the gold standard for endurance and all-day comfort.",
    img: journalFlowers,
    alt: "Fresh flowers in a bright outdoor garden",
    imgPos: "object-[center_20%]",
    content: [
      "South Indian weddings can be demanding: intense rituals around holy fire (Agni), heavy silk sarees, emotional moments, and high coastal humidity.",
      "Airbrush makeup solves this by using compressed air to spray a micro-fine, atomized mist of silicone-based makeup onto the skin. Because it never rubs against the skin with brushes or sponges, it forms a cohesive, breathable, and waterproof shield.",
      "The result is a weightless veil that resists sweat, tears, humidity, and outfit friction for up to 16+ hours without needing heavy touch-ups or powdery re-applications."
    ],
    keyTakeaways: [
      "Ultra-hygienic application: No sponges or brushes touching sensitive skin.",
      "Waterproof, sweat-proof, and tear-resistant endurance for 16+ hours.",
      "Lightweight feel that never cracks or melts under ceremonial heat."
    ]
  },
];

function JournalPage() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <div className="min-h-screen bg-ivory font-sans text-wine antialiased overflow-x-hidden">
      {/* ══ NAVBAR ══ */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-16 sm:h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <img
              src="/logo.png"
              alt="Kishaley Makeup Artist"
              className="h-10 w-10 rounded-full border border-[#c7a76b]/30 bg-white/80 object-contain p-1 shadow-sm sm:h-12 sm:w-12"
            />
            <span className="truncate font-serif text-lg sm:text-2xl font-bold tracking-tight text-wine">
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
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-20 bg-champagne">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <SectionLabel>The Bridal Journal</SectionLabel>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-golddark tracking-tight">
            Bridal Beauty &amp; Artistry Insights
          </h1>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-xs sm:text-base text-wine/75 leading-relaxed">
            Professional bridal makeup guidance, skin prep wisdom, and ceremony styling advice directly from Jayakala.
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* ══ ARTICLES GRID ══ */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2">
            {articles.map((a) => (
              <article
                key={a.id}
                onClick={() => setActiveArticle(a)}
                className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl glass-card-light border border-gold/25 shadow-md hover:border-gold hover:shadow-xl transition duration-300 cursor-pointer"
              >
                {/* Ribbon Symbol at Top Right */}
                <div className="absolute top-0 right-4 z-20 flex flex-col items-center">
                  <div className="bg-gradient-to-b from-goldlight via-gold to-golddark text-white shadow-xl px-2.5 py-2 rounded-b-sm font-bold text-[10px] sm:text-[11px] tracking-wider uppercase flex items-center gap-1 border-x border-b border-gold/60">
                    <svg className="w-3.5 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M5 3h14a2 2 0 0 1 2 2v16l-7-4-7 4V5a2 2 0 0 1 2-2z" />
                    </svg>
                    <span className="hidden sm:inline font-serif font-extrabold text-[9px]">Kishaley</span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-charcoal3 border-b border-gold/10">
                  <img
                    src={a.img}
                    alt={a.alt}
                    loading="lazy"
                    className={`h-full w-full transition duration-500 group-hover:scale-105 ${
                      a.id === "airbrush-longevity" ? "object-contain" : "object-cover"
                    } ${a.imgPos || "object-[center_top]"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-rose">
                    <span>{a.category}</span>
                    <span className="text-gold/40">·</span>
                    <span className="text-cream/60">{a.readTime}</span>
                  </div>
                  <h2 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-wine group-hover:text-golddark transition">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-wine/70">{a.summary}</p>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-gold/15">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gold group-hover:underline">
                      Read Full Article →
                    </span>
                    <span className="text-xs text-cream/40">Tap to open</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ARTICLE MODAL / FULL READER ══ */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-white border border-gold/40 p-6 sm:p-10 shadow-2xl text-wine"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/75 hover:text-white text-xl font-bold bg-white/10 w-9 h-9 rounded-full flex items-center justify-center transition hover:bg-white/20"
              aria-label="Close article"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-rose mb-3">
              <span>{activeArticle.category}</span>
              <span className="text-gold/40">·</span>
              <span className="text-cream/60">{activeArticle.readTime}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-wine leading-tight">
              {activeArticle.title}
            </h2>

            <div className="mt-5 mb-6 aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl border border-gold/30">
              <img src={activeArticle.img} alt={activeArticle.alt} className={`w-full h-full object-cover ${activeArticle.imgPos || "object-[center_top]"}`} />
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-wine/80">
              {activeArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-champagne p-5 sm:p-6 border border-gold/25">
              <h3 className="font-serif text-sm sm:text-base font-bold text-goldlight mb-3 flex items-center gap-2">
                <span>✦</span> Jayakala's Key Recommendations
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-wine/80">
                {activeArticle.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gold/20 flex flex-wrap items-center justify-between gap-4">
              <a href="/#contact" onClick={() => setActiveArticle(null)} className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                Consult With Jayakala ✦
              </a>
              <button onClick={() => setActiveArticle(null)} className="btn-outline text-xs py-2.5 px-5">
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ CTA ══ */}
      <section className="py-16 sm:py-24 bg-charcoal2">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
            Ready to plan your wedding day look?
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 max-w-lg text-cream/75 text-xs sm:text-sm leading-relaxed">
            Schedule a personalized one-on-one bridal consultation with Jayakala in Pondicherry.
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
                <img src="/logo.png" alt="Kishaley" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain mix-blend-screen" />
                <span className="font-serif text-base sm:text-lg font-bold text-goldlight">Kishaley Makeup Artist</span>
              </div>
              <p className="text-xs leading-relaxed text-cream/50">Since 2014. 2000+ happy brides. Studio in Pondicherry.</p>
            </div>
            <div>
              <p className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-widest text-gold/80">Quick Links</p>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-cream/70">
                {[["/","Home"],["/#about","About"],["/services","Services"],["/portfolio","Portfolio"],["/journal","Journal"],["/#contact","Book Now"]].map(([h,l])=>(
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
                <p>Pondicherry — 605004</p>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 border-t border-gold/10 pt-6 sm:pt-8 text-center text-[11px] sm:text-xs text-cream/40">
            <p>© 2026 Kishaley Makeup Artist. Crafted with care in Pondicherry · India</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" style={{animation:"pulse-soft 2.5s infinite"}} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gold text-wine shadow-2xl transition hover:scale-110 active:scale-95">
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  );
}

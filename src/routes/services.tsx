import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

/* ── Clean Real Photos from PDF ── */
import hdLook        from "@/assets/hd-look.jpg";
import glassSkin     from "@/assets/glass-skin-clean.jpg";
import airbrush1     from "@/assets/airbrush-1.jpg";
import airbrush2     from "@/assets/airbrush-2.jpg";
import airbrush3     from "@/assets/airbrush-3.jpg";
import dewy1         from "@/assets/dewy-1.jpg";
import dewy2         from "@/assets/dewy-2.jpg";
import hd1           from "@/assets/hd-1.jpg";
import hd2           from "@/assets/hd-2.jpg";
import glass1        from "@/assets/glass-1.jpg";
import glass2        from "@/assets/glass-2.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Bridal Services & Packages — Kishaley Makeup Artist, Pondicherry" },
      {
        name: "description",
        content:
          "Explore Kishaley's 4 signature services: Dewy Finish (₹8,000), High Definition (₹12,000), Glass Skin Signature (₹15,000), and Airbrush Makeup. Plus Bridesmaid, Party & Groom styling.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
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

/* ── 4 Primary Services (Airbrush as #4) ── */
const primaryServices = [
  {
    num: "01",
    name: "Dewy Finish Look",
    tagline: "A dewy finish, a radiant, luminous look that gives the appearance of a healthy, glowing complexion.",
    details: "Crafted using lightweight, hydrating formulas and customized skin prep, this look creates an ethereal lit-from-within glow that looks natural and fresh throughout traditional ceremonies.",
    includes: ["HD Bridal Makeup", "Hairstyle & Florals", "Saree / Dupatta Draping"],
    price: "₹8,000",
    priceNote: "per session",
    img: dewy1,
    gallery: [dewy1, dewy2],
    alt: "Dewy finish bridal look by Kishaley",
  },
  {
    num: "02",
    name: "High Definition Look",
    tagline: "HD makeup is designed to enhance a bride's features & make them stand out in photos and videos.",
    details: "Engineered specifically for 4K video and photography, high-definition makeup diffuses light across the skin, giving full seamless coverage without any cakey buildup under intense lighting.",
    includes: ["HD Bridal Makeup", "Hairstyle & Styling", "Saree / Lehanga Draping"],
    price: "₹12,000",
    priceNote: "per session",
    img: hd1,
    gallery: [hd1, hd2],
    alt: "High definition HD bridal look by Kishaley",
  },
  {
    num: "03",
    name: "Glass Skin Signature",
    tagline: "My Signature Bridal Makeup Look gives you a very natural, yet very finished and polished look. This hides blemishes, giving it a smooth and velvety finish.",
    details: "Jayakala's most requested signature look. Employs advanced skin perfecting rituals to create a velvety, porcelain glass-skin appearance that blurs imperfections while highlighting natural facial structure.",
    includes: ["Signature Glass Skin Makeup", "Couture Hair Styling", "Precision Saree Draping"],
    price: "₹15,000",
    priceNote: "per session",
    img: glass1,
    gallery: [glass1, glass2],
    alt: "Glass skin signature bridal look by Kishaley",
  },
  {
    num: "04",
    name: "Airbrush Makeup",
    tagline: "A weightless, seamless veil of micro-fine coverage that lasts from morning rites to the send-off.",
    details: "Airbrush technique sprays micro-fine mist onto the skin, creating an ultra-durable, waterproof finish that withstands tears, humidity and long hours. Feels completely weightless on the skin.",
    includes: ["Airbrush Bridal Makeup", "Hairstyle & Florals", "Saree / Outfit Draping"],
    price: "₹20,000",
    priceNote: "based on event details",
    img: airbrush1,
    gallery: [airbrush1, airbrush2, airbrush3],
    alt: "Airbrush bridal makeup by Kishaley",
  },
];

/* ── Other services ── */
const otherServices = [
  {
    name: "Bridesmaid Makeup",
    desc: "Coordinated, photo-ready glam for the entire bridal party — complementary to the bride's aesthetic while celebrating each bridesmaid's unique beauty.",
    img: null,
  },
  {
    name: "Party Makeup",
    desc: "Event-ready glamour for sangeets, cocktail nights, receptions and pre-wedding festivities. Striking eye artistry and long-lasting glow.",
    img: null,
  },
  {
    name: "Groom Look",
    desc: "Refined grooming and skin preparation designed to ensure the groom looks sharp, fresh, and camera-ready beside his bride on the big day.",
    img: null,
  },
];

function ServicesPage() {
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
              ["/#portfolio","Portfolio"],
              ["/journal",   "Journal"],
              ["/#contact",  "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={`transition-colors hover:text-gold font-medium whitespace-nowrap ${href === "/services" ? "text-gold font-bold" : ""}`}
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
          <SectionLabel>Our Services</SectionLabel>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            Bridal Artistry &amp; <span className="shimmer">Signature Services</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-xs sm:text-base text-cream/80 leading-relaxed">
            Personalized bridal looks crafted by understanding skin type, texture, and preference.
            Every service includes complete Makeup, Hairstyle, and Saree Draping.
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* ══ 4 PRIMARY SERVICES ══ */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <SectionLabel>Primary Services</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
              Signature Bridal Services
            </h2>
          </div>

          <div className="flex flex-col gap-16 sm:gap-24">
            {primaryServices.map((service, idx) => (
              <div
                key={service.name}
                className={`grid items-center gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-12 ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                {/* Photo Side */}
                <div className={`lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  {service.gallery && service.gallery.length === 3 ? (
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 relative">
                      <div className="col-span-2 relative overflow-hidden rounded-2xl border border-gold/30 shadow-xl p-1 bg-charcoal2">
                        <img src={service.gallery[0]} alt={service.alt} loading="lazy" className="aspect-[16/9] w-full h-full rounded-xl object-cover object-center" />
                        <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-charcoal/90 border border-gold/40 text-xs sm:text-sm font-bold text-gold shadow-lg">
                          {service.num}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-xl p-1 bg-charcoal2">
                        <img src={service.gallery[1]} alt={service.alt} loading="lazy" className="aspect-[4/5] w-full h-full rounded-xl object-cover object-center" />
                      </div>
                      <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-xl p-1 bg-charcoal2">
                        <img src={service.gallery[2]} alt={service.alt} loading="lazy" className="aspect-[4/5] w-full h-full rounded-xl object-cover object-center" />
                      </div>
                    </div>
                  ) : service.gallery && service.gallery.length === 2 ? (
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 relative">
                      <div className="relative overflow-hidden rounded-2xl border border-gold/30 shadow-xl p-1 bg-charcoal2">
                        <img src={service.gallery[0]} alt={service.alt} loading="lazy" className="aspect-[3/4] w-full h-full rounded-xl object-cover object-center" />
                        <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-charcoal/90 border border-gold/40 text-xs sm:text-sm font-bold text-gold shadow-lg">
                          {service.num}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-xl p-1 bg-charcoal2">
                        <img src={service.gallery[1]} alt={service.alt} loading="lazy" className="aspect-[3/4] w-full h-full rounded-xl object-cover object-center" />
                      </div>
                    </div>
                  ) : service.img ? (
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 shadow-2xl bg-charcoal2 p-2">
                      <img
                        src={service.img}
                        alt={service.alt}
                        loading="lazy"
                        className="aspect-[4/5] w-full rounded-xl sm:rounded-2xl object-cover object-center"
                      />
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-charcoal/90 border border-gold/40 text-xs sm:text-sm font-bold text-gold shadow-lg">
                        {service.num}
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 shadow-2xl bg-charcoal2 p-2 aspect-[4/5] flex items-center justify-center">
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-charcoal/90 border border-gold/40 text-xs sm:text-sm font-bold text-gold shadow-lg">
                        {service.num}
                      </div>
                      <span className="text-gold/50 font-serif text-lg italic">Image Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="font-serif text-4xl sm:text-6xl font-bold text-gold/25">{service.num}</span>
                  <h3 className="mt-1 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-ivory">{service.name}</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-cream/90 leading-relaxed">{service.tagline}</p>
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-cream/75 leading-relaxed">{service.details}</p>

                  <div className="mt-5 sm:mt-6">
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gold/70 mb-2">Package Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.includes.map((i) => (
                        <span key={i} className="rounded-full bg-gold/15 border border-gold/35 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold text-gold">
                          ✓ {i}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gold/20 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-serif text-2xl sm:text-3xl font-bold text-gold">{service.price}</p>
                      <p className="text-[10px] sm:text-xs font-medium text-cream/50">*{service.priceNote}</p>
                    </div>
                    <a href="/#contact" className="btn-primary text-xs py-2.5 px-5 sm:py-3 sm:px-6">
                      Reserve for Your Wedding ✦
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ══ OTHER SERVICES ══ */}
      <section className="py-16 sm:py-24 bg-charcoal2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center">
            <SectionLabel>Additional Offerings</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
              Other Services
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm text-cream/75">
              Available alongside bridal bookings or as standalone party styling.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <div key={s.name} className="flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl glass-card-dark border border-gold/25 shadow-sm hover:border-gold hover:shadow-xl transition">
                {s.img ? (
                  <div className="aspect-[4/3] overflow-hidden bg-charcoal">
                    <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover object-center" />
                  </div>
                ) : (
                  <div className="aspect-[4/3] overflow-hidden bg-charcoal flex items-center justify-center border-b border-gold/15">
                    <span className="text-gold/40 font-serif text-sm italic">Image Coming Soon</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-goldlight">{s.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-cream/75">{s.desc}</p>
                  <div className="mt-auto pt-5">
                    <a href="/#contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gold hover:underline transition">
                      Enquire for Rates →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ══ CTA ══ */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
            Reserve your wedding morning with <span className="shimmer">Jayakala</span>
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 max-w-lg text-cream/75 text-xs sm:text-sm leading-relaxed">
            Limited dates each wedding season. Bookings open months in advance — reach out today for availability.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="/#contact" className="btn-primary text-xs sm:text-sm py-2.5 px-5 sm:py-3 sm:px-7">
              Book an Appointment ✦
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline text-xs sm:text-sm py-2.5 px-5 sm:py-3 sm:px-7">
              WhatsApp Us 💬
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-gold/15 bg-charcoal2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <img src="/logo.png" alt="Kishaley" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain" />
                <span className="font-serif text-base sm:text-lg font-bold text-goldlight">Kishaley Makeup Artist</span>
              </div>
              <p className="text-xs leading-relaxed text-cream/50">Since 2014. 2000+ happy brides. Available all over India 🇮🇳</p>
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
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-gold transition font-semibold">◎ @kishaley_makeupartist</a>
                <a href={`tel:${PHONE1.replace(/\s/g, "")}`} className="hover:text-gold transition font-medium">☎ {PHONE1}</a>
                <a href={`tel:${PHONE2.replace(/\s/g, "")}`} className="hover:text-gold transition font-medium">☎ {PHONE2}</a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-gold transition font-semibold text-green-400">💬 WhatsApp 24/7</a>
                <p>📍 Pondicherry, Tamil Nadu</p>
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

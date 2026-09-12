import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { ReactNode } from "react";

/* ── Clean Real Photos from Studio ── */
import airbrushNew1  from "@/assets/airbrush-new-1.jpg";
import airbrushNew2  from "@/assets/airbrush-new-2.jpg";
import dewyOne       from "@/assets/dewy=1.jpeg";
import dewy2         from "@/assets/dewy-2.jpg";
import hd1           from "@/assets/hd-1.jpg";
import hd2           from "@/assets/hd-2.jpg";
import glass1        from "@/assets/glass-1.jpg";
import glassTwo      from "@/assets/glass-2.jpeg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Bridal Services & Packages — Kishaley Makeup Artist, Pondicherry" },
      {
        name: "description",
        content:
          "Explore Kishaley's 4 signature services: Dewy Finish (₹8,000), High Definition (₹12,000), Glass Skin Signature (₹15,000), and Airbrush Makeup (₹20,000). Complete with Hairstyle & Saree Draping.",
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

/* ── 4 Primary Services ── */
const primaryServices = [
  {
    id: "dewy-finish",
    num: "01",
    name: "Dewy Finish Look",
    tagline: "A dewy finish, a radiant, luminous look that gives the appearance of a healthy, glowing complexion.",
    includes: ["Bridal Makeup", "Hairstyle", "Saree / Dupatta Draping"],
    price: "₹8,000",
    priceNote: "per session",
    img: dewyOne,
    gallery: [dewyOne, dewy2],
    alt: "Dewy finish bridal look by Kishaley",
  },
  {
    id: "high-definition",
    num: "02",
    name: "High Definition Look",
    tagline: "HD makeup is designed to enhance a bride's features & make them stand out in photos and videos.",
    includes: ["HD Bridal Makeup", "Hairstyle", "Saree / Lehanga Draping"],
    price: "₹12,000",
    priceNote: "per session",
    img: hd1,
    gallery: [hd1, hd2],
    alt: "High definition HD bridal look by Kishaley",
  },
  {
    id: "glass-skin",
    num: "03",
    name: "Glass Skin Signature",
    tagline: "My Signature Bridal Makeup Look gives you a very natural, yet very finished and polished look. This hides blemishes, giving it a smooth and velvety finish.",
    includes: ["Signature Glass Skin Makeup", "Couture Hair Styling", "Precision Saree Draping"],
    price: "₹15,000",
    priceNote: "per session",
    img: glass1,
    gallery: [glass1, glassTwo],
    alt: "Glass skin signature bridal look by Kishaley",
  },
  {
    id: "airbrush-makeup",
    num: "04",
    name: "Airbrush Makeup",
    tagline: "A weightless, seamless veil of micro-fine coverage that lasts from morning rites to the send-off.",
    includes: ["Airbrush Bridal Makeup", "Hairstyle", "Saree / Outfit Draping"],
    price: "₹20,000",
    priceNote: "based on event details",
    img: airbrushNew1,
    gallery: [airbrushNew1, airbrushNew2],
    alt: "Airbrush bridal makeup by Kishaley",
  },
];

/* ── Occasion / Other Services (Aligned with Portfolio) ── */
const otherServices = [
  {
    id: "muhurtham",
    name: "Muhurtham Makeup",
    desc: "Traditional silk saree, temple jewelry & timeless South Indian bridal grandeur designed for ritual mandap lighting and long-lasting wear.",
    img: dewyOne,
    link: "/portfolio#muhurtham",
  },
  {
    id: "reception",
    name: "Reception Makeup",
    desc: "Glamorous evening looks, rich lehengas & modern bridal elegance with high-definition 4K camera diffusion and dramatic eye artistry.",
    img: hd1,
    link: "/portfolio#reception",
  },
  {
    id: "engagement",
    name: "Engagement Makeup",
    desc: "Fresh, radiant skin prep and soft romantic tones with velvet glass-skin finish to complement pastel drapes or evening gown attire.",
    img: glass1,
    link: "/portfolio#engagement",
  },
  {
    id: "christian-wedding",
    name: "Christian Wedding",
    desc: "Ethereal, glowing white-gown makeup with delicate hair florals, veil draping & luminous flash-proof photography finish.",
    img: airbrushNew1,
    link: "/portfolio#christian-wedding",
  },
];

function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const scrollToService = (id: string) => {
    setSelectedServiceId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-ivory font-sans text-wine antialiased overflow-x-hidden">
      {/* ══ NAVBAR ══ */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-16 sm:h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <img src="/logo.png" alt="Kishaley Makeup Artist" className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 rounded-full object-contain mix-blend-screen" />
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
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-20 bg-champagne">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <SectionLabel>Our Services</SectionLabel>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-golddark tracking-tight">
            Bridal Artistry &amp; Signature Packages
          </h1>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-xs sm:text-base text-wine/75 leading-relaxed">
            Personalized bridal looks crafted by understanding skin type, texture, and preference.
            Every service includes complete Makeup, Hairstyle, and Saree Draping.
          </p>

          {/* Quick Option Filter Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {primaryServices.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToService(s.id)}
                className={`text-xs px-4 py-2 rounded-full border transition cursor-pointer ${
                  selectedServiceId === s.id
                    ? "bg-gold text-white border-gold font-bold shadow-md"
                    : "bg-white text-wine/75 border-charcoal3/30 hover:border-gold hover:text-golddark"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ══ 4 PRIMARY SERVICES ══ */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <SectionLabel>Signature Packages</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine">
              Explore Our Bridal Services
            </h2>
          </div>

          <div className="flex flex-col gap-16 sm:gap-24">
            {primaryServices.map((service, idx) => (
              <div
                id={service.id}
                key={service.name}
                className={`grid items-center gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-12 scroll-mt-28 p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                  selectedServiceId === service.id
                    ? "bg-charcoal2/90 border border-gold/40 shadow-2xl"
                    : "glass-card-light border border-gold/20"
                }`}
              >
                {/* Photo Side */}
                <div className={`lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  {service.gallery && service.gallery.length === 3 ? (
                    <div className="grid grid-cols-2 items-start gap-2 sm:gap-3 relative">
                      <div className="col-span-2 relative overflow-hidden rounded-2xl border border-gold/30 shadow-xl p-1 bg-charcoal3">
                        <img src={service.gallery[0]} alt={service.alt} loading="lazy" className="h-auto w-full rounded-xl object-contain" />
                      </div>
                      <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-xl p-1 bg-charcoal3">
                        <img src={service.gallery[1]} alt={service.alt} loading="lazy" className="h-auto w-full rounded-xl object-contain" />
                      </div>
                      <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-xl p-1 bg-charcoal3">
                        <img src={service.gallery[2]} alt={service.alt} loading="lazy" className="h-auto w-full rounded-xl object-contain" />
                      </div>
                    </div>
                  ) : service.gallery && service.gallery.length === 2 ? (
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 relative">
                      <div className="relative self-start overflow-hidden rounded-2xl border border-gold/30 shadow-xl p-1 bg-charcoal3">
                        <img src={service.gallery[0]} alt={service.alt} loading="lazy" className="h-auto w-full rounded-xl object-contain" />
                      </div>
                      <div className="self-start overflow-hidden rounded-2xl border border-gold/30 shadow-xl p-1 bg-charcoal3">
                        <img src={service.gallery[1]} alt={service.alt} loading="lazy" className="h-auto w-full rounded-xl object-contain" />
                      </div>
                    </div>
                  ) : service.img ? (
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 shadow-2xl bg-charcoal3 p-2">
                      <img
                        src={service.img}
                        alt={service.alt}
                        loading="lazy"
                        className="h-auto w-full rounded-xl sm:rounded-2xl object-contain"
                      />
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 shadow-2xl bg-charcoal2 p-2 aspect-[4/5] flex items-center justify-center">
                      <span className="text-gold/50 font-serif text-lg italic">Image Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="mt-1 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-wine">{service.name}</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-wine/75 leading-relaxed">{service.tagline}</p>

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
                      <p className="text-[10px] sm:text-xs font-medium text-wine/55">*{service.priceNote}</p>
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

      {/* ══ OCCASION SERVICES (Same as Portfolio) ══ */}
      <section className="py-16 sm:py-24 bg-charcoal2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center">
            <SectionLabel>Occasion Styling</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
              Services by Wedding Occasion
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm text-cream/75">
              Explore bespoke styling tailored specifically for each ceremony of your wedding festivities.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => (
              <a
                key={s.name}
                href={s.link}
                className="group flex flex-col p-6 sm:p-7 rounded-2xl sm:rounded-3xl glass-card-dark border border-gold/25 shadow-sm hover:border-gold hover:-translate-y-1 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gold font-serif text-lg">✦</span>
                </div>
                <h3 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-ivory group-hover:text-gold transition">
                  {s.name}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-cream/75 flex-1">
                  {s.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between text-xs font-bold text-gold">
                  <span>View in Portfolio →</span>
                  <span className="text-cream/50 group-hover:translate-x-1 transition">✦</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold">
            Reserve your wedding morning with Jayakala
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 max-w-lg text-cream/75 text-xs sm:text-sm leading-relaxed">
            Limited dates each wedding season. Bookings open months in advance — reach out today for availability.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="/#contact" className="btn-primary text-xs sm:text-sm py-2.5 px-5 sm:py-3 sm:px-7">
              Book an Appointment ✦
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline text-xs sm:text-sm py-2.5 px-5 sm:py-3 sm:px-7">
              WhatsApp Us
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
                <img src="/logo.png" alt="Kishaley" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain mix-blend-screen" />
                <span className="font-serif text-base sm:text-lg font-bold text-goldlight">Kishaley Makeup Artist</span>
              </div>
              <p className="text-xs leading-relaxed text-cream/60">Since 2014. 2000+ happy brides. Available all over India.</p>
            </div>
            <div>
              <p className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-widest text-gold/80">Quick Links</p>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-cream/70">
                 {[["/","Home"],["/#about","About"],["/services","Services"],["/portfolio","Portfolio"],["/academy","Academy"],["/journal","Journal"],["/#contact","Book Now"]].map(([h,l])=>(
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
                <p className="text-cream/60">Pondicherry — 605004</p>
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

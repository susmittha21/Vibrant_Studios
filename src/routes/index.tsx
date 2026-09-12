import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { ReactNode } from "react";

/* ── Clear authentic photos from studio PDF ── */
import aboutArtist from "@/assets/about-artist-new.jpg";
import dewyOne from "@/assets/dewy=1.jpeg";
import dewyService from "@/assets/dewy-service.jpg";
import glassTwo from "@/assets/glass-2.jpeg";
import pinkSareeHero from "@/assets/pink-saree-hero.jpg";
import homeHdLook from "@/assets/home-hd-look.png";
import homeAirbrushLook from "@/assets/home-airbrush-look.jpg";
import airbrush1 from "@/assets/airbrush-1.jpg";
import glass1 from "@/assets/glass-1.jpg";
import hd1 from "@/assets/hd-1.jpg";
import hd2 from "@/assets/hd-2.jpg";
import cosmeticsFlatlay from "@/assets/cosmetics-flatlay.jpg";

/* ─────────────────────────────── Route ─── */
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kishaley Makeup Artist — Bridal & Skin Finish Specialist, Pondicherry" },
      {
        name: "description",
        content:
          "Kishaley Makeup Artist by Jayakala. Pondicherry's trusted bridal makeup specialist since 2014 — Dewy Finish, HD, Glass Skin Signature & Airbrush. 2000+ brides. Call: +91 9894144977",
      },
      { property: "og:title", content: "Kishaley Makeup Artist — Pondicherry Bridal Makeup" },
      {
        property: "og:description",
        content:
          "Dewy Finish · HD · Glass Skin · Airbrush. Pondicherry based. 2000+ happy brides since 2014.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Kishaley Makeup Artist",
          description:
            "Bridal makeup specialist in Pondicherry by Jayakala — Dewy Finish, HD, Glass Skin, Airbrush.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pondicherry",
            postalCode: "605001",
            addressCountry: "IN",
          },
          telephone: "+919894144977",
          url: "https://www.instagram.com/kishaley_makeupartist",
        }),
      },
    ],
  }),
});

/* ── 4 Primary Services (Combined with Packages, Airbrush as #4) ── */
const primaryServices = [
  {
    id: "01",
    name: "Dewy Finish Look",
    tagline: "A radiant, luminous look that gives the appearance of a healthy, glowing complexion.",
    includes: ["Makeup", "Hairstyle", "Draping"],
    price: "₹8,000",
    priceNote: "per session",
    img: dewyOne,
    alt: "Dewy finish bridal makeup by Kishaley",
  },
  {
    id: "02",
    name: "High Definition Look",
    tagline: "HD makeup designed to enhance features and stand out flawlessly in photos & 4K videos.",
    includes: ["Makeup", "Hairstyle", "Draping"],
    price: "₹12,000",
    priceNote: "per session",
    img: homeHdLook,
    alt: "High definition bridal makeup by Kishaley",
  },
  {
    id: "03",
    name: "Glass Skin Signature",
    tagline: "Signature bridal look with a smooth, velvety finish that conceals blemishes naturally.",
    includes: ["Makeup", "Hairstyle", "Draping"],
    price: "₹15,000",
    priceNote: "per session",
    img: glassTwo,
    alt: "Glass skin signature bridal makeup by Kishaley",
  },
  {
    id: "04",
    name: "Airbrush Makeup",
    tagline: "Weightless, waterproof micro-fine coverage that lasts from morning rites to send-off.",
    includes: ["Makeup", "Hairstyle", "Draping"],
    price: "₹20,000",
    priceNote: "per session",
    img: homeAirbrushLook,
    alt: "Airbrush makeup by Kishaley",
  },
];

/* Occasion Services aligned with Portfolio */
const otherServices = [
  { name: "Muhurtham Makeup", desc: "Traditional silk saree, temple jewelry & timeless South Indian bridal look." },
  { name: "Reception Makeup", desc: "Glamorous evening lehenga & saree look with 4K camera diffusion." },
  { name: "Engagement Makeup", desc: "Radiant skin prep & romantic soft velvet glass-skin tones." },
  { name: "Christian Wedding", desc: "Ethereal white gown, veil draping & fresh luminous glow." },
];

/* Portfolio Categories & Looks */
const portfolioCategories = [
  { id: "wedding", label: "Wedding Looks" },
  { id: "party", label: "Party Looks" },
  { id: "other", label: "Other Looks" },
] as const;

type PortfolioCategory = (typeof portfolioCategories)[number]["id"];

const weddingPhotos = [
  {
    src: dewyService,
    alt: "Dewy finish bridal makeup by Kishaley",
    title: "Dewy Finish Look",
    tag: "Signature Wedding",
  },
  {
    src: homeHdLook,
    alt: "HD bridal makeup finish by Kishaley",
    title: "High Definition Bridal Look",
    tag: "Signature Wedding",
  },
  {
    src: glassTwo,
    alt: "Glass skin bridal look by Kishaley",
    title: "Glass Skin Signature Bride",
    tag: "Signature Wedding",
  },
  {
    src: homeAirbrushLook,
    alt: "Airbrush bridal makeup by Kishaley",
    title: "Airbrush Bridal Artistry",
    tag: "Signature Wedding",
  },
];

const partyPlaceholders = [
  { title: "Party Glam Makeup", tag: "Party Look", desc: "Photo slot reserved" },
  { title: "Reception Glamour", tag: "Party Look", desc: "Photo slot reserved" },
  { title: "Sangeet & Cocktail Night", tag: "Party Look", desc: "Photo slot reserved" },
  { title: "Soft Glam Evening Look", tag: "Party Look", desc: "Photo slot reserved" },
];

const otherPlaceholders = [
  { title: "Groom Styling & Prep", tag: "Other Look", desc: "Photo slot reserved" },
  { title: "Bridesmaid Coordinated Look", tag: "Other Look", desc: "Photo slot reserved" },
  { title: "Traditional Saree Draping", tag: "Other Look", desc: "Photo slot reserved" },
  { title: "Editorial & Event Look", tag: "Other Look", desc: "Photo slot reserved" },
];

const stats = [
  { value: "2000+", label: "Happy Clients" },
  { value: "12+", label: "Years on Set" },
  { value: "4.8 ★", label: "Google Rating" },
];

const ritual = [
  { step: "01", title: "Consultation", body: "We study your saree, jewellery, skin type and bridal mood-board months ahead." },
  { step: "02", title: "Trial Session", body: "A full rehearsal of base, eye and lip — refined until every detail is seamless." },
  { step: "03", title: "Skin Prep", body: "Hydration rituals on your wedding morning for a radiant glowing canvas." },
  { step: "04", title: "Composition", body: "Layered base, perfected lashes, fresh florals and pleat-perfect saree drape." },
  { step: "05", title: "Touch-Ups", body: "On-call refresh through the ceremony and into the reception." },
];

/* ── Constants ── */
const INSTAGRAM = "https://www.instagram.com/kishaley_makeupartist";
const WHATSAPP = "https://wa.me/919894144977";
const PHONE1 = "+91 98941 44977";
const PHONE2 = "+91 75989 17977";
const GOOGLE_MAPS = "https://www.google.com/maps/search/?api=1&query=Vibrant+Bridal+Studio+%26+Beauty+Care,+179,+100+Feet+Road,+Mudaliarpet,+Puducherry";
const GOOGLE_REVIEWS = "https://www.google.com/maps/search/?api=1&query=Vibrant+Bridal+Studio+%26+Beauty+Care,+179,+100+Feet+Road,+Mudaliarpet,+Puducherry";

/* ── Helpers ── */
function GoldDivider() {
  return (
    <div className="mx-auto flex max-w-5xl items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 text-gold" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold/70" />
      <span className="text-sm sm:text-base text-gold font-serif">✦</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold/70" />
    </div>
  );
}

function SectionLabelDark({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2.5 sm:mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-rose">
      {children}
    </p>
  );
}

function SectionLabelLight({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2.5 sm:mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-rosedark">
      {children}
    </p>
  );
}

/* ─────────────────────────────── Page ─── */
function Index() {
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("wedding");
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string; title: string; tag: string } | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-ivory font-sans text-wine antialiased overflow-x-hidden">

      {/* ══ NAVBAR (Warm Brown Glass) ══ */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-16 sm:h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <img
              src="/logo.png"
              alt="Kishaley Makeup Artist"
              className="h-10 w-10 rounded-full border border-[#c7a76b]/30 bg-white/80 object-contain p-1 shadow-sm transition group-hover:scale-105 sm:h-12 sm:w-12"
            />
            <span className="truncate font-serif text-lg sm:text-2xl font-bold tracking-tight text-wine">
              Kishaley Makeup Artist
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:gap-8 text-sm font-medium text-wine/75 md:flex">
            {[
              ["/", "Home"],
              ["/#about", "About"],
              ["/services", "Services"],
              ["/portfolio", "Portfolio"],
              ["/academy", "Academy"],
              ["/journal", "Journal"],
              ["/#contact", "Contact"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-gold font-medium whitespace-nowrap">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/#contact" className="hidden btn-primary text-xs sm:inline-flex whitespace-nowrap">
              Book Now
            </a>
            <button
              aria-label="Toggle menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg p-2 md:hidden hover:bg-white/5 active:bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block h-0.5 w-6 bg-wine transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-wine transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-wine transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-gold/15 bg-charcoal/98 px-5 py-5 md:hidden shadow-2xl animate-fade-in">
            <ul className="flex flex-col gap-3.5 text-base font-medium text-cream/90">
              {[
                ["/", "Home"],
                ["/#about", "About"],
                ["/services", "Services"],
                ["/portfolio", "Portfolio"],
                ["/academy", "Academy"],
                ["/journal", "Journal"],
                ["/#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} onClick={() => setMenuOpen(false)} className="block py-1 hover:text-gold active:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-gold/15">
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full text-center text-xs py-2.5">
                Book an Appointment ✦
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* ══ HERO BANNER SECTION (Pink Saree Hero Backdrop) ══ */}
      <section className="relative flex flex-col items-start justify-end overflow-hidden bg-charcoal pt-32 pb-10 sm:pt-40 sm:pb-16 min-h-[75vh] sm:min-h-[85vh]">
        {/* Background Image Container — Visible on all devices */}
        <div className="absolute inset-0 z-0">
          <img
            src={pinkSareeHero}
            alt="Jayakala Bridal Makeup - Vibrant Bridal Studio"
            className="h-full w-full object-cover object-[center_15%] sm:object-[70%_center] opacity-90 brightness-105"
          />
          {/* Gradients to darken the left side and bottom for left-aligned text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
        </div>

        {/* Left-Aligned Hero Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start justify-end px-4 sm:px-6 text-left mt-auto">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <span className="h-px w-8 sm:w-12 bg-gold"></span>
            <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-goldlight">
              Pondicherry · Since 2014
            </p>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-ivory tracking-tight max-w-3xl">
            Kishaley Makeup Artist
          </h1>

          <p className="mt-4 sm:mt-6 text-lg sm:text-2xl md:text-3xl font-serif text-gold font-semibold tracking-wide">
            Vibrant Bridal Studio
          </p>

          <p className="mt-2 text-base sm:text-xl md:text-2xl font-serif text-goldlight font-semibold tracking-wide">
            Bridal &amp; Skin Finish Makeup Specialist
          </p>

          <p className="mt-4 max-w-xl text-sm sm:text-base text-cream/90 leading-relaxed">
            Dewy Finish, High Definition, Glass Skin Signature &amp; Airbrush artistry with
            couture hairstyling and precision saree draping — by Jayakala.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
            <a href="#contact" className="btn-primary text-xs sm:text-sm py-3.5 px-8 sm:px-10 shadow-xl text-center">
              Reserve Your Date &rarr;
            </a>
            <a href="#services" className="btn-outline text-xs sm:text-sm py-3.5 px-8 sm:px-10 text-center">
              Explore Services
            </a>
          </div>

          <div className="mt-12 sm:mt-16 flex flex-wrap gap-8 sm:gap-12 border-t border-gold/25 pt-6 sm:pt-8 max-w-2xl w-full">
            {stats.map((s) => (
              <div key={s.label} className="text-left">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-gold">{s.value}</p>
                <p className="mt-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-cream/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-gold/70">
          <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
          <span className="animate-bounce text-sm">↓</span>
        </div>
      </section>

      {/* ══ SECTION 2: ABOUT US (Light Ivory / White Backdrop) ══ */}
      <section id="about" className="py-16 sm:py-24 bg-ivory text-wine">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-12">
            {/* Image of Artist Jayakala from PDF */}
            <div className="relative lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gold/30 shadow-xl bg-white p-2">
                <img
                  src={aboutArtist}
                  alt="Jayakala — Kishaley Makeup Artist applying bridal makeup"
                  loading="lazy"
                  className="w-full rounded-xl sm:rounded-2xl object-cover shadow-xs"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 rounded-xl sm:rounded-2xl glass-card-light px-4 py-2 sm:px-5 sm:py-3 text-center border border-gold/40 shadow-lg">
                <p className="font-serif text-xl sm:text-2xl font-bold text-wine">2014</p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-golddark">Working Since</p>
              </div>
            </div>

            {/* Content from PDF */}
            <div className="lg:col-span-7">
              <SectionLabelLight>About Us</SectionLabelLight>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-wine">
                Hello, I'm <span className="shimmer-dark">Jayakala</span>
              </h2>

              <p className="mt-4 sm:mt-6 text-wine/85 leading-relaxed text-sm sm:text-base">
                I am Jayakala, founder of Kishaley Makeup Artistry. Working since 2014, I have dolled-up
                2000+ clients. I am a Pondicherry-based makeup artist and believe that every bride deserves
                to have makeup that matches her vision of the perfect bridal look and personalizes each look
                using my expert skills and a mix of conventional as well as new age techniques including airbrushing.
              </p>
              <p className="mt-3 sm:mt-4 text-wine/85 leading-relaxed text-sm sm:text-base">
                Every look by me is crafted by understanding her client's skin type, texture and preference
                and creates a look that is seamless &amp; best suited.
              </p>

              <ul className="mt-6 sm:mt-7 flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm">
                {[
                  "Certified professional makeup artist with 12+ years experience",
                  "Specialist in Dewy Finish, HD, Glass Skin Signature & Airbrush",
                  "Personalized looks tailored to your skin type & bridal outfit",
                  "Operating from our exclusive studio in Pondicherry",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 sm:gap-3 text-wine/90 font-medium">
                    <span className="mt-0.5 text-golddark font-bold text-sm sm:text-base shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn-outline-dark text-xs py-2.5 px-5 sm:py-3 sm:px-6">
                  ◎ @kishaley_makeupartist
                </a>
                <a href="#contact" className="btn-wine text-xs py-2.5 px-5 sm:py-3 sm:px-6">
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: SERVICES (Warm Brown Backdrop) ══ */}
      <section id="services" className="py-16 sm:py-24 bg-champagne text-wine">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center">
            <SectionLabelDark>Our Services &amp; Packages</SectionLabelDark>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine">
              Look Your Best On Your Special Day
            </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm text-wine/70 leading-relaxed">
              Every bridal service includes professional Makeup, Hairstyle &amp; Saree Draping tailored to your features and wedding attire.
            </p>
          </div>

          {/* 4 Primary Services Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {primaryServices.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl glass-card-light transition-all duration-300 hover:border-gold hover:-translate-y-1 shadow-md"
              >
                {/* Photo */}
                <a href={`/portfolio#${service.name === "Dewy Finish Look" ? "muhurtham" : service.name === "High Definition Look" ? "reception" : service.name === "Glass Skin Signature" ? "engagement" : "christian-wedding"}`} className="block overflow-hidden bg-charcoal3">
                  <img
                    src={service.img}
                    alt={`${service.alt} - View in portfolio`}
                    loading="lazy"
                    className="h-auto w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </a>
                {/* Details */}
                <div className="flex flex-1 flex-col p-5 sm:p-6 min-h-[14rem]">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-wine min-h-[3.5rem]">{service.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-wine/70 flex-1">{service.tagline}</p>

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {service.includes.map((i) => (
                      <span key={i} className="rounded-full bg-gold/15 border border-gold/35 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-gold">
                        {i}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-5 sm:pt-6 border-t border-gold/20 flex items-center justify-between">
                    <div>
                      <p className="font-serif text-xl sm:text-2xl font-bold text-gold">{service.price}</p>
                      <p className="text-[10px] font-medium text-wine/60">*{service.priceNote}</p>
                    </div>
                    <a href="#contact" className="btn-primary text-xs py-2 px-3.5 sm:px-4">
                      Book
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Additional Services Strip (Occasion Services) */}
          <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl border border-gold/25 bg-white p-6 sm:p-8 shadow-sm">
            <p className="mb-5 sm:mb-6 text-center text-xs font-bold uppercase tracking-widest text-gold/80">
              Services by Occasion
            </p>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((s) => (
                <a key={s.name} href={`/portfolio#${s.name === "Muhurtham Makeup" ? "muhurtham" : s.name === "Reception Makeup" ? "reception" : s.name === "Engagement Makeup" ? "engagement" : "christian-wedding"}`} className="rounded-xl sm:rounded-2xl bg-charcoal/70 p-4 sm:p-5 border border-gold/20 shadow-xs hover:border-gold transition">
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-goldlight">{s.name}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-cream/75">{s.desc}</p>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="/services" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gold hover:underline transition">
                View Full Services Menu &amp; Packages →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: BRIDAL RITUAL & COSMETICS (Light Ivory Backdrop) ══ */}
      <section className="py-16 sm:py-24 bg-ivory text-wine">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center">
            <SectionLabelLight>The Bridal Ritual</SectionLabelLight>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine">
              From Consultation to Your Perfect Morning
            </h2>
          </div>

          {/* Luxury Cosmetics Flatlay Image Banner */}
          <div className="mb-10 sm:mb-16 overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gold/30 shadow-xl max-w-4xl mx-auto h-52 sm:h-72 md:h-80 bg-white">
            <img
              src={cosmeticsFlatlay}
              alt="Bridal cosmetics flatlay and beauty palette with rose petals"
              className="w-full h-full object-cover object-[center_18%]"
            />
          </div>

          {/* 5-Step Timeline Cards */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {ritual.map((r) => (
              <div key={r.step} className="flex flex-col rounded-xl sm:rounded-2xl glass-card-light p-5 sm:p-6 border border-gold/30 shadow-sm hover:border-gold transition">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-golddark">{r.step}</span>
                <h3 className="mt-1.5 font-serif text-lg sm:text-xl font-bold text-wine">{r.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-wine/80">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: PORTFOLIO (Options for Bridal Transformations) ══ */}
      <section id="portfolio" className="py-16 sm:py-24 bg-white text-wine">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
            <SectionLabelDark>The Portfolio</SectionLabelDark>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine">
              Signature Looks by Occasion
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-wine/70">
              Select an option below to explore our bridal transformations, or visit our dedicated Portfolio page.
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Muhurtham Makeup", desc: "Silk saree & temple jewelry bridal look", id: "muhurtham" },
              { title: "Reception Makeup", desc: "Glamorous evening lehenga & saree look", id: "reception" },
              { title: "Engagement Makeup", desc: "Radiant skin prep & romantic soft glam", id: "engagement" },
              { title: "Christian Wedding", desc: "Ethereal white gown & veil bridal look", id: "christian-wedding" },
            ].map((opt) => (
              <a
                key={opt.title}
                href={`/portfolio#${opt.id}`}
                className="group flex flex-col p-6 sm:p-7 rounded-2xl sm:rounded-3xl glass-card-light border border-gold/25 hover:border-gold hover:-translate-y-1 transition duration-300 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gold font-serif text-base">✦</span>
                </div>
                <h3 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-wine group-hover:text-golddark transition">
                  {opt.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-wine/70 leading-relaxed flex-1">
                  {opt.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between text-xs font-bold text-gold">
                  <span>View Category →</span>
                  <span className="text-wine/50 group-hover:translate-x-1 transition">✦</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <a href="/portfolio" className="btn-primary text-xs sm:text-sm py-3 px-8 inline-flex items-center gap-2">
              Explore Full Portfolio Page ✦
            </a>
          </div>

          {/* Modal Lightbox for viewing photos */}
          {selectedPhoto && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fade-in"
              onClick={() => setSelectedPhoto(null)}
            >
              <div
                className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute -top-12 right-0 text-white/80 hover:text-white text-2xl font-bold bg-white/10 w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-white/20 cursor-pointer"
                  aria-label="Close photo preview"
                >
                  ✕
                </button>
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-gold/30"
                />
                <div className="mt-3 text-center">
                  <p className="font-serif text-lg text-ivory font-semibold">{selectedPhoto.title}</p>
                  <p className="text-xs text-gold/80">{selectedPhoto.tag}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ SECTION: GOOGLE REVIEWS & MAP ══ */}
      <section className="py-16 sm:py-24 bg-champagne text-wine">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center">
            <SectionLabelDark>Client Love &amp; Location</SectionLabelDark>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-wine">
              Visit Our Studio
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
            {/* Map */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 shadow-xl bg-white flex flex-col justify-between">
              <div className="relative h-[320px] sm:h-[360px] lg:h-[380px] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=Vibrant+Bridal+Studio+%26+Beauty+Care,+100+Feet+Road,+Mudaliarpet,+Puducherry&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Floating Open in Google Maps button on map */}
                <a
                  href={GOOGLE_MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-charcoal/95 px-3.5 py-1.5 text-xs font-semibold text-gold border border-gold/40 shadow-lg backdrop-blur-sm transition hover:bg-gold hover:text-charcoal hover:scale-105"
                >
                  <span>Open in Maps</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              {/* Clickable bottom bar for map */}
              <a
                href={GOOGLE_MAPS}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 sm:p-4 bg-white border-t border-gold/20 text-wine/90 hover:text-golddark transition group"
              >
                <span className="text-xs sm:text-sm font-medium">179, 100 Feet Road, Mudaliarpet, Pondicherry</span>
                <span className="text-xs font-semibold text-gold group-hover:underline flex items-center gap-1">Directions ↗</span>
              </a>
            </div>

            {/* Reviews */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <a
                href={GOOGLE_REVIEWS}
                target="_blank"
                rel="noreferrer"
                  className="flex items-center gap-4 bg-white p-5 sm:p-6 rounded-2xl border border-gold/20 shadow-md hover:border-gold transition group cursor-pointer"
              >
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gold shrink-0 transition group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-wine">4.8 / 5.0</p>
                  <p className="text-xs sm:text-sm text-wine/70">Based on 138 Google Reviews</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
                  </div>
                </div>
                <span className="ml-auto btn-outline text-[10px] sm:text-xs px-3 py-2 sm:px-4 sm:py-2.5 shrink-0 group-hover:bg-gold group-hover:text-charcoal transition inline-flex items-center gap-1">
                  Read All ↗
                </span>
              </a>

              <a
                href={GOOGLE_REVIEWS}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-5 sm:p-6 rounded-2xl border border-gold/20 shadow-md hover:border-gold/50 transition block cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 bg-gold/20 rounded-full flex items-center justify-center font-bold text-gold">S</div>
                  <div>
                    <p className="font-bold text-wine text-sm">Swetha R.</p>
                    <p className="text-xs text-gold">★★★★★</p>
                  </div>
                  <span className="ml-auto text-[10px] text-gold/70 group-hover:text-gold font-semibold transition">Google Review ↗</span>
                </div>
                <p className="text-xs sm:text-sm text-wine/75 italic leading-relaxed">"Jayakala did an amazing job for my wedding. The glass skin look was flawless and lasted all day. Highly recommend her studio!"</p>
              </a>

              <a
                href={GOOGLE_REVIEWS}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-5 sm:p-6 rounded-2xl border border-gold/20 shadow-md hover:border-gold/50 transition block cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 bg-gold/20 rounded-full flex items-center justify-center font-bold text-gold">A</div>
                  <div>
                    <p className="font-bold text-wine text-sm">Ananya K.</p>
                    <p className="text-xs text-gold">★★★★★</p>
                  </div>
                  <span className="ml-auto text-[10px] text-gold/70 group-hover:text-gold font-semibold transition">Google Review ↗</span>
                </div>
                <p className="text-xs sm:text-sm text-wine/75 italic leading-relaxed">"Absolutely loved my reception makeup! The airbrush finish was so natural and lightweight. The studio ambiance is also wonderful."</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: CONTACT & BOOKING (Light Ivory Backdrop) ══ */}
      <section id="contact" className="py-16 sm:py-24 bg-ivory text-wine">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl glass-card-light border border-gold/35 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Info */}
              <div className="p-6 sm:p-10 md:p-12 lg:p-14 bg-gradient-to-br from-champagne/70 to-ivory flex flex-col justify-between">
                <div>
                  <SectionLabelLight>Reserve Your Date</SectionLabelLight>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-wine">
                    Let us plan your <span className="shimmer-dark">glow</span>
                  </h2>
                  <p className="mt-4 sm:mt-5 max-w-[38ch] text-wine/80 leading-relaxed text-xs sm:text-sm">
                    Tell us your wedding date and we'll reserve your artist.
                    Bookings open months ahead — early dates fill fast.
                  </p>

                  <div className="mt-6 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
                    <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-wine hover:text-golddark transition">
                      <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold/20 text-wine shrink-0">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                      </span>
                      <span className="truncate">@kishaley_makeupartist</span>
                    </a>
                    <a href={`tel:${PHONE1.replace(/\s/g, "")}`} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-wine hover:text-golddark transition">
                      <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold/20 text-wine shrink-0">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      </span>
                      <span>{PHONE1}</span>
                    </a>
                    <a href={`tel:${PHONE2.replace(/\s/g, "")}`} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-wine hover:text-golddark transition">
                      <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold/20 text-wine shrink-0">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      </span>
                      <span>{PHONE2}</span>
                    </a>
                    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-wine hover:text-golddark transition">
                      <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold/20 text-wine shrink-0">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                      </span>
                      <span>WhatsApp Us Directly</span>
                    </a>
                  </div>
                </div>

                <p className="mt-6 sm:mt-8 text-[11px] sm:text-xs text-wine/65">
                  Pondicherry — 605004
                </p>
              </div>

              {/* Right Form */}
              <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-14">
                {sent ? (
                  <div className="flex h-full flex-col items-center justify-center text-center gap-3 sm:gap-4 py-8">
                    <span className="font-serif text-4xl sm:text-5xl text-golddark">✦</span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-wine">Thank You!</h3>
                    <p className="text-wine/75 text-xs sm:text-sm max-w-xs leading-relaxed">
                      Your enquiry is with us — we'll reach out within 24 hours to discuss and confirm your bridal package.
                    </p>
                  </div>
                ) : (
                  <form className="flex flex-col gap-4 sm:gap-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-wine mb-0.5">Send an Enquiry</h3>

                    {[
                      { id: "name", label: "Your Name", type: "text", placeholder: "Bride's name" },
                      { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                      { id: "date", label: "Wedding Date", type: "text", placeholder: "e.g. 14 Feb 2026" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={f.id} className="mb-1 block text-[11px] font-bold tracking-widest text-wine/70 uppercase">{f.label}</label>
                        <input
                          id={f.id}
                          type={f.type}
                          required
                          placeholder={f.placeholder}
                          className="w-full rounded-xl bg-ivory/60 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-wine border border-gold/30 outline-none placeholder:text-wine/40 focus:border-wine focus:ring-1 focus:ring-wine transition"
                        />
                      </div>
                    ))}

                    <div>
                      <label htmlFor="service" className="mb-1 block text-[11px] font-bold tracking-widest text-wine/70 uppercase">Preferred Service</label>
                      <select id="service" className="w-full rounded-xl bg-ivory/60 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-wine border border-gold/30 outline-none focus:border-wine focus:ring-1 focus:ring-wine transition">
                        <option value="">Select a service…</option>
                        {primaryServices.map((p) => (
                          <option key={p.id} value={p.name}>{p.name} — {p.price}</option>
                        ))}
                        {otherServices.map((s) => (
                          <option key={s.name} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="btn-wine mt-2 py-3 text-xs sm:text-sm">
                      Send Enquiry ✦
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER (Warm Brown Backdrop) ══ */}
      <footer className="border-t border-gold/15 bg-charcoal2 text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <img src="/logo.png" alt="Kishaley" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain mix-blend-screen" />
                <span className="font-serif text-base sm:text-lg font-bold text-goldlight">Kishaley Makeup Artist</span>
              </div>
              <p className="text-xs leading-relaxed text-cream/60">
                Pondicherry-based bridal makeup artist. Working since 2014 — 2000+ happy clients.
              </p>
            </div>

            <div>
              <p className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-widest text-gold/80">Quick Links</p>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-cream/75">
                {[
                  ["/", "Home"],
                  ["/#about", "About"],
                  ["/services", "Services"],
                  ["/portfolio", "Portfolio"],
                  ["/academy", "Academy"],
                  ["/journal", "Journal"],
                  ["/#contact", "Book Now"],
                ].map(([href, label]) => (
                  <li key={href}><a href={href} className="hover:text-gold transition font-medium">{label}</a></li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <p className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-widest text-gold/80">Get In Touch</p>
              <div className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-cream/75">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-gold transition font-semibold">@kishaley_makeupartist</a>
                <a href={`tel:${PHONE1.replace(/\s/g, "")}`} className="hover:text-gold transition font-medium">{PHONE1}</a>
                <a href={`tel:${PHONE2.replace(/\s/g, "")}`} className="hover:text-gold transition font-medium">{PHONE2}</a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-gold transition font-medium">WhatsApp 24/7</a>
                <p className="mt-1 text-cream/60">Pondicherry — 605004</p>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 border-t border-gold/10 pt-6 sm:pt-8 text-center text-[11px] sm:text-xs text-cream/40">
            <p>© 2026 Kishaley Makeup Artist. Crafted with care in Pondicherry · India</p>
          </div>
        </div>
      </footer>

      {/* ══ FLOATING ACTIONS (Mobile & Desktop Responsive) ══ */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2 sm:gap-3">
        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/90 text-wine shadow-lg border border-gold/30 hover:scale-110 transition active:scale-95"
        >
          <span className="text-xs sm:text-sm font-bold">↑</span>
        </button>

        {/* Call Button */}
        <a
          href={`tel:${PHONE1.replace(/\s/g, "")}`}
          aria-label="Call Now"
          className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-charcoal text-gold shadow-lg border border-gold/40 hover:scale-110 transition active:scale-95"
        >
          <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        </a>

        {/* WhatsApp Button */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          style={{ animation: "pulse-soft 2.5s infinite" }}
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gold text-wine shadow-2xl transition hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
        </a>
      </div>
    </div>
  );
}

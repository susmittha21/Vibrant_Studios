import { createFileRoute } from "@tanstack/react-router";

import academy1 from "@/assets/academy1.jpeg";
import academy2 from "@/assets/academy2.png";
import academy3 from "@/assets/academy3.jpeg";

export const Route = createFileRoute("/academy")({
  component: AcademyPage,
  head: () => ({
    meta: [
      { title: "Academy — Kishaley Makeup Artist, Pondicherry" },
      {
        name: "description",
        content: "15 days makeup master class and beautician classes also taken by Kishaley Makeup Artist.",
      },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
  }),
});

const navItems = [
  ["/", "Home"],
  ["/#about", "About"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio"],
  ["/academy", "Academy"],
  ["/journal", "Journal"],
  ["/#contact", "Contact"],
];

const INSTAGRAM = "https://www.instagram.com/kishaley_makeupartist";
const WHATSAPP = "https://wa.me/919894144977";
const PHONE1 = "+91 98941 44977";
const PHONE2 = "+91 75989 17977";

function AcademyPage() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-wine antialiased overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-16 sm:h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <img src="/logo.png" alt="Kishaley Makeup Artist" className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 rounded-full object-contain mix-blend-screen" />
            <span className="truncate font-serif text-lg sm:text-2xl font-bold tracking-tight text-wine">Kishaley Makeup Artist</span>
          </a>
          <nav className="hidden items-center gap-5 lg:gap-7 text-sm font-medium text-wine/75 md:flex">
            {navItems.map(([href, label]) => (
              <a key={href} href={href} className={`transition-colors hover:text-golddark whitespace-nowrap ${href === "/academy" ? "font-bold text-golddark" : ""}`}>
                {label}
              </a>
            ))}
          </nav>
          <a href="/#contact" className="btn-primary hidden text-xs sm:inline-flex whitespace-nowrap">Book Now</a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-champagne pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-rose">Kishaley Academy</p>
              <h1 className="max-w-xl font-serif text-5xl font-bold leading-[0.95] tracking-tight text-wine sm:text-7xl">
                Learn the art of <span className="shimmer-dark">makeup</span>
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-wine/75 sm:text-base">
                Build your beauty career with practical, professional training from a working bridal makeup artist.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#courses" className="btn-primary text-xs sm:text-sm">View Courses</a>
                <a href="/#contact" className="btn-outline-dark text-xs sm:text-sm">Enquire Now</a>
              </div>
            </div>
            <div className="relative lg:col-span-6">
              <div className="absolute -inset-4 rounded-[2rem] border border-gold/30 bg-white/60 rotate-3" />
              <div className="relative flex h-[22rem] w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-charcoal3 shadow-2xl sm:h-[30rem]">
                <img src={academy1} alt="Makeup academy training" className="h-full w-full object-contain" />
              </div>
              <div className="absolute -bottom-5 -left-3 rounded-2xl bg-charcoal2 px-5 py-4 text-white shadow-xl sm:-left-6">
                <p className="font-serif text-2xl font-bold text-gold">15 days</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Master class</p>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="relative bg-ivory py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-rose">Courses &amp; Training</p>
              <h2 className="font-serif text-4xl font-bold text-wine sm:text-5xl">Shape your signature</h2>
              <p className="mt-4 text-sm leading-relaxed text-wine/70">Focused education for aspiring artists and beauty professionals.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="group overflow-hidden rounded-3xl border border-gold/30 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="grid sm:grid-cols-2">
                  <div className="flex min-h-64 items-center justify-center bg-charcoal3 p-3 sm:min-h-full">
                    <img src={academy2} alt="15 days makeup master class" className="max-h-80 w-full object-contain" />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <h3 className="font-serif text-2xl font-bold text-wine">15 days makeup master class</h3>
                    <p className="mt-3 text-sm leading-relaxed text-wine/70">Learn professional makeup techniques through guided, hands-on practice.</p>
                    <a href="/#contact" className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-golddark hover:text-gold">Enquire about the class →</a>
                  </div>
                </div>
              </article>

              <article className="group overflow-hidden rounded-3xl border border-charcoal3/30 bg-charcoal2 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="grid sm:grid-cols-2">
                  <div className="flex min-h-64 items-center justify-center bg-charcoal3 p-3 sm:min-h-full">
                    <img src={academy3} alt="Beautician classes" className="max-h-80 w-full object-contain" />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <h3 className="font-serif text-2xl font-bold text-white">Beautician classes also taken</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">Practical beauty training for students who want to grow their professional skills.</p>
                    <a href="/#contact" className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold hover:text-goldlight">Enquire about the class →</a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-gold/15 bg-charcoal2 text-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-3 sm:mb-4">
                <img src="/logo.png" alt="Kishaley" className="h-10 w-10 rounded-full object-contain mix-blend-screen sm:h-12 sm:w-12" />
                <span className="font-serif text-base font-bold text-goldlight sm:text-lg">Kishaley Makeup Artist</span>
              </div>
              <p className="text-xs leading-relaxed text-cream/60">Since 2014. 2000+ happy brides. Studio in Pondicherry.</p>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold/80 sm:mb-4">Quick Links</p>
              <ul className="flex flex-col gap-2 text-xs text-cream/75 sm:text-sm">
                {navItems.slice(0, 6).map(([href, label]) => (
                  <li key={href}><a href={href} className="font-medium transition hover:text-gold">{label}</a></li>
                ))}
                <li><a href="/#contact" className="font-medium transition hover:text-gold">Book Now</a></li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold/80 sm:mb-4">Get In Touch</p>
              <div className="flex flex-col gap-2.5 text-xs text-cream/75 sm:gap-3 sm:text-sm">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="font-semibold transition hover:text-gold">@kishaley_makeupartist</a>
                <a href={`tel:${PHONE1.replace(/\s/g, "")}`} className="font-medium transition hover:text-gold">{PHONE1}</a>
                <a href={`tel:${PHONE2.replace(/\s/g, "")}`} className="font-medium transition hover:text-gold">{PHONE2}</a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-medium transition hover:text-gold">WhatsApp 24/7</a>
                <p className="text-cream/60">Pondicherry — 605004</p>
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

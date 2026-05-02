const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Google Maps",
    href: "https://maps.google.com/?q=Kapucinska+12+Osijek",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="container-x py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-start">
          {/* Logo + tagline */}
          <div>
            <a href="#pocetak" className="font-serif text-2xl tracking-tight">
              Studio <span className="text-gold italic">Roko</span>
            </a>
            <p className="mt-4 text-sm text-cream/60 max-w-xs leading-relaxed">
              Frizerski salon u centru Osijeka. Premium iskustvo, posvećenost
              detalju i precizan rez svakog termina.
            </p>
          </div>

          {/* Copyright + credit */}
          <div className="lg:px-4">
            <div className="text-[10px] uppercase tracking-eyebrow text-muted">
              Studio
            </div>
            <p className="mt-3 text-sm text-cream/70">
              © {new Date().getFullYear()} Studio Roko. Sva prava pridržana.
            </p>
            <p className="mt-2 text-sm text-cream/60">
              Web izradio Ivan —{" "}
              <a
                href="https://ivandevelops.com"
                target="_blank"
                rel="noreferrer"
                className="text-gold underline-offset-4 hover:underline"
              >
                ivansibalic.vercel.com
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="lg:justify-self-end">
            <div className="text-[10px] uppercase tracking-eyebrow text-muted">
              Pratite nas
            </div>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream/80 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5"
                >
                  <div className="h-[18px] w-[18px]">{s.icon}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
          <p className="text-xs text-cream/50">
            Kapucinska 12, 31000 Osijek · +385 91 234 5678
          </p>
          <p className="text-xs text-cream/40">Portfolio demo project</p>
        </div>
      </div>
    </footer>
  );
}

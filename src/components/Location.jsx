import { motion } from 'framer-motion'

const infoRows = [
  {
    label: 'Adresa',
    value: 'Kapucinska 12, 31000 Osijek',
    href: 'https://maps.google.com/?q=Kapucinska+12+Osijek',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Telefon',
    value: '+385 91 234 5678',
    href: 'tel:+385912345678',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Radno vrijeme',
    value: 'Pon–Sub · 8:00–20:00',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
]

function InfoRow({ icon, label, value, href }) {
  const inner = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold/10">
        <div className="h-4 w-4">{icon}</div>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-eyebrow text-muted">{label}</div>
        <div className="mt-0.5 text-base text-cream">{value}</div>
      </div>
    </>
  )
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group flex items-center gap-4">
      {inner}
    </a>
  ) : (
    <div className="group flex items-center gap-4">{inner}</div>
  )
}

export default function Location() {
  return (
    <section id="lokacija" className="relative bg-dark text-cream overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-gold/[0.05] blur-3xl" />

      <div className="container-x relative py-24 sm:py-28 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            Lokacija
          </p>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
            Pronađite <span className="italic text-gold">nas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
            style={{ aspectRatio: '4/3' }}
          >
            <iframe
              title="Studio Roko lokacija"
              src="https://maps.google.com/maps?q=Kapucinska+12,+31000+Osijek,+Croatia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(30%) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 lg:pt-4"
          >
            {infoRows.map((row) => (
              <InfoRow key={row.label} {...row} />
            ))}

            <div className="pt-4">
              <a
                href="https://maps.google.com/?q=Kapucinska+12+Osijek"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Otvori u Google Mapsu
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

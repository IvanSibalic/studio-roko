import { motion } from 'framer-motion'

const features = [
  {
    title: 'Premium iskustvo',
    desc: 'Pažljivo biran ambijent i materijali — od ulaska do zadnjeg pogleda u ogledalo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 14.39 8.26 21 9 16 13.74 17.18 20.5 12 17.27 6.82 20.5 8 13.74 3 9l6.61-.74L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Bez čekanja',
    desc: 'Online rezervacija — odaberite termin i uslugu u par sekundi.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Posvećeni vama',
    desc: 'Svaki termin počinje konzultacijom — vaš stil je polazna točka.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Centar Osijeka',
    desc: 'Nalazimo se u srcu grada — lako dostupan i parking u blizini.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

const heading = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhyUs() {
  return (
    <section className="relative bg-mid text-cream overflow-hidden">
      {/* subtle texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-gold/[0.05] blur-3xl" />

      <div className="container-x relative py-24 sm:py-28 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-2xl"
        >
          <motion.p variants={heading} className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            Zašto mi
          </motion.p>
          <motion.h2
            variants={heading}
            className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight"
          >
            Što nas čini <span className="italic text-gold">drugačijima</span>
          </motion.h2>
          <motion.p variants={heading} className="mt-5 text-base sm:text-lg text-cream/60 max-w-lg">
            Četiri jednostavne stvari koje pretvaraju posjet salonu u iskustvo na koje se rado vraćate.
          </motion.p>
        </motion.div>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/5 group-hover:scale-105">
                <div className="h-7 w-7">{f.icon}</div>
                <span className="absolute inset-0 rounded-full border border-gold/15 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
              </div>
              <h3 className="mt-6 font-serif text-xl sm:text-2xl text-cream">{f.title}</h3>
              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-cream/60 max-w-xs">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

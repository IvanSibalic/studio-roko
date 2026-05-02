import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
  { value: '8+', label: 'godina iskustva' },
  { value: '1200+', label: 'zadovoljnih klijenata' },
  { value: '4.9★', label: 'prosječna ocjena' },
]

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 560"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full text-gold"
      aria-hidden="true"
    >
      {/* Decorative concentric circles */}
      <circle cx="240" cy="280" r="220" strokeOpacity="0.08" />
      <circle cx="240" cy="280" r="180" strokeOpacity="0.16" />
      <circle cx="240" cy="280" r="140" strokeOpacity="0.28" strokeDasharray="2 6" />

      {/* Stylized profile silhouette */}
      <g strokeWidth="1.5">
        <path d="M195 165
                 C 180 150 178 125 192 108
                 C 208 90 240 88 256 108
                 C 268 122 270 142 268 160
                 L 268 215
                 C 268 232 280 240 290 248
                 C 300 256 296 272 282 274
                 L 268 276
                 L 268 305
                 C 268 325 252 340 232 340
                 L 218 340
                 L 218 365" />
        {/* nose hint */}
        <path d="M268 195 C 280 200 282 210 270 215" strokeOpacity="0.55" />
        {/* eye hint */}
        <path d="M236 175 L 250 175" strokeOpacity="0.7" />
        {/* lips hint */}
        <path d="M250 230 Q 260 234 268 232" strokeOpacity="0.5" />
        {/* jaw / neck shadow line */}
        <path d="M218 340 L 218 380 L 175 410" strokeOpacity="0.5" />
      </g>

      {/* Hair flow lines (gold) */}
      <g strokeOpacity="0.85">
        <path d="M192 110 Q 165 80 150 50" />
        <path d="M210 95 Q 195 65 188 35" />
        <path d="M232 88 Q 230 58 230 30" />
        <path d="M252 92 Q 268 62 280 38" />
        <path d="M268 110 Q 295 88 320 70" />
      </g>

      {/* Scissors */}
      <g transform="translate(345 295) rotate(-22)" strokeWidth="1.6">
        <circle cx="0" cy="-14" r="11" />
        <circle cx="0" cy="14" r="11" />
        <line x1="0" y1="-14" x2="0" y2="-14" />
        <path d="M9 -8 L 78 22" />
        <path d="M9 8 L 78 -22" />
        <circle cx="80" cy="0" r="2" fill="currentColor" />
      </g>

      {/* Combs / decorative tick marks */}
      <g strokeOpacity="0.55">
        <line x1="92" y1="200" x2="118" y2="200" />
        <line x1="92" y1="208" x2="118" y2="208" />
        <line x1="92" y1="216" x2="118" y2="216" />
        <line x1="100" y1="200" x2="100" y2="232" />
        <line x1="108" y1="200" x2="108" y2="232" />
        <line x1="116" y1="200" x2="116" y2="232" />
      </g>

      {/* Bottom flourish */}
      <g strokeOpacity="0.4">
        <path d="M120 470 Q 240 510 360 470" />
        <circle cx="240" cy="488" r="3" fill="currentColor" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="pocetak" className="relative bg-dark text-cream overflow-hidden">
      {/* Decorative background gradients */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-gold/[0.06] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-gold/[0.05] blur-3xl" />

      <div className="container-x relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 min-h-[calc(100vh-0px)] items-center">
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.p variants={item} className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            Frizerski salon · Osijek, Hrvatska
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-[44px] leading-[1.05] sm:text-6xl lg:text-[72px] lg:leading-[1.02] tracking-tight"
          >
            Gdje stil postaje{' '}
            <span className="italic text-gold">vaš potpis.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-lg text-base sm:text-lg text-cream/70 leading-relaxed"
          >
            U Studiju Roko spajamo zanat, posvećenost i pažnju za detalj.
            Svaki rez je razgovor — vaš stil, naša preciznost.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#rezervacija"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#rezervacija')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Rezerviraj termin
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a
              href="#usluge"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#usluge')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-outline"
            >
              Pogledaj usluge
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-3 gap-6 sm:gap-10 max-w-md border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-2xl sm:text-3xl text-cream">{s.value}</div>
                <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-eyebrow text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-[520px] mx-auto rounded-2xl border border-white/10 bg-gradient-to-br from-mid/60 to-dark p-6 sm:p-10">
            {/* corner ornaments */}
            <span className="absolute top-4 left-4 h-3 w-3 border-l border-t border-gold/50" />
            <span className="absolute top-4 right-4 h-3 w-3 border-r border-t border-gold/50" />
            <span className="absolute bottom-4 left-4 h-3 w-3 border-l border-b border-gold/50" />
            <span className="absolute bottom-4 right-4 h-3 w-3 border-r border-b border-gold/50" />

            <HeroIllustration />
          </div>

          {/* Working hours badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 flex items-center gap-3 rounded-full bg-cream text-dark px-5 py-3 shadow-xl shadow-black/30"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
            </span>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-eyebrow text-muted">Radno vrijeme</div>
              <div className="text-sm font-medium">Pon–Sub · 8:00–20:00</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

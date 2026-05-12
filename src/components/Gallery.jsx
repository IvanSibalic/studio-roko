import { motion } from 'framer-motion'

const ScissorsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-gold"
    aria-hidden="true"
  >
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
  </svg>
)

const placeholders = [
  'https://placehold.co/600x750/1A1612/B8965A?text=Naši+radovi',
  'https://placehold.co/600x750/2E2923/B8965A?text=Naši+radovi',
  'https://placehold.co/600x750/1A1612/B8965A?text=Naši+radovi',
  'https://placehold.co/600x750/2E2923/B8965A?text=Naši+radovi',
  'https://placehold.co/600x750/1A1612/B8965A?text=Naši+radovi',
  'https://placehold.co/600x750/2E2923/B8965A?text=Naši+radovi',
]

export default function Gallery() {
  return (
    <section id="radovi" className="relative bg-cream text-dark">
      <div className="container-x py-24 sm:py-28 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            Pogledajte rezultate
            <span className="h-px w-8 bg-gold/60" />
          </p>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
            Naši <span className="italic text-gold">radovi</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {placeholders.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-transparent transition-all duration-500 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10"
            >
              <img
                src={src}
                alt={`Rad ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* dark overlay with scissors */}
              <div className="absolute inset-0 bg-dark/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex flex-col items-center gap-2">
                  <ScissorsIcon />
                  <span className="text-[10px] uppercase tracking-eyebrow text-gold/80">Studio Roko</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Luka M.',
    text: 'Odličan fade, točno onako kako sam zamišljao. Definitivno se vraćam.',
    stars: 5,
  },
  {
    name: 'Ante B.',
    text: 'Profesionalan pristup i opuštena atmosfera. Najbolji salon u gradu.',
    stars: 5,
  },
  {
    name: 'Tomislav R.',
    text: 'Napokon salon koji razumije što hoćeš. Preporučujem svima.',
    stars: 5,
  },
]

export default function Reviews() {
  return (
    <section className="relative bg-dark text-cream overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-0 h-[420px] w-[420px] rounded-full bg-gold/[0.05] blur-3xl" />

      <div className="container-x relative py-24 sm:py-28 lg:py-32">
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
            Recenzije
            <span className="h-px w-8 bg-gold/60" />
          </p>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
            Što klijenti <span className="italic text-gold">kažu</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-gold/20 bg-mid p-8 sm:p-9"
            >
              {/* corner ornaments */}
              <span className="absolute top-4 left-4 h-2.5 w-2.5 border-l border-t border-gold/30" />
              <span className="absolute top-4 right-4 h-2.5 w-2.5 border-r border-t border-gold/30" />

              {/* Stars */}
              <div className="flex gap-1 text-gold" aria-label={`${r.stars} zvjezdica`}>
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} className="text-lg leading-none">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-cream/75 italic">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Name */}
              <p className="mt-6 font-serif text-lg text-cream">{r.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Google badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-mid px-5 py-2.5 text-sm text-cream/80">
            <span className="text-gold font-medium">4.9 ★</span>
            <span className="h-3.5 w-px bg-gold/30" />
            na Google recenzijama
          </div>
        </motion.div>
      </div>
    </section>
  )
}

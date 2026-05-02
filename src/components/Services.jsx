import { motion } from 'framer-motion'

const services = [
  {
    n: '01',
    name: 'Muški rez',
    desc: 'Klasičan ili moderan rez prilagođen obliku lica i stilu.',
    price: 'od 20€',
    duration: '45 min',
  },
  {
    n: '02',
    name: 'Rez i brada',
    desc: 'Kompletan tretman — precizan rez kose te oblikovanje brade.',
    price: 'od 28€',
    duration: '60 min',
  },
  {
    n: '03',
    name: 'Ženski rez',
    desc: 'Konzultacija, pranje, rez i styling po vašoj želji.',
    price: 'od 25€',
    duration: '60 min',
  },
  {
    n: '04',
    name: 'Bojanje kose',
    desc: 'Profesionalno bojanje uz njegu i savjet o nijansi.',
    price: 'od 45€',
    duration: '90 min',
  },
  {
    n: '05',
    name: 'Balayage',
    desc: 'Tehnika prirodnih prijelaza za sjajan, mekan rezultat.',
    price: 'od 80€',
    duration: '120 min',
  },
  {
    n: '06',
    name: 'Tretman kose',
    desc: 'Dubinska njega — hidratacija, obnova i sjaj kose.',
    price: 'od 35€',
    duration: '45 min',
  },
]

const heading = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="usluge" className="relative bg-cream text-dark">
      <div className="container-x py-24 sm:py-28 lg:py-36">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-2xl"
        >
          <motion.p variants={heading} className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            Što nudimo
          </motion.p>
          <motion.h2
            variants={heading}
            className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight"
          >
            Naše <span className="italic text-gold">usluge</span>
          </motion.h2>
          <motion.p variants={heading} className="mt-5 text-base sm:text-lg text-muted max-w-lg">
            Od klasičnog reza do balayage tehnike — svaka usluga dolazi sa istom posvećenošću detalju.
          </motion.p>
        </motion.div>

        {/* Grid with 1.5px separator borders */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-dark/10 border-[0.75px]">
          {services.map((s, i) => (
            <ServiceCard key={s.n} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ n, name, desc, price, duration, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: 0.05 * (index % 3), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.015 }}
      className="group relative border-r border-b border-dark/10 border-[0.75px] p-8 sm:p-10 cursor-default transition-colors duration-300 hover:bg-white/40"
    >
      <div className="flex items-start justify-between">
        <span className="font-serif text-xs tracking-eyebrow text-gold">{n}</span>
        <svg
          className="h-4 w-4 text-dark/30 transition-all duration-300 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      </div>

      <h3 className="mt-8 font-serif text-2xl sm:text-3xl tracking-tight">
        {name}
      </h3>

      <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-muted max-w-sm">
        {desc}
      </p>

      <div className="mt-10 flex items-baseline justify-between gap-4 pt-5 border-t border-dark/5">
        <div>
          <div className="text-[10px] uppercase tracking-eyebrow text-muted">Cijena</div>
          <div className="mt-1 font-serif text-xl text-dark">{price}</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-eyebrow text-muted">Trajanje</div>
          <div className="mt-1 font-serif text-xl text-dark">{duration}</div>
        </div>
      </div>

      {/* Gold bottom border reveal on hover */}
      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
    </motion.article>
  )
}

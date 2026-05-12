import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#radovi', label: 'Radovi' },
  { href: '#usluge', label: 'Usluge' },
  { href: '#rezervacija', label: 'Rezervacija' },
  { href: '#lokacija', label: 'Lokacija' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 sm:h-20 items-center justify-between">
        <a
          href="#pocetak"
          onClick={(e) => handleNav(e, '#pocetak')}
          className="font-serif text-xl sm:text-2xl tracking-tight text-dark"
        >
          Studio <span className="text-gold italic">Roko</span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="text-sm text-dark/80 hover:text-dark transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#rezervacija"
            onClick={(e) => handleNav(e, '#rezervacija')}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-dark px-5 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-mid hover:-translate-y-0.5 hover:shadow-lg hover:shadow-dark/20"
          >
            Rezerviraj termin
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </nav>

        <button
          aria-label={open ? 'Zatvori izbornik' : 'Otvori izbornik'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 text-dark"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute left-0 bottom-0 h-px w-5 bg-current transition-transform duration-300 ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-dark/5"
          >
            <div className="container-x py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className="font-serif text-2xl text-dark"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#rezervacija"
                onClick={(e) => handleNav(e, '#rezervacija')}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-dark px-5 py-3 text-sm font-medium text-cream"
              >
                Rezerviraj termin
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

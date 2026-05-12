import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  { value: 'muski-rez', label: 'Muški rez — od 20€' },
  { value: 'rez-i-brada', label: 'Rez i brada — od 28€' },
  { value: 'zenski-rez', label: 'Ženski rez — od 25€' },
  { value: 'bojanje', label: 'Bojanje kose — od 45€' },
  { value: 'balayage', label: 'Balayage — od 80€' },
  { value: 'tretman', label: 'Tretman kose — od 35€' },
]

const contactRows = [
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

const initialForm = { ime: '', telefon: '', datum: '', usluga: '' }

export default function Booking() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.ime.trim()) e.ime = 'Unesite ime i prezime'
    if (!form.telefon.trim()) e.telefon = 'Unesite broj telefona'
    if (!form.datum) e.datum = 'Odaberite datum'
    if (!form.usluga) e.usluga = 'Odaberite uslugu'
    return e
  }

  const submit = (e) => {
    e.preventDefault()
    const eMap = validate()
    if (Object.keys(eMap).length) {
      setErrors(eMap)
      return
    }
    const serviceLabel =
      services.find((s) => s.value === form.usluga)?.label ?? form.usluga
    const text = `Pozdrav, želio bih rezervirati termin.\nIme: ${form.ime}\nUsluga: ${serviceLabel}\nDatum: ${form.datum}`
    const url = `https://wa.me/385912345678?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setForm(initialForm)
    setErrors({})
  }

  return (
    <section id="rezervacija" className="relative bg-cream text-dark">
      <div className="container-x py-24 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT — info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              Rezervacija
            </p>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
              Zakažite{' '}
              <span className="italic text-gold">svoj termin</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted max-w-md">
              Pošaljite upit ispunjavanjem forme ili nas kontaktirajte direktno —
              javljamo se u roku od 24 sata.
            </p>

            <div id="kontakt" className="mt-12 space-y-6 max-w-md">
              {contactRows.map((c) => (
                <ContactRow key={c.label} {...c} />
              ))}
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-dark text-cream p-7 sm:p-10 shadow-2xl shadow-dark/20 overflow-hidden">
              {/* corner ornaments */}
              <span className="absolute top-4 left-4 h-3 w-3 border-l border-t border-gold/40" />
              <span className="absolute top-4 right-4 h-3 w-3 border-r border-t border-gold/40" />
              <span className="absolute bottom-4 left-4 h-3 w-3 border-l border-b border-gold/40" />
              <span className="absolute bottom-4 right-4 h-3 w-3 border-r border-b border-gold/40" />

              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onSubmit={submit}
                noValidate
              >
                <div className="text-[10px] uppercase tracking-eyebrow text-gold">Forma za rezervaciju</div>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl">Pošaljite upit</h3>

                <div className="mt-8 space-y-5">
                  <Field label="Ime i prezime" error={errors.ime}>
                    <input
                      type="text"
                      autoComplete="name"
                      value={form.ime}
                      onChange={update('ime')}
                      placeholder="Ana Anić"
                      className="input-field"
                    />
                  </Field>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Telefon" error={errors.telefon}>
                      <input
                        type="tel"
                        autoComplete="tel"
                        value={form.telefon}
                        onChange={update('telefon')}
                        placeholder="+385 91 234 5678"
                        className="input-field"
                      />
                    </Field>
                    <Field label="Datum" error={errors.datum}>
                      <input
                        type="date"
                        value={form.datum}
                        onChange={update('datum')}
                        className="input-field"
                      />
                    </Field>
                  </div>

                  <Field label="Usluga" error={errors.usluga}>
                    <div className="relative">
                      <select
                        value={form.usluga}
                        onChange={update('usluga')}
                        className="input-field appearance-none pr-10"
                      >
                        <option value="" className="bg-dark text-cream">Odaberite uslugu</option>
                        {services.map((s) => (
                          <option key={s.value} value={s.value} className="bg-dark text-cream">
                            {s.label}
                          </option>
                        ))}
                      </select>
                      <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </div>
                  </Field>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-medium text-dark transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
                >
                  Pošalji upit za termin
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>

                <p className="mt-4 text-xs text-muted text-center">
                  Slanjem upita prihvaćate da vas kontaktiramo radi potvrde termina.
                </p>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon, label, value, href }) {
  const Inner = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold/10">
        <div className="h-4 w-4">{icon}</div>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-eyebrow text-muted">{label}</div>
        <div className="mt-0.5 text-base text-dark">{value}</div>
      </div>
    </>
  )
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group flex items-center gap-4">
      {Inner}
    </a>
  ) : (
    <div className="group flex items-center gap-4">{Inner}</div>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-eyebrow text-cream/60">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1.5 block text-xs text-gold-light">{error}</span>}
    </label>
  )
}

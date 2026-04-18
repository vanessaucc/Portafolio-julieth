'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import { useLang } from '@/context/LangContext'

const INFO = [
  { icon: 'fas fa-user',           label: { es: 'Nombre',    en: 'Name'     }, val: 'Vanessa Mena',            href: null },
  { icon: 'fas fa-map-marker-alt', label: { es: 'Ubicación', en: 'Location' }, val: 'Pasto, Nariño, Colombia', href: null },
  { icon: 'fas fa-envelope',       label: { es: 'Correo',    en: 'Email'    }, val: 'vmena7604@gmail.com',      href: 'mailto:vmena7604@gmail.com' },
  { icon: 'fas fa-phone',          label: { es: 'Celular',   en: 'Phone'    }, val: '320 675 5265',             href: 'tel:+573206755265' },
]

export default function Contact() {
  const { t, lang } = useLang()
  const c = t.contact

  return (
    <section id="contact" className="py-20 px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center relative bg-surface-card">
      <div className="section-inner flex flex-col items-center text-center">

        <AnimateIn>
          <SectionHeader tag={c.tag}>{c.title} <span>{c.titleSpan}</span></SectionHeader>
          <p className="mb-10 text-base text-ink-secondary max-w-[480px] leading-[1.7] mx-auto">{c.description}</p>
        </AnimateIn>

        <AnimateIn delay={120} className="w-full max-w-[480px]">
          <div className="bg-surface rounded-2xl border border-brand-500/15 dark:border-white/[0.07] overflow-hidden shadow-card">
            {INFO.map((item, i) => (
              <div
                key={item.label.es}
                className={`flex items-center gap-4 px-6 py-4 hover:bg-brand-500/6 transition-colors group ${
                  i < INFO.length - 1 ? 'border-b border-brand-500/10 dark:border-white/[0.05]' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/18 transition-colors">
                  <i className={`${item.icon} text-brand-500 text-[0.9rem]`} />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-[0.6rem] uppercase tracking-[0.1em] text-ink-muted font-bold mb-0.5">
                    {lang === 'es' ? item.label.es : item.label.en}
                  </div>
                  {item.href
                    ? <a href={item.href}
                        className="text-[0.9rem] font-semibold text-ink-primary no-underline hover:text-brand-500 transition-colors block truncate">
                        {item.val}
                      </a>
                    : <span className="text-[0.9rem] font-semibold text-ink-primary">{item.val}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={220} className="mt-8">
          <p className="text-[0.85rem] text-ink-muted italic max-w-[380px]">{c.callout}</p>
        </AnimateIn>

      </div>
    </section>
  )
}

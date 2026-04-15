'use client'
import { useLang } from '@/context/LangContext'

const navKeys = ['home','about','projects','experience','testimonials','game','contact'] as const

const socials = [
  { href: 'https://github.com/vanessaucc',                        icon: 'fab fa-github',      label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/vanessa-mena-a9a642324/', icon: 'fab fa-linkedin-in',  label: 'LinkedIn' },
  { href: 'https://www.instagram.com/mena_julieth_/?hl=es',      icon: 'fab fa-instagram',    label: 'Instagram' },
  { href: 'https://www.facebook.com/vanessa.mena.206258/',        icon: 'fab fa-facebook-f',   label: 'Facebook' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLang()
  const f = t.footer

  const navLinks = navKeys.map(k => [`#${k}`, t.nav[k]] as [string, string])

  return (
    <footer className="bg-[linear-gradient(160deg,#22182c_0%,#2e1a47_100%)] text-white/50 py-12 pr-16 pl-12 border-t border-brand-400/15 max-[900px]:px-6">
      <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-12 mb-10 pb-10 border-b border-white/[0.08] items-start max-[900px]:grid-cols-1 max-[900px]:gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0 shadow-glow-sm relative">
            <span className="font-display font-extrabold text-[1.1rem] text-white">VM</span>
            <img src="/vanessa.jpg" alt="Vanessa Mena"
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
          </div>
          <div>
            <p className="font-display font-bold text-[0.92rem] text-white">Vanessa Mena</p>
            <p className="text-xs text-brand-300 mt-0.5">{f.role}</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} className="text-white/50 no-underline text-[0.85rem] transition-colors hover:text-brand-300">{label}</a>
          ))}
        </nav>

        <div>
          <p className="font-display font-bold text-[0.8rem] uppercase tracking-[0.1em] text-white/40 mb-3">{f.follow}</p>
          <div className="flex gap-3 flex-wrap">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/[0.07] border border-brand-400/25 flex items-center justify-center text-brand-300 text-[0.95rem] no-underline transition-all hover:bg-brand-600 hover:border-brand-500 hover:text-white hover:-translate-y-0.5">
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2 max-[900px]:flex-col max-[900px]:text-center">
        <p className="text-xs text-white/35">© {year} Vanessa Mena — {f.rights}</p>
        <p className="text-xs text-white/35 flex items-center gap-1">
          {f.madeWith} <span className="text-brand-400 animate-heart-pulse inline-block">♥</span> {f.inCity} · Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

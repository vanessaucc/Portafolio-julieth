'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'

const contactItems = [
  { icon: 'fab fa-github',         label: 'GitHub',      val: '@vanessaucc',                             href: 'https://github.com/vanessaucc',                        color: '#7c3aed' },
  { icon: 'fab fa-linkedin',       label: 'LinkedIn',    val: 'Vanessa Mena',                            href: 'https://www.linkedin.com/in/vanessa-mena-a9a642324/',  color: '#0077b5' },
  { icon: 'fab fa-instagram',      label: 'Instagram',   val: '@mena_julieth_',                          href: 'https://www.instagram.com/mena_julieth_/?hl=es',       color: '#e1306c' },
  { icon: 'fab fa-facebook',       label: 'Facebook',    val: 'Vanessa Mena',                            href: 'https://www.facebook.com/vanessa.mena.206258/',         color: '#1877f2' },
  { icon: 'fas fa-phone',          label: 'Teléfono',    val: '320 675 5265',                            href: 'tel:+573206755265',                                    color: '#a855f7' },
  { icon: 'fas fa-map-marker-alt', label: 'Ubicación',   val: 'Pasto, Nariño, Colombia',                 href: null,                                                   color: '#a855f7' },
  { icon: 'fas fa-graduation-cap', label: 'Universidad', val: 'Universidad Cooperativa de Colombia',     href: null,                                                   color: '#7c3aed' },
]

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const { t } = useLang()
  const c = t.contact

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ nombre: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 pr-16 pl-12 min-h-screen flex flex-col justify-center relative bg-surface-card max-[900px]:py-16 max-[900px]:px-6">
      <SectionHeader tag={c.tag}>{c.title} <span>{c.titleSpan}</span></SectionHeader>
      <p className="mb-10 text-base text-ink-secondary max-w-[500px] leading-[1.7]">{c.description}</p>

      <div className="grid grid-cols-[1fr_1.3fr] gap-12 items-start max-[900px]:grid-cols-1">
        <div>
          <h3 className="font-display font-bold text-[1.1rem] text-ink-primary mb-5">{c.channels}</h3>
          {contactItems.map(item => (
            <div key={item.label} className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-brand-500/8 mb-1.5">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[1rem] flex-shrink-0"
                style={{ background: `${item.color}18`, color: item.color }}>
                <i className={item.icon} />
              </div>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.08em] text-ink-muted font-semibold">{item.label}</div>
                {item.href
                  ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="text-[0.85rem] font-semibold text-ink-primary no-underline hover:text-brand-500 transition-colors">{item.val}</a>
                  : <span className="text-[0.85rem] font-semibold text-ink-primary">{item.val}</span>
                }
              </div>
            </div>
          ))}
          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-brand-500/10 to-brand-600/10 rounded-lg mt-4 border-l-[3px] border-brand-500">
            <i className="fas fa-paper-plane text-brand-500 mt-0.5" />
            <p className="text-[0.85rem] leading-[1.5] text-brand-600 dark:text-brand-300 italic">{c.callout}</p>
          </div>
        </div>

        <div className="card !p-8">
          <h3 className="font-display font-bold text-[1.1rem] text-ink-primary mb-6">{c.sendMessage}</h3>
          {sent && (
            <div className="flex items-center gap-2 p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 rounded-lg text-[0.88rem] font-semibold mb-4 border border-emerald-500/20">
              <i className="fas fa-check-circle" /> {c.successMsg}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-[0.8rem] font-semibold text-ink-primary tracking-wide">{c.nameLabel}</span>
              <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required placeholder={c.namePlaceholder}
                className="px-4 py-3 border-[1.5px] border-brand-500/25 rounded-lg font-body text-[0.9rem] text-ink-primary bg-surface outline-none transition-all focus:border-brand-500 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.12)] placeholder:text-ink-muted/60" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[0.8rem] font-semibold text-ink-primary tracking-wide">{c.emailLabel}</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={c.emailPlaceholder}
                className="px-4 py-3 border-[1.5px] border-brand-500/25 rounded-lg font-body text-[0.9rem] text-ink-primary bg-surface outline-none transition-all focus:border-brand-500 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.12)] placeholder:text-ink-muted/60" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[0.8rem] font-semibold text-ink-primary tracking-wide">{c.messageLabel}</span>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={c.messagePlaceholder}
                className="px-4 py-3 border-[1.5px] border-brand-500/25 rounded-lg font-body text-[0.9rem] text-ink-primary bg-surface outline-none transition-all focus:border-brand-500 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.12)] resize-y placeholder:text-ink-muted/60" />
            </label>
            <button type="submit" className="btn btn--primary self-start"><i className="fas fa-paper-plane" /> {c.sendBtn}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

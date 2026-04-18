'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import { useLang } from '@/context/LangContext'

const INFO = [
  { icon: 'fas fa-user',          label: { es: 'Nombre',    en: 'Name'     }, val: 'Vanessa Mena',              href: null },
  { icon: 'fas fa-map-marker-alt',label: { es: 'Ubicación', en: 'Location' }, val: 'Pasto, Nariño, Colombia',   href: null },
  { icon: 'fas fa-envelope',      label: { es: 'Correo',    en: 'Email'    }, val: 'vmena7604@gmail.com',        href: 'mailto:vmena7604@gmail.com' },
  { icon: 'fas fa-phone',         label: { es: 'Celular',   en: 'Phone'    }, val: '320 675 5265',               href: 'tel:+573206755265' },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const { t, lang } = useLang()
  const c = t.contact

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Fallback: open mailto if no key configured
    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === 'tu_clave_aqui') {
      const subject = encodeURIComponent(`[Portfolio] Mensaje de ${form.name}`)
      const body    = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
      window.open(`mailto:vmena7604@gmail.com?subject=${subject}&body=${body}`)
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `[Portfolio] Mensaje de ${form.name}`,
          from_name: 'Portfolio Vanessa Mena',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="py-16 px-6 sm:px-10 lg:px-16 flex flex-col justify-center relative bg-surface-card">
      <div className="section-inner">
        <AnimateIn>
          <SectionHeader tag={c.tag}>{c.title} <span>{c.titleSpan}</span></SectionHeader>
          <p className="mb-8 text-base text-ink-secondary max-w-[500px] leading-[1.7]">{c.description}</p>
        </AnimateIn>

        <div className="grid grid-cols-[1fr_1.4fr] gap-10 items-start max-[900px]:grid-cols-1">

          {/* Contact info — simplified */}
          <AnimateIn direction="left" delay={100}>
            <div className="bg-surface rounded-2xl p-6 border border-brand-500/12 dark:border-white/[0.06]">
              <h3 className="font-display font-bold text-[0.9rem] text-ink-primary mb-5 flex items-center gap-2">
                <i className="fas fa-address-card text-brand-500" /> {c.channels}
              </h3>
              <div className="flex flex-col gap-3">
                {INFO.map(item => (
                  <div key={item.label.es} className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-brand-500/6 transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                      <i className={`${item.icon} text-brand-500 text-[0.85rem]`} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[0.6rem] uppercase tracking-[0.1em] text-ink-muted font-bold mb-0.5">
                        {lang === 'es' ? item.label.es : item.label.en}
                      </div>
                      {item.href
                        ? <a href={item.href}
                            className="text-[0.85rem] font-semibold text-ink-primary no-underline hover:text-brand-500 transition-colors truncate block">
                            {item.val}
                          </a>
                        : <span className="text-[0.85rem] font-semibold text-ink-primary">{item.val}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-xl bg-gradient-to-br from-brand-500/8 to-brand-700/8 border-l-[3px] border-brand-500 flex items-start gap-3">
                <i className="fas fa-paper-plane text-brand-500 text-sm mt-0.5 flex-shrink-0" />
                <p className="text-[0.82rem] leading-[1.55] text-brand-600 dark:text-brand-300 italic">{c.callout}</p>
              </div>
            </div>
          </AnimateIn>

          {/* Form */}
          <AnimateIn direction="right" delay={150}>
            <div className="card !p-7">
              <h3 className="font-display font-bold text-[0.95rem] text-ink-primary mb-5 flex items-center gap-2">
                <i className="fas fa-pencil text-brand-500" /> {c.sendMessage}
              </h3>

              {status === 'sent' && (
                <div className="flex items-center gap-2 p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 rounded-lg text-[0.85rem] font-semibold mb-4 border border-emerald-500/20">
                  <i className="fas fa-check-circle" /> {c.successMsg}
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 text-red-600 dark:text-red-400 rounded-lg text-[0.85rem] font-semibold mb-4 border border-red-500/20">
                  <i className="fas fa-exclamation-circle" />
                  {lang === 'es' ? 'Error al enviar. Inténtalo de nuevo.' : 'Failed to send. Please try again.'}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4 max-[500px]:grid-cols-1">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[0.75rem] font-semibold text-ink-primary tracking-wide">{c.nameLabel}</span>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder={c.namePlaceholder}
                      className="px-3.5 py-2.5 border-[1.5px] border-brand-500/20 rounded-lg font-body text-[0.875rem] text-ink-primary bg-surface outline-none transition-all duration-200 focus:border-brand-500 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] placeholder:text-ink-muted/50" />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[0.75rem] font-semibold text-ink-primary tracking-wide">{c.emailLabel}</span>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder={c.emailPlaceholder}
                      className="px-3.5 py-2.5 border-[1.5px] border-brand-500/20 rounded-lg font-body text-[0.875rem] text-ink-primary bg-surface outline-none transition-all duration-200 focus:border-brand-500 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] placeholder:text-ink-muted/50" />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[0.75rem] font-semibold text-ink-primary tracking-wide">{c.messageLabel}</span>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder={c.messagePlaceholder}
                    className="px-3.5 py-2.5 border-[1.5px] border-brand-500/20 rounded-lg font-body text-[0.875rem] text-ink-primary bg-surface outline-none transition-all duration-200 focus:border-brand-500 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] resize-y placeholder:text-ink-muted/50" />
                </label>
                <button type="submit" disabled={status === 'sending'}
                  className="btn btn--primary self-start disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'sending'
                    ? <><i className="fas fa-circle-notch fa-spin" /> {lang === 'es' ? 'Enviando…' : 'Sending…'}</>
                    : <><i className="fas fa-paper-plane" /> {c.sendBtn}</>
                  }
                </button>
              </form>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}

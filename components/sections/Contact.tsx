'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useLang } from '@/context/LangContext'

const contactItems = [
  { icon: 'fab fa-github',         label: 'GitHub',      val: '@vanessaucc',                          href: 'https://github.com/vanessaucc',                       color: '#7c3aed' },
  { icon: 'fab fa-linkedin',       label: 'LinkedIn',    val: 'Vanessa Mena',                         href: 'https://www.linkedin.com/in/vanessa-mena-a9a642324/', color: '#0077b5' },
  { icon: 'fas fa-phone',          label: 'Phone',       val: '320 675 5265',                         href: 'tel:+573206755265',                                   color: '#a855f7' },
  { icon: 'fas fa-map-marker-alt', label: 'Location',    val: 'Pasto, Nariño, Colombia',              href: null,                                                  color: '#a855f7' },
  { icon: 'fas fa-graduation-cap', label: 'University',  val: 'Universidad Cooperativa de Colombia',  href: null,                                                  color: '#7c3aed' },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
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
      <SectionHeader tag={c.tag}>{c.title} <span>{c.titleSpan}</span></SectionHeader>
      <p className="mb-8 text-base text-ink-secondary max-w-[500px] leading-[1.7]">{c.description}</p>

      <div className="grid grid-cols-[1fr_1.3fr] gap-10 items-start max-[900px]:grid-cols-1">

        {/* Contact info */}
        <div>
          <h3 className="font-display font-bold text-[1rem] text-ink-primary mb-4">{c.channels}</h3>
          {contactItems.map(item => (
            <div key={item.label} className="flex items-center gap-3.5 p-3 rounded-xl transition-colors hover:bg-brand-500/8 mb-1.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[1rem] flex-shrink-0"
                style={{ background: `${item.color}15`, color: item.color }}>
                <i className={item.icon} />
              </div>
              <div>
                <div className="text-[0.62rem] uppercase tracking-[0.08em] text-ink-muted font-bold">{item.label}</div>
                {item.href
                  ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="text-[0.84rem] font-semibold text-ink-primary no-underline hover:text-brand-500 transition-colors">{item.val}</a>
                  : <span className="text-[0.84rem] font-semibold text-ink-primary">{item.val}</span>
                }
              </div>
            </div>
          ))}
          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-brand-500/8 to-brand-600/8 rounded-xl mt-4 border-l-[3px] border-brand-500">
            <i className="fas fa-paper-plane text-brand-500 mt-0.5 flex-shrink-0" />
            <p className="text-[0.84rem] leading-[1.5] text-brand-600 dark:text-brand-300 italic">{c.callout}</p>
          </div>
        </div>

        {/* Message form */}
        <div className="card !p-8">
          <h3 className="font-display font-bold text-[1rem] text-ink-primary mb-5">{c.sendMessage}</h3>

          {status === 'sent' && (
            <div className="flex items-center gap-2 p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 rounded-lg text-[0.85rem] font-semibold mb-4 border border-emerald-500/20">
              <i className="fas fa-check-circle" /> {c.successMsg}
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 bg-red-500/10 text-red-600 dark:text-red-400 rounded-lg text-[0.85rem] font-semibold mb-4 border border-red-500/20">
              <i className="fas fa-exclamation-circle" /> {lang === 'es' ? 'Error al enviar. Inténtalo de nuevo.' : 'Failed to send. Please try again.'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-[0.78rem] font-semibold text-ink-primary tracking-wide">{c.nameLabel}</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required
                placeholder={c.namePlaceholder}
                className="px-4 py-2.5 border-[1.5px] border-brand-500/20 rounded-lg font-body text-[0.88rem] text-ink-primary bg-surface outline-none transition-all focus:border-brand-500 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] placeholder:text-ink-muted/50" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[0.78rem] font-semibold text-ink-primary tracking-wide">{c.emailLabel}</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required
                placeholder={c.emailPlaceholder}
                className="px-4 py-2.5 border-[1.5px] border-brand-500/20 rounded-lg font-body text-[0.88rem] text-ink-primary bg-surface outline-none transition-all focus:border-brand-500 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] placeholder:text-ink-muted/50" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[0.78rem] font-semibold text-ink-primary tracking-wide">{c.messageLabel}</span>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder={c.messagePlaceholder}
                className="px-4 py-2.5 border-[1.5px] border-brand-500/20 rounded-lg font-body text-[0.88rem] text-ink-primary bg-surface outline-none transition-all focus:border-brand-500 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] resize-y placeholder:text-ink-muted/50" />
            </label>
            <button type="submit" disabled={status === 'sending'}
              className="btn btn--primary self-start disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'sending'
                ? <><i className="fas fa-circle-notch fa-spin" /> Sending…</>
                : <><i className="fas fa-paper-plane" /> {c.sendBtn}</>
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

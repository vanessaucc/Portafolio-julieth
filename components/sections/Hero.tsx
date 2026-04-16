'use client'
import { useLang } from '@/context/LangContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center py-16 px-6 sm:px-10 lg:px-16"
      style={{ background: 'linear-gradient(135deg, var(--surface) 0%, var(--hero-end) 100%)' }}
    >
      {/* Ambient glow */}
      <div className="absolute w-[600px] h-[600px] -top-32 right-0 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bottom-0 -left-20 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="section-inner grid grid-cols-2 gap-12 items-center max-lg:gap-8 max-[768px]:grid-cols-1 max-[768px]:text-center">

        {/* Text */}
        <div className="flex flex-col max-[768px]:items-center max-[768px]:order-2">
          <span className="flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[0.2em] uppercase text-brand-500 mb-4 before:content-[''] before:inline-block before:w-5 before:h-0.5 before:bg-brand-500 max-[768px]:justify-center">
            {h.tag}
          </span>

          <h1 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold text-ink-primary leading-[1.06] mb-5">
            {h.greeting.split('\n')[0]}<br />
            {h.greeting.split('\n')[1]}{' '}
            <span className="text-brand-500">Vanessa</span><br />
            <span className="text-brand-700 dark:text-brand-600 text-[0.68em]">Mena</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-6 max-[768px]:justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-700/10 dark:bg-brand-100/20 text-brand-700 dark:text-brand-300 rounded-full text-[0.78rem] font-semibold font-display">
              <i className="fas fa-code text-[0.68rem]" /> {h.tagline1}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-500 text-white rounded-full text-[0.78rem] font-semibold font-display">
              <i className="fas fa-rocket text-[0.68rem]" /> {h.tagline2}
            </span>
          </div>

          <p className="text-[0.95rem] leading-[1.8] text-ink-secondary max-w-[440px] mb-8 max-[768px]:max-w-full">
            {h.bio}
          </p>

          <div className="flex gap-3 flex-wrap max-[768px]:justify-center">
            <a href="#projects" className="btn btn--primary"><i className="fas fa-folder-open" /> {h.cta1}</a>
            <a href="/cv-vanessa-mena.pdf" download className="btn btn--outline"><i className="fas fa-download" /> {h.cta2}</a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10 max-[768px]:justify-center max-[768px]:mt-6">
            {h.stats.map(s => (
              <div key={s.l} className="flex flex-col">
                <strong className="font-display text-[1.8rem] font-extrabold text-brand-500 leading-none">{s.n}</strong>
                <span className="text-[0.65rem] text-ink-muted uppercase tracking-widest mt-1">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo — bigger, square frame */}
        <div className="flex items-center justify-center max-[768px]:order-1 max-[768px]:mt-4">
          <div className="relative">
            {/* Glow backdrop */}
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-400/25 to-brand-600/15 blur-2xl" />

            {/* Frame */}
            <div className="relative w-[360px] h-[420px] max-[1024px]:w-[300px] max-[1024px]:h-[360px] max-[768px]:w-[240px] max-[768px]:h-[280px] rounded-[28px] overflow-hidden shadow-[0_20px_70px_rgba(124,58,237,0.4)] border-2 border-brand-400/35">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-300 to-brand-600 flex items-center justify-center">
                <i className="fas fa-user text-[6rem] text-white/30" />
              </div>
              <img
                src="/vanessa.jpg"
                alt="Vanessa Mena"
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-900/30 to-transparent" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 max-[768px]:hidden bg-surface-card border border-brand-500/30 rounded-2xl px-4 py-2.5 shadow-glow flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[0.75rem] font-semibold text-ink-primary">Open to work</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

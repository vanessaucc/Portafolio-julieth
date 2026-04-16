'use client'
import { useLang } from '@/context/LangContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center py-12 pr-16 pl-12 max-[900px]:py-10 max-[900px]:px-6"
      style={{ background: 'linear-gradient(135deg, var(--surface) 0%, var(--hero-end) 100%)' }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute w-[500px] h-[500px] -top-24 right-[5%] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute w-[320px] h-[320px] bottom-0 left-[3%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-2 gap-8 items-center relative z-10 w-full max-w-[1000px] max-[900px]:grid-cols-1 max-[900px]:text-center">

        {/* Text side */}
        <div className="flex flex-col max-[900px]:items-center max-[900px]:order-2">
          <span className="flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-500 mb-3 before:content-[''] before:inline-block before:w-5 before:h-0.5 before:bg-brand-500 max-[900px]:justify-center">
            {h.tag}
          </span>

          <h1 className="font-display text-[clamp(2rem,5vw,3.8rem)] font-extrabold text-ink-primary leading-[1.08] mb-3">
            {h.greeting.split('\n')[0]}<br />
            {h.greeting.split('\n')[1]} <span className="text-brand-500">Vanessa</span><br />
            <span className="text-brand-700 dark:text-brand-600 text-[0.72em]">Mena</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-5 max-[900px]:justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-700/10 dark:bg-brand-100/20 text-brand-700 dark:text-brand-300 rounded-full text-[0.78rem] font-semibold font-display">
              <i className="fas fa-code text-[0.7rem]" /> {h.tagline1}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-500 text-white rounded-full text-[0.78rem] font-semibold font-display">
              <i className="fas fa-rocket text-[0.7rem]" /> {h.tagline2}
            </span>
          </div>

          <p className="text-[0.92rem] leading-[1.75] text-ink-secondary max-w-[420px] mb-7 max-[900px]:text-center max-[900px]:max-w-full">
            {h.bio}
          </p>

          <div className="flex gap-3 flex-wrap max-[900px]:justify-center">
            <a href="#projects" className="btn btn--primary text-[0.85rem] !px-6 !py-2.5">
              <i className="fas fa-folder-open" /> {h.cta1}
            </a>
            <a href="/cv-vanessa-mena.pdf" download className="btn btn--outline text-[0.85rem] !px-6 !py-2.5">
              <i className="fas fa-download" /> {h.cta2}
            </a>
          </div>

          {/* Stats inline row */}
          <div className="flex gap-8 mt-8 max-[900px]:justify-center max-[900px]:mt-5">
            {h.stats.map(s => (
              <div key={s.l} className="flex flex-col">
                <strong className="font-display text-[1.7rem] font-extrabold text-brand-500 leading-none">{s.n}</strong>
                <span className="text-[0.65rem] text-ink-muted uppercase tracking-wider mt-0.5">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo side — square frame, bigger */}
        <div className="flex items-center justify-center max-[900px]:order-1">
          <div className="relative">
            {/* Decorative corner glow */}
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-brand-400/30 to-brand-600/20 blur-xl" />

            {/* Square photo frame */}
            <div className="relative w-[320px] h-[380px] max-[900px]:w-[220px] max-[900px]:h-[260px] rounded-[24px] overflow-hidden shadow-[0_16px_60px_rgba(124,58,237,0.35)] border-2 border-brand-400/30">
              {/* Fallback gradient + icon */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-300 to-brand-600 flex items-center justify-center">
                <i className="fas fa-user text-[7rem] text-white/30" />
              </div>
              {/* Actual photo */}
              <img
                src="/vanessa.jpg"
                alt="Vanessa Mena"
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              {/* Subtle bottom gradient overlay for text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-900/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-surface-card border border-brand-500/30 rounded-2xl px-4 py-2 shadow-glow flex items-center gap-2 max-[900px]:hidden">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[0.75rem] font-semibold text-ink-primary">Open to work</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

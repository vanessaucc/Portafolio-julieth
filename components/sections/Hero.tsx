'use client'
import { useLang } from '@/context/LangContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center py-12 pr-16 pl-12 max-[900px]:py-10 max-[900px]:px-6"
      style={{ background: 'linear-gradient(135deg, var(--surface) 0%, var(--hero-end) 100%)' }}>
      {/* Glow orbs */}
      <div className="absolute w-[450px] h-[450px] -top-20 right-[8%] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bottom-0 left-[5%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-2 gap-10 items-center relative z-10 w-full max-w-[980px] max-[900px]:grid-cols-1 max-[900px]:text-center">

        {/* Text content */}
        <div className="flex flex-col max-[900px]:items-center">
          <span className="flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brand-500 mb-3 before:content-[''] before:inline-block before:w-5 before:h-0.5 before:bg-brand-500 max-[900px]:justify-center">
            {h.tag}
          </span>
          <h1 className="font-display text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold text-ink-primary leading-[1.08] mb-3">
            {h.greeting.split('\n')[0]}<br />
            {h.greeting.split('\n')[1]} <span className="text-brand-500">Vanessa</span><br />
            <span className="text-brand-700 dark:text-brand-600 text-[0.72em]">Mena</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-4 max-[900px]:justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-700/10 dark:bg-brand-100/20 text-brand-700 dark:text-brand-300 rounded-full text-[0.78rem] font-semibold font-display">
              <i className="fas fa-code text-[0.7rem]" /> {h.tagline1}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-500 text-white rounded-full text-[0.78rem] font-semibold font-display">
              <i className="fas fa-rocket text-[0.7rem]" /> {h.tagline2}
            </span>
          </div>

          <p className="text-[0.92rem] leading-[1.75] text-ink-secondary max-w-[400px] mb-6 max-[900px]:text-center">
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

          {/* Stats row */}
          <div className="flex gap-6 mt-8 max-[900px]:justify-center">
            {h.stats.map(s => (
              <div key={s.l} className="flex flex-col">
                <strong className="font-display text-[1.6rem] font-extrabold text-brand-500 leading-none">{s.n}</strong>
                <span className="text-[0.68rem] text-ink-muted uppercase tracking-wider mt-0.5">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo — bigger, centered */}
        <div className="relative flex items-center justify-center max-[900px]:order-first">
          <div className="relative">
            {/* Spinning rings */}
            <div className="absolute -inset-[18px] rounded-full border-2 border-dashed border-brand-500/40 animate-spin-slow" />
            <div className="absolute -inset-[36px] rounded-full border border-brand-400/20 animate-spin-slow-reverse" />

            {/* Photo circle */}
            <div className="w-[300px] h-[300px] max-[900px]:w-[240px] max-[900px]:h-[240px] rounded-full overflow-hidden bg-gradient-to-br from-brand-300 to-brand-600 shadow-[0_12px_50px_rgba(124,58,237,0.35)] relative flex items-center justify-center">
              <i className="fas fa-user text-[6rem] text-white/30 absolute" />
              <img
                src="/vanessa.jpg"
                alt="Vanessa Mena"
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

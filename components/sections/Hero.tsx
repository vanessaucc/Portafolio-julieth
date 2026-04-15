'use client'
import { useLang } from '@/context/LangContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex flex-col justify-center py-20 pr-16 pl-12 max-[900px]:py-16 max-[900px]:px-6"
      style={{ background: 'linear-gradient(135deg, var(--surface) 0%, var(--hero-end) 100%)' }}>
      <div className="absolute w-[500px] h-[500px] -top-24 right-[10%] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bottom-0 left-[10%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-2 gap-16 items-center relative z-10 max-w-[1000px] max-[900px]:grid-cols-1 max-[900px]:text-center">
        <div>
          <span className="flex items-center gap-2 font-display text-[0.72rem] font-bold tracking-[0.18em] uppercase text-brand-500 mb-2 before:content-[''] before:inline-block before:w-6 before:h-0.5 before:bg-brand-500">
            {h.tag}
          </span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-ink-primary leading-[1.05] my-4">
            {h.greeting.split('\n')[0]}<br />
            {h.greeting.split('\n')[1]} <span className="text-brand-500">Vanessa</span><br />
            <span className="text-brand-700 dark:text-brand-600 text-[0.7em]">Mena</span>
          </h1>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-700/10 dark:bg-brand-100/20 text-brand-700 dark:text-brand-300 rounded-full text-[0.82rem] font-semibold font-display tracking-wide mb-1.5">
            <i className="fas fa-code" /> {h.tagline1}
          </div>
          <div className="flex items-center gap-1.5 px-4 py-1.5 bg-brand-500 text-white rounded-full text-[0.82rem] font-semibold font-display tracking-wide mt-1.5 w-fit max-[900px]:mx-auto">
            <i className="fas fa-rocket" /> {h.tagline2}
          </div>
          <p className="mt-6 mb-8 text-base leading-[1.7] text-ink-secondary max-w-[420px] max-[900px]:max-w-full max-[900px]:mx-auto">
            {h.bio}
          </p>
          <div className="flex gap-4 flex-wrap max-[900px]:justify-center">
            <a href="#projects" className="btn btn--primary"><i className="fas fa-folder-open" /> {h.cta1}</a>
            <a href="/cv-vanessa-mena.pdf" download className="btn btn--outline"><i className="fas fa-download" /> {h.cta2}</a>
          </div>
        </div>

        <div className="relative flex items-center justify-center h-[420px] max-[900px]:h-[300px]">
          <div className="relative w-[250px] h-[250px]">
            {/* Photo circle */}
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-brand-300 to-brand-500 relative z-[2] shadow-[0_8px_40px_rgba(124,58,237,0.3)] flex items-center justify-center">
              <i className="fas fa-user text-[5rem] text-white/40 absolute" />
              <img src="/vanessa.jpg" alt="Vanessa Mena"
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
            </div>
            <div className="absolute -inset-[15px] rounded-full border-2 border-dashed border-brand-500/50 animate-spin-slow" />
            <div className="absolute -inset-[30px] rounded-full border-2 border-brand-400/30 animate-spin-slow-reverse" />
          </div>
          {h.stats.map((s, i) => (
            <div key={s.l} className={`absolute ${['top-5 right-0 animate-float','bottom-10 right-2.5 animate-float-1','bottom-2.5 left-0 animate-float-2'][i]} bg-surface-card rounded-card px-5 py-3 flex flex-col items-center shadow-glow border border-brand-500/20 max-[900px]:hidden`}>
              <strong className="font-display text-2xl font-extrabold text-brand-600">{s.n}</strong>
              <span className="text-[0.72rem] text-ink-muted uppercase tracking-wider">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

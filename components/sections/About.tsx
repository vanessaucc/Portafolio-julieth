'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import { skills } from '@/data/skills'
import { useLang } from '@/context/LangContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="py-20 pr-16 pl-12 min-h-screen flex flex-col justify-center relative bg-surface-card max-[900px]:py-16 max-[900px]:px-6">
      <SectionHeader tag={a.tag}>{a.title} <span>{a.titleSpan}</span></SectionHeader>

      <div className="grid grid-cols-2 gap-12 items-start mt-2 max-[900px]:grid-cols-1">
        <div>
          {a.paragraphs.map((p, i) => (
            <p key={i} className="mb-4 leading-[1.8] text-[0.95rem] text-ink-secondary [&>strong]:text-brand-700 dark:[&>strong]:text-brand-300"
              dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <div className="grid grid-cols-2 gap-3 mt-6 max-[900px]:grid-cols-1">
            {a.facts.map(f => (
              <div key={f.label} className="flex items-center gap-3 p-3 bg-brand-500/8 dark:bg-brand-100/20 rounded-lg border border-brand-500/20 dark:border-brand-200/30">
                <i className={`${f.icon} text-brand-500 text-base w-5 text-center`} />
                <div className="flex flex-col">
                  <span className="text-[0.65rem] uppercase tracking-[0.08em] text-brand-600 dark:text-brand-400 font-semibold">{f.label}</span>
                  <span className="text-[0.82rem] font-semibold text-ink-primary">{f.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface rounded-card p-8 border border-brand-500/20 dark:border-brand-200/30 shadow-card">
          <h3 className="font-display font-bold text-[1.1rem] text-ink-primary mb-6 flex items-center gap-2">
            <i className="fas fa-tools text-brand-500" /> {a.techStack}
          </h3>
          <div className="flex flex-col gap-4">
            {skills.map(s => (
              <div key={s.name}>
                <div className="flex items-center mb-1.5">
                  <span className="text-[0.82rem] font-semibold text-ink-primary flex items-center gap-1.5">
                    <i className={`${s.icon} text-brand-500`} /> {s.name}
                  </span>
                </div>
                <div className="h-1.5 bg-brand-500/15 dark:bg-brand-200/30 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-grow-bar"
                    style={{ '--target': `${s.level}%` } as React.CSSProperties} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

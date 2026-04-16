'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import { skills } from '@/data/skills'
import { useLang } from '@/context/LangContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="py-16 pr-16 pl-12 flex flex-col justify-center relative bg-surface-card max-[900px]:py-12 max-[900px]:px-6">
      <SectionHeader tag={a.tag}>{a.title} <span>{a.titleSpan}</span></SectionHeader>

      <div className="grid grid-cols-2 gap-10 items-start max-[900px]:grid-cols-1">
        {/* Bio */}
        <div>
          {a.paragraphs.map((p, i) => (
            <p key={i} className="mb-4 leading-[1.8] text-[0.95rem] text-ink-secondary [&>strong]:text-brand-700 dark:[&>strong]:text-brand-300"
              dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <div className="grid grid-cols-2 gap-2.5 mt-5 max-[500px]:grid-cols-1">
            {a.facts.map(f => (
              <div key={f.label} className="flex items-center gap-3 p-3 bg-brand-500/8 dark:bg-brand-100/20 rounded-xl border border-brand-500/15 dark:border-brand-200/25">
                <i className={`${f.icon} text-brand-500 text-sm w-4 text-center flex-shrink-0`} />
                <div className="flex flex-col min-w-0">
                  <span className="text-[0.6rem] uppercase tracking-[0.08em] text-brand-600 dark:text-brand-400 font-bold">{f.label}</span>
                  <span className="text-[0.8rem] font-semibold text-ink-primary truncate">{f.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack — icon grid, no bars */}
        <div className="bg-surface rounded-2xl p-6 border border-brand-500/15 dark:border-brand-200/25 shadow-card">
          <h3 className="font-display font-bold text-[1rem] text-ink-primary mb-5 flex items-center gap-2">
            <i className="fas fa-layer-group text-brand-500" /> {a.techStack}
          </h3>
          <div className="grid grid-cols-4 gap-3 max-[500px]:grid-cols-3">
            {skills.map(s => (
              <div key={s.name}
                className="flex flex-col items-center gap-2 p-3 rounded-xl border border-brand-500/10 dark:border-white/[0.06] bg-brand-500/5 dark:bg-white/[0.03] hover:border-brand-500/30 hover:bg-brand-500/10 transition-all duration-200 cursor-default group">
                <i className={`${s.icon} text-[1.5rem] transition-transform duration-200 group-hover:scale-110`}
                  style={{ color: s.color }} />
                <span className="text-[0.65rem] font-semibold text-ink-muted text-center leading-tight">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

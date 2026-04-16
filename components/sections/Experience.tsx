'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import { education, experience, type EducationItem, type ExperienceItem } from '@/data/experience'
import { useLang } from '@/context/LangContext'

type TimelineEntry = (EducationItem | ExperienceItem) & { degree?: string; role?: string; institution?: string; company?: string; location?: string }

function TimelineItem({ item }: { item: TimelineEntry }) {
  return (
    <div className="flex gap-4 relative">
      <div className="w-10 h-10 min-w-[40px] rounded-full bg-brand-500/10 dark:bg-brand-100/20 border-2 border-brand-500/40 dark:border-brand-300/50 flex items-center justify-center text-base relative z-10"
        style={{ boxShadow: '0 0 0 4px var(--surface-card)' }}>
        {item.icon}
      </div>
      <div className="card flex-1 !p-5">
        <div className="text-[0.72rem] font-bold tracking-[0.08em] uppercase text-brand-500 mb-1 font-display">{item.period}</div>
        <h3 className="font-display font-bold text-[0.95rem] text-ink-primary mb-1">{'degree' in item ? item.degree : item.role}</h3>
        <div className="text-[0.8rem] text-brand-600 dark:text-brand-400 flex items-center gap-1.5 mb-2">
          <i className="fas fa-building" />
          {'institution' in item ? item.institution : (item as ExperienceItem).company}
          {'location' in item && item.location && ` — ${item.location}`}
        </div>
        <p className="text-[0.82rem] leading-[1.6] text-ink-secondary">{item.description}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  const { t } = useLang()
  const e = t.experience

  return (
    <section id="experience" className="py-20 px-6 sm:px-10 lg:px-16 min-h-screen flex flex-col justify-center relative bg-surface-card">
      <SectionHeader tag={e.tag}>{e.title} <span>{e.titleSpan}</span></SectionHeader>

      <div className="grid grid-cols-2 gap-12 mt-6 max-[900px]:grid-cols-1">
        {[{ title: e.education, icon: 'fas fa-graduation-cap', items: education },
          { title: e.expCol,    icon: 'fas fa-briefcase',       items: experience }
        ].map(col => (
          <div key={col.title}>
            <h3 className="font-display font-bold text-[1.05rem] text-brand-600 dark:text-brand-400 mb-6 flex items-center gap-2">
              <i className={col.icon} /> {col.title}
            </h3>
            <div className="flex flex-col gap-6 relative before:content-[''] before:absolute before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-brand-400/50 before:to-brand-500/20">
              {col.items.map((item, i) => <TimelineItem key={i} item={item as TimelineEntry} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

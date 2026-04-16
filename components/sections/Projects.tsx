'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import { projects } from '@/data/projects'
import { useLang } from '@/context/LangContext'

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  return (
    <section id="projects" className="py-20 px-6 sm:px-10 lg:px-16 min-h-screen flex flex-col justify-center relative bg-surface">
      <div className="section-inner">
        <AnimateIn>
          <SectionHeader tag={p.tag}>{p.title} <span>{p.titleSpan}</span></SectionHeader>
          <p className="mb-10 text-base text-ink-secondary max-w-[600px] leading-[1.7]">{p.description}</p>
        </AnimateIn>

        <div className="grid grid-cols-2 gap-6 max-[700px]:grid-cols-1">
          {projects.map((proj, i) => (
            <AnimateIn key={i} delay={i * 100} direction="up">
              <div className="card flex flex-col gap-3 h-full">
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl border-2 flex-shrink-0"
                  style={{
                    background: `color-mix(in srgb, ${proj.color} 15%, var(--surface-card))`,
                    borderColor: `color-mix(in srgb, ${proj.color} 25%, var(--surface-card))`,
                    color: proj.color,
                  }}>
                  <i className={proj.icon} />
                </div>
                <h3 className="font-display font-bold text-base text-ink-primary leading-[1.3]">{proj.title}</h3>
                <p className="text-[0.85rem] leading-[1.6] text-ink-secondary flex-1">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
                </div>
                <div className="flex gap-3 mt-1">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer"
                    className="btn btn--outline text-[0.8rem] !px-4 !py-2">
                    <i className="fab fa-github" /> GitHub
                  </a>
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                      className="btn btn--primary text-[0.8rem] !px-4 !py-2">
                      <i className="fas fa-external-link-alt" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

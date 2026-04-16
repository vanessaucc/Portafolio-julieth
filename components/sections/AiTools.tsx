'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import { aiTools } from '@/data/aitools'
import { useLang } from '@/context/LangContext'

export default function AiTools() {
  const { t, lang } = useLang()
  const a = t.ai

  return (
    <section id="ai" className="py-20 px-6 sm:px-10 lg:px-16 relative bg-surface overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="section-inner">
        <AnimateIn>
          <SectionHeader tag={a.tag}>{a.title} <span>{a.titleSpan}</span></SectionHeader>
          <p className="mb-10 text-base text-ink-secondary max-w-[560px] leading-[1.7]">{a.description}</p>
        </AnimateIn>

        <div className="grid grid-cols-3 gap-5 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1">
          {aiTools.map((tool, i) => (
            <AnimateIn key={tool.name} delay={i * 80} direction="up">
              <div className="group flex items-start gap-4 p-5 rounded-2xl border border-brand-500/12 dark:border-white/[0.06] bg-surface-card hover:border-brand-500/30 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-[1.3rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${tool.color}18`, color: tool.color }}
                >
                  <i className={tool.icon} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-display font-bold text-[0.9rem] text-ink-primary mb-1">{tool.name}</span>
                  <span className="text-[0.8rem] leading-[1.55] text-ink-secondary">
                    {lang === 'es' ? tool.descEs : tool.descEn}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

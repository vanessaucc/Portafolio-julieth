'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import { testimonials } from '@/data/testimonials'
import { useLang } from '@/context/LangContext'

function StarRating({ stars }: { stars: number }) {
  const full = Math.floor(stars)
  const half = stars % 1 >= 0.5
  return (
    <div className="flex gap-1">
      {Array.from({ length: full }).map((_, i) => <i key={i} className="fas fa-star text-amber-500 text-[0.85rem]" />)}
      {half && <i className="fas fa-star-half-alt text-amber-500 text-[0.85rem]" />}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLang()
  const tm = t.testimonials

  return (
    <section id="testimonials" className="py-20 px-6 sm:px-10 lg:px-16 min-h-screen flex flex-col justify-center relative bg-surface">
      <div className="section-inner">
        <AnimateIn>
          <SectionHeader tag={tm.tag}><span>{tm.title}</span></SectionHeader>
          <p className="mb-10 text-base text-ink-secondary max-w-[500px] leading-[1.7]">{tm.description}</p>
        </AnimateIn>

        <div className="grid grid-cols-2 gap-6 max-[700px]:grid-cols-1">
          {testimonials.map((item, i) => (
            <AnimateIn key={i} delay={i * 100} direction="up">
              <div className="card flex flex-col gap-4 relative overflow-hidden h-full">
                <span className="absolute -top-2 right-4 text-[5rem] text-brand-500/10 font-display font-extrabold leading-none pointer-events-none select-none" aria-hidden>&ldquo;</span>
                <StarRating stars={item.stars} />
                <p className="text-[0.9rem] leading-[1.7] text-ink-secondary italic flex-1">&ldquo;{item.text}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-brand-500/20 pt-3">
                  <div className="w-[42px] h-[42px] rounded-full bg-brand-500/10 border-2 border-brand-500/25 flex items-center justify-center text-[1.3rem]">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold text-[0.9rem] text-ink-primary">{item.name}</div>
                    <div className="text-[0.75rem] text-brand-600 dark:text-brand-400 font-medium">{item.role}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

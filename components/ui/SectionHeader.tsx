interface Props {
  tag: string
  children: React.ReactNode
  dark?: boolean
}

export default function SectionHeader({ tag, children, dark = false }: Props) {
  return (
    <>
      <span className={`flex items-center gap-2 font-display text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-2
        before:content-[''] before:inline-block before:w-6 before:h-0.5
        ${dark ? 'text-brand-300 before:bg-brand-300' : 'text-brand-500 before:bg-brand-500'}`}>
        {tag}
      </span>
      <h2 className={`font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] mb-6
        [&>span]:text-brand-500 ${dark ? 'text-white' : 'text-ink-primary'}`}>
        {children}
      </h2>
    </>
  )
}

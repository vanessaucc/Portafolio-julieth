'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/ui/ThemeProvider'
import { useLang } from '@/context/LangContext'

const navKeys = ['home','about','projects','experience','testimonials','game','contact'] as const
const navIcons: Record<string, string> = {
  home: 'fas fa-home', about: 'fas fa-user', projects: 'fas fa-folder-open',
  experience: 'fas fa-graduation-cap', testimonials: 'fas fa-comments',
  game: 'fas fa-gamepad', contact: 'fas fa-envelope',
}

export default function Sidebar() {
  const [active, setActive] = useState('#home')
  const [open, setOpen]     = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLang()

  const navItems = navKeys.map(k => ({ href: `#${k}`, label: t.nav[k], icon: navIcons[k] }))

  useEffect(() => {
    const onScroll = () => {
      let current = '#home'
      navItems.forEach(({ href }) => {
        const el = document.querySelector(href)
        if (el && window.scrollY >= el.getBoundingClientRect().top + window.scrollY - 120)
          current = href
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [navItems])

  return (
    <>
      {/* Mobile hamburger */}
      <button onClick={() => setOpen(o => !o)} aria-label="Menu"
        className="hidden max-[900px]:flex fixed top-4 left-4 z-[300] w-11 h-11 rounded-lg bg-brand-600 border-0 text-white text-lg cursor-pointer items-center justify-center shadow-glow-sm hover:bg-brand-700 transition-colors">
        <i className={open ? 'fas fa-times' : 'fas fa-bars'} />
      </button>

      {open && <div className="fixed inset-0 bg-black/50 z-[150] backdrop-blur-sm max-[900px]:block hidden" onClick={() => setOpen(false)} />}

      <aside className={`fixed top-0 left-0 w-[220px] h-screen bg-[linear-gradient(160deg,#22182c_0%,#2e1a47_100%)] flex flex-col items-center px-4 py-7 pb-6 z-[200] border-r border-brand-400/15 overflow-y-auto scrollbar-none transition-transform duration-300 max-[900px]:${open ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* Avatar */}
        <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-gradient-to-br from-brand-500 to-brand-800 flex items-center justify-center relative mb-2.5 shadow-[0_0_0_3px_rgba(192,132,252,0.3),0_0_20px_rgba(168,85,247,0.3)] flex-shrink-0">
          <span className="font-display font-extrabold text-xl text-white">VM</span>
          <img src="/vanessa.jpg" alt="Vanessa Mena"
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
        </div>
        <p className="font-display font-bold text-[0.88rem] text-white text-center leading-[1.3] mb-0.5">Vanessa<br />Mena</p>
        <p className="text-[0.65rem] text-brand-300 text-center uppercase tracking-[0.1em]">Software Eng.</p>

        {/* Theme + Language toggles */}
        <div className="flex gap-2 mt-3 w-full">
          <button onClick={toggleTheme}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-white/[0.07] hover:bg-brand-600 text-brand-300 hover:text-white text-[0.7rem] font-semibold transition-all border border-brand-400/20 cursor-pointer">
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button onClick={toggleLang}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-white/[0.07] hover:bg-brand-600 text-brand-300 hover:text-white text-[0.7rem] font-bold transition-all border border-brand-400/20 cursor-pointer tracking-widest">
            <i className="fas fa-globe text-[0.6rem]" />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        <div className="w-full h-px bg-white/[0.07] my-4" />

        <nav className="flex flex-col gap-0.5 w-full flex-1">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={() => { setActive(item.href); setOpen(false) }}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[0.8rem] font-medium no-underline transition-all duration-200 relative ${
                active === item.href
                  ? 'bg-brand-400/20 text-white before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[55%] before:bg-brand-400 before:rounded-r'
                  : 'text-white/45 hover:bg-brand-400/12 hover:text-white/85'
              }`}>
              <i className={`${item.icon} w-4 text-[0.85rem] text-center`} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="w-full h-px bg-white/[0.07] my-4" />
        <div className="flex gap-2 mb-3">
          {[
            { href: 'https://github.com/vanessaucc',                        icon: 'fab fa-github' },
            { href: 'https://www.linkedin.com/in/vanessa-mena-a9a642324/', icon: 'fab fa-linkedin-in' },
          ].map(s => (
            <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
              className="w-[32px] h-[32px] rounded-full bg-white/[0.07] border border-brand-400/20 flex items-center justify-center text-brand-300 text-[0.8rem] no-underline transition-all hover:bg-brand-600 hover:text-white hover:border-brand-500">
              <i className={s.icon} />
            </a>
          ))}
        </div>
        <p className="text-[0.62rem] text-white/20 text-center">© {new Date().getFullYear()} Vanessa Mena</p>
      </aside>
    </>
  )
}

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

interface SidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
}

export default function Sidebar({ collapsed, onToggleCollapse }: SidebarProps) {
  const [active, setActive]   = useState('#home')
  const [mobileOpen, setMobile] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLang()

  const navItems = navKeys.map(k => ({ href: `#${k}`, label: t.nav[k], icon: navIcons[k] }))

  // Sync CSS variable for LayoutWrapper inline style
  useEffect(() => {
    document.documentElement.style.setProperty('--sidebar-w', collapsed ? '64px' : '220px')
  }, [collapsed])

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

  const w = collapsed ? 'w-16' : 'w-[220px]'

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobile(o => !o)}
        aria-label="Menu"
        className="hidden max-[900px]:flex fixed top-4 left-4 z-[300] w-11 h-11 rounded-xl bg-brand-600 border-0 text-white text-lg cursor-pointer items-center justify-center shadow-glow-sm hover:bg-brand-700 transition-colors"
      >
        <i className={mobileOpen ? 'fas fa-times' : 'fas fa-bars'} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[150] backdrop-blur-sm max-[900px]:block hidden"
          onClick={() => setMobile(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen z-[200]
          bg-[linear-gradient(160deg,#22182c_0%,#2e1a47_100%)]
          border-r border-brand-400/15
          flex flex-col items-center
          overflow-y-auto overflow-x-hidden scrollbar-none
          transition-[width,transform] duration-300 ease-in-out
          ${w}
          max-[900px]:w-[240px]
          max-[900px]:${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Desktop collapse toggle */}
        <button
          onClick={onToggleCollapse}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="max-[900px]:hidden absolute top-3 right-3 w-6 h-6 rounded-md bg-white/[0.08] hover:bg-brand-600 text-white/50 hover:text-white text-[0.7rem] flex items-center justify-center transition-all border border-white/[0.06] cursor-pointer z-10"
        >
          <i className={`fas ${collapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`} />
        </button>

        <div className={`flex flex-col items-center w-full px-3 pt-10 pb-4 ${collapsed ? 'px-2' : 'px-4'}`}>

          {/* Avatar — square, bigger */}
          <div
            className={`
              overflow-hidden bg-gradient-to-br from-brand-500 to-brand-800
              flex items-center justify-center relative flex-shrink-0
              shadow-[0_0_0_3px_rgba(192,132,252,0.3),0_0_24px_rgba(168,85,247,0.3)]
              transition-all duration-300
              rounded-2xl
              ${collapsed ? 'w-10 h-10 mb-2' : 'w-[90px] h-[90px] mb-3'}
            `}
          >
            <span className="font-display font-extrabold text-white text-xl">VM</span>
            <img
              src="/vanessa.jpg"
              alt="Vanessa Mena"
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
          </div>

          {/* Name — hidden when collapsed */}
          {!collapsed && (
            <>
              <p className="font-display font-bold text-[0.88rem] text-white text-center leading-[1.3] mb-0.5">
                Vanessa<br />Mena
              </p>
              <p className="text-[0.62rem] text-brand-300 text-center uppercase tracking-[0.1em]">
                Software Eng.
              </p>
            </>
          )}

          {/* Theme + Language toggles — hide labels when collapsed */}
          <div className={`flex gap-1.5 mt-3 w-full ${collapsed ? 'flex-col' : ''}`}>
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-white/[0.07] hover:bg-brand-600 text-brand-300 hover:text-white text-[0.7rem] font-semibold transition-all border border-brand-400/20 cursor-pointer min-w-0"
            >
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
              {!collapsed && <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>}
            </button>
            <button
              onClick={toggleLang}
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-white/[0.07] hover:bg-brand-600 text-brand-300 hover:text-white text-[0.7rem] font-bold transition-all border border-brand-400/20 cursor-pointer tracking-widest min-w-0"
            >
              <i className="fas fa-globe text-[0.6rem]" />
              {!collapsed && <span>{lang === 'es' ? 'EN' : 'ES'}</span>}
            </button>
          </div>

          <div className="w-full h-px bg-white/[0.07] my-3" />

          {/* Nav links */}
          <nav className="flex flex-col gap-0.5 w-full flex-1">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                title={collapsed ? item.label : undefined}
                onClick={() => { setActive(item.href); setMobile(false) }}
                className={`
                  flex items-center rounded-lg text-[0.8rem] font-medium no-underline
                  transition-all duration-200 relative
                  ${collapsed ? 'justify-center px-0 py-2.5' : 'gap-2.5 px-3.5 py-2.5'}
                  ${active === item.href
                    ? `bg-brand-400/20 text-white ${!collapsed ? 'before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[55%] before:bg-brand-400 before:rounded-r' : ''}`
                    : 'text-white/45 hover:bg-brand-400/12 hover:text-white/85'
                  }
                `}
              >
                <i className={`${item.icon} text-[0.9rem] ${collapsed ? '' : 'w-4 text-center'}`} />
                {!collapsed && <span>{item.label}</span>}
              </a>
            ))}
          </nav>

          <div className="w-full h-px bg-white/[0.07] my-3" />

          {/* Social icons */}
          <div className={`flex gap-2 mb-3 ${collapsed ? 'flex-col items-center' : ''}`}>
            {[
              { href: 'https://github.com/vanessaucc',                        icon: 'fab fa-github',      label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/vanessa-mena-a9a642324/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
            ].map(s => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-[30px] h-[30px] rounded-full bg-white/[0.07] border border-brand-400/20 flex items-center justify-center text-brand-300 text-[0.78rem] no-underline transition-all hover:bg-brand-600 hover:text-white hover:border-brand-500"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>

          {!collapsed && (
            <p className="text-[0.6rem] text-white/20 text-center">© {new Date().getFullYear()} Vanessa Mena</p>
          )}
        </div>
      </aside>
    </>
  )
}

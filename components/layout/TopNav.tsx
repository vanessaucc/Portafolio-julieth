'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/ui/ThemeProvider'
import { useLang } from '@/context/LangContext'

const navKeys = ['home','about','projects','experience','testimonials','game','contact'] as const

export default function TopNav() {
  const [active, setActive]     = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme }  = useTheme()
  const { lang, toggleLang, t } = useLang()

  const navItems = navKeys.map(k => ({ href: `#${k}`, label: t.nav[k] }))

  // Scroll spy + shadow on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      let current = '#home'
      navKeys.forEach(k => {
        const el = document.getElementById(k)
        if (el && window.scrollY >= el.getBoundingClientRect().top + window.scrollY - 90)
          current = `#${k}`
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 900) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href: string) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[200] h-16 flex items-center px-8 max-[600px]:px-4 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-brand-500/15 shadow-[0_2px_20px_rgba(124,58,237,0.08)]'
          : 'bg-transparent'
      }`}>

        {/* Logo */}
        <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3 no-underline flex-shrink-0" aria-label="Home">
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center relative shadow-glow-sm flex-shrink-0">
            <span className="font-display font-extrabold text-white text-sm">VM</span>
            <img src="/vanessa.jpg" alt="" aria-hidden
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
          </div>
          <span className="font-display font-bold text-[0.9rem] text-ink-primary hidden sm:block">Vanessa Mena</span>
        </a>

        {/* Desktop nav links — center */}
        <nav className="hidden md:flex items-center gap-1 mx-auto">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`px-3 py-1.5 rounded-lg text-[0.8rem] font-medium no-underline transition-all duration-200 ${
                active === item.href
                  ? 'text-brand-500 bg-brand-500/10'
                  : 'text-ink-secondary hover:text-ink-primary hover:bg-brand-500/8'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side: toggles */}
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-ink-secondary hover:text-brand-500 hover:bg-brand-500/10 transition-all text-[0.85rem] cursor-pointer border-0 bg-transparent"
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
          </button>
          <button
            onClick={toggleLang}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            className="h-8 px-2.5 rounded-lg flex items-center gap-1 text-ink-secondary hover:text-brand-500 hover:bg-brand-500/10 transition-all text-[0.75rem] font-bold cursor-pointer border border-brand-500/20 bg-transparent tracking-wider"
          >
            <i className="fas fa-globe text-[0.65rem]" />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-ink-primary bg-brand-500/10 hover:bg-brand-500/20 transition-all cursor-pointer border-0 ml-1"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-sm`} />
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[190] md:hidden" onClick={() => setMenuOpen(false)} />
          <nav className="fixed top-16 left-4 right-4 z-[195] md:hidden bg-surface-card rounded-2xl border border-brand-500/20 shadow-glow p-3 flex flex-col gap-1">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center px-4 py-3 rounded-xl text-[0.88rem] font-medium no-underline transition-all ${
                  active === item.href
                    ? 'bg-brand-500/15 text-brand-500 font-semibold'
                    : 'text-ink-secondary hover:bg-brand-500/8 hover:text-ink-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </>
      )}
    </>
  )
}

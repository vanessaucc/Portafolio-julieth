'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/ui/ThemeProvider'
import { useLang } from '@/context/LangContext'

const navKeys = ['home','about','ai','projects','experience','testimonials','game','contact'] as const

export default function TopNav() {
  const [active, setActive]     = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme }  = useTheme()
  const { lang, toggleLang, t } = useLang()

  const navItems = navKeys.map(k => ({ href: `#${k}`, label: t.nav[k] }))

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

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href: string) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[200] h-16 flex items-center px-6 sm:px-8 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/92 backdrop-blur-md border-b border-brand-500/15 shadow-[0_2px_20px_rgba(124,58,237,0.08)]'
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

        {/* Desktop nav — hidden below 1024px */}
        <nav className="hidden lg:flex items-center gap-0.5 mx-auto">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`px-3 py-1.5 rounded-lg text-[0.78rem] font-medium no-underline transition-all duration-200 whitespace-nowrap ${
                active === item.href
                  ? 'text-brand-500 bg-brand-500/10'
                  : 'text-ink-secondary hover:text-ink-primary hover:bg-brand-500/8'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side toggles */}
        <div className="flex items-center gap-2 ml-auto lg:ml-0">
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

          {/* Mobile hamburger — shown below 1024px */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-ink-primary bg-brand-500/10 hover:bg-brand-500/20 transition-all cursor-pointer border-0 ml-1"
          >
            <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-sm`} />
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[190] lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="fixed top-16 left-3 right-3 z-[195] lg:hidden bg-surface-card rounded-2xl border border-brand-500/20 shadow-[0_8px_40px_rgba(124,58,237,0.2)] p-3 flex flex-col gap-1">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center px-4 py-3 rounded-xl text-[0.9rem] font-medium no-underline transition-all ${
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

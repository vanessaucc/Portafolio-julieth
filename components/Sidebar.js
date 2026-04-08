'use client'
import { useState, useEffect } from 'react'
import styles from './Sidebar.module.css'

const navItems = [
  { href: '#home', label: 'Inicio', icon: 'fas fa-home' },
  { href: '#about', label: 'Acerca de mí', icon: 'fas fa-user' },
  { href: '#projects', label: 'Proyectos', icon: 'fas fa-folder-open' },
  { href: '#experience', label: 'Experiencia', icon: 'fas fa-graduation-cap' },
  { href: '#testimonials', label: 'Testimonios', icon: 'fas fa-comments' },
  { href: '#game', label: 'Juego', icon: 'fas fa-gamepad' },
  { href: '#contact', label: 'Contacto', icon: 'fas fa-envelope' },
]

export default function Sidebar() {
  const [active, setActive] = useState('#home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(n => document.querySelector(n.href))
      let current = '#home'
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 120) {
          current = `#${sec.id}`
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <>
      {/* Hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(o => !o)}
        aria-label="Menú"
      >
        <i className={open ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        {/* Avatar */}
        <div className={styles.avatar}>
          <span>VM</span>
        </div>
        <p className={styles.name}>Vanessa<br />Mena Ortega</p>
        <p className={styles.role}>Ing. Software</p>

        <div className={styles.divider}></div>

        {/* Nav */}
        <nav className={styles.nav}>
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.link} ${active === item.href ? styles.active : ''}`}
              onClick={() => handleLinkClick(item.href)}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className={styles.divider}></div>

        {/* Social links in sidebar */}
        <div className={styles.sidebarSocials}>
          <a href="https://github.com/vanessaucc" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vanessa-mena-a9a642324/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <p className={styles.footer}>© 2025 Vanessa Mena</p>
      </aside>
    </>
  )
}

'use client'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.logo}>VM</span>
          <div>
            <p className={styles.name}>Julieth Vanessa Mena Ortega</p>
            <p className={styles.role}>Ingeniería de Software · Desarrolladora Web</p>
          </div>
        </div>

        <nav className={styles.links}>
          {[
            ['#home', 'Inicio'],
            ['#about', 'Acerca de mí'],
            ['#projects', 'Proyectos'],
            ['#experience', 'Experiencia'],
            ['#testimonials', 'Testimonios'],
            ['#game', 'Juego'],
            ['#contact', 'Contacto'],
          ].map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className={styles.socials}>
          <p className={styles.socialTitle}>Sígueme</p>
          <div className={styles.socialBtns}>
            <a href="https://github.com/vanessaucc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vanessa-mena-a9a642324/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} Julieth Vanessa Mena Ortega — Todos los derechos reservados.</p>
        <p className={styles.made}>
          Hecho con <span className={styles.heart}>♥</span> en Pasto, Colombia · Next.js + CSS Modules
        </p>
      </div>
    </footer>
  )
}

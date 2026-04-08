'use client'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Decorative blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <div className={styles.content}>
        <div className={styles.left}>
          <span className="section-tag">Bienvenida</span>
          <h1 className={styles.title}>
            ¡Hola!<br />
            Soy <span>Vanessa</span><br />
            <span className={styles.lastName}>Mena Ortega</span>
          </h1>
          <div className={styles.roleTag}>
            <i className="fas fa-code"></i> Ingeniería de Software
          </div>
          <div className={styles.roleTag} style={{ background: 'var(--purple-500)', color: 'white', marginTop: '0.4rem' }}>
            <i className="fas fa-rocket"></i> Lista para nuevos proyectos
          </div>
          <p className={styles.bio}>
            Apasionada por el desarrollo web y la creación de soluciones digitales.
            Transformo ideas en experiencias funcionales y atractivas, combinando
            diseño, lógica y tecnología.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className="btn btn--primary">
              <i className="fas fa-folder-open"></i> Ver Proyectos
            </a>
            <a
              href="/cv-vanessa-mena.pdf"
              download
              className="btn btn--outline"
            >
              <i className="fas fa-download"></i> Descargar CV
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.photoFrame}>
            <div className={styles.photoPlaceholder}>
              <i className="fas fa-user"></i>
            </div>
            <div className={styles.ring1}></div>
            <div className={styles.ring2}></div>
          </div>

          <div className={styles.stat}>
            <strong>10+</strong>
            <span>Proyectos</span>
          </div>
          <div className={`${styles.stat} ${styles.stat2}`}>
            <strong>3+</strong>
            <span>Años estudiando</span>
          </div>
          <div className={`${styles.stat} ${styles.stat3}`}>
            <strong>5+</strong>
            <span>Tecnologías</span>
          </div>
        </div>
      </div>
    </section>
  )
}

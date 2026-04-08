'use client'
import styles from './Experience.module.css'

const education = [
  {
    degree: 'Ingeniería de Software',
    institution: 'Universidad Cooperativa de Colombia',
    location: 'Pasto, Nariño',
    period: '2022 — Presente',
    description: 'Formación en desarrollo de software, arquitectura de sistemas, diseño de interfaces, bases de datos y trabajo en equipo. Participación en proyectos académicos interdisciplinarios.',
    icon: '🎓',
  },
]

const experience = [
  {
    role: 'Desarrolladora Web (Proyectos Académicos)',
    company: 'Universidad Cooperativa de Colombia',
    period: '2023 — Presente',
    description: 'Desarrollo de aplicaciones web con Django, React y Next.js. Implementación de sistemas de monitoreo con Grafana y Prometheus. Aplicación de metodologías ágiles y buenas prácticas de programación.',
    icon: '💻',
  },
  {
    role: 'Aprendiz de Desarrollo Frontend',
    company: 'Proyectos Personales',
    period: '2022 — Presente',
    description: 'Creación de interfaces web responsivas, portafolios y componentes interactivos. Uso de HTML, CSS, JavaScript y frameworks modernos como React.',
    icon: '🎨',
  },
]

function TimelineItem({ item, isLeft }) {
  return (
    <div className={`${styles.item} ${isLeft ? styles.itemLeft : styles.itemRight}`}>
      <div className={styles.dot}>
        <span>{item.icon}</span>
      </div>
      <div className={`card ${styles.card}`}>
        <div className={styles.period}>{item.period}</div>
        <h3 className={styles.role}>{item.degree || item.role}</h3>
        <div className={styles.institution}>
          <i className="fas fa-building"></i>
          {item.institution || item.company}
          {item.location && ` — ${item.location}`}
        </div>
        <p className={styles.desc}>{item.description}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <span className="section-tag">Trayectoria</span>
      <h2 className="section-title">Experiencia <span>Académica</span></h2>

      <div className={styles.cols}>
        {/* Educación */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>
            <i className="fas fa-graduation-cap"></i> Educación
          </h3>
          <div className={styles.timeline}>
            {education.map((e, i) => (
              <TimelineItem key={i} item={e} />
            ))}
          </div>
        </div>

        {/* Experiencia */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>
            <i className="fas fa-briefcase"></i> Experiencia
          </h3>
          <div className={styles.timeline}>
            {experience.map((e, i) => (
              <TimelineItem key={i} item={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

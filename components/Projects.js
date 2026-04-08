'use client'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'Plataforma de Servicios para Mascotas',
    description: 'Aplicación web que conecta usuarios con servicios de cuidado y paseo de mascotas. Desarrollada con Django y MySQL, incluye autenticación, perfiles y búsqueda de servicios.',
    tags: ['Django', 'Python', 'MySQL', 'HTML/CSS'],
    icon: '🐾',
    github: 'https://github.com/vanessaucc',
    demo: null,
    color: '#a855f7',
  },
  {
    title: 'Portafolio Web Personal',
    description: 'Portafolio profesional desarrollado con Next.js aplicando principios de diseño UI/UX modernos. Incluye secciones de proyectos, experiencia y contacto.',
    tags: ['Next.js', 'React', 'CSS', 'JavaScript'],
    icon: '💼',
    github: 'https://github.com/vanessaucc',
    demo: null,
    color: '#7c3aed',
  },
  {
    title: 'Sistema de Monitoreo con Grafana',
    description: 'Implementación de un sistema de monitoreo de métricas con Grafana y Prometheus. Visualización en tiempo real de indicadores de rendimiento del sistema.',
    tags: ['Grafana', 'Prometheus', 'DevOps', 'Métricas'],
    icon: '📊',
    github: 'https://github.com/vanessaucc',
    demo: null,
    color: '#9333ea',
  },
  {
    title: 'Generación de Energía — Electromagnetismo',
    description: 'Proyecto académico interdisciplinario que integra conceptos de física y programación para simular y analizar principios de generación de energía electromagnética.',
    tags: ['Python', 'Física', 'Simulación', 'Académico'],
    icon: '⚡',
    github: 'https://github.com/vanessaucc',
    demo: null,
    color: '#c084fc',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <span className="section-tag">Mi trabajo</span>
      <h2 className="section-title">Mis <span>Proyectos</span></h2>
      <p className={styles.intro}>
        Proyectos enfocados en el aprendizaje y aplicación de conceptos de ingeniería de software,
        desde desarrollo web hasta sistemas de monitoreo.
      </p>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} className={`card ${styles.card}`}>
            <div className={styles.icon} style={{ '--c': p.color }}>
              {p.icon}
            </div>
            <h3 className={styles.projTitle}>{p.title}</h3>
            <p className={styles.projDesc}>{p.description}</p>
            <div className={styles.tags}>
              {p.tags.map(t => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
            <div className={styles.links}>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{fontSize:'0.8rem', padding:'0.5rem 1.1rem'}}>
                <i className="fab fa-github"></i> GitHub
              </a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{fontSize:'0.8rem', padding:'0.5rem 1.1rem'}}>
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

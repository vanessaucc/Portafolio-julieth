'use client'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Oliver Martínez',
    role: 'Compañero de equipo — UCC',
    avatar: '👨‍💻',
    stars: 5,
    text: 'Vanessa es una desarrolladora muy comprometida. Siempre aporta soluciones creativas al equipo y tiene una capacidad increíble para aprender nuevas tecnologías rápidamente. Trabajar con ella en proyectos académicos ha sido una experiencia enriquecedora.',
  },
  {
    name: 'Jenny Salazar',
    role: 'Docente Ing. Software — UCC',
    avatar: '👩‍🏫',
    stars: 5,
    text: 'Julieth Vanessa demuestra una atención excepcional al detalle en el desarrollo de interfaces y soluciones tecnológicas. Su dedicación y capacidad de adaptación a nuevas herramientas la destacan entre sus compañeros.',
  },
  {
    name: 'Luna Rodríguez',
    role: 'Compañera de proyectos',
    avatar: '👩‍💼',
    stars: 5,
    text: 'Siempre organizada, puntual y con ideas que mejoran la calidad de los proyectos. Vanessa tiene una habilidad natural para diseñar interfaces amigables y funcionales. Aprende muy rápido y trabaja de manera colaborativa.',
  },
  {
    name: 'Marko Torres',
    role: 'Monitor académico — UCC',
    avatar: '👨‍🎓',
    stars: 5,
    text: 'Me impresiona la forma en que Vanessa aborda los problemas de programación. Tiene un pensamiento analítico sólido y una gran capacidad para documentar y estructurar su código. Una futura gran desarrolladora.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <span className="section-tag">Lo que dicen</span>
      <h2 className="section-title"><span>Testimonios</span></h2>
      <p className={styles.intro}>
        Opiniones de compañeros, docentes y colaboradores que han trabajado conmigo.
      </p>

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={`card ${styles.card}`}>
            <div className={styles.stars}>
              {Array.from({ length: t.stars }).map((_, j) => (
                <i key={j} className="fas fa-star"></i>
              ))}
            </div>
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.avatar}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

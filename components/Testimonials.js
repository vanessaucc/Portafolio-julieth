'use client'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Yasmin Andrade',
    role: 'Abogada - Universidad de Nariño',
    avatar: '👨‍💻',
    stars: 4.5,
    text: 'Vanessa es una desarrolladora muy comprometida. Desde una perspectiva jurídica, destaco su responsabilidad, ética profesional y capacidad para analizar problemas con lógica y precisión. Siempre propone soluciones claras y bien fundamentadas, lo que hace que trabajar con ella sea una experiencia muy enriquecedora.',
  },
  {
    name: 'Luis Alfonso Diaz',
    role: 'Contador público - Docente Universidad Mariana',
    avatar: '👩‍🏫',
    stars: 5,
    text: 'Julieth Vanessa demuestra una gran atención al detalle, algo fundamental tanto en el desarrollo de software como en el área contable. Su organización, disciplina y capacidad para estructurar soluciones eficientes la destacan. Tiene una excelente gestión del tiempo y siempre entrega resultados de calidad.',
  },
  {
    name: 'Juan David Benavidez',
    role: 'Biólogo - Universidad de Nariño',
    avatar: '👩‍💼',
    stars: 4,
    text: 'Vanessa tiene una forma muy interesante de abordar los problemas, similar al pensamiento científico: observa, analiza y propone soluciones efectivas. Su capacidad de aprendizaje rápido y su trabajo colaborativo la hacen destacar en cualquier equipo. Además, diseña interfaces intuitivas y funcionales.',
  },
  {
    name: 'Carolina Ortega',
    role: 'Química - Universidad de Nariño',
    avatar: '👨‍🎓',
    stars: 4.5,
    text: 'Me impresiona la forma en que Vanessa resuelve problemas complejos, aplicando un pensamiento lógico y estructurado, muy similar al que usamos en química. Su código es ordenado, bien documentado y eficiente. Sin duda, tiene un gran potencial como desarrolladora.',
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

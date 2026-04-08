'use client'
import styles from './About.module.css'

const skills = [
  { name: 'HTML/CSS', icon: 'fab fa-html5', level: 85 },
  { name: 'JavaScript', icon: 'fab fa-js', level: 75 },
  { name: 'React', icon: 'fab fa-react', level: 70 },
  { name: 'Next.js', icon: 'fas fa-n', level: 65 },
  { name: 'Python/Django', icon: 'fab fa-python', level: 70 },
  { name: 'MySQL', icon: 'fas fa-database', level: 65 },
  { name: 'Git/GitHub', icon: 'fab fa-github', level: 80 },
  { name: 'Figma/UI', icon: 'fab fa-figma', level: 60 },
]

export default function About() {
  return (
    <section id="about">
      <span className="section-tag">Conóceme</span>
      <h2 className="section-title">Acerca de <span>Mí</span></h2>

      <div className={styles.grid}>
        {/* LEFT — text */}
        <div className={styles.text}>
          <p>
            Soy una persona <strong>responsable, creativa y comprometida</strong> con el aprendizaje constante, siempre en búsqueda de mejorar mis habilidades tanto técnicas como personales. Disfruto enfrentar nuevos retos que me permitan salir de mi zona de confort y fortalecer mi capacidad de análisis y resolución de problemas. Me gusta trabajar en equipo, compartir ideas y aprender de los demás para construir soluciones tecnológicas eficientes, innovadoras y con impacto real.
          </p>
          <p>
            Me interesa especialmente el desarrollo web, tanto en <strong>frontend como en backend</strong>,
            y actualmente me encuentro fortaleciendo mis habilidades en tecnologías modernas como
            React, Next.js y Django.
          </p>
          <p>
            Mi objetivo es crecer profesionalmente como desarrolladora, fortaleciendo continuamente mis habilidades técnicas y mi capacidad de resolver problemas mediante la tecnología, manteniéndome en constante aprendizaje de nuevas herramientas y metodologías. Busco participar en proyectos desafiantes que me permitan aplicar mis conocimientos, adquirir experiencia y aportar valor a través de soluciones innovadoras que respondan a necesidades reales y generen un impacto positivo.
          </p>

          <div className={styles.facts}>
            {[
              { icon: 'fas fa-graduation-cap', label: 'Universidad', val: 'UCC Pasto' },
              { icon: 'fas fa-map-marker-alt', label: 'Ubicación', val: 'Pasto, Colombia' },
              { icon: 'fas fa-language', label: 'Idiomas', val: 'Español' },
              { icon: 'fas fa-briefcase', label: 'Área', val: 'Ing. Software' },
            ].map(f => (
              <div key={f.label} className={styles.fact}>
                <i className={f.icon}></i>
                <div>
                  <span className={styles.factLabel}>{f.label}</span>
                  <span className={styles.factVal}>{f.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — skills */}
        <div className={styles.skillsBox}>
          <h3 className={styles.skillsTitle}>
            <i className="fas fa-tools"></i> Stack Tecnológico
          </h3>
          <div className={styles.skills}>
            {skills.map(s => (
              <div key={s.name} className={styles.skill}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>
                    <i className={s.icon}></i> {s.name}
                  </span>
                  <span className={styles.skillPct}>{s.level}%</span>
                </div>
                <div className={styles.bar}>
                  <div
                    className={styles.barFill}
                    style={{ '--target': `${s.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

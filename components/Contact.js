'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // Simula envío
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact">
      <span className="section-tag">Conectemos</span>
      <h2 className="section-title">Ponte en <span>Contacto</span></h2>
      <p className={styles.intro}>
        Estoy abierta a oportunidades que me permitan seguir aprendiendo, colaborar en proyectos y crecer profesionalmente en el área del desarrollo de software, aportando mis conocimientos, compromiso y ganas de mejorar continuamente.
      </p>

      <div className={styles.grid}>
        {/* Info */}
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Canales de Contacto</h3>

          {[
            {
              icon: 'fab fa-github',
              label: 'GitHub',
              val: '@vanessaucc',
              href: 'https://github.com/vanessaucc',
              color: '#6d28d9',
            },
            {
              icon: 'fab fa-linkedin',
              label: 'LinkedIn',
              val: 'Vanessa Mena',
              href: 'https://www.linkedin.com/in/vanessa-mena-a9a642324/',
              color: '#0077b5',
            },
            {
              icon: 'fas fa-map-marker-alt',
              label: 'Ubicación',
              val: 'Pasto, Nariño, Colombia',
              href: null,
              color: '#a855f7',
            },
            {
              icon: 'fas fa-graduation-cap',
              label: 'Universidad',
              val: 'Universidad Cooperativa de Colombia',
              href: null,
              color: '#7c3aed',
            },
          ].map(c => (
            <div key={c.label} className={styles.contactItem}>
              <div className={styles.contactIcon} style={{ background: `${c.color}20`, color: c.color }}>
                <i className={c.icon}></i>
              </div>
              <div>
                <div className={styles.contactLabel}>{c.label}</div>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className={styles.contactVal}>
                    {c.val}
                  </a>
                ) : (
                  <span className={styles.contactVal}>{c.val}</span>
                )}
              </div>
            </div>
          ))}

          <div className={styles.ctaMessage}>
            <i className="fas fa-paper-plane"></i>
            <p>¡Cuéntame sobre tu proyecto o idea! Estoy lista para colaborar.</p>
          </div>
        </div>

        {/* Form */}
        <div className={`card ${styles.formCard}`}>
          <h3 className={styles.formTitle}>Envíame un mensaje</h3>
          {sent && (
            <div className={styles.successMsg}>
              <i className="fas fa-check-circle"></i> ¡Mensaje enviado! Te responderé pronto 🚀
            </div>
          )}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label>Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>
            <div className={styles.field}>
              <label>Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="tu@correo.com"
              />
            </div>
            <div className={styles.field}>
              <label>Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntame sobre tu proyecto, propuesta o idea..."
              />
            </div>
            <button type="submit" className={`btn btn--primary ${styles.submit}`}>
              <i className="fas fa-paper-plane"></i> Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

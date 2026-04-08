import styles from './SocialFloat.module.css'

export default function SocialFloat() {
  return (
    <div className={styles.float}>
      <a href="https://github.com/vanessaucc" target="_blank" rel="noopener noreferrer" title="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/vanessa-mena-a9a642324/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="#contact" title="Contacto">
        <i className="fas fa-envelope"></i>
      </a>
      <a href="#game" title="Juego">
        <i className="fas fa-gamepad"></i>
      </a>
      <a href="#home" title="Subir">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  )
}

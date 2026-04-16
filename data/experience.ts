export interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  icon: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  icon: string
}

export const education: EducationItem[] = [
  {
    degree: 'Ingeniería de Software',
    institution: 'Universidad Cooperativa de Colombia',
    location: 'Pasto, Nariño',
    period: '2023 — Presente',
    description: 'Formación en desarrollo de software, arquitectura de sistemas, diseño de interfaces, bases de datos y trabajo en equipo. Participación en proyectos académicos interdisciplinarios.',
    icon: 'fas fa-graduation-cap',
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Desarrolladora Web (Proyectos Académicos)',
    company: 'Universidad Cooperativa de Colombia',
    period: '2023 — Presente',
    description: 'Desarrollo de aplicaciones web con Django, React y Next.js. Implementación de sistemas de monitoreo con Grafana y Prometheus. Aplicación de metodologías ágiles y buenas prácticas de programación.',
    icon: 'fas fa-laptop-code',
  },
  {
    role: 'Freelancer Frontend Developer',
    company: 'Personal Projects',
    period: '2023 — Present',
    description: 'Building responsive web interfaces, portfolios and interactive components. Using HTML, CSS, JavaScript and modern frameworks like React and Next.js.',
    icon: 'fas fa-code',
  },
]

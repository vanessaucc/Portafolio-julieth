export interface EducationItem {
  degreeEs: string
  degreeEn: string
  institution: string
  location: string
  period: string
  descriptionEs: string
  descriptionEn: string
  icon: string
}

export interface ExperienceItem {
  roleEs: string
  roleEn: string
  company: string
  period: string
  descriptionEs: string
  descriptionEn: string
  icon: string
}

export const education: EducationItem[] = [
  {
    degreeEs: 'Ingeniería de Software',
    degreeEn: 'Software Engineering',
    institution: 'Universidad Cooperativa de Colombia',
    location: 'Pasto, Nariño',
    period: '2023 — Presente',
    descriptionEs: 'Formación en desarrollo de software, arquitectura de sistemas, diseño de interfaces, bases de datos y trabajo en equipo. Participación en proyectos académicos interdisciplinarios.',
    descriptionEn: 'Training in software development, systems architecture, interface design, databases and teamwork. Participation in interdisciplinary academic projects.',
    icon: 'fas fa-graduation-cap',
  },
]

export const experience: ExperienceItem[] = [
  {
    roleEs: 'Desarrolladora Web (Proyectos Académicos)',
    roleEn: 'Web Developer (Academic Projects)',
    company: 'Universidad Cooperativa de Colombia',
    period: '2023 — Presente',
    descriptionEs: 'Desarrollo de aplicaciones web con Django, React y Next.js. Implementación de sistemas de monitoreo con Grafana y Prometheus. Aplicación de metodologías ágiles y buenas prácticas de programación.',
    descriptionEn: 'Development of web applications with Django, React and Next.js. Implementation of monitoring systems with Grafana and Prometheus. Application of agile methodologies and programming best practices.',
    icon: 'fas fa-laptop-code',
  },
  {
    roleEs: 'Desarrolladora Frontend Freelancer',
    roleEn: 'Freelancer Frontend Developer',
    company: 'Personal Projects',
    period: '2023 — Present',
    descriptionEs: 'Construcción de interfaces web responsivas, portafolios y componentes interactivos. Uso de HTML, CSS, JavaScript y frameworks modernos como React y Next.js.',
    descriptionEn: 'Building responsive web interfaces, portfolios and interactive components. Using HTML, CSS, JavaScript and modern frameworks like React and Next.js.',
    icon: 'fas fa-code',
  },
]

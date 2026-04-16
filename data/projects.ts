export interface Project {
  title: string
  description: string
  tags: string[]
  icon: string
  github: string
  demo: string | null
  color: string
}

export const projects: Project[] = [
  {
    title: 'Portafolio Web Personal',
    description: 'Portafolio profesional desarrollado con Next.js aplicando principios de diseño UI/UX modernos. Incluye secciones de proyectos, experiencia y contacto.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    icon: 'fas fa-briefcase',
    github: 'https://github.com/vanessaucc/Portafolio-julieth',
    demo: null,
    color: '#7c3aed',
  },
  {
    title: 'Sistema de Monitoreo con Grafana',
    description: 'Implementación de un sistema de monitoreo de métricas con Grafana y Prometheus. Visualización en tiempo real de indicadores de rendimiento del sistema.',
    tags: ['Grafana', 'Prometheus', 'DevOps', 'Métricas'],
    icon: 'fas fa-chart-line',
    github: 'https://github.com/vanessaucc/landingpage',
    demo: null,
    color: '#9333ea',
  },
  {
    title: 'Servicios de Mascotas',
    description: 'Aplicación web que conecta usuarios con servicios de cuidado y paseo de mascotas. Desarrollada con Django y MySQL, incluye autenticación y perfiles.',
    tags: ['Django', 'Python', 'MySQL', 'HTML/CSS'],
    icon: 'fas fa-paw',
    github: 'https://github.com/vanessaucc/interfaz-de-clase-de-IA',
    demo: null,
    color: '#a855f7',
  },
  {
    title: 'Proyecto Final de Calidad',
    description: 'Proyecto académico de ingeniería de software enfocado en métricas de calidad, pruebas y documentación técnica bajo estándares profesionales.',
    tags: ['Python', 'Calidad', 'Testing', 'Documentación'],
    icon: 'fas fa-shield-halved',
    github: 'https://github.com/vanessaucc/proyectofinalcalidad',
    demo: null,
    color: '#c084fc',
  },
]

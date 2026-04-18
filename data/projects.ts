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
    title: 'VALENSSIA — Visualizador de Cálculo',
    description: 'Plataforma educativa interactiva para explorar cálculo multivariable. Permite graficar funciones en 3D, visualizar derivadas parciales y gradientes, resolver optimizaciones e integrales, con historial de cálculos.',
    tags: ['JavaScript', 'Three.js', 'Matemáticas', 'Educativo'],
    icon: 'fas fa-cube',
    github: 'https://github.com/vanessaucc',
    demo: 'https://proyecto-grafica-calculo.vercel.app/',
    color: '#7c3aed',
  },
  {
    title: 'Interfaz de Componentes Frontend',
    description: 'Proyecto de desarrollo frontend experimental construido con Vite y TypeScript. Exploración de componentes modernos, patrones de UI y flujos de trabajo con herramientas de última generación.',
    tags: ['Vite', 'TypeScript', 'Frontend', 'Componentes'],
    icon: 'fas fa-layer-group',
    github: 'https://github.com/vanessaucc',
    demo: 'https://pruebas-valeria-vanessa.vercel.app/',
    color: '#0ea5e9',
  },
  {
    title: 'Portafolio Web Personal',
    description: 'Portafolio profesional desarrollado con Next.js aplicando principios de diseño UI/UX modernos. Incluye secciones de proyectos, experiencia, herramientas y contacto.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    icon: 'fas fa-briefcase',
    github: 'https://github.com/vanessaucc/Portafolio-julieth',
    demo: null,
    color: '#9333ea',
  },
  {
    title: 'Sistema de Monitoreo con Grafana',
    description: 'Implementación de un sistema de monitoreo de métricas con Grafana y Prometheus. Visualización en tiempo real de indicadores de rendimiento del sistema.',
    tags: ['Grafana', 'Prometheus', 'DevOps', 'Métricas'],
    icon: 'fas fa-chart-line',
    github: 'https://github.com/vanessaucc/landingpage',
    demo: null,
    color: '#a855f7',
  },
  {
    title: 'Servicios de Mascotas',
    description: 'Aplicación web que conecta usuarios con servicios de cuidado y paseo de mascotas. Desarrollada con Django y MySQL, incluye autenticación, perfiles y búsqueda de servicios.',
    tags: ['Django', 'Python', 'MySQL', 'HTML/CSS'],
    icon: 'fas fa-paw',
    github: 'https://github.com/vanessaucc/interfaz-de-clase-de-IA',
    demo: null,
    color: '#c084fc',
  },
  {
    title: 'Proyecto Final de Calidad',
    description: 'Proyecto académico de ingeniería de software enfocado en métricas de calidad, pruebas automatizadas y documentación técnica bajo estándares profesionales.',
    tags: ['Python', 'Testing', 'Calidad', 'Documentación'],
    icon: 'fas fa-shield-halved',
    github: 'https://github.com/vanessaucc/proyectofinalcalidad',
    demo: null,
    color: '#e879f9',
  },
]

export interface Project {
  titleEs: string
  titleEn: string
  descriptionEs: string
  descriptionEn: string
  tags: string[]
  icon: string
  github: string
  demo: string | null
  color: string
}

export const projects: Project[] = [
  {
    titleEs: 'VALENSSIA — Visualizador de Cálculo',
    titleEn: 'VALENSSIA — Calculus Visualizer',
    descriptionEs: 'Plataforma educativa interactiva para explorar cálculo multivariable. Permite graficar funciones en 3D, visualizar derivadas parciales y gradientes, resolver optimizaciones e integrales, con historial de cálculos.',
    descriptionEn: 'Interactive educational platform for exploring multivariable calculus. Graph 3D functions, visualize partial derivatives and gradients, solve optimizations and integrals, with calculation history.',
    tags: ['JavaScript', 'Three.js', 'Mathematics', 'Educational'],
    icon: 'fas fa-cube',
    github: 'https://github.com/vanessaucc',
    demo: 'https://proyecto-grafica-calculo.vercel.app/',
    color: '#7c3aed',
  },
  {
    titleEs: 'Interfaz de Componentes Frontend',
    titleEn: 'Frontend Component Interface',
    descriptionEs: 'Proyecto de desarrollo frontend experimental construido con Vite y TypeScript. Exploración de componentes modernos, patrones de UI y flujos de trabajo con herramientas de última generación.',
    descriptionEn: 'Experimental frontend development project built with Vite and TypeScript. Exploration of modern components, UI patterns and workflows with cutting-edge tools.',
    tags: ['Vite', 'TypeScript', 'Frontend', 'Components'],
    icon: 'fas fa-layer-group',
    github: 'https://github.com/vanessaucc',
    demo: 'https://pruebas-valeria-vanessa.vercel.app/',
    color: '#0ea5e9',
  },
  {
    titleEs: 'Portafolio Web Personal',
    titleEn: 'Personal Web Portfolio',
    descriptionEs: 'Portafolio profesional desarrollado con React y TypeScript aplicando principios de diseño UI/UX modernos. Incluye secciones de proyectos, experiencia, herramientas y contacto.',
    descriptionEn: 'Professional portfolio developed with Next.js applying modern UI/UX design principles. Includes projects, experience, tools and contact sections.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: 'fas fa-briefcase',
    github: 'https://github.com/vanessaucc/Portafolio-julieth',
    demo: null,
    color: '#9333ea',
  },
  {
    titleEs: 'Landingpage',
    titleEn: 'Landingpage',
    descriptionEs: 'Implementación de un sistema de monitoreo de métricas con Grafana y Prometheus. Visualización en tiempo real de indicadores de rendimiento del sistema.',
    descriptionEn: 'Implementation of a metrics monitoring system with Grafana and Prometheus. Real-time visualization of system performance indicators.',
    tags: ['Grafana', 'Prometheus', 'DevOps', 'Metrics'],
    icon: 'fas fa-rocket',
    github: 'https://github.com/vanessaucc/landingpage',
    demo: null,
    color: '#a855f7',
  },
  {
    titleEs: 'interfaz-de-clase-de-IA',
    titleEn: 'interfaz-de-clase-de-IA',
    descriptionEs: 'Aplicación web que conecta usuarios con servicios de cuidado y paseo de mascotas. Desarrollada con Django y MySQL, incluye autenticación, perfiles y búsqueda de servicios.',
    descriptionEn: 'Web application connecting users with pet care and walking services. Built with Django and MySQL, includes authentication, profiles and service search.',
    tags: ['Django', 'Python', 'MySQL', 'HTML/CSS'],
    icon: 'fas fa-robot',
    github: 'https://github.com/vanessaucc/interfaz-de-clase-de-IA',
    demo: null,
    color: '#c084fc',
  },
  {
    titleEs: 'Proyecto Final de Calidad',
    titleEn: 'Software Quality Final Project',
    descriptionEs: 'Proyecto académico de ingeniería de software enfocado en métricas de calidad, pruebas automatizadas y documentación técnica bajo estándares profesionales.',
    descriptionEn: 'Academic software engineering project focused on quality metrics, automated testing and technical documentation under professional standards.',
    tags: ['Python', 'Testing', 'Quality', 'Documentation'],
    icon: 'fas fa-shield-halved',
    github: 'https://github.com/vanessaucc/proyectofinalcalidad',
    demo: null,
    color: '#e879f9',
  },
]

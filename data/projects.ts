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
  { title: 'Plataforma de Servicios para Mascotas', description: 'Aplicación web que conecta usuarios con servicios de cuidado y paseo de mascotas. Desarrollada con Django y MySQL, incluye autenticación, perfiles y búsqueda de servicios.', tags: ['Django', 'Python', 'MySQL', 'HTML/CSS'], icon: '🐾', github: 'https://github.com/vanessaucc', demo: null, color: '#a855f7' },
  { title: 'Portafolio Web Personal', description: 'Portafolio profesional desarrollado con Next.js aplicando principios de diseño UI/UX modernos. Incluye secciones de proyectos, experiencia y contacto.', tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'], icon: '💼', github: 'https://github.com/vanessaucc', demo: null, color: '#7c3aed' },
  { title: 'Sistema de Monitoreo con Grafana', description: 'Implementación de un sistema de monitoreo de métricas con Grafana y Prometheus. Visualización en tiempo real de indicadores de rendimiento del sistema.', tags: ['Grafana', 'Prometheus', 'DevOps', 'Métricas'], icon: '📊', github: 'https://github.com/vanessaucc', demo: null, color: '#9333ea' },
  { title: 'Generación de Energía — Electromagnetismo', description: 'Proyecto académico interdisciplinario que integra conceptos de física y programación para simular y analizar principios de generación de energía electromagnética.', tags: ['Python', 'Física', 'Simulación', 'Académico'], icon: '⚡', github: 'https://github.com/vanessaucc', demo: null, color: '#c084fc' },
]

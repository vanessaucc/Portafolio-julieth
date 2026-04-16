export interface AiTool {
  name: string
  icon: string
  color: string
  descEs: string
  descEn: string
}

export const aiTools: AiTool[] = [
  {
    name: 'ChatGPT',
    icon: 'fas fa-robot',
    color: '#10a37f',
    descEs: 'Generación de código, depuración y resolución de problemas técnicos complejos.',
    descEn: 'Code generation, debugging and complex technical problem solving.',
  },
  {
    name: 'Claude',
    icon: 'fas fa-brain',
    color: '#cc785c',
    descEs: 'Análisis de código, documentación técnica y asistencia en arquitectura de software.',
    descEn: 'Code analysis, technical documentation and software architecture assistance.',
  },
  {
    name: 'GitHub Copilot',
    icon: 'fab fa-github',
    color: '#a855f7',
    descEs: 'Completado inteligente de código integrado en el editor con sugerencias contextuales.',
    descEn: 'Intelligent code completion integrated in the editor with contextual suggestions.',
  },
  {
    name: 'Cursor',
    icon: 'fas fa-code',
    color: '#0ea5e9',
    descEs: 'Editor de código impulsado por IA con capacidades de refactoring y generación.',
    descEn: 'AI-powered code editor with refactoring and code generation capabilities.',
  },
  {
    name: 'Hugging Face',
    icon: 'fas fa-microchip',
    color: '#f59e0b',
    descEs: 'Plataforma de modelos de ML para NLP, visión por computadora y pipelines de IA.',
    descEn: 'ML model platform for NLP, computer vision and AI pipelines.',
  },
  {
    name: 'Midjourney',
    icon: 'fas fa-palette',
    color: '#ec4899',
    descEs: 'Generación de imágenes con IA para prototipos de interfaz y recursos visuales.',
    descEn: 'AI image generation for interface prototyping and visual assets.',
  },
]

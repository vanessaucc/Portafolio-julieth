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
    name: 'Gemini',
    icon: 'fas fa-gem',
    color: '#4285f4',
    descEs: 'Modelo multimodal de Google para generación de texto, código y análisis de imágenes.',
    descEn: 'Google\'s multimodal model for text generation, coding and image analysis.',
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
    name: 'v0 by Vercel',
    icon: 'fas fa-wand-magic-sparkles',
    color: '#e879f9',
    descEs: 'Generación de componentes UI con IA a partir de descripciones en lenguaje natural.',
    descEn: 'AI-powered UI component generation from natural language descriptions.',
  },
]

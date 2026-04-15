export interface Skill {
  name: string
  icon: string
  level: number
}

export const skills: Skill[] = [
  { name: 'HTML/CSS',      icon: 'fab fa-html5',   level: 85 },
  { name: 'JavaScript',    icon: 'fab fa-js',       level: 75 },
  { name: 'React',         icon: 'fab fa-react',    level: 70 },
  { name: 'Next.js',       icon: 'fas fa-n',        level: 65 },
  { name: 'Python/Django', icon: 'fab fa-python',   level: 70 },
  { name: 'MySQL',         icon: 'fas fa-database', level: 65 },
  { name: 'Git/GitHub',    icon: 'fab fa-github',   level: 80 },
  { name: 'Figma/UI',      icon: 'fab fa-figma',    level: 60 },
]

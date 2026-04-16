export interface Skill {
  name: string
  icon: string
  color: string
}

export const skills: Skill[] = [
  { name: 'React',       icon: 'fab fa-react',    color: '#61dafb' },
  { name: 'Next.js',     icon: 'fas fa-n',        color: '#a855f7' },
  { name: 'TypeScript',  icon: 'fab fa-js',       color: '#3178c6' },
  { name: 'JavaScript',  icon: 'fab fa-js-square',color: '#f7df1e' },
  { name: 'Python',      icon: 'fab fa-python',   color: '#3776ab' },
  { name: 'Java',        icon: 'fab fa-java',     color: '#f89820' },
  { name: 'Django',      icon: 'fas fa-server',   color: '#092e20' },
  { name: 'Tailwind',    icon: 'fas fa-wind',     color: '#38bdf8' },
  { name: 'HTML/CSS',    icon: 'fab fa-html5',    color: '#e34f26' },
  { name: 'SQL / MySQL', icon: 'fas fa-database', color: '#4479a1' },
  { name: 'Git / GitHub',icon: 'fab fa-github',   color: '#6e40c9' },
  { name: 'AWS',         icon: 'fab fa-aws',      color: '#ff9900' },
  { name: 'Docker',      icon: 'fab fa-docker',   color: '#2496ed' },
  { name: 'Figma',       icon: 'fab fa-figma',    color: '#f24e1e' },
]

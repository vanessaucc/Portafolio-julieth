export interface Testimonial {
  name: string
  role: string
  avatar: string
  stars: number
  text: string
}

export const testimonials: Testimonial[] = [
  { name: 'Yasmin Andrade', role: 'Abogada - Universidad de Nariño', avatar: '👩‍⚖️', stars: 4.5, text: 'Vanessa es una desarrolladora muy comprometida. Desde una perspectiva jurídica, destaco su responsabilidad, ética profesional y capacidad para analizar problemas con lógica y precisión. Siempre propone soluciones claras y bien fundamentadas, lo que hace que trabajar con ella sea una experiencia muy enriquecedora.' },
  { name: 'Luis Alfonso Diaz', role: 'Contador público - Docente Universidad Mariana', avatar: '👨‍🏫', stars: 5, text: 'Julieth Vanessa demuestra una gran atención al detalle, algo fundamental tanto en el desarrollo de software como en el área contable. Su organización, disciplina y capacidad para estructurar soluciones eficientes la destacan. Tiene una excelente gestión del tiempo y siempre entrega resultados de calidad.' },
  { name: 'Juan David Benavidez', role: 'Biólogo - Universidad de Nariño', avatar: '🧑‍🔬', stars: 4, text: 'Vanessa tiene una forma muy interesante de abordar los problemas, similar al pensamiento científico: observa, analiza y propone soluciones efectivas. Su capacidad de aprendizaje rápido y su trabajo colaborativo la hacen destacar en cualquier equipo.' },
  { name: 'Carolina Ortega', role: 'Química - Universidad de Nariño', avatar: '👩‍🔬', stars: 4.5, text: 'Me impresiona la forma en que Vanessa resuelve problemas complejos, aplicando un pensamiento lógico y estructurado. Su código es ordenado, bien documentado y eficiente. Sin duda, tiene un gran potencial como desarrolladora.' },
]

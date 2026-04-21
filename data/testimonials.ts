export interface Testimonial {
  name: string
  roleEs: string
  roleEn: string
  avatar: string
  stars: number
  textEs: string
  textEn: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Yasmin Andrade',
    roleEs: 'Abogada - Universidad de Nariño',
    roleEn: 'Lawyer - Universidad de Nariño',
    avatar: 'YA',
    stars: 4.5,
    textEs: 'Vanessa es una desarrolladora muy comprometida. Desde una perspectiva jurídica, destaco su responsabilidad, ética profesional y capacidad para analizar problemas con lógica y precisión. Siempre propone soluciones claras y bien fundamentadas, lo que hace que trabajar con ella sea una experiencia muy enriquecedora.',
    textEn: 'Vanessa is a very committed developer. From a legal perspective, I highlight her responsibility, professional ethics and ability to analyze problems with logic and precision. She always proposes clear and well-founded solutions, making working with her a very enriching experience.',
  },
  {
    name: 'Luis Alfonso Diaz',
    roleEs: 'Contador público - Docente Universidad Mariana',
    roleEn: 'Public Accountant - Professor at Universidad Mariana',
    avatar: 'LA',
    stars: 5,
    textEs: 'Julieth Vanessa demuestra una gran atención al detalle, algo fundamental tanto en el desarrollo de software como en el área contable. Su organización, disciplina y capacidad para estructurar soluciones eficientes la destacan. Tiene una excelente gestión del tiempo y siempre entrega resultados de calidad.',
    textEn: 'Julieth Vanessa demonstrates great attention to detail, something fundamental in both software development and accounting. Her organization, discipline and ability to structure efficient solutions make her stand out. She has excellent time management and always delivers quality results.',
  },
  {
    name: 'Juan David Benavidez',
    roleEs: 'Biólogo - Universidad de Nariño',
    roleEn: 'Biologist - Universidad de Nariño',
    avatar: 'JD',
    stars: 4,
    textEs: 'Vanessa tiene una forma muy interesante de abordar los problemas, similar al pensamiento científico: observa, analiza y propone soluciones efectivas. Su capacidad de aprendizaje rápido y su trabajo colaborativo la hacen destacar en cualquier equipo.',
    textEn: 'Vanessa has a very interesting way of approaching problems, similar to scientific thinking: she observes, analyzes and proposes effective solutions. Her rapid learning ability and collaborative work make her stand out in any team.',
  },
  {
    name: 'Carolina Ortega',
    roleEs: 'Química - Universidad de Nariño',
    roleEn: 'Chemist - Universidad de Nariño',
    avatar: 'CO',
    stars: 4.5,
    textEs: 'Me impresiona la forma en que Vanessa resuelve problemas complejos, aplicando un pensamiento lógico y estructurado. Su código es ordenado, bien documentado y eficiente. Sin duda, tiene un gran potencial como desarrolladora.',
    textEn: 'I am impressed by the way Vanessa solves complex problems, applying logical and structured thinking. Her code is neat, well-documented and efficient. She undoubtedly has great potential as a developer.',
  },
]

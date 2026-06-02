export const skills = {
  languages: ['C++', 'C#', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Swift'],
  frameworks: ['React', 'FastAPI', 'Node.js', 'Express', 'MongoDB', 'Spark', 'Tailwind CSS'],
  cloud: ['Docker', 'Terraform', 'AWS', 'GitHub Actions', 'Git', 'MLflow', 'DVC'],
} as const

export const skillCategories = [
  { title: 'Languages', items: skills.languages },
  { title: 'Frameworks & Databases', items: skills.frameworks },
  { title: 'Cloud & DevOps', items: skills.cloud },
] as const

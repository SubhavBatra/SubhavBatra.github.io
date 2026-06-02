export type Education = {
  degree: string
  school: string
  period: string
  location: string
  gpa?: string
}

export const education: Education[] = [
  {
    degree: 'Master of Software Engineering (Professional)',
    school: 'The University of Queensland',
    period: 'Expected Jun 2026',
    location: 'Brisbane, Australia',
    gpa: 'GPA: 5.85/7',
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'Thapar Institute of Engineering and Technology',
    period: '2020 – 2024',
    location: 'India',
    gpa: 'GPA: 8.71/10',
  },
]

export type Experience = {
  company: string
  role: string
  location: string
  period: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: 'Jobro',
    role: 'Software Engineer (Product)',
    location: 'Shenzhen, China',
    period: 'Nov 2025 – Dec 2025',
    bullets: [
      'Delivered full-stack product features across frontend, backend, authentication, and data workflows within a 4-week startup internship, owning features from requirement clarification to production debugging.',
      'Built an iOS swipe-based job application flow using Supabase for 1,000+ active users; developed an AI-assisted job-ad scraping workflow that reduced manual posting effort by ~80%.',
    ],
  },
  {
    company: 'UQ Cyber – Detack',
    role: 'Cybersecurity Researcher',
    location: 'Brisbane, Australia',
    period: 'Feb 2025 – Nov 2025',
    bullets: [
      'Assessed Detack\'s EPAS password auditing system across password analytics, policy enforcement, and compliance workflows, improving visibility into enterprise password risk.',
      'Mapped authentication weaknesses to APP 11, GDPR, and ISO 27001 controls; built PoC artefacts that translated technical findings into business-readable risk insights.',
    ],
  },
  {
    company: 'Concept Robotics and Automation',
    role: 'Software Engineering Intern',
    location: 'India',
    period: 'Jan 2024 – Jun 2024',
    bullets: [
      'Developed an IoT-based machine monitoring system with a React, Node.js, Express, and MongoDB dashboard for real-time production visibility.',
      'Integrated frontend, backend, database, and sensor-driven workflows into an end-to-end industrial monitoring system.',
    ],
  },
  {
    company: 'Celebal Technologies',
    role: 'Data Science Intern',
    location: 'India',
    period: 'Jun 2023 – Aug 2023',
    bullets: [
      'Built data analysis and modelling workflows on an FMCG sales dataset using SVM, KNN, and Naive Bayes classification techniques.',
      'Presented findings to stakeholders and received a Silver Badge for internship performance.',
    ],
  },
]

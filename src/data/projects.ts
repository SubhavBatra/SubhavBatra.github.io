export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  accent: string
  image?: string
}

export const projects: Project[] = [
  {
    slug: 'spendsmart',
    title: 'SpendSmart',
    description:
      'Full-stack cloud expense platform with Cognito auth, RBAC, budget alerts, and collaborator sharing. Containerised deployment with Docker, Terraform, and AWS.',
    tags: ['React', 'FastAPI', 'Docker', 'AWS', 'Terraform'],
    github: 'https://github.com/SubhavBatra/SpendSmart',
    accent: 'from-sky-500/20 to-blue-600/20',
  },
  {
    slug: 'kidney-ml',
    title: 'Kidney Disease Classification',
    description:
      'End-to-end CNN pipeline with MLflow and DVC for 100% reproducible training and model versioning. Docker containerisation with CI/CD on AWS.',
    tags: ['Python', 'MLflow', 'DVC', 'Docker', 'AWS'],
    github: 'https://github.com/SubhavBatra/Kidney-Disease-Prediciton-MLOps',
    accent: 'from-emerald-500/20 to-teal-600/20',
    image: '/images/projects/kidney-ml.png',
  },
  {
    slug: 'sarvogya',
    title: 'Sarvogya',
    description:
      'Healthcare web app predicting patient admission urgency (79% accuracy) with automated PDF report extraction and blockchain-secured patient records.',
    tags: ['React', 'Random Forest', 'Solidity', 'Node.js'],
    github: 'https://github.com/SubhavBatra/Sarvogya',
    accent: 'from-violet-500/20 to-purple-600/20',
    image: '/images/projects/sarvogya.png',
  },
  {
    slug: 'money-mentor',
    title: 'Money-Mentor',
    description:
      'Multilingual financial literacy platform with investment insights and an LSTM model trained on 5 years of data from 25+ stocks for 30-day forecasts.',
    tags: ['React', 'LSTM', 'Python'],
    live: 'https://money-mentor.streamlit.app/',
    accent: 'from-amber-500/20 to-orange-600/20',
  },
  {
    slug: 'sintrest',
    title: 'Sintrest',
    description:
      'Full-stack social media application with Google Authentication, Sanity.io CMS, and real-time post creation, saving, and commenting.',
    tags: ['React', 'Tailwind CSS', 'Sanity.io'],
    live: 'https://sintrest.netlify.app/',
    accent: 'from-rose-500/20 to-pink-600/20',
    image: '/images/projects/sintrest.png',
  },
]

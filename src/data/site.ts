export const site = {
  name: 'Subhav Batra',
  role: 'Software Engineer',
  tagline: 'Full-stack · Cloud · AI/ML',
  typingPhrases: [
    'Full-stack · Cloud · AI/ML',
    'Building scalable web applications',
    'Cloud-native systems & MLOps',
    'Open to software engineering roles',
  ],
  email: 'batrasubhav@gmail.com',
  phone: '+61 452 648 544',
  location: 'Brisbane, Australia',
  openToWork: true,
  resumeAvailable: true,
  profileImage: '/images/profile.png',
  resumePath: '/resume.pdf',
  socials: {
    github: 'https://github.com/SubhavBatra',
    linkedin: 'https://linkedin.com/in/subhavbatra',
    leetcode: 'https://leetcode.com/legion_corp',
  },
  stats: [
    { label: 'Languages', value: 7 },
    { label: 'Internships', value: 4 },
    { label: 'Projects', value: 5 },
  ],
  heroSkills: ['React', 'TypeScript', 'Python', 'FastAPI', 'AWS', 'Docker'],
  bio: 'Early-career software engineer with hands-on experience in full-stack development, cloud-ready applications, automation, and AI/ML. I enjoy solving real business problems and building practical solutions with measurable impact — from IoT dashboards and cybersecurity research to cloud expense platforms and MLOps pipelines.',
  experienceIncludes: ['Jobro', 'UQ Cyber', 'Concept Robotics', 'Celebal Technologies'],
  certifications: [
    'Mathematics for Machine Learning — Imperial College London, Coursera',
    'Accelerated Computer Science Fundamentals — University of Illinois, Coursera',
    'Full Stack Web Development with NodeJS — Coding Blocks',
  ],
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
] as const

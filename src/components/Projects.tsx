import { Section } from './Section'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <Section
      id="work"
      title="Work"
      subtitle="Selected projects across full-stack, cloud, ML/MLOps, and healthcare."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}

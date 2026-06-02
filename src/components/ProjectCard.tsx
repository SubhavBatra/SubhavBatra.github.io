import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { GitHubIcon } from './icons'
import { TechIcon } from './TechIcon'

type ProjectCardProps = {
  project: Project
  index: number
}

function getInitials(title: string) {
  return title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const initials = getInitials(project.title)
  const hasImage = Boolean(project.image)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/10 dark:border-white/5 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-sky-500/30 dark:hover:shadow-xl dark:hover:shadow-sky-500/5"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-violet-500/5" />
      </div>

      <div
        className={`relative h-44 overflow-hidden border-b border-slate-200 dark:border-white/5 ${
          hasImage ? 'bg-slate-100 dark:bg-slate-900' : `flex items-center justify-center bg-gradient-to-br ${project.accent}`
        }`}
      >
        {hasImage ? (
          <>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90 dark:from-slate-950/70" />
          </>
        ) : (
          <motion.span
            className="text-5xl font-bold text-slate-300/80 dark:text-white/20"
            whileHover={{ scale: 1.1, rotate: 3 }}
          >
            {initials}
          </motion.span>
        )}

        <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
          {project.tags.slice(0, 3).map((tag) => (
            <div
              key={tag}
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/90 shadow-sm backdrop-blur-sm dark:bg-slate-950/80"
            >
              <TechIcon name={tag} size={14} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-300">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600 dark:border-white/5 dark:bg-slate-900/60 dark:text-slate-400"
            >
              <TechIcon name={tag} size={12} />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

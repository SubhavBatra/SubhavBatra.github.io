import { motion } from 'framer-motion'
import { SkillBadge } from './SkillBadge'
import { Section } from './Section'
import { skillCategories } from '../data/skills'

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Full-stack development, cloud-ready systems, automation, and data-driven applications."
    >
      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
          >
            <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              <span className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent" />
              {category.title}
              <span className="h-px flex-1 bg-gradient-to-l from-sky-500/50 to-transparent" />
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
              {category.items.map((skill, i) => (
                <SkillBadge key={skill} name={skill} index={i} variant="card" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

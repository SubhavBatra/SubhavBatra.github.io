import { motion } from 'framer-motion'
import { Section } from './Section'
import { site } from '../data/site'
import { education } from '../data/education'

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
        >
          {site.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-500">
            Experience includes
          </p>
          <div className="flex flex-wrap gap-2">
            {site.experienceIncludes.map((company, i) => (
              <motion.span
                key={company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-4"
        >
          <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">Education</h3>
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-slate-300 dark:border-white/5 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-white/10"
            >
              <p className="font-medium text-slate-900 dark:text-white">{edu.degree}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {edu.school} · {edu.period} · {edu.location}
              </p>
              {edu.gpa && <p className="mt-1 text-xs text-sky-600 dark:text-sky-400/80">{edu.gpa}</p>}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-500">
            Certifications
          </h3>
          <ul className="space-y-2">
            {site.certifications.map((cert) => (
              <li key={cert} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="text-sky-600 dark:text-sky-500">▸</span>
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}

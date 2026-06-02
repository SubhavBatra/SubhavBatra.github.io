import { motion } from 'framer-motion'
import { Section } from './Section'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Internships and research roles across startups, cybersecurity, IoT, and data science."
    >
      <div className="relative space-y-0">
        <div className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent md:left-[15px]" />

        {experience.map((job, index) => (
          <motion.div
            key={`${job.company}-${job.period}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pb-12 pl-10 md:pl-12"
          >
            <motion.div
              whileInView={{ scale: [0, 1.2, 1] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
              className="absolute left-0 top-3 h-[22px] w-[22px] rounded-full border-2 border-sky-500 bg-slate-50 ring-4 ring-sky-500/20 dark:bg-slate-950 md:h-[26px] md:w-[26px]"
            />

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-sky-400/40 hover:shadow-md dark:border-white/5 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-sky-500/20 dark:hover:bg-white/[0.04]"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                  <p className="font-medium text-sky-600 dark:text-sky-400">{job.company}</p>
                </div>
                <div className="mt-1 shrink-0 text-sm text-slate-500 sm:mt-0 sm:text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

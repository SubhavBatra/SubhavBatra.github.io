import { motion } from 'framer-motion'
import { Section } from './Section'
import { leadership } from '../data/leadership'

export function BeyondCode() {
  return (
    <Section
      id="beyond"
      title="Beyond Code"
      subtitle="Community involvement and leadership outside of engineering work."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {leadership.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-violet-400/40 dark:border-white/5 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-violet-500/20 dark:hover:bg-white/[0.04]"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-violet-600 dark:text-violet-400">
              {item.org} · {item.period}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

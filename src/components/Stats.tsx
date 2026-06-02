import { motion } from 'framer-motion'
import { site } from '../data/site'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ value, label, index }: { value: number; label: string; index: number }) {
  const { ref, value: count } = useCountUp(value)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group relative text-center"
    >
      <p className="bg-gradient-to-b from-slate-800 to-sky-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl dark:from-white dark:to-sky-300">
        {count}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500 transition-colors group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-400 md:text-sm">
        {label}
      </p>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section className="relative border-y border-slate-200 bg-slate-100/80 py-14 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-violet-500/5" />
      <div className="relative mx-auto grid max-w-5xl grid-cols-3 gap-6 px-6">
        {site.stats.map((stat, i) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} index={i} />
        ))}
      </div>
    </section>
  )
}

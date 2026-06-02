import { motion } from 'framer-motion'
import { TechIcon } from './TechIcon'
import { getTechMeta } from '../lib/techIcons'

type SkillBadgeProps = {
  name: string
  index?: number
  variant?: 'pill' | 'card'
}

export function SkillBadge({ name, index = 0, variant = 'pill' }: SkillBadgeProps) {
  const { color } = getTechMeta(name)

  if (variant === 'card') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.04, duration: 0.35 }}
        whileHover={{ y: -4, scale: 1.03 }}
        className="group relative flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-slate-300 dark:border-white/5 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-white/15 dark:hover:bg-white/[0.06]"
        style={{ boxShadow: `0 0 0 0 ${color}00` }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 8px 32px ${color}22`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = ''
        }}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${color}18` }}
        >
          <TechIcon name={name} size={26} />
        </div>
        <span className="text-center text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
      </motion.div>
    )
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.06 }}
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-colors hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/10"
    >
      <TechIcon name={name} size={14} />
      {name}
    </motion.span>
  )
}

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionProps = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white"
          >
            {title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-3 h-1 w-16 origin-left rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
          />
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        {children}
      </motion.div>
    </section>
  )
}

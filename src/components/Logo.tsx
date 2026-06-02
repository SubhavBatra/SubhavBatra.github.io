import { motion } from 'framer-motion'

export function Logo() {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center gap-2"
      aria-label="Subhav Batra — home"
    >
      {/* Monogram slash — no box */}
      <span
        className="font-mono text-xl font-light leading-none text-sky-500/90 transition-colors group-hover:text-cyan-400 dark:text-sky-400"
        aria-hidden="true"
      >
        /
      </span>

      <span className="flex flex-col leading-none">
        <span className="text-lg font-semibold tracking-tight">
          <span className="text-slate-900 dark:text-white">subhav</span>
          <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
            batra
          </span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 transition-colors group-hover:text-sky-500 dark:text-slate-500">
          engineer
        </span>
      </span>
    </motion.a>
  )
}

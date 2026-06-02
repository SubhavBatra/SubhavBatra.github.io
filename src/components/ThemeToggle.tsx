import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-600 transition-colors hover:border-sky-400/50 hover:text-sky-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:text-sky-400"
    >
      <Moon
        size={18}
        className={`absolute transition-all duration-300 ${isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}
      />
      <Sun
        size={18}
        className={`absolute transition-all duration-300 ${isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
      />
    </motion.button>
  )
}

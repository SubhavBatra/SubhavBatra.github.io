import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { SocialLinks } from './SocialLinks'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './Logo'
import { navLinks } from '../data/site'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-lg shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 dark:shadow-black/20'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-sky-400 to-cyan-400 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:flex">
            <SocialLinks size={18} />
          </div>
          <button
            type="button"
            className="text-slate-600 dark:text-slate-400 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-xl dark:border-white/5 dark:bg-slate-950/95 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-slate-700 dark:text-slate-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 pt-2">
              <ThemeToggle />
              <SocialLinks size={20} showLabels />
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  )
}

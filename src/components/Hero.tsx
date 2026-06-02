import { motion } from 'framer-motion'
import { Download, Mail, MapPin } from 'lucide-react'
import { ProfilePortrait } from './ProfilePortrait'
import { SkillBadge } from './SkillBadge'
import { SocialLinks } from './SocialLinks'
import { TechMarquee } from './TechMarquee'
import { Typewriter } from './Typewriter'
import { site } from '../data/site'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center pt-24">
      <div className="relative mx-auto w-full max-w-5xl px-6 py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-10 xl:gap-16">
          {/* Copy — left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 space-y-6 lg:order-1"
          >
            {site.openToWork && (
              <motion.span
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 lg:hidden"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to Work
              </motion.span>
            )}

            <div>
              <motion.p
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-3 text-lg font-medium text-sky-600 md:text-xl dark:text-sky-400"
              >
                {site.role}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-slate-900 via-slate-700 to-sky-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-slate-100 dark:to-sky-300 md:text-6xl lg:text-7xl"
              >
                {site.name}
              </motion.h1>
              <Typewriter />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400"
            >
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-sky-600 dark:hover:text-sky-400"
              >
                <Mail size={16} />
                {site.email}
              </a>
              <span className="hidden text-slate-300 sm:inline dark:text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} />
                {site.location}
              </span>
            </motion.div>

            <div className="flex flex-wrap gap-2 pt-1">
              {site.heroSkills.map((skill, i) => (
                <SkillBadge key={skill} name={skill} index={i} variant="pill" />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="relative rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-shadow hover:shadow-sky-500/40"
              >
                Get in touch
              </motion.a>
              {site.resumeAvailable ? (
                <motion.a
                  href={site.resumePath}
                  download="Subhav_Batra_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <Download size={16} />
                  Download CV
                </motion.a>
              ) : (
                <span className="flex cursor-not-allowed items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm text-slate-400 dark:border-white/5 dark:text-slate-500">
                  <Download size={16} />
                  CV coming soon
                </span>
              )}
              <SocialLinks size={18} />
            </motion.div>
          </motion.div>

          {/* Portrait — top on mobile, right on desktop */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <ProfilePortrait variant="hero" />
          </div>
        </div>
      </div>

      <TechMarquee />
    </section>
  )
}

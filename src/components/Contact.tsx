import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
// import { LeetCodeIcon } from './icons'
import { Section } from './Section'
import { SocialLinks } from './SocialLinks'
import { site } from '../data/site'

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Open to full-time software engineering roles in Brisbane or across Australia."
    >
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-violet-50 p-8 shadow-sm dark:border-white/10 dark:from-sky-500/10 dark:via-slate-900/50 dark:to-violet-500/10 dark:shadow-none md:p-12"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

        <p className="relative mb-8 max-w-xl text-lg text-slate-600 dark:text-slate-300">
          Have an opportunity or want to collaborate? I&apos;d love to hear from you.
        </p>

        <div className="relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
          >
            <Mail size={20} className="text-sky-400" />
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
          >
            <Phone size={20} className="text-sky-400" />
            {site.phone}
          </a>
          {/* <a
            href={site.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 transition-colors hover:text-[#FFA116]"
          >
            <LeetCodeIcon size={20} className="text-[#FFA116]" />
            leetcode.com/legion_corp
          </a> */}
        </div>

        <div className="relative mt-8 flex flex-wrap items-center gap-6">
          <motion.a
            href={`mailto:${site.email}?subject=Hello%20Subhav`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25"
          >
            Send me a message
          </motion.a>
          <SocialLinks size={22} showLabels />
        </div>
      </motion.div>
    </Section>
  )
}

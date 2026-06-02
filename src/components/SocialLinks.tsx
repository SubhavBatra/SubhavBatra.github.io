import { motion } from 'framer-motion'
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from './icons'
import { site } from '../data/site'

type SocialLinksProps = {
  size?: number
  showLabels?: boolean
  className?: string
}

const links = [
  { href: site.socials.github, label: 'GitHub', Icon: GitHubIcon },
  { href: site.socials.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: site.socials.leetcode, label: 'LeetCode', Icon: LeetCodeIcon },
] as const

export function SocialLinks({ size = 20, showLabels = false, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + i * 0.08 }}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white ${showLabels ? 'px-3' : ''}`}
        >
          <Icon size={size} />
          {showLabels && <span className="text-sm">{label}</span>}
        </motion.a>
      ))}
    </div>
  )
}

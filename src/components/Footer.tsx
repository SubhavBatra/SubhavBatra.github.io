import { SocialLinks } from './SocialLinks'
import { site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-slate-200 py-10 dark:border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year} {site.name}. All rights reserved.
        </p>
        <SocialLinks size={20} />
      </div>
    </footer>
  )
}

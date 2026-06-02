import { TechIcon } from './TechIcon'
import { marqueeTechs } from '../lib/techIcons'

export function TechMarquee() {
  const items = [...marqueeTechs, ...marqueeTechs]

  return (
    <div className="relative mt-10 overflow-hidden border-y border-slate-200 py-4 dark:border-white/5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950" />

      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {items.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm dark:border-white/5 dark:bg-white/[0.03] dark:text-slate-400 dark:shadow-none"
          >
            <TechIcon name={tech} size={18} />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

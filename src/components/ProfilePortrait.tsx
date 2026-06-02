import { motion } from 'framer-motion'
import { site } from '../data/site'

type ProfilePortraitProps = {
  variant?: 'hero' | 'about'
}

export function ProfilePortrait({ variant = 'about' }: ProfilePortraitProps) {
  const isHero = variant === 'hero'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, x: isHero ? 24 : 0 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.7, delay: isHero ? 0.25 : 0, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative w-fit ${isHero ? 'mx-auto lg:mx-0 lg:ml-auto' : 'mx-auto md:mx-0'}`}
    >
      <div
        className={`absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-cyan-400/15 blur-2xl transition-opacity duration-500 group-hover:opacity-80 ${
          isHero ? 'opacity-70' : 'opacity-50'
        }`}
      />

      <div className="profile-ring relative rounded-[1.35rem] p-[3px]">
        <div className="relative overflow-hidden rounded-[1.15rem] bg-slate-100 dark:bg-slate-900">
          <div
            className={`relative aspect-[4/5] ${
              isHero ? 'w-56 sm:w-64 lg:w-72' : 'w-52 sm:w-56 md:w-60'
            }`}
          >
            <img
              src={site.profileImage}
              alt={`Portrait of ${site.name}`}
              className="h-full w-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-[1.02]"
              loading={isHero ? 'eager' : 'lazy'}
              decoding="async"
            />

            {/* Soft bottom fade only — keeps face clean */}
            <div
              className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent ${
                isHero
                  ? 'h-1/4 from-slate-950/30 dark:from-slate-950/45'
                  : 'h-2/5 from-slate-950/50 dark:from-slate-950/65'
              }`}
            />

            {!isHero && (
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-slate-950/75 px-4 py-3 backdrop-blur-md">
                <p className="text-sm font-semibold tracking-tight text-white">{site.name}</p>
                <p className="text-xs text-sky-300/90">{site.role}</p>
              </div>
            )}

            {site.openToWork && (
              <div
                className={`absolute flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-slate-950/80 font-medium uppercase tracking-wider text-emerald-400 backdrop-blur-sm ${
                  isHero
                    ? 'right-4 top-4 px-3 py-1.5 text-[11px]'
                    : 'right-3 top-3 px-2.5 py-1 text-[10px]'
                }`}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                {isHero ? 'Open to Work' : 'Open'}
              </div>
            )}
          </div>
        </div>
      </div>

      {isHero && (
        <span className="pointer-events-none absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-cyan-500/35 rounded-br-xl transition-colors group-hover:border-cyan-400" />
      )}
      {!isHero && (
        <>
          <span className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-sky-500/50 rounded-tl-lg transition-colors group-hover:border-sky-400" />
          <span className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-cyan-500/40 rounded-br-lg transition-colors group-hover:border-cyan-400" />
        </>
      )}
    </motion.div>
  )
}

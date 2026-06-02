import { site } from '../data/site'
import { useTypewriter } from '../hooks/useTypewriter'

export function Typewriter() {
  const { displayText } = useTypewriter({ phrases: site.typingPhrases })

  return (
    <p className="mt-4 flex min-h-[2rem] items-center text-lg md:text-xl">
      <span className="font-medium text-sky-600 dark:text-sky-400">{displayText}</span>
      <span
        className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-sky-500"
        aria-hidden="true"
      />
    </p>
  )
}

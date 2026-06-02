import { useEffect, useState } from 'react'

type UseTypewriterOptions = {
  phrases: readonly string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseMs?: number
}

export function useTypewriter({
  phrases,
  typeSpeed = 55,
  deleteSpeed = 35,
  pauseMs = 2200,
}: UseTypewriterOptions) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (phrases.length === 0) return

    const current = phrases[phraseIndex] ?? ''

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseMs)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(current.slice(0, displayText.length - 1))
        } else {
          setDisplayText(current.slice(0, displayText.length + 1))
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseMs])

  return { displayText, phraseIndex }
}

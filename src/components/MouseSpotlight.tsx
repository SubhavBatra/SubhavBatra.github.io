import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export function MouseSpotlight() {
  const { theme } = useTheme()
  const [enabled, setEnabled] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(!coarse && !reduced)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const updateDom = () => {
      if (elRef.current) {
        elRef.current.style.setProperty('--spotlight-x', `${pos.current.x}px`)
        elRef.current.style.setProperty('--spotlight-y', `${pos.current.y}px`)
      }
      raf.current = 0
    }

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!raf.current) raf.current = requestAnimationFrame(updateDom)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[1] transition-opacity duration-500 ${
        theme === 'dark' ? 'opacity-100' : 'opacity-70'
      }`}
      style={{
        background:
          'radial-gradient(520px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), var(--spotlight-color), transparent 42%)',
      }}
    />
  )
}

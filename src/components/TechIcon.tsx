import { getTechMeta } from '../lib/techIcons'

type TechIconProps = {
  name: string
  size?: number
  showColor?: boolean
  className?: string
}

export function TechIcon({ name, size = 20, showColor = true, className = '' }: TechIconProps) {
  const { icon: Icon, color } = getTechMeta(name)

  return (
    <Icon
      size={size}
      className={className}
      style={showColor ? { color } : undefined}
      aria-label={name}
    />
  )
}

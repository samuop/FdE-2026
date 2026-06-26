import type { LucideIcon } from 'lucide-react'

/** Tipo de cualquier icono de lucide-react */
export type IconType = LucideIcon

interface IconBadgeProps {
  icon: IconType
  color?: string
  /** lado del contenedor en px */
  size?: number
  /** tamaño del trazo del icono */
  iconSize?: number
  /** 'soft' = contenedor con fondo y borde tenue · 'plain' = solo icono */
  variant?: 'soft' | 'plain'
}

/**
 * Icono de líneas (Lucide) dentro de un contenedor sutil teñido con el
 * color de acento. Reemplaza a los emojis por una estética más sobria.
 */
export function IconBadge({
  icon: Icon,
  color = 'var(--blue-bright)',
  size = 42,
  iconSize,
  variant = 'soft',
}: IconBadgeProps) {
  const is = iconSize ?? Math.round(size * 0.52)
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.3),
        flex: 'none',
        display: 'grid',
        placeItems: 'center',
        background:
          variant === 'soft'
            ? `color-mix(in srgb, ${color} 13%, transparent)`
            : 'transparent',
        border:
          variant === 'soft'
            ? `1px solid color-mix(in srgb, ${color} 32%, transparent)`
            : 'none',
        boxShadow:
          variant === 'soft'
            ? `inset 0 1px 0 color-mix(in srgb, ${color} 18%, transparent)`
            : 'none',
      }}
    >
      <Icon size={is} color={color} strokeWidth={1.75} />
    </span>
  )
}

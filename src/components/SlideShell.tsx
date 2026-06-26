import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, stagger } from './motion'

interface OrbConfig {
  color: string
  size: number
  top?: string | number
  left?: string | number
  right?: string | number
  bottom?: string | number
  opacity?: number
}

interface SlideShellProps {
  eyebrow?: string
  step?: string
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
  orbs?: OrbConfig[]
  /** Si true, el header es más compacto para dejar espacio al body */
  compact?: boolean
}

/**
 * Carcasa común de cada slide: orbes decorativos, cabecera animada
 * (eyebrow + título + subtítulo) y el cuerpo con stagger.
 *
 * Las luces de color (orbs) se posicionan automáticamente DETRÁS del
 * contenido: la primera detrás del título (header) y la segunda detrás
 * de la zona de cards (body). Sólo se respeta el `color` que define cada
 * slide; la posición/tamaño/opacidad se calculan acá para mantener un
 * resplandor sutil y consistente en toda la presentación.
 */
export function SlideShell({
  eyebrow,
  step,
  title,
  subtitle,
  children,
  orbs = [],
  compact = false,
}: SlideShellProps) {
  // Tomamos sólo los colores definidos por el slide; las posiciones son fijas.
  const headerColor = orbs[0]?.color ?? 'var(--blue)'
  const bodyColor = orbs[1]?.color ?? 'var(--violet)'

  return (
    <div className="slide slide--content">
      {/* Luz detrás del título */}
      <div className="orb orb--header" style={{ background: headerColor }} />
      {/* Luz detrás de la zona de cards */}
      <div className="orb orb--body" style={{ background: bodyColor }} />

      <motion.div
        className="slide-header"
        variants={stagger}
        initial="hidden"
        animate="show"
        style={compact ? { marginBottom: 14 } : undefined}
      >
        {(eyebrow || step) && (
          <motion.div variants={fadeUp} className="row items-center gap-md wrap">
            {eyebrow && (
              <span className="eyebrow">
                <span className="dot" />
                {eyebrow}
              </span>
            )}
            {step && <span className="step-number">{step}</span>}
          </motion.div>
        )}
        <motion.h1 variants={fadeUp} className="slide-title">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={fadeUp} className="slide-subtitle">
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        className="slide-body col"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    </div>
  )
}

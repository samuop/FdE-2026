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
  return (
    <div className="slide">
      {orbs.map((o, i) => (
        <div
          key={i}
          className="orb"
          style={{
            background: o.color,
            width: o.size,
            height: o.size,
            top: o.top,
            left: o.left,
            right: o.right,
            bottom: o.bottom,
            ...(o.opacity !== undefined ? { opacity: o.opacity } : {}),
          }}
        />
      ))}

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

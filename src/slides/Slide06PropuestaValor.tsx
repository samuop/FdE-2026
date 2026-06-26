import { motion } from 'framer-motion'
import { Boxes, TrendingUp, HeartPulse } from 'lucide-react'
import { SlideShell } from '../components/SlideShell'
import { IconBadge } from '../components/IconBadge'
import type { IconType } from '../components/IconBadge'
import { fadeUp } from '../components/motion'

interface Col {
  icon: IconType
  title: string
  color: string
  glow?: boolean
  items: string[]
}

const cols: Col[] = [
  {
    icon: Boxes,
    title: 'Productos y servicios',
    color: 'var(--blue-bright)',
    glow: true,
    items: [
      'SaaS de gestión de inventario y ventas',
      'Módulo de automatización IA / OCR',
      'Módulo impositivo y contable',
      'Control multi-sucursal centralizado',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Creadores de alegrías',
    color: 'var(--green)',
    items: ['Modernización estructural', 'Competitividad en el mercado', 'Eficiencia operativa real'],
  },
  {
    icon: HeartPulse,
    title: 'Aliviadores de frustraciones',
    color: 'var(--pink)',
    items: [
      'Actualización inmediata de stock y precios',
      'Automatización de carga masiva',
      'Facturación electrónica y reportes ajustados',
    ],
  },
]

export function Slide06PropuestaValor() {
  return (
    <SlideShell
      eyebrow="Paso 5 · Lienzo de Propuesta de Valor"
      step="05 / 09"
      title={<>Cómo <span className="accent">creamos valor</span></>}
      subtitle="Productos y servicios que generan alegrías y alivian las frustraciones del comerciante."
      compact
      orbs={[
        { color: 'var(--violet)', size: 340, top: -100, right: -90 },
        { color: 'var(--green)', size: 240, bottom: -120, left: -60 },
      ]}
    >
      <div className="grid grid-3 gap-md">
        {cols.map((c) => {
          return (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className={`card ${c.glow ? 'card-glow' : ''}`}
              style={{ borderTop: `3px solid ${c.color}` }}
            >
              <IconBadge icon={c.icon} color={c.color} />
              <h3 style={{ color: c.color, marginTop: 12 }}>{c.title}</h3>
              <ul className="feature-list" style={{ marginTop: 12, gap: 9 }}>
                {c.items.map((t) => (
                  <li key={t} style={{ fontSize: '0.88rem' }}>
                    <span className="dot-mini" style={{ background: c.color }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </SlideShell>
  )
}

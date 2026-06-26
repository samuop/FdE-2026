import { motion } from 'framer-motion'
import { Target, Flag, Eye, MessageSquare, Wrench, Ear, Heart } from 'lucide-react'
import { SlideShell } from '../components/SlideShell'
import type { IconType } from '../components/IconBadge'
import { fadeUp } from '../components/motion'

interface Section {
  n: string
  icon: IconType
  q: string
  color: string
  items: string[]
}

/* Las 6 secciones perimetrales del mapa de empatía (1-6) */
const sections: Section[] = [
  {
    n: '1',
    icon: Target,
    q: '¿Quién?',
    color: 'var(--amber)',
    items: ['Empresas / PyMEs que necesitan gestionar manejos de inventarios'],
  },
  {
    n: '2',
    icon: Flag,
    q: '¿Qué necesita hacer? (Meta)',
    color: 'var(--green)',
    items: [
      'No perder ventas por no tener cargados a tiempo los precios/inventarios',
      'No perder horas/hombre en la carga de inventarios o precios',
    ],
  },
  {
    n: '3',
    icon: Eye,
    q: '¿Qué ve?',
    color: 'var(--blue-bright)',
    items: [
      'La competencia genera más ingresos',
      'El consumidor compara precios online',
      'Mercado, entorno inmediato, lecturas',
    ],
  },
  {
    n: '4',
    icon: MessageSquare,
    q: '¿Qué dice?',
    color: 'var(--violet-bright)',
    items: [
      '"Somos una empresa moderna"',
      '"Lo hacemos así hace años y funciona"',
      'Aplica mejoras incrementales, no estructurales',
    ],
  },
  {
    n: '5',
    icon: Wrench,
    q: '¿Qué hace?',
    color: 'var(--cyan)',
    items: ['Procesos manuales y centralizados', 'Pocas inversiones tecnológicas'],
  },
  {
    n: '6',
    icon: Ear,
    q: '¿Qué oye?',
    color: 'var(--pink)',
    items: [
      'Presión por digitalizar',
      'Los clientes piden precios online',
      'AFIP/ARCA: nuevas normativas fiscales',
    ],
  },
]

export function Slide04Empatia() {
  return (
    <SlideShell
      eyebrow="Paso 3 · Mapa de empatía"
      step="03 / 09"
      title={<>Dentro de la cabeza del <span className="accent">comerciante</span></>}
      subtitle='"Get out of the building": entender quién es, qué necesita, ve, oye, dice, hace y siente nuestro cliente.'
      compact
      orbs={[
        { color: 'var(--violet)', size: 320, top: -80, right: -80 },
        { color: 'var(--blue)', size: 280, bottom: -120, left: -60 },
      ]}
    >
      {/* 6 secciones perimetrales */}
      <div className="grid grid-3 gap-sm" style={{ marginBottom: 12 }}>
        {sections.map((s) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="card"
              style={{ borderTop: `3px solid ${s.color}`, padding: '12px 14px' }}
            >
              <div className="row items-center gap-sm" style={{ marginBottom: 7 }}>
                <span
                  style={{
                    width: 24, height: 24, borderRadius: 7, flex: 'none',
                    display: 'grid', placeItems: 'center',
                    background: `color-mix(in srgb, ${s.color} 14%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${s.color} 34%, transparent)`,
                  }}
                >
                  <Icon size={13} color={s.color} strokeWidth={1.9} />
                </span>
                <h3 style={{ color: s.color, margin: 0, fontSize: '0.9rem' }}>{s.q}</h3>
                <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--text-3)' }}>0{s.n}</span>
              </div>
              <ul className="feature-list" style={{ gap: 5 }}>
                {s.items.map((it, i) => (
                  <li key={i} style={{ fontSize: '0.78rem', lineHeight: 1.35 }}>
                    <span className="dot-mini" style={{ background: s.color }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      {/* 7 · Piensa y siente — el centro del mapa (Esfuerzos + Resultados) */}
      <motion.div
        variants={fadeUp}
        className="card card-glow"
        style={{ borderLeft: '3px solid var(--text-0)', padding: '14px 18px' }}
      >
        <div className="row items-center gap-sm" style={{ marginBottom: 10 }}>
          <span
            style={{
              width: 26, height: 26, borderRadius: 8, flex: 'none',
              display: 'grid', placeItems: 'center',
              background: 'color-mix(in srgb, var(--pink) 16%, transparent)',
              border: '1px solid color-mix(in srgb, var(--pink) 38%, transparent)',
            }}
          >
            <Heart size={14} color="var(--pink)" strokeWidth={1.9} />
          </span>
          <h3 style={{ margin: 0 }}>Piensa y siente</h3>
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--text-3)' }}>07</span>
        </div>
        <div className="grid grid-2 gap-md">
          <div>
            <div className="micro-label">Esfuerzos</div>
            <div className="row gap-sm wrap">
              {['Urgencia de modernizarse para subsistir', 'Riesgo de quedarse obsoleto', 'Tensión: tradición vs. agilidad'].map((t) => (
                <span key={t} className="pill" style={{ fontSize: '0.76rem' }}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="micro-label">Resultados</div>
            <div className="row gap-sm wrap">
              {['Eficiencia operativa', 'Modernización', 'Profesionalización de la gestión'].map((t) => (
                <span key={t} className="pill accent" style={{ fontSize: '0.76rem' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SlideShell>
  )
}

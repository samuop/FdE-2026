import { motion } from 'framer-motion'
import { Hammer, BarChart3, Compass } from 'lucide-react'
import { SlideShell } from '../components/SlideShell'
import type { IconType } from '../components/IconBadge'
import { fadeUp } from '../components/motion'

interface Phase {
  tag: string
  icon: IconType
  color: string
  title: string
  items: string[]
  foot: string
}

const phases: Phase[] = [
  {
    tag: 'Construir',
    icon: Hammer,
    color: 'var(--blue-bright)',
    title: '4 hipótesis a validar',
    items: [
      'Las PyMEs pierden dinero por desajustes de stock y precios',
      'La carga manual consume un tiempo excesivo',
      'Están dispuestas a adoptar un SaaS con IA',
      'La suscripción mensual es la modalidad preferida',
    ],
    foot: 'Herramienta: encuesta con escala Likert a dueños y gerentes de PyMEs.',
  },
  {
    tag: 'Medir',
    icon: BarChart3,
    color: 'var(--cyan)',
    title: 'Resultados de la encuesta',
    items: [
      'Armar planillas Excel consume 4–8 hs semanales',
      'Procesar el PDF del proveedor devuelve casi 1 día de trabajo/semana',
      'AFIP es la barrera mínima; multi-sucursal justifica mayor precio',
      'El auto-procesamiento de facturas es el factor crítico y diferencial',
    ],
    foot: 'Las 4 hipótesis se validaron de forma contundente.',
  },
  {
    tag: 'Aprender',
    icon: Compass,
    color: 'var(--green)',
    title: 'Decisión: perseverar y enfocar',
    items: [
      'No competir de frente en funcionalidades básicas',
      'El diferencial es el auto-procesamiento con IA',
      'Ese es el argumento de venta para que migren',
      'Próximo paso: construir un MVP centrado en esa función estrella',
    ],
    foot: 'Ponerlo en manos de los Early Adopters, medir e iterar.',
  },
]

export function Slide09CicloCMA() {
  return (
    <SlideShell
      eyebrow="Paso 8 · Lean Startup"
      step="08 / 09"
      title={<>Ciclo <span className="accent">Construir · Medir · Aprender</span></>}
      subtitle="Validamos las hipótesis con datos reales antes de seguir invirtiendo."
      compact
      orbs={[
        { color: 'var(--blue)', size: 300, top: -80, left: -70 },
        { color: 'var(--green)', size: 260, bottom: -110, right: -50 },
      ]}
    >
      <div className="grid grid-3 gap-md">
        {phases.map((p) => {
          const Icon = p.icon
          return (
          <motion.div key={p.tag} variants={fadeUp} className="card" style={{ borderTop: `3px solid ${p.color}`, padding: '18px 18px', display: 'flex', flexDirection: 'column' }}>
            <div className="row items-center gap-sm" style={{ marginBottom: 8 }}>
              <span
                style={{
                  width: 30, height: 30, borderRadius: 9, flex: 'none',
                  display: 'grid', placeItems: 'center',
                  background: `color-mix(in srgb, ${p.color} 14%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${p.color} 32%, transparent)`,
                }}
              >
                <Icon size={16} color={p.color} strokeWidth={1.8} />
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: p.color }}>{p.tag}</span>
            </div>
            <h3 style={{ fontSize: '0.98rem', marginBottom: 10 }}>{p.title}</h3>
            <ul className="feature-list" style={{ gap: 7 }}>
              {p.items.map((it, i) => (
                <li key={i} style={{ fontSize: '0.8rem' }}>
                  <span className="dot-mini" style={{ background: p.color }} />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 'auto', paddingTop: 12, fontSize: '0.76rem', color: 'var(--text-3)', fontStyle: 'italic' }}>{p.foot}</p>
          </motion.div>
          )
        })}
      </div>
    </SlideShell>
  )
}

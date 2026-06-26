import { motion } from 'framer-motion'
import { Users, Gem, Truck, Handshake, Wallet, Wrench, Settings, Link2, Receipt } from 'lucide-react'
import { SlideShell } from '../components/SlideShell'
import type { IconType } from '../components/IconBadge'
import { fadeUp } from '../components/motion'

interface Block {
  n: string
  icon: IconType
  title: string
  text: string
  color: string
}

const blocks: Block[] = [
  { n: '1', icon: Users, title: 'Segmento de clientes', text: 'PyMEs comerciales argentinas', color: 'var(--amber)' },
  { n: '2', icon: Gem, title: 'Propuesta de valor', text: 'Automatización de carga vía IA/OCR', color: 'var(--cyan)' },
  { n: '3', icon: Truck, title: 'Canales', text: 'Sitio web, Google/LinkedIn Ads, ferias', color: 'var(--blue-bright)' },
  { n: '4', icon: Handshake, title: 'Relación con el cliente', text: 'Onboarding asistido, soporte WhatsApp', color: 'var(--green)' },
  { n: '5', icon: Wallet, title: 'Flujos de ingreso', text: 'Suscripción mensual por planes', color: 'var(--green)' },
  { n: '6', icon: Wrench, title: 'Recursos clave', text: 'Equipo dev, cloud, modelo IA/OCR', color: 'var(--violet-bright)' },
  { n: '7', icon: Settings, title: 'Actividades clave', text: 'Desarrollo, entrenamiento IA, soporte', color: 'var(--violet-bright)' },
  { n: '8', icon: Link2, title: 'Red de partners', text: 'AWS/Google Cloud, APIs IA, CAME', color: 'var(--blue-bright)' },
  { n: '9', icon: Receipt, title: 'Estructura de costos', text: 'Salarios, cloud, marketing', color: 'var(--pink)' },
]

export function Slide08Canvas() {
  return (
    <SlideShell
      eyebrow="Paso 7 · Business Model Canvas"
      step="07 / 09"
      title={<>El modelo de negocio en <span className="accent">9 bloques</span></>}
      subtitle="Una vista panorámica de cómo StockIA crea, entrega y captura valor. (El lienzo completo está en la slide 11.)"
      compact
      orbs={[
        { color: 'var(--blue)', size: 320, top: -90, right: -80 },
        { color: 'var(--violet)', size: 280, bottom: -120, left: -70 },
      ]}
    >
      <div className="grid grid-3 gap-md">
        {blocks.map((b) => {
          const Icon = b.icon
          return (
            <motion.div key={b.n} variants={fadeUp} className="card" style={{ padding: '15px 17px' }}>
              <div className="row items-center gap-sm">
                <span
                  style={{
                    width: 34, height: 34, borderRadius: 10, flex: 'none',
                    display: 'grid', placeItems: 'center',
                    background: `color-mix(in srgb, ${b.color} 13%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${b.color} 32%, transparent)`,
                  }}
                >
                  <Icon size={17} color={b.color} strokeWidth={1.8} />
                </span>
                <div className="col">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: b.color }}>0{b.n}</span>
                  <h3 style={{ fontSize: '0.92rem', margin: 0 }}>{b.title}</h3>
                </div>
              </div>
              <p style={{ marginTop: 8, fontSize: '0.8rem' }}>{b.text}</p>
            </motion.div>
          )
        })}
      </div>
    </SlideShell>
  )
}

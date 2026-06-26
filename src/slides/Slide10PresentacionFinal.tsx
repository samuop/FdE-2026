import { motion } from 'framer-motion'
import { ShoppingCart, Gift, Users, Zap, Rocket } from 'lucide-react'
import { SlideShell } from '../components/SlideShell'
import type { IconType } from '../components/IconBadge'
import { fadeUp } from '../components/motion'

interface QA {
  icon: IconType
  q: string
  hook: string
  color: string
  glow: string
  a: string
}

const qa: QA[] = [
  {
    icon: ShoppingCart,
    q: '¿Qué vendemos?',
    hook: 'Una factura se convierte en stock, solo',
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.18)',
    a: 'Un SaaS de gestión de inventario y ventas con IA. Fotografiás o arrastrás una factura y el sistema crea productos, actualiza stock, recalcula costos y sugiere precios. Todo en un panel para todas las sucursales.',
  },
  {
    icon: Gift,
    q: '¿Qué gana el cliente?',
    hook: 'Recupera casi un día de trabajo por semana',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.18)',
    a: 'Recupera 4–8 horas semanales perdidas en carga manual. Elimina errores de stock que cuestan ventas. Control total en tiempo real. El dueño deja de apagar incendios y se enfoca en crecer.',
  },
  {
    icon: Users,
    q: '¿Quién nos compra?',
    hook: 'PyMEs que viven el dolor todos los días',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.18)',
    a: 'Dueños y gerentes de PyMEs comerciales argentinas (ferreterías, distribuidoras, minimercados, retail) con 1 a 5 sucursales, cuyos proveedores actualizan listas de precios cada semana o quincena.',
  },
  {
    icon: Zap,
    q: '¿Por qué nosotros?',
    hook: 'Lo que ningún competidor resuelve',
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.18)',
    a: 'Somos el único sistema accesible para PyMEs que convierte una foto o un PDF en stock actualizado y precios sugeridos en segundos. Nadie procesa los documentos del proveedor con IA de forma nativa.',
  },
]

export function Slide10PresentacionFinal() {
  return (
    <SlideShell
      eyebrow="Paso 9 · Presentación final"
      step="09 / 09"
      title={<>El <span className="accent">pitch</span> que vende StockIA</>}
      compact
      orbs={[
        { color: 'var(--violet)', size: 320, top: -90, right: -80 },
        { color: 'var(--cyan)', size: 240, bottom: -110, left: -60 },
      ]}
    >
      <div className="grid grid-2 gap-md">
        {qa.map((item, idx) => {
          const Icon = item.icon
          return (
          <motion.div
            key={item.q}
            variants={fadeUp}
            className="card"
            style={{
              padding: '20px 22px',
              position: 'relative',
              overflow: 'hidden',
              background: `linear-gradient(135deg, ${item.glow}, rgba(255,255,255,0.02))`,
              borderColor: 'var(--border-strong)',
            }}
          >
            {/* Borde superior con gradiente del color */}
            <div
              style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${item.color}, transparent)`,
              }}
            />
            {/* Número de pregunta de fondo, grande y tenue */}
            <span
              style={{
                position: 'absolute', top: -8, right: 14,
                fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '4.5rem',
                color: item.color, opacity: 0.1, lineHeight: 1, pointerEvents: 'none',
              }}
            >
              {idx + 1}
            </span>

            <div className="row items-center gap-sm" style={{ marginBottom: 10 }}>
              <span
                style={{
                  width: 44, height: 44, borderRadius: 13, flex: 'none',
                  display: 'grid', placeItems: 'center',
                  background: `linear-gradient(135deg, ${item.color}33, ${item.color}11)`,
                  border: `1px solid ${item.color}55`,
                  boxShadow: `0 6px 18px ${item.glow}`,
                }}
              >
                <Icon size={22} color={item.color} strokeWidth={1.8} />
              </span>
              <div className="col">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-3)' }}>
                  {item.q}
                </span>
                <h3 style={{ margin: 0, color: item.color, fontSize: '1.02rem', lineHeight: 1.2 }}>
                  {item.hook}
                </h3>
              </div>
            </div>
            <p style={{ fontSize: '0.84rem', lineHeight: 1.5, color: 'var(--text-2)' }}>{item.a}</p>
          </motion.div>
          )
        })}
      </div>

      {/* Franja de cierre: el argumento de venta */}
      <motion.div
        variants={fadeUp}
        className="no-advance row items-center"
        style={{
          marginTop: 16,
          padding: '14px 22px',
          borderRadius: 16,
          gap: 16,
          background: 'linear-gradient(135deg, rgba(59,130,246,0.14), rgba(139,92,246,0.14))',
          border: '1px solid rgba(96,165,250,0.35)',
        }}
      >
        <span
          style={{
            width: 40, height: 40, borderRadius: 12, flex: 'none',
            display: 'grid', placeItems: 'center',
            background: 'color-mix(in srgb, var(--blue-bright) 16%, transparent)',
            border: '1px solid color-mix(in srgb, var(--blue-bright) 36%, transparent)',
          }}
        >
          <Rocket size={20} color="var(--blue-bright)" strokeWidth={1.8} />
        </span>
        <p style={{ fontSize: '0.98rem', color: 'var(--text-1)', lineHeight: 1.4 }}>
          <strong style={{ color: 'var(--text-0)' }}>El argumento que cierra la venta:</strong> una foto o un PDF se
          transforma en <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>stock actualizado y precios sugeridos en segundos</span>.
          Validado por el mercado, sin competencia directa.
        </p>
      </motion.div>
    </SlideShell>
  )
}

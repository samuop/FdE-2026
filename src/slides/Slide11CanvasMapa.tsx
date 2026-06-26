import { motion } from 'framer-motion'
import { Link2, Settings, Wrench, Gem, Handshake, Truck, Users, Receipt, Wallet } from 'lucide-react'
import type { IconType } from '../components/IconBadge'
import { fadeUp, stagger } from '../components/motion'

interface BlockProps {
  area: string
  icon: IconType
  title: string
  color: string
  items: string[]
  /** sub-bloque: número del Canvas */
  n: string
}

function CanvasBlock({ area, icon: Icon, title, color, items, n }: BlockProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="cv-block"
      style={{ gridArea: area, ['--cv-color' as string]: color }}
    >
      <div className="cv-block-head">
        <span className="cv-num" style={{ background: color }}>{n}</span>
        <span className="cv-icon">
          <Icon size={15} color={color} strokeWidth={1.85} />
        </span>
        <h3>{title}</h3>
      </div>
      <ul className="cv-list">
        {items.map((it, i) => (
          <li key={i}>
            <span className="cv-dot" style={{ background: color }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Slide11CanvasMapa() {
  return (
    <div className="slide" style={{ padding: 'clamp(16px, 2.5vw, 36px)' }}>
      <div className="orb" style={{ background: 'var(--blue)', width: 340, height: 340, top: -120, left: -100 }} />
      <div className="orb" style={{ background: 'var(--violet)', width: 320, height: 320, bottom: -140, right: -80 }} />

      <motion.div className="slide-header" variants={stagger} initial="hidden" animate="show" style={{ marginBottom: 10 }}>
        <motion.div variants={fadeUp} className="row items-center gap-md wrap">
          <span className="eyebrow"><span className="dot" />Paso 7 · Modelo de Negocio</span>
          <span className="step-number">Business Model Canvas · Equipo 1 · 2026</span>
        </motion.div>
        <motion.h1 variants={fadeUp} className="slide-title" style={{ marginBottom: 0, marginTop: 8 }}>
          Business Model <span className="accent">Canvas</span>
        </motion.h1>
      </motion.div>

      <motion.div
        className="slide-body cv-canvas"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <CanvasBlock
          area="partners"
          n="8"
          icon={Link2}
          title="Red de partners"
          color="#60a5fa"
          items={[
            'Proveedores cloud (AWS / Google Cloud)',
            'Proveedores de APIs de IA/OCR',
            'Estudios contables y consultoras PyME',
            'Cámaras empresariales (CAME)',
            'Incubadoras y fondos de inversión',
          ]}
        />
        <CanvasBlock
          area="activities"
          n="7"
          icon={Settings}
          title="Actividades clave"
          color="#818cf8"
          items={[
            'Desarrollo y mantenimiento del software',
            'Entrenamiento continuo del modelo IA',
            'Soporte técnico al cliente',
            'Actualizaciones normativas ARCA',
            'Marketing digital y capacitación',
          ]}
        />
        <CanvasBlock
          area="resources"
          n="6"
          icon={Wrench}
          title="Recursos clave"
          color="#a78bfa"
          items={[
            'Equipo de desarrollo',
            'Infraestructura cloud (AWS/Google Cloud)',
            'Modelo IA/OCR entrenado',
            'Equipo de soporte y ventas',
          ]}
        />
        <CanvasBlock
          area="value"
          n="2"
          icon={Gem}
          title="Propuesta de valor"
          color="#22d3ee"
          items={[
            'Automatización de carga de stock y precios vía IA/OCR',
            'Control multi-sucursal centralizado en tiempo real',
            'Facturación electrónica y reportes ARCA automáticos',
            'Eliminación de errores manuales y pérdida de ventas',
            'Accesible y escalable para PyMEs',
          ]}
        />
        <CanvasBlock
          area="relations"
          n="4"
          icon={Handshake}
          title="Relación con el cliente"
          color="#34d399"
          items={[
            'Onboarding asistido los primeros 30 días',
            'Soporte por WhatsApp y chat en vivo',
            'Tutoriales y centro de ayuda online',
            'Comunidad de usuarios',
            'Actualizaciones automáticas incluidas',
          ]}
        />
        <CanvasBlock
          area="channels"
          n="3"
          icon={Truck}
          title="Canales"
          color="#2dd4bf"
          items={[
            'Sitio web con free trial de 14 días',
            'Google Ads y LinkedIn Ads',
            'Redes sociales con contenido educativo',
            'Ferias y eventos PyME',
            'Canal de referidos entre clientes',
            'Alianzas con estudios contables',
          ]}
        />
        <CanvasBlock
          area="segments"
          n="1"
          icon={Users}
          title="Segmento de clientes"
          color="#fbbf24"
          items={['PyMEs comerciales argentinas']}
        />
        <CanvasBlock
          area="costs"
          n="9"
          icon={Receipt}
          title="Estructura de costos"
          color="#f472b6"
          items={[
            'Salarios del equipo de desarrollo y soporte',
            'Infraestructura cloud mensual',
            'Campañas de marketing digital',
          ]}
        />
        <CanvasBlock
          area="revenue"
          n="5"
          icon={Wallet}
          title="Flujos de ingreso"
          color="#4ade80"
          items={[
            'Suscripción mensual por planes',
            'Plan Básico: 1 sucursal · Plan Pro: hasta 3 sucursales',
            'Plan Enterprise: +3 sucursales + IA completa',
            'Cobro por implementación y migración de datos',
          ]}
        />
      </motion.div>
    </div>
  )
}

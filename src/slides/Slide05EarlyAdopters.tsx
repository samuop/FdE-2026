import { motion } from 'framer-motion'
import { UserCheck } from 'lucide-react'
import { SlideShell } from '../components/SlideShell'
import { IconBadge } from '../components/IconBadge'
import { fadeUp } from '../components/motion'

const conditions = [
  {
    n: '1',
    title: 'Consciente del problema',
    text: 'Ya sabe que pierde dinero por desajustes de stock y precios desactualizados. Ya tuvo discusiones internas y calculó las horas-hombre perdidas. No hay que convencerlo: lo vive todos los días.',
  },
  {
    n: '2',
    title: 'Usa soluciones que no le sirven',
    text: 'Excel compartido por WhatsApp/email, sistemas viejos tipo DOS sin sincronización, o cuadernos. Quizás probó un software genérico y lo abandonó por complejo o sin soporte.',
  },
  {
    n: '3',
    title: 'Ya gasta dinero en eso',
    text: 'Paga un empleado dedicado a cargar datos, licencias que no le sirven, o un contador externo por reportes. Ya tiene presupuesto asignado para resolver este problema.',
  },
]

export function Slide05EarlyAdopters() {
  return (
    <SlideShell
      eyebrow="Paso 4 · Early Adopters"
      step="04 / 09"
      title={<>Nuestros <span className="accent">primeros clientes</span> ideales</>}
      subtitle="Tres condiciones que definen al Early Adopter perfecto para StockIA."
      compact
      orbs={[
        { color: 'var(--blue)', size: 340, top: -100, left: -90 },
        { color: 'var(--pink)', size: 240, bottom: -120, right: -60 },
      ]}
    >
      <div className="grid grid-3 gap-md" style={{ marginBottom: 16 }}>
        {conditions.map((c) => (
          <motion.div key={c.n} variants={fadeUp} className="card" style={{ padding: '20px 20px' }}>
            <div
              style={{
                width: 36, height: 36, borderRadius: 10, background: 'var(--grad-main)',
                display: 'grid', placeItems: 'center', fontFamily: 'var(--font-head)',
                fontWeight: 700, color: 'white', marginBottom: 12, fontSize: '1.1rem',
                boxShadow: '0 6px 16px rgba(59,130,246,0.4)',
              }}
            >
              {c.n}
            </div>
            <h3 style={{ fontSize: '1rem' }}>{c.title}</h3>
            <p style={{ marginTop: 8, fontSize: '0.86rem' }}>{c.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        className="card card-glow"
        style={{ borderLeft: '3px solid var(--cyan)' }}
      >
        <div className="row items-center gap-sm" style={{ marginBottom: 8 }}>
          <IconBadge icon={UserCheck} color="var(--cyan)" size={34} />
          <h3 style={{ margin: 0, color: 'var(--cyan)' }}>Perfil concreto del Early Adopter</h3>
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-1)' }}>
          PyME comercial urbana con <strong style={{ color: 'var(--text-0)' }}>2 a 5 sucursales</strong>, que factura
          <strong style={{ color: 'var(--text-0)' }}> $10–50M mensuales</strong>, con catálogo de <strong style={{ color: 'var(--text-0)' }}>+500 productos</strong>.
          Dueño pragmático de 35–50 años que ya intentó digitalizar sin éxito. Al tener múltiples sucursales, el dolor de la
          desincronización se multiplica: la necesidad es <strong style={{ color: 'var(--cyan)' }}>urgente, no opcional</strong>.
        </p>
      </motion.div>
    </SlideShell>
  )
}

import { motion } from 'framer-motion'
import { Cloud, Cpu, Store, FileText } from 'lucide-react'
import { fadeUp, stagger } from '../components/motion'

/** Integrantes del Equipo 1 con sus iniciales para el avatar */
const team = [
  { name: 'Juan Carlos Bebion', initials: 'JB' },
  { name: 'Katherina Anyelén Dalke', initials: 'KD' },
  { name: 'Andrea Agostina Fernández', initials: 'AF' },
  { name: 'Alan Matías Kalbermatter', initials: 'AK' },
  { name: 'Samuel Octavio Paredes', initials: 'SP' },
  { name: 'Miguel Agustín Tourn', initials: 'MT' },
]

export function Slide01Portada() {
  return (
    <div className="slide slide--portada">
      {/* Luces sutiles detrás del bloque de contenido (a la izquierda) */}
      <div className="orb orb--header" style={{ background: 'var(--blue)', left: '28%', top: '34%' }} />
      <div className="orb orb--body" style={{ background: 'var(--violet)', left: '30%', top: '62%' }} />

      <motion.div variants={stagger} initial="hidden" animate="show" className="col" style={{ gap: 16, zIndex: 2, margin: 'auto 0', width: '100%', maxWidth: 1280 }}>
        <motion.div variants={fadeUp}>
          <span className="eyebrow">
            <span className="dot" />
            Formación de Emprendedores · Equipo 1 · 2026
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="row items-center">
          <h1
            style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            Stock<span className="accent" style={{
              background: 'var(--grad-accent)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>IA</span>
          </h1>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 500,
            fontSize: 'clamp(1.2rem, 2.3vw, 1.85rem)',
            color: 'var(--text-1)',
            lineHeight: 1.22,
            maxWidth: '24ch',
          }}
        >
          Gestión de inventario para PyMEs,{' '}
          <span style={{ color: 'var(--blue-bright)' }}>potenciada por IA</span>.
        </motion.h2>

        <motion.p variants={fadeUp} className="lead" style={{ maxWidth: '60ch', fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}>
          Un SaaS que convierte una foto o un PDF del proveedor en stock actualizado y
          precios sugeridos en segundos. Diseñado para el comercio argentino.
        </motion.p>

        <motion.div variants={fadeUp} className="row gap-sm wrap" style={{ marginTop: 8 }}>
          <span className="pill accent"><Cloud size={14} strokeWidth={2} /> Software en la nube (SaaS)</span>
          <span className="pill accent"><Cpu size={14} strokeWidth={2} /> IA / OCR</span>
          <span className="pill accent"><Store size={14} strokeWidth={2} /> Multi-sucursal</span>
          <span className="pill accent"><FileText size={14} strokeWidth={2} /> Facturación AFIP</span>
        </motion.div>

        {/* Integrantes del equipo */}
        <motion.div variants={fadeUp} style={{ marginTop: 14 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--text-3)',
              marginBottom: 10,
            }}
          >
            Integrantes · Equipo 1
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 8,
              maxWidth: 760,
            }}
          >
            {team.map((m) => (
              <div
                key={m.name}
                className="row items-center"
                style={{
                  gap: 8,
                  padding: '5px 12px 5px 5px',
                  borderRadius: 999,
                  background: 'var(--glass)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    flex: 'none',
                    display: 'grid',
                    placeItems: 'center',
                    fontFamily: 'var(--font-head)',
                    fontWeight: 700,
                    fontSize: '0.62rem',
                    color: 'white',
                    background: 'var(--grad-main)',
                    boxShadow: '0 3px 10px rgba(99,102,241,0.4)',
                  }}
                >
                  {m.initials}
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-1)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="row items-center gap-md"
          style={{ marginTop: 14, color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
        >
          <span>Materia: Formación de Emprendedores</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>Modelo de negocio + Lean Startup</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

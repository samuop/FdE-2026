import { motion } from 'framer-motion'
import { ChartColumnBig, BrainCircuit } from 'lucide-react'
import { SlideShell } from '../components/SlideShell'
import { IconBadge } from '../components/IconBadge'
import { fadeUp } from '../components/motion'

export function Slide03Segmento() {
  return (
    <SlideShell
      eyebrow="Paso 2 · Segmento de clientes"
      step="02 / 09"
      title={<>¿Quién es nuestro <span className="accent">cliente</span>?</>}
      subtitle="Perfil B2B: dueños y gerentes de PyMEs comerciales argentinas."
      orbs={[
        { color: 'var(--violet)', size: 360, top: -100, left: -120 },
        { color: 'var(--cyan)', size: 260, bottom: -120, right: -60, },
      ]}
    >
      {/* Métricas demográficas */}
      <motion.div variants={fadeUp} className="grid grid-4 gap-md" style={{ marginBottom: 18 }}>
        {[
          { num: '35–55', label: 'años de edad' },
          { num: '5–50', label: 'empleados' },
          { num: '1–5', label: 'sucursales' },
          { num: '$5–50M', label: 'facturación mensual ARS' },
        ].map((m) => (
          <div key={m.label} className="card" style={{ textAlign: 'center', padding: '20px 14px' }}>
            <div className="stat-num" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.2rem)' }}>{m.num}</div>
            <div className="stat-label">{m.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-2 gap-lg">
        <motion.div variants={fadeUp} className="card">
          <IconBadge icon={ChartColumnBig} color="var(--blue-bright)" />
          <h3 style={{ marginTop: 12 }}>Datos demográficos</h3>
          <p style={{ marginTop: 6 }}>
            Dueño o gerente de <strong style={{ color: 'var(--text-0)' }}>PyME comercial</strong> (retail,
            distribuidora, almacén, ferretería). Ubicado en zonas urbanas de Argentina — AMBA y ciudades del interior.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="card card-glow">
          <IconBadge icon={BrainCircuit} color="var(--violet-bright)" />
          <h3 style={{ marginTop: 12 }}>Datos psicográficos</h3>
          <p style={{ marginTop: 6 }}>
            Trabajador y "manos a la obra". <strong style={{ color: 'var(--text-0)' }}>Desconfía un poco de la
            tecnología</strong> pero siente la presión de modernizarse. Valora la eficiencia, le preocupan los
            costos y la competencia. Quiere crecer, pero el día a día lo consume.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  )
}

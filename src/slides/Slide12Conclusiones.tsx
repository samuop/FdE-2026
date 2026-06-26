import { motion } from 'framer-motion'
import { Target, Zap, Users, Rocket } from 'lucide-react'
import { SlideShell } from '../components/SlideShell'
import { IconBadge } from '../components/IconBadge'
import type { IconType } from '../components/IconBadge'
import { fadeUp } from '../components/motion'

interface Takeaway {
  icon: IconType
  color: string
  title: string
  text: string
}

const takeaways: Takeaway[] = [
  {
    icon: Target,
    color: 'var(--blue-bright)',
    title: 'Problema real y validado',
    text: 'Las PyMEs argentinas pierden 4–8 hs semanales y ventas por la carga manual de stock y precios. Lo confirmamos con encuestas.',
  },
  {
    icon: Zap,
    color: 'var(--cyan)',
    title: 'Diferencial claro',
    text: 'El auto-procesamiento de documentos con IA/OCR es el factor crítico que ningún competidor accesible resuelve hoy.',
  },
  {
    icon: Users,
    color: 'var(--violet-bright)',
    title: 'Cliente con presupuesto',
    text: 'Los Early Adopters ya gastan dinero en soluciones que no funcionan: están listos para migrar a una que sí lo haga.',
  },
  {
    icon: Rocket,
    color: 'var(--green)',
    title: 'Próximo paso',
    text: 'Construir un MVP centrado en la función estrella, ponerlo en manos de los Early Adopters, medir e iterar.',
  },
]

export function Slide12Conclusiones() {
  return (
    <SlideShell
      eyebrow="Conclusiones"
      title={<>De una idea a un <span className="accent">modelo validado</span></>}
      subtitle="StockIA no es solo una idea: es una oportunidad probada con datos, con un diferencial claro y un mercado dispuesto."
      compact
      orbs={[
        { color: 'var(--blue)', size: 380, top: -120, right: -100 },
        { color: 'var(--violet)', size: 320, bottom: -140, left: -80 },
        { color: 'var(--cyan)', size: 180, top: '45%', left: '40%', opacity: 0.25 },
      ]}
    >
      <div className="grid grid-2 gap-md" style={{ marginBottom: 18 }}>
        {takeaways.map((t) => (
          <motion.div key={t.title} variants={fadeUp} className="card" style={{ padding: '16px 20px', borderLeft: `3px solid ${t.color}` }}>
            <div className="row items-center gap-sm" style={{ marginBottom: 6 }}>
              <IconBadge icon={t.icon} color={t.color} size={34} />
              <h3 style={{ margin: 0, fontSize: '1rem' }}>{t.title}</h3>
            </div>
            <p style={{ fontSize: '0.86rem' }}>{t.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        className="card card-glow mt-auto no-advance"
        style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))',
          borderColor: 'rgba(96,165,250,0.35)',
          padding: '22px 24px',
        }}
      >
        <p style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 600, color: 'var(--text-0)', lineHeight: 1.35 }}>
          "Convertimos una foto o un PDF en stock actualizado y precios sugeridos{' '}
          <span className="accent" style={{ background: 'var(--grad-accent)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>en segundos.</span>"
        </p>
        <p style={{ marginTop: 12, color: 'var(--text-2)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          ¡Gracias! · StockIA · Equipo 1 · Formación de Emprendedores 2026
        </p>
      </motion.div>
    </SlideShell>
  )
}

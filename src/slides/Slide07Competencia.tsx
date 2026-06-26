import { motion } from 'framer-motion'
import { RefreshCw, Zap } from 'lucide-react'
import { SlideShell } from '../components/SlideShell'
import { IconBadge } from '../components/IconBadge'
import { fadeUp } from '../components/motion'

const competitors = [
  { name: 'Tango', tag: 'Facturación + inventario básico' },
  { name: 'Contabilium', tag: 'Gestión contable PyME' },
  { name: 'Xubio', tag: 'Facturación AFIP' },
  { name: 'Colppy', tag: 'Contabilidad en la nube' },
]

export function Slide07Competencia() {
  return (
    <SlideShell
      eyebrow="Paso 6 · Análisis de competencia"
      step="06 / 09"
      title={<>Un mercado con un <span className="accent">talón de Aquiles</span></>}
      subtitle="El mercado de gestión para PyMEs en Argentina está fragmentado y todos comparten la misma debilidad."
      compact
      orbs={[
        { color: 'var(--blue)', size: 340, top: -110, left: -90 },
        { color: 'var(--violet)', size: 240, bottom: -110, right: -60 },
      ]}
    >
      <motion.div variants={fadeUp} style={{ marginBottom: 14 }}>
        <div className="row gap-sm wrap">
          {competitors.map((c) => (
            <div key={c.name} className="card" style={{ padding: '12px 18px', flex: '1 1 0', minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, color: 'var(--text-0)', fontSize: '1rem' }}>{c.name}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginTop: 2 }}>{c.tag}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-2 gap-lg">
        <motion.div variants={fadeUp} className="card" style={{ borderLeft: '3px solid var(--amber)' }}>
          <IconBadge icon={RefreshCw} color="var(--amber)" />
          <h3 style={{ color: 'var(--amber)', marginTop: 12 }}>El talón de Aquiles compartido</h3>
          <p style={{ marginTop: 8 }}>
            Todos resuelven bien la facturación con AFIP, el inventario básico y el multi-sucursal.
            Pero <strong style={{ color: 'var(--text-0)' }}>la carga de datos sigue siendo manual</strong>: cuando llega
            una lista de precios en PDF, el comerciante la carga a mano producto por producto.
          </p>
          <p style={{ marginTop: 10, fontSize: '0.86rem', color: 'var(--text-3)' }}>
            Herramientas globales como Dext o Hubdoc leen facturas, pero no se integran con inventario
            local ni con facturación AFIP en pesos.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="card card-glow" style={{ borderLeft: '3px solid var(--green)' }}>
          <IconBadge icon={Zap} color="var(--green)" />
          <h3 style={{ color: 'var(--green)', marginTop: 12 }}>Nuestro agregado de valor</h3>
          <p style={{ marginTop: 8 }}>
            La combinación de <strong style={{ color: 'var(--text-0)' }}>gestión tradicional completa</strong> con
            <strong style={{ color: 'var(--text-0)' }}> automatización por IA/OCR</strong> para procesar documentos,
            ajustada a la realidad argentina.
          </p>
          <div className="card no-advance" style={{ marginTop: 14, background: 'rgba(52,211,153,0.1)', borderColor: 'rgba(52,211,153,0.3)', padding: '12px 16px' }}>
            <p style={{ color: 'var(--green)', fontWeight: 600, fontSize: '0.92rem' }}>
              Es algo que ningún competidor accesible para PyMEs ofrece hoy.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  )
}

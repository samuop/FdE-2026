import { motion } from 'framer-motion'
import { TriangleAlert, Sparkles, Target, X, Check } from 'lucide-react'
import { SlideShell } from '../components/SlideShell'
import { IconBadge } from '../components/IconBadge'
import { fadeUp } from '../components/motion'

export function Slide02Idea() {
  return (
    <SlideShell
      eyebrow="Paso 1 · Idea de negocio"
      step="01 / 09"
      title={<>El problema que nadie <span className="accent">automatiza</span></>}
      subtitle="Miles de PyMEs en Argentina gestionan inventario, precios y stock de forma manual: ineficiente, lenta y propensa a errores."
      orbs={[
        { color: 'var(--blue)', size: 360, top: -120, right: -100 },
        { color: 'var(--violet)', size: 300, bottom: -140, left: -80 },
      ]}
    >
      <div className="grid grid-2 gap-lg">
        {/* Problema */}
        <motion.div variants={fadeUp} className="card" style={{ borderLeft: '3px solid var(--pink)' }}>
          <IconBadge icon={TriangleAlert} color="var(--pink)" />
          <h3 style={{ color: 'var(--pink)', marginTop: 12 }}>El dolor hoy</h3>
          <ul className="feature-list" style={{ marginTop: 12 }}>
            <li><span className="bullet bullet-pink"><X size={12} /></span><span>Planillas de Excel, cuadernos y sistemas viejos que <strong>no se comunican entre sucursales</strong></span></li>
            <li><span className="bullet bullet-pink"><X size={12} /></span><span>Pérdidas de ventas, desajustes de precios y horas perdidas en carga de datos</span></li>
            <li><span className="bullet bullet-pink"><X size={12} /></span><span>Procesos manuales que frenan la eficiencia operativa</span></li>
          </ul>
        </motion.div>

        {/* Solución */}
        <motion.div variants={fadeUp} className="card card-glow" style={{ borderLeft: '3px solid var(--green)' }}>
          <IconBadge icon={Sparkles} color="var(--green)" />
          <h3 style={{ color: 'var(--green)', marginTop: 12 }}>Nuestra solución</h3>
          <ul className="feature-list" style={{ marginTop: 12 }}>
            <li><span className="bullet bullet-green"><Check size={12} /></span><span>Software en la nube (SaaS) <strong>potenciado por IA</strong></span></li>
            <li><span className="bullet bullet-green"><Check size={12} /></span><span>OCR/IA que <strong>lee facturas y listas de proveedores</strong> automáticamente</span></li>
            <li><span className="bullet bullet-green"><Check size={12} /></span><span>Control multi-sucursal en tiempo real + facturación electrónica</span></li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        className="card no-advance row items-center gap-md"
        style={{ background: 'rgba(59,130,246,0.08)', borderColor: 'rgba(96,165,250,0.3)', marginTop: 18 }}
      >
        <IconBadge icon={Target} color="var(--blue-bright)" size={38} />
        <p style={{ color: 'var(--text-1)', fontSize: '1rem' }}>
          <strong style={{ color: 'var(--text-0)' }}>Objetivo:</strong> eliminar los procesos manuales para que las PyMEs
          compitan en igualdad de condiciones con empresas grandes que ya tienen tecnología avanzada.
        </p>
      </motion.div>
    </SlideShell>
  )
}

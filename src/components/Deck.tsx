import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slideVariants } from './motion'
import { slides } from '../slides'

/** Lee el índice inicial desde el hash de la URL (#5 → slide 5), 0 por defecto. */
function initialIndex(): number {
  if (typeof window === 'undefined') return 0
  const n = parseInt(window.location.hash.replace('#', ''), 10)
  if (Number.isNaN(n)) return 0
  return Math.min(Math.max(n - 1, 0), slides.length - 1)
}

export function Deck() {
  const [[index, dir], setState] = useState<[number, number]>([initialIndex(), 0])
  const total = slides.length

  const go = useCallback(
    (next: number, direction: number) => {
      if (next < 0 || next >= total) return
      setState([next, direction])
    },
    [total],
  )

  const nextSlide = useCallback(() => go(index + 1, 1), [go, index])
  const prevSlide = useCallback(() => go(index - 1, -1), [go, index])

  // Mantener el hash de la URL sincronizado para poder compartir/recargar un slide
  useEffect(() => {
    const hash = `#${index + 1}`
    if (window.location.hash !== hash) {
      window.history.replaceState(null, '', hash)
    }
  }, [index])

  // Navegación por teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Home') {
        go(0, -1)
      } else if (e.key === 'End') {
        go(total - 1, 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [nextSlide, prevSlide, go, total])

  const Current = slides[index].component

  // Avanzar con clic en la zona central (no sobre la nav)
  const handleStageClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest('.nav') || target.closest('.no-advance')) return
    // clic en mitad derecha avanza, izquierda retrocede
    const x = e.clientX
    if (x > window.innerWidth / 2) nextSlide()
    else prevSlide()
  }

  return (
    <div className="deck">
      {/* Barra de progreso superior */}
      <motion.div
        className="progress-bar"
        initial={false}
        animate={{ width: `${((index + 1) / total) * 100}%` }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="slide-stage" onClick={handleStageClick}>
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Current />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pie de página: tres zonas equilibradas (sección · nav · ayuda) */}
      <div className="footer">
        {/* Zona izquierda: sección actual + título corto */}
        <div className="footer-section no-advance">
          <span className="footer-section__num">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="footer-section__sep" />
          <span className="footer-section__label">{slides[index].label}</span>
        </div>

        {/* Zona central: navegación */}
        <div className="nav">
          <button
            className="nav-btn"
            onClick={prevSlide}
            disabled={index === 0}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className="nav-dots">
            {slides.map((s, i) => (
              <button
                key={s.id}
                className={`nav-dot ${i === index ? 'active' : ''}`}
                onClick={() => go(i, i > index ? 1 : -1)}
                aria-label={`Ir a ${s.label}`}
                title={s.label}
              />
            ))}
          </div>

          <span className="nav-counter">
            <b>{String(index + 1).padStart(2, '0')}</b> / {String(total).padStart(2, '0')}
          </span>

          <button
            className="nav-btn"
            onClick={nextSlide}
            disabled={index === total - 1}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        {/* Zona derecha: ayuda de teclado */}
        <div className="kbd-hint no-advance">
          <span className="kbd">←</span>
          <span className="kbd">→</span>
          <span className="kbd-hint__text">para navegar</span>
        </div>
      </div>
    </div>
  )
}

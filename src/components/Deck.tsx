import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slideVariants } from './motion'
import { slides } from '../slides'

export function Deck() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
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

      {/* Marca */}
      <div className="brand-tag">
        <span className="brand-mark" />
        StockIA
      </div>

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

      {/* Navegación */}
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
              aria-label={`Ir a slide ${i + 1}`}
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

      <div className="kbd-hint">
        <span className="kbd">←</span>
        <span className="kbd">→</span>
        para navegar
      </div>
    </div>
  )
}

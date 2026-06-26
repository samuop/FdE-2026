import type { ComponentType } from 'react'
import { Slide01Portada } from './Slide01Portada'
import { Slide02Idea } from './Slide02Idea'
import { Slide03Segmento } from './Slide03Segmento'
import { Slide04Empatia } from './Slide04Empatia'
import { Slide05EarlyAdopters } from './Slide05EarlyAdopters'
import { Slide06PropuestaValor } from './Slide06PropuestaValor'
import { Slide07Competencia } from './Slide07Competencia'
import { Slide08Canvas } from './Slide08Canvas'
import { Slide09CicloCMA } from './Slide09CicloCMA'
import { Slide10PresentacionFinal } from './Slide10PresentacionFinal'
import { Slide11CanvasMapa } from './Slide11CanvasMapa'
import { Slide12Conclusiones } from './Slide12Conclusiones'

export interface SlideDef {
  id: string
  /** Etiqueta corta de sección que se muestra en el pie de página */
  label: string
  component: ComponentType
}

export const slides: SlideDef[] = [
  { id: 'portada', label: 'Portada', component: Slide01Portada },
  { id: 'idea', label: 'La idea', component: Slide02Idea },
  { id: 'segmento', label: 'Segmento', component: Slide03Segmento },
  { id: 'empatia', label: 'Mapa de empatía', component: Slide04Empatia },
  { id: 'early-adopters', label: 'Early Adopters', component: Slide05EarlyAdopters },
  { id: 'propuesta-valor', label: 'Propuesta de valor', component: Slide06PropuestaValor },
  { id: 'competencia', label: 'Competencia', component: Slide07Competencia },
  { id: 'canvas-intro', label: 'Business Model Canvas', component: Slide08Canvas },
  { id: 'ciclo-cma', label: 'Ciclo C-M-A', component: Slide09CicloCMA },
  { id: 'presentacion-final', label: 'Presentación final', component: Slide10PresentacionFinal },
  { id: 'canvas-mapa', label: 'Canvas + Mapa', component: Slide11CanvasMapa },
  { id: 'conclusiones', label: 'Conclusiones', component: Slide12Conclusiones },
]

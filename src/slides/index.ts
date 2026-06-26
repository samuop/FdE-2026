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
  component: ComponentType
}

export const slides: SlideDef[] = [
  { id: 'portada', component: Slide01Portada },
  { id: 'idea', component: Slide02Idea },
  { id: 'segmento', component: Slide03Segmento },
  { id: 'empatia', component: Slide04Empatia },
  { id: 'early-adopters', component: Slide05EarlyAdopters },
  { id: 'propuesta-valor', component: Slide06PropuestaValor },
  { id: 'competencia', component: Slide07Competencia },
  { id: 'canvas-intro', component: Slide08Canvas },
  { id: 'ciclo-cma', component: Slide09CicloCMA },
  { id: 'presentacion-final', component: Slide10PresentacionFinal },
  { id: 'canvas-mapa', component: Slide11CanvasMapa },
  { id: 'conclusiones', component: Slide12Conclusiones },
]

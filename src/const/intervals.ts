import type { TInterval, TIntervals } from '@/types/intervals'

export const MAJOR_SCALE: TIntervals = [
  1, 1, 0.5, 1, 1, 1, 0.5,
]

export const MINOR_SCALE: TIntervals = [
  1, 0.5, 1, 1, 0.5, 1, 1,
]

export const MINOR_BLUES_SCALE: TIntervals = [
  1.5, 1, 0.5, 0.5, 1.5, 1,
]

export const MAJOR_BLUES_SCALE: TIntervals = [
  1, 0.5, 0.5, 1.5, 1, 1.5,
]

export const MAIN_TONALITY_STEPS: { step: TInterval, title: string, display: string }[] = [
  { step: 0, title: 'Tonika', display: 'T' },
  { step: 2.5, title: 'Subdominanta', display: 'S' },
  { step: 3.5, title: 'Dominanta', display: 'D' },
]

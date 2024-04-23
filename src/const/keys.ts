import { EOctaveTone } from '@/types/notes'

export const KEY_TITLES: Record<EOctaveTone, string> = {
  [EOctaveTone.C]: 'C',
  [EOctaveTone.Cs]: 'C#',
  [EOctaveTone.D]: 'D',
  [EOctaveTone.Ds]: 'D#',
  [EOctaveTone.E]: 'E',
  [EOctaveTone.F]: 'F',
  [EOctaveTone.Fs]: 'F#',
  [EOctaveTone.G]: 'G',
  [EOctaveTone.Gs]: 'G#',
  [EOctaveTone.A]: 'A',
  [EOctaveTone.As]: 'A#',
  [EOctaveTone.B]: 'B',
}

export const BLACK_KEYS = [
  EOctaveTone.Cs,
  EOctaveTone.Ds,
  EOctaveTone.Fs,
  EOctaveTone.Gs,
  EOctaveTone.As,
]
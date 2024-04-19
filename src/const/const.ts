import { ENote } from '@/types/notes'

export const KEYS: ENote[] = [
  ENote.C,
  ENote.Cs,
  ENote.D,
  ENote.Ds,
  ENote.E,
  ENote.F,
  ENote.Fs,
  ENote.G,
  ENote.Gs,
  ENote.A,
  ENote.As,
  ENote.B,
]

export const KEY_TITLES: Record<ENote, string> = {
  [ENote.C]: 'C',
  [ENote.Cs]: 'C#',
  [ENote.D]: 'D',
  [ENote.Ds]: 'D#',
  [ENote.E]: 'E',
  [ENote.F]: 'F',
  [ENote.Fs]: 'F#',
  [ENote.G]: 'G',
  [ENote.Gs]: 'G#',
  [ENote.A]: 'A',
  [ENote.As]: 'A#',
  [ENote.B]: 'B',
}

export const BLACK_KEYS = [
  ENote.Cs,
  ENote.Ds,
  ENote.Fs,
  ENote.Gs,
  ENote.As,
]

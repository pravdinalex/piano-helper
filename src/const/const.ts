import { ENote, EOctave } from '@/types/notes'
import { ETonalityMainSteps } from '@/types/tonality'

export const OCTAVES: EOctave[] = [
  EOctave.subContr,
  EOctave.contr,
  EOctave.big,
  EOctave.small,
  EOctave.first,
  EOctave.second,
  EOctave.third,
  EOctave.forth,
  EOctave.fifth,
]

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

export const TONALITY_MAIN_STEPS: Record<ETonalityMainSteps, string> = {
  [ETonalityMainSteps.tonika]: 'T',
  [ETonalityMainSteps.subdominanta]: 'S',
  [ETonalityMainSteps.dominanta]: 'D',
}
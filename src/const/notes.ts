import { EOctaveTone, EOctave, EBasicNote, ENoteSign } from '@/types/notes'
import { ETonalityMainSteps, ETonalitySign } from '@/types/tonality'

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

export const OCTAVE_TONES: EOctaveTone[] = [
  EOctaveTone.C,
  EOctaveTone.Cs,
  EOctaveTone.D,
  EOctaveTone.Ds,
  EOctaveTone.E,
  EOctaveTone.F,
  EOctaveTone.Fs,
  EOctaveTone.G,
  EOctaveTone.Gs,
  EOctaveTone.A,
  EOctaveTone.As,
  EOctaveTone.B,
]

export const BASIC_NOTES: EBasicNote[] = [
  EBasicNote.C,
  EBasicNote.D,
  EBasicNote.E,
  EBasicNote.F,
  EBasicNote.G,
  EBasicNote.A,
  EBasicNote.B,
]

export const NOTE_TITLES: Record<EBasicNote, string> = {
  [EBasicNote.C]: 'C',
  [EBasicNote.D]: 'D',
  [EBasicNote.E]: 'E',
  [EBasicNote.F]: 'F',
  [EBasicNote.G]: 'G',
  [EBasicNote.A]: 'A',
  [EBasicNote.B]: 'B',
}

export const TONALITY_MAIN_STEPS: Record<ETonalityMainSteps, string> = {
  [ETonalityMainSteps.tonika]: 'T',
  [ETonalityMainSteps.subdominanta]: 'S',
  [ETonalityMainSteps.dominanta]: 'D',
}

export const NOTE_SIGN_TITLES: Record<ENoteSign, string> = {
  [ENoteSign.sharp]: 'sharp',
  [ENoteSign.flat]: 'flat',
  [ENoteSign.none]: '',
}

export const TONALITY_SUFFIX: Record<ETonalitySign, string> = {
  [ETonalitySign.minor]: 'minor',
  [ETonalitySign.major]: 'major',
}
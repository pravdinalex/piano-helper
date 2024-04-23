import { EBasicNote, ENoteSign, EOctaveTone } from '@/types/notes'
import { BASIC_NOTES, NOTE_TITLES, OCTAVE_TONES, TONALITY_SUFFIX, NOTE_SIGN_TITLES } from '@/const/notes'
import { BLACK_KEYS } from '@/const/keys'
import { ETonalitySign } from '@/types/tonality'

export function isBlackKey(note: EOctaveTone) {
  return BLACK_KEYS.includes(note)
}

export function prevOctaveTone(tone: EOctaveTone): EOctaveTone {
  const i = OCTAVE_TONES.indexOf(tone)
  return i === 0 ? OCTAVE_TONES[OCTAVE_TONES.length - 1] : OCTAVE_TONES[i - 1]
}

export function nextOctaveTone(tone: EOctaveTone): EOctaveTone {
  const i = OCTAVE_TONES.indexOf(tone)
  return i === OCTAVE_TONES.length - 1 ? OCTAVE_TONES[0] : OCTAVE_TONES[i + 1]
}

export function toneInTonality (tone: EOctaveTone, tonalitySign: ETonalitySign ):
  { note: EBasicNote, noteSign: ENoteSign }
{
  // C + major -> C + -
  // C# + major -> C + #
  // C# + minor -> D + b

  const res: ReturnType<typeof toneInTonality> = {
    note: EBasicNote.C,
    noteSign: ENoteSign.none,
  }

  if (tone in BASIC_NOTES) {
    res.note = tone as EBasicNote
  } else {

    if (tonalitySign === ETonalitySign.major) {
      res.note = prevOctaveTone(tone) as EBasicNote
      res.noteSign = ENoteSign.sharp
    } else if (tonalitySign === ETonalitySign.minor) {
      res.note = nextOctaveTone(tone) as EBasicNote
      res.noteSign = ENoteSign.flat
    }
  }

  return res
}

export function tonalityTitle(ITonality): string {
  const tone = toneInTonality(ITonality.tone, ITonality.sign)
  const note = NOTE_TITLES[tone.note]
  const noteSign = tone.noteSign === ENoteSign.none ? '' : ' ' + NOTE_SIGN_TITLES[tone.noteSign]
  const tonalitySign = TONALITY_SUFFIX[ITonality.sign]

  return `${note}${noteSign} ${tonalitySign}`
}
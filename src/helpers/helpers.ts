import { ENoteSign, EOctave, EOctaveTone } from '@/types/notes'
import type { EBasicNote, INoteId } from '@/types/notes'
import { BASIC_NOTES, NOTE_TITLES, OCTAVE_TONES, TONALITY_SUFFIX, NOTE_SIGN_TITLES } from '@/const/notes'
import { BLACK_KEYS } from '@/const/keys'
import { ETonalitySign } from '@/types/tonality'
import { MAJOR_SCALE, MINOR_SCALE } from '@/const/intervals'
import type { TIntervals } from '@/types/intervals'

export function alignInterval(interval: number): number {
  return Math.round(interval * 2) / 2
}

export function normalizeTone(tone: number): EOctaveTone {
  return tone % 6
}

export function isBlackKey(tone: EOctaveTone) {
  return BLACK_KEYS.includes(tone)
}

export function isBasicNote(tone: EOctaveTone) {
  return (BASIC_NOTES as EOctaveTone[]).includes(tone)
}

export function prevOctaveTone(tone: EOctaveTone): EOctaveTone {
  const i = OCTAVE_TONES.indexOf(tone)
  return i === 0 ? OCTAVE_TONES[OCTAVE_TONES.length - 1] : OCTAVE_TONES[i - 1]
}

export function nextOctaveTone(tone: EOctaveTone): EOctaveTone {
  const i = OCTAVE_TONES.indexOf(tone)
  return i === OCTAVE_TONES.length - 1 ? OCTAVE_TONES[0] : OCTAVE_TONES[i + 1]
}

export function shiftOctaveTone(tone: EOctaveTone, interval: number):
  { newTone: EOctaveTone, octaveShift: number }
{
  tone = normalizeTone(tone)
  const shift = alignInterval(interval) * 2 // half tones -> indexes
  const i = OCTAVE_TONES.indexOf(tone)

  return {
    newTone: OCTAVE_TONES[(i + shift) % OCTAVE_TONES.length],
    octaveShift: Math.floor(shift / OCTAVE_TONES.length),
  }
}

/*
// TODO! doesnt work as it should!
export function toneInTonality (tone: EOctaveTone, tonalitySign: ETonalitySign ):
  { note: EBasicNote, noteSign: ENoteSign }
{
  // C + major -> C
  // C# + major -> C + #
  // C# + minor -> D + b
  // E + major -> E ???
  // F + minor -> E ???

  const res: ReturnType<typeof toneInTonality> = {
    note: EBasicNote.C,
    noteSign: ENoteSign.none,
  }

  if (BASIC_NOTES.includes()) {
    res.note = tone as EBasicNote
  } else {

    if (tonalitySign === ETonalitySign.major) {
      res.note = prevOctaveTone(tone)
      if (res.note in BASIC_NOTES)
      res.noteSign = ENoteSign.sharp
    } else if (tonalitySign === ETonalitySign.minor) {
      res.note = nextOctaveTone(tone)
      res.noteSign = ENoteSign.flat
    }
  }

  return res
}

// TODO! doesnt work as it should!
export function tonalityTitle(ITonality): string {
  const tone = toneInTonality(ITonality.tone, ITonality.sign)
  const note = NOTE_TITLES[tone.note]
  const noteSign = tone.noteSign === ENoteSign.none ? '' : ' ' + NOTE_SIGN_TITLES[tone.noteSign]
  const tonalitySign = TONALITY_SUFFIX[ITonality.sign]

  return `${note}${noteSign} ${tonalitySign}`
}
*/

export function getTonalityTones(ITonality, scale: TIntervals): EOctaveTone[] {
  let tone = ITonality.tone
  const res: EOctaveTone[] = [tone]

  scale.forEach((interval) => {
    tone = shiftOctaveTone(tone, interval).newTone
    res.push(tone)
  })
  return res
}

export function spreadOctaveTones
  <T extends { tone: EOctaveTone }, R extends INoteId>
(tones: T[], octaves: EOctave[]): INoteId[] {
  return octaves.reduce((acc: INoteId[], octave) => {
    tones.forEach((tone) => acc.push({ octave, ...tone }))
    return acc
  }, [] as R[])
}
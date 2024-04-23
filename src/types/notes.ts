export enum EOctave {
  subContr = -3,
  contr = -2,
  big = -1,
  small = 0,
  first = 1,
  second = 2,
  third = 3,
  forth = 4,
  fifth = 5,
}

export enum EOctaveTone {
  C = 0,
  Cs = 0.5,
  D = 1,
  Ds = 1.5,
  E = 2,
  F = 2.5,
  Fs = 3,
  G = 3.5,
  Gs = 4,
  A = 4.5,
  As = 5,
  B = 5.5,
}

export enum EBasicNote {
  C = 0,
  D = 1,
  E = 2,
  F = 2.5,
  G = 3.5,
  A = 4.5,
  B = 5.5,
}

export enum ENoteSign {
  flat = -0.5,
  none = 0,
  sharp = 0.5,
}

export interface INoteId {
  octave: EOctave,
  tone: EOctaveTone,
}

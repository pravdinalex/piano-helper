import { EOctaveTone } from '@/types/notes'

export enum ETonalitySign {
  major = 1,
  minor = -1,
}

export interface ITonality {
  tone: EOctaveTone,
  sign: ETonalitySign,
}

export enum ETonalityMainSteps {
  tonika = 0,
  dominanta = 3.5,
  subdominanta = 2.5,
}
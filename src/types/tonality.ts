import { EOctaveTone } from '@/types/notes'

export enum ETonalitySign {
  major = 1,
  minor = -1,
}

export interface ITonality {
  tone: EOctaveTone,
  sign: ETonalitySign,
}

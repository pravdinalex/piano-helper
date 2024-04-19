import { ENote } from '@/types/notes'
import { BLACK_KEYS } from '@/const/const'

export function isBlackKey(note: ENote) {
  return BLACK_KEYS.includes(note)
}

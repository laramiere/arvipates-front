import type { Link } from '@/shared/interfaces'

type TopBarInfo = Link | string
export interface TopBarInterface {
  socialLink: Link[]
  info: TopBarInfo
}

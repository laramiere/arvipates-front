import type { FooterInterface } from './footer'
import type { HeaderInterface } from './header'
import type { PageInterface } from './page'

export * from './footer'
export * from './header'
export * from './page'

export interface GlobalDataResponse {
  header: { data: HeaderInterface } | null
  footer: { data: FooterInterface } | null
  error?: string
}

export interface GlobalPageDataResponse {
  meta: object
  data: PageInterface[]
}

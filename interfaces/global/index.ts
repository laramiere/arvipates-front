import type { FooterInterface } from './footer'
import type { HeaderInterface } from './header'

export * from './footer'
export * from './header'

export interface GlobalDataResponse {
  header: { data: HeaderInterface } | null
  footer: { data: FooterInterface } | null
  error?: string
}

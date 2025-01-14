export type SocialLinkPictoName = 'Facebook' | 'Instagram' | 'Whatsapp'
export interface Link {
  href: string
  content: string
}
export interface Picture {
  id: string
  file: {
    alternativeText: string
    url: string
    id?: number
    documentId?: string
  }
}

export enum PictoEnum {
  facebook = 'Facebook',
  instagram = 'Instagram',
  whatsapp = 'Whatsapp',
}
export type SocialLinkPictoName = PictoEnum.facebook | PictoEnum.instagram | PictoEnum.whatsapp
export interface Link {
  href: string
  content: string
}
export interface SocialLinkInterface {
  ariaLabel: string
  link: string
  picto: SocialLinkPictoName
}
export interface SocialComponentInterface {
  title: string
  items: SocialLinkInterface[]
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

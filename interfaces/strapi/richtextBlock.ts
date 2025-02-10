export type StrapiRichTextBlockType = 'paragraph'

export interface StrapiRichTextBlockChildren {
  type: string
  text: string
  bold?: boolean
}
export interface StrapiRichTextBlock {
  type: StrapiRichTextBlockType
  children: StrapiRichTextBlockChildren[]
}

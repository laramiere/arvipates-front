export type RichtextType = 'heading' | 'paragraph' | 'list' | 'list-item' | 'text' | 'link'
export type RichtextHeadingLevelType = 1 | 2 | 3 | 4 | 5 | 6
export type RichtextListFormatType = 'unordered' | 'ordered'

export enum RichtextTypeEnum {
  Heading = 'heading',
  Paragraph = 'paragraph',
  List = 'list',
  ListItem = 'list-item',
  Text = 'text',
  Link = 'link',
  Quote = 'quote',
}

export interface RichtextTextInterface {
  type: RichtextTypeEnum.Text
  text: string
  italic?: boolean
  bold?: boolean
  underline?: boolean
  strikethrough?: boolean
}

export interface RichtextLinkInterface {
  type: RichtextTypeEnum.Link
  url: string
  children: RichtextTextInterface[]
}

export interface RichtextHeadingInterface {
  type: RichtextTypeEnum.Heading
  level: RichtextHeadingLevelType
  children: RichtextTextInterface[]
}

export type RichtextListItemChildrenType = RichtextLinkInterface | RichtextTextInterface

export interface RichtextListItemInterface {
  type: RichtextTypeEnum.ListItem
  children: RichtextListItemChildrenType[]
}

export type RichtextListChildrenType = RichtextListItemInterface | RichtextListInterface
export interface RichtextListInterface {
  type: RichtextTypeEnum.List
  format: RichtextListFormatType
  children: RichtextListChildrenType[]
}
export type RichtextParagrapheChildrenType = RichtextLinkInterface | RichtextTextInterface

export interface RichtextParagraphInterface {
  type: RichtextTypeEnum.Paragraph
  children: RichtextParagrapheChildrenType[]
}

export type RichtextQuoteChildrenType = RichtextLinkInterface | RichtextTextInterface
export interface RichtextQuoteInterface {
  type: RichtextTypeEnum.Quote
  children: RichtextQuoteChildrenType[]
}

export type RichtextContentType = RichtextHeadingInterface | RichtextListInterface | RichtextParagraphInterface | RichtextQuoteInterface

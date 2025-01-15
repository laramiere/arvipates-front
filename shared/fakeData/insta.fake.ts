import type { InstaInterface, Picture } from '@/shared/interfaces'

function generateInstaItemsObject(number: number): Picture {
  return {
    id: `instaonjornj2${number}`,
    file: {
      url: `/images/insta_${number}.jpg`,
      alternativeText: `item insta ${number}`,
    },
  }
}
export const InstaData: InstaInterface = {
  title: 'Retrouvez-nous sur instagram',
  background: {
    id: 'instahuio67hjik',
    file: {
      url: '/images/insta_bg.png',
      alternativeText: 'background',
    },
  },
  items: [
    generateInstaItemsObject(1),
    generateInstaItemsObject(2),
    generateInstaItemsObject(3),
    generateInstaItemsObject(4),
    generateInstaItemsObject(5),
    generateInstaItemsObject(6),
  ],
}

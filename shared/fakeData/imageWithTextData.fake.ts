import type { ImageWithTextBlockInterface } from '@/shared/interfaces'
import { contentBlockDataWithoutImage } from '@/shared/fakeData'

export const imageWithTextData: ImageWithTextBlockInterface = {
  content: contentBlockDataWithoutImage,
  pictures: [
    {
      id: 'hufre7huj',
      file: {
        url: '/images/fork.jpg',
        alternativeText: 'fork',
      },
    },
    {
      id: 'hufre7hujo',
      file: {
        url: '/images/fork.jpg',
        alternativeText: 'fork',
      },
    },
  ],
}

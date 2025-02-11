import type { PictureWallInterface } from '@/interfaces'
import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import PictureWall from './PictureWall.vue'

const img = {
  alternativeText: 'tets',
  createdAt: 'jfiuoe',
  documentId: 'juifor_èç',
  id: 2,
  provider: 'local',
  publishedAt: 'jiuocrz',
  updatedAt: 'jnior',
  url: 'gt.fr',
}
const pictureWallData: PictureWallInterface = {
  __component: 'wall.picture-wall',
  id: 1,
  title: 'toto',
  link: 'test.fr',
  floatingPicture: img,
  pictures: [img, img],
}
describe('insta', () => {
  const wrapper = mount(PictureWall, {
    props: pictureWallData,
  })
  const instaDataItemsLength = wrapper.props('pictures').length

  it('should render correct HTML', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it(`should display a grid of ${instaDataItemsLength} images`, () => {
    const images = wrapper.findAll('.c-insta__content img')
    expect(images).toHaveLength(instaDataItemsLength)
  })

  it('should display a h2 title', () => {
    const title = wrapper.find('section h2')
    expect(title).toBeDefined()
  })
})

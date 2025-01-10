import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import ScrollButton from './ScrollButton.vue'

const eventNameEmittedByClickedButton = 'clickOnScrollBtn'

describe('scrollButton', () => {
  const wrapper = mount(ScrollButton)

  it('should render the correct HTML', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it(`should emit ${eventNameEmittedByClickedButton} when clicking`, async () => {
    await wrapper.get('[aria-label="scroll down button"]').trigger('click')

    expect(wrapper.emitted()).toHaveProperty(eventNameEmittedByClickedButton)
    expect(wrapper.emitted()[eventNameEmittedByClickedButton]).toHaveLength(1)
  })
})

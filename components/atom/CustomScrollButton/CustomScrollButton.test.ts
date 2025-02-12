import { mount } from '@vue/test-utils'
import {
  describe,
  expect,
  it,
} from 'vitest'
import CustomScrollButton from './CustomScrollButton.vue'

const eventNameEmittedByClickedButton = 'handleScrollDown'

describe('scrollButton', () => {
  const wrapper = mount(CustomScrollButton)

  it('should render the correct HTML', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it(`should emit ${eventNameEmittedByClickedButton} when clicking`, async () => {
    await wrapper.get('[aria-label="scroll down button"]').trigger('click')

    expect(wrapper.emitted()).toHaveProperty(eventNameEmittedByClickedButton)
    expect(wrapper.emitted()[eventNameEmittedByClickedButton]).toHaveLength(1)
  })
})

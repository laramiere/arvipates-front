import type { VueWrapper } from '@vue/test-utils'
import { timetableData } from '@/shared/fakeData'
import { mount } from '@vue/test-utils'
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import Timetable from './Timetable.vue'

describe('timetable', () => {
  let wrapper: VueWrapper<any>
  beforeEach(() => {
    const monday = new Date('2025-01-06')
    vi.useFakeTimers()
    vi.setSystemTime(monday)
    wrapper = mount(Timetable, {
      props: {
        timetable: timetableData,
      },
    })
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('should render the correct HTML', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be first active item if day is monday', () => {
    expect(wrapper.findAll('ul > li')[0].classes()).not.toContain('opacity-30')
  })
})

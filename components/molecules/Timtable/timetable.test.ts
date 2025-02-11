import type { TimetableInterface } from '@/interfaces'
import type { VueWrapper } from '@vue/test-utils'
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

const timeTableData: TimetableInterface = {
  id: 1,
  __component: 'timetable.timetable',
  title: 'my timetable',
  times: [
    {
      id: 1,
      timeslot1: 'toto1',
      timeslot2: 'toto2',
      title: 'Lun',
    },
    {
      id: 2,
      timeslot1: 'toto1',
      timeslot2: 'toto2',
      title: 'Mar',
    },
  ],
}
describe('timetable', () => {
  let wrapper: VueWrapper<any>
  beforeEach(() => {
    const monday = new Date('2025-01-06')
    vi.useFakeTimers()
    vi.setSystemTime(monday)
    wrapper = mount(Timetable, {
      props: {
        ...timeTableData,
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

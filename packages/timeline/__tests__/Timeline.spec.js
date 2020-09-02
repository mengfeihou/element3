import Timeline from '../Timeline.vue'
import { mount } from '@vue/test-utils'
describe('Timeline.vue', () => {
  it('should slot works', () => {
    const wrapper = mount(Timeline, {
      slots: {
        default: [`A`, `B`]
      }
    })
    expect(wrapper.find('.el-timeline').text()).toBe('AB')
  })

  it('should props reverse works', () => {
    const wrapper = mount(Timeline, {
      props: {
        reverse: true
      },
      slots: {
        default: [`A`, `B`]
      }
    })
    expect(wrapper.find('.el-timeline').text()).toBe('BA')
  })
})

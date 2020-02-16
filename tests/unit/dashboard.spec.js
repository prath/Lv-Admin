import { mount } from '@vue/test-utils'
import Dashboard from '@/components/Dashboard.vue'

describe('Dashboard show ', () => {
  test('Dashboard renders correctly', () => {
    const wrapper = mount(Dashboard)
    expect(wrapper.element).toMatchSnapshot()
  })
})

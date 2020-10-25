import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header Component show ', () => {
  test('Header renders correctly', () => {
    const wrapper = mount(Header)
    expect(wrapper.element).toMatchSnapshot()
  })
})

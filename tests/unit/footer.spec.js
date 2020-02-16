import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer Component show ', () => {
  test('Footer renders correctly', () => {
    const wrapper = mount(Footer)
    expect(wrapper.element).toMatchSnapshot()
  })
})

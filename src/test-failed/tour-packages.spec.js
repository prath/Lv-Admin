import { mount } from '@vue/test-utils'
import TourPackages from '@/components/TourPackages.vue'

describe('Tour Packages show ', () => {
  test('Tour Packages renders correctly', () => {
    const wrapper = mount(TourPackages)
    expect(wrapper.element).toMatchSnapshot()
  })
})

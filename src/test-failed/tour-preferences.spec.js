import { mount } from '@vue/test-utils'
import TourPreferences from '@/components/TourPreferences.vue'

describe('Tour Preferences show ', () => {
  test('Tour Preferences renders correctly', () => {
    const wrapper = mount(TourPreferences)
    expect(wrapper.element).toMatchSnapshot()
  })
})

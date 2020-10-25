import { mount } from '@vue/test-utils'
import CuratedContent from '@/components/CuratedContent.vue'

describe('Curated Content List show ', () => {
  test('Curated Content List renders correctly', () => {
    const wrapper = mount(CuratedContent)
    expect(wrapper.element).toMatchSnapshot()
  })
})

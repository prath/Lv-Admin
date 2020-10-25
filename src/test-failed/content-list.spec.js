import { mount } from '@vue/test-utils'
import ContentList from '@/components/ContentList.vue'

describe('Content List Screen show ', () => {
  test('Content List Screen correctly', () => {
    const wrapper = mount(ContentList)
    expect(wrapper.element).toMatchSnapshot()
  })
})

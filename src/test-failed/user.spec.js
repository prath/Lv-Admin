import { mount } from '@vue/test-utils'
import Users from '@/components/Users.vue'

describe('User show ', () => {
  test('Users renders correctly', () => {
    const wrapper = mount(Users)
    expect(wrapper.element).toMatchSnapshot()
  })
})

import { mount } from '@vue/test-utils'
import UserList from '@/components/UserList.vue'

describe('User List show ', () => {
  test('User List renders correctly', () => {
    const wrapper = mount(UserList)
    expect(wrapper.element).toMatchSnapshot()
  })
})

// noinspection JSUnresolvedFunction

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
// noinspection NpmUsedModulesInstalled
import HelloWorld from '@/components/HelloWorld.vue'

// noinspection JSUnresolvedFunction
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})

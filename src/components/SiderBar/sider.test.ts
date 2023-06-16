import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import SiderBar from './index.vue'

describe('test SiderBarvue', () => {
  const pathList = new Map()
  pathList.set('macros', new Set().add({
    name: 'macros-props',
    path: '/macros/props',
    props: true,
    meta: {
      title: 'V-model in components',
    },
  }))
  const wrapper = mount(SiderBar, {
    props: {
      routerItems: pathList,
    },
  })
  test('test routerItems', () => {
    expect(wrapper.find('.p-2').text()).toEqual('V-model in components')
    expect(wrapper.find('li span').text()).toEqual('macros:')
  })
})

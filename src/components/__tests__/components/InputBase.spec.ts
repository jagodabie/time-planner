import InputBase from '@/components/ui/InputBase.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('InputBase correctly shows inputs value and label', async () => {
  const wrapper = mount(InputBase, {
    props: {
      label: 'Test',
      modelValue: '',
    },
  })

  test('input text is given label props, label and input value display correctly', async () => {
    expect(wrapper.find('input').element.value)
    expect(wrapper.find('label').text()).toEqual('Test')
  })

  test('input value is given then input value display correctly on ', async () => {
    await wrapper.find('input').setValue('text')
    expect(wrapper.find('input').element.value).toEqual('text')
  })

  test('update:modelValue event is emitted correctly ', () => {
    const wrapper = mount(InputBase, {
      props: {
        label: 'Emit event',
        modelValue: '',
      },
    })
    wrapper.find('input').setValue('Emit to parent modelValue')
    wrapper.trigger('update:modelValue')
    const inputEmittedUpdated = wrapper.emitted('update:modelValue')
    expect(inputEmittedUpdated).toHaveLength(1)
  })
})

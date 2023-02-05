// Styles
import './VNumberField.sass'

// Components
import type { VInputSlots } from '@/components/VInput/VInput'
import type { VFieldSlots } from '@/components/VField/VField'
import { VField, VIcon, VInput } from '@/components'

// Utilities
import type { MakeSlots, SlotsToProps } from '@/util'
import { genericComponent, propsFactory, useRender } from '@/util'

export const makeVNumberFieldProps = propsFactory({

}, 'v-number-field')

export const VNumberField = genericComponent<new () => {
  $props: SlotsToProps<Omit<VInputSlots & VFieldSlots, 'default'> & MakeSlots<{
    default: []
  }>>
}>()({
  name: 'VNumberField',

  props: makeVNumberFieldProps(),

  setup (props) {
    useRender(() => (
      <div class={['v-number-field']}>
        <VInput>
          {{
            prepend: () => (<VIcon>mdi-minus</VIcon>),
            default: () => (
              <VField
                role="textbox"
              >
              </VField>
            ),
            details: () => (<span>Some details</span>),
            append: () => (<VIcon>mdi-plus</VIcon>),
          }}
        </VInput>
      </div>
    ))
  },
})

export type VNumberField = InstanceType<typeof VNumberField>

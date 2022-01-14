import {
  useTitle,
  MaybeRef
} from '@vueuse/core'
import {
  onUnmounted,
  computed
} from 'vue'

const theDefault = 'matthieu.doultremont.me'

export const usePageTitle = (defaultTitle?: MaybeRef<string>) => {
  const title = useTitle(defaultTitle ? `${defaultTitle} | ${theDefault}` : theDefault)

  onUnmounted(() => {
    title.value = theDefault
  })

  return computed({
    get(): typeof title.value {
      return title.value
    },
    set(value: typeof title.value) {
      title.value = value ? `${value} | ${theDefault}` : theDefault
    }
  })
}
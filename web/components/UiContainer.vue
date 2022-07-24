<template>
  <Component
    :is="as || 'div'"
    class="px-4 md:px-8 mx-auto"
    :class="sizeClasses">
    <slot />
  </Component>
</template>

<script setup lang="ts">
  const props = defineProps<{
    as?: string
    size?: 'xl'|'lg'|'md'|'sm'|'xs'
  }>()

  const sizeClasses = computed(() => {
    switch (props.size) {
    case 'lg': return 'max-w-screen-lg'
    case 'md': return 'max-w-screen-md'
    case 'sm': return 'max-w-screen-sm'
    case 'xs': return 'max-w-screen-xs'
    default: return 'max-w-screen-xl'
    }
  })
</script>

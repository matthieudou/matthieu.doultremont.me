<template>
  <Component
    :is="as ?? 'h2'"
    :class="titleClasses">
    <slot />
  </Component>
</template>

<script setup lang="ts">
  const props = defineProps<{
    as?: string
    level?: 1|2
  }>()

  const titleClasses = {
    1: 'text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-wide',
    2: 'text-xl sm:text-3xl font-semibold tracking-wide'
  }[props.level ?? 1]
</script>

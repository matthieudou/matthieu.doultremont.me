<template>
  <div class="min-h-screen bg-white text-black dark:bg-black dark:text-white">
    <BaseNavigation />

    <slot />
  </div>
</template>

<script setup lang="ts">
  usePageTitle()
</script>

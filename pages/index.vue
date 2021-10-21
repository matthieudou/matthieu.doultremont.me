<template>
  <main>
    <input type="range" @input="handleAnimation">
    {{range}}
    <h1 animate="hero" class="bg-blue-500 text-blue-100 font-serif text-[64px]">
      <span v-for="(letter, letterIndex) in hello" :key="letterIndex" class="opacity-0 inline-block empty:w-1 empty:bg-blue-400 empty:h-1">
        {{ letter }}
      </span>
    </h1>
  </main>
</template>

<script lang="ts" setup>
  const hello = 'The Hybrid Vue Framework'.replace(/ /g, ' ').split('')
  const range = ref(0)
  const animation = ref<any>(null)

  const handleAnimation = (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    const duration = animation.value.duration
    console.log(animation.value.duration)
    animation.value.currentTime = duration * (parseInt(value) / 100)
  }

  onMounted(async () => {
    const { spring, stagger, animate } = await import('motion')
    animation.value = animate('h1 span', {
      opacity: [0, 1],
      y: [20, 0]
    }, {
      easing: spring(),
      duration: 1,
      delay: stagger(0.01),
    })
  })
</script>

<template>
  <Main>
    <template v-slot:content>
      <Scales />
    </template>
  </Main>
</template>

<script>
import Main from '~/components/layout/Main'
import Scales from '~/components/scales/Scales'

export default {
  components: {
    Main,
    Scales
  }
}
</script>

<style>
</style>
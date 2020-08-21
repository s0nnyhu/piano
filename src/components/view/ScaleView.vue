<template>
  <Main>
    <template v-slot:content>
      <Scales />
    </template>
  </Main>
</template>

<script>
import Main from '../layout/Main'
import Scales from '../scales/Scales'

export default {
  components: {
    Main,
    Scales
  }
}
</script>

<style>
</style>
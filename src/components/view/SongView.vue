<template>
  <Main>
    <template v-slot:content>
      <SongContainer />
    </template>
  </Main>
</template>

<script>
import Main from '../layout/Main'
import SongContainer from '../song/SongContainer'

export default {
  components: {
    Main,
    SongContainer
  }
}
</script>

<style>
</style>
<template>
  <Main>
    <template v-slot:content>
      <SongContainer />
    </template>
  </Main>
</template>

<script>
import Main from '~/components/layout/Main'
import SongContainer from '~/components/song/SongContainer'

export default {
  components: {
    Main,
    SongContainer
  }
}
</script>

<style>
</style>
<template>
  <Main>
    <template v-slot:content>
      <KeySignatures />
    </template>
  </Main>
</template>

<script>
import Main from '../layout/Main'
import KeySignatures from '../key-signatures/KeySignatures'

export default {
  components: {
    Main,
    KeySignatures
  }
}
</script>

<style>
</style>
<template>
  <div>
    <Menu />
    <Delimiter class="hr-1" />
    <SongContainer />
  </div>
</template>

<script>
import Menu from './Menu'
import Delimiter from './utilities/Delimiter'
import SongContainer from './SongContainer'

export default {
  name: 'Main',
  components: {
    Menu,
    Delimiter,
    SongContainer
  }
}
</script>

<style>
</style>
<template>
  <div>
    <Menu />
    <Delimiter class="hr-1" />
    <Panel />
  </div>
</template>

<script>
import Menu from './Menu'
import Delimiter from './Delimiter'
import Panel from './Panel'

export default {
  name: 'Main',
  components: {
    Menu,
    Delimiter,
    Panel
  }
}
</script>

<style>
</style>
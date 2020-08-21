<template>
  <div>
    <Menu />
    <Delimiter class="hr-1" />
    <slot name="content"></slot>
  </div>
</template>

<script>
import Menu from '~/components/layout/Menu'
import Delimiter from '~/components/utilities/Delimiter'

export default {
  name: 'Main',
  components: {
    Menu,
    Delimiter,
  }
}
</script>

<style>
</style>
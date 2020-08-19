<template>
  <nav>
    <a :key="menu" v-for="menu in listMenu" href="#">{{menu}}</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      listMenu: ['Music', 'Scales']
    }
  }
}
</script>

<style>
nav a {
  display: inline-block;
  padding: 0.3rem 1rem;
  color: #000;
  text-decoration: none;
  font-family: Avenir, Arial, sans-serif;
}
nav a:hover,
nav a:focus {
  color: #fff;
  background: #000;
}
nav a:not(:last-child) {
  border-right: 1px solid black;
}
</style>
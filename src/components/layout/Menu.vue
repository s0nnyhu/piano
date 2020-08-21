<template>
  <nav>
    <router-link :key="menu.name" v-for="menu in listMenu" :to="menu.link">{{menu.name}}</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      listMenu: [
        { name: 'Song', link: '/' },
        { name: 'Scales', link: '/scales' }
      ]
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
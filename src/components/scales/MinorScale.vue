<template>
  <div class="container">
    <img
      :src="require('../../assets/img/' + (!finger ? scale : scaleWithFinger))"
      alt="Minor scale"
      title="Minor scale"
      loading="lazy"
      class="responsive"
    />
  </div>
</template>

<script>
export default {
  props: ['finger'],
  data() {
    return {
      scale: "minor_scale.png",
      scaleWithFinger: "minor_scale_with_fingers.png"
    }
  }
}
</script>

<style>
.responsive {
  width: 100%;
  height: auto;
}
h1 {
  font-size: 18px !important;
  font-weight: 500 !important;
  color: black !important;
}
</style>
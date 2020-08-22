<template>
  <div class="container">
    <img
      :src="require('../../assets/img/' + (!finger ? scale : scaleWithFinger))"
      alt="Major scale"
      title="Major scale"
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
      scale: "major_scale.png",
      scaleWithFinger: "major_scale_with_fingers.png"
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
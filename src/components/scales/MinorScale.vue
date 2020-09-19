<template>
  <div class="container">
    <div class="notes">
      <h4>The pattern that characterizes the sound of the natural minor scale is: WS - HS - WS - WS - HS - WS - WS</h4>
      <h4>
        <strong>Harmonic :</strong> To convert any natural minor scale into harmonic minor, raise the seventh note by a half step.
      </h4>
      <h4>
        <strong>Melodic :</strong> To convert a natural minor scale into melodic minor, raise both the sixth and seventh notes by a half step.
      </h4>
    </div>
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
.notes {
  border: 2px dashed black;
}
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
<template>
  <div class="container">
    <div class="notes">
      <h4>
        #:
        <strong>F</strong>ather
        <strong>C</strong>harles
        <strong>G</strong>oes
        <strong>D</strong>own
        <strong>A</strong>nd
        <strong>E</strong>nds
        <strong>B</strong>attle
      </h4>
      <h4>
        ♭:
        <strong>B</strong>attle
        <strong>E</strong>nds
        <strong>A</strong>nd
        <strong>D</strong>own
        <strong>G</strong>oes
        <strong>C</strong>harles'
        <strong>F</strong>ather
      </h4>
    </div>
    <hr />
    <img
      class="responsive circle-fifths"
      :src="require('../../assets/img/circle-of-fifths-v2.png')"
      alt="Circle of fifths"
      title="Circle of fifths"
      loading="lazy"
      width="200"
      height="500"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style>
.notes {
  border: 2px dashed black;
}
.circle-fifths {
  width: 75% !important;
  height: 90% !important;
}
</style>
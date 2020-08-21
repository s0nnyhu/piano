<template>
  <div class="progress" style="width: 100%; background-color:#BDBDBD;">
    <div class="progress-bar" :style="{'width': percent + '%'}"></div>
  </div>
</template>

<script>
export default {
  props: ['percent']
}
</script>

<style>
.progress {
  height: 3px !important;
  display: inline-block;
  vertical-align: middle;
}

.progress-bar {
  transition-property: width, background-color;
  animation: animateProgress 1s ease-out;
  animation-fill-mode: forwards;
  height: 3px;
  width: 100%;
  background: #323232;
  transition-property: width, background-color;
}

@keyframes animateProgress {
  0% {
    width: 0px;
  }
  100% {
    background: rgb(33, 150, 243) none repeat scroll 0% 0%;
  }
}
</style>
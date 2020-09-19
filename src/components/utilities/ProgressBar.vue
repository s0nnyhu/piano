<template>
  <div class="progress" style="width: 100%; background-color:#BDBDBD;">
    <div
      v-if="percent != '100'"
      class="progress-bar progress-bar-uncompleted"
      :style="{'width': percent === 'Full OST' ? 0 : percent + '%'}"
    ></div>
    <div
      v-else
      class="progress-bar progress-bar-completed"
      :style="{'width': percent === 'Full OST' ? 0 : percent + '%'}"
    ></div>
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
  height: 3px;
  width: 100%;
  background: #2751d7;
  transition-property: width, background-color;
}

.progress-bar-uncompleted {
  animation: animateProgressUncompleted 1s ease-out;
  animation-fill-mode: forwards;
}

.progress-bar-completed {
  animation: animateProgressCompleted 1s ease-out;
  animation-fill-mode: forwards;
}

@keyframes animateProgressUncompleted {
  0% {
    width: 0px;
  }
  100% {
    background: #323232 none repeat scroll 0% 0%;
  }
}

@keyframes animateProgressCompleted {
  0% {
    width: 0px;
  }
  100% {
    background: #323232 none repeat scroll 0% 0%;
  }
}
</style>
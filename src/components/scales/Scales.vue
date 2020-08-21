<template>
  <div>
    <div class="switch-field">
      <input type="radio" id="major" name="scale-type" value="major" v-model="scaleType" checked />
      <label for="major">Major</label>
      <input type="radio" id="minor" name="scale-type" value="minor" v-model="scaleType" />
      <label for="minor">Minor</label>
    </div>
    <Delimiter class="hr-5" />
    <transition name="fade">
      <MajorScale v-if="scaleType=='major'" />
      <MinorScale v-if="scaleType=='minor'" />
    </transition>
  </div>
</template>

<script>
import MajorScale from './MajorScale';
import MinorScale from './MinorScale';

import Delimiter from '~/components/utilities/Delimiter';

export default {
  data() {
    return {
      scaleType: 'major'
    }
  },
  components: {
    MajorScale,
    MinorScale,
    Delimiter
  }
}
</script>

<style>
.switch-field {
  margin-bottom: 36px;
  overflow: hidden;
}

.switch-field input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.switch-field label {
  background-color: #e4e4e4;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  line-height: 1;
  text-align: center;
  padding: 8px 16px;
  margin-right: -1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.1s ease-in-out;
}

.switch-field label:hover {
  cursor: pointer;
}

.switch-field input:checked + label {
  background-color: #979494;
  box-shadow: none;
}

.switch-field label:first-of-type {
  border-radius: 4px 0 0 4px;
}

.switch-field label:last-of-type {
  border-radius: 0 4px 4px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
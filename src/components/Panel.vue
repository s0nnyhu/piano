<template>
  <div class="panel">
    <details :key="index" v-for="(music, index) in listSong" class="details-animated">
      <summary>
        <div class="list-group-item-custom">
          <div class="row">
            <div class="col-sm-5">
              <h4 class="list-group-item-heading">{{music.title}}</h4>
              <p class="list-group-item-text">{{music.origin}}</p>
            </div>
            <div class="col-sm-6">
              <p class="list-group-item-text">Duration: {{music.duration}}</p>
              <p class="list-group-item-text">Acknowledged: {{music.completed}}</p>
            </div>
            <div class="col-sm-12">
              <progressBar :percent="getSuccessPercent(music.duration, music.completed)" />
            </div>
          </div>
        </div>
      </summary>
      <div class="content">
        <h4>Artist : {{music.credit}}</h4>
        <h4>
          Video link :
          <a :href="music.link">{{music.link}}</a>
        </h4>
        <h4>Sheet : {{music.sheet}}</h4>
        <h4>Mid : {{music.mid}}</h4>
      </div>
    </details>
    <!-- <details class="details-animated">
      <summary>
        <ul>
          <li>Start and end dates</li>
          <li class="titleValue">
            <time>Start Date:</time> Feb 29, 2016
          </li>
          <li class="titleValue">
            <time>End Date:</time> Not set
          </li>
        </ul>
      </summary>
      <div class="content">
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      </div>
    </details>-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from 'vuex'
/* eslint-disable vue/no-unused-components */
import ProgressBar from './ProgressBar';

export default {
  data() {
    return {
    }
  },
  mounted() {
    this.fetchListMusic();
  },
  computed: {
    ...mapGetters({
      listSong: "listSong"
    })
  },
  methods: {
    ...mapActions({
      updateListSong: 'updateListSong'
    }),
    fetchListMusic() {
      fetch('https://raw.githubusercontent.com/s0nnyhu/piano/develop/data.json',
        {
          method: 'GET'
        })
        .then((oResponse) => { return oResponse.json(); })
        .then((aData) => {
          this.updateListSong(aData);
        });
    },
    /**
     * Retourne le nombre de secondes d'un string sous format mm:ss
     */
    mmSsToSecond(value) {
      const mmSs = value.split(':');
      return parseInt(mmSs[0]) * 60 + parseInt(mmSs[1]);
    },
    /**
     * Retourne le pourcentage de réalisation d'une musique
     */
    getSuccessPercent(duration, completed) {
      if (duration !== null && completed !== null) {
        var durationSecond = this.mmSsToSecond(duration);
        var completedSecond = this.mmSsToSecond(completed);
        return completedSecond * 100 / durationSecond;
      } else {
        return 0;
      }

    }
  },
  components: {
    ProgressBar
  }
}
</script>

<style>
html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}

.panel {
  text-align: left;
}
html > body {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
  background-color: #eeeeee;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  -webkit-text-rendering: optimizeLegibility;
}
h1 {
  font-weight: 400;
  color: #999;
  font-size: 13px;
  margin: 48px 0 12px 22px;
}
div.panel {
  max-width: 70%;
  margin: auto;
  margin-top: calc(2% - 0px);
}
details {
  background: #fff;
  font-size: 16px;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  display: flex;
}

details div.content {
  padding: 0px 24px 24px 24px;
}

details[open] summary:after {
  color: #9e9e9e;
  content: "expand_less";
  font-family: "Material Icons";
}
details[open] {
  margin-top: 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 2px;
}
details[open]:first-child {
  margin-top: 0;
  margin-bottom: 16px;
  border: none;
}
details[open]:last-child {
  margin-top: 16px;
  margin-bottom: 0px;
  border: none;
}

summary {
  outline: none;
  cursor: pointer;
  padding: 16px 24px;
  color: #212121;
  position: relative;
  font-size: 15px;
}
summary:hover {
  background: #eeeeee;
}

details[open] summary:hover {
  background: none;
}
summary ul {
  padding-left: 0;
  list-style: none;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
summary ul li {
  flex: 1 100%;
  flex-flow: row wrap;
}
summary ul li span {
  display: block;
  font-size: 12px;
  margin-top: 6px;
  opacity: 0.75;
}
summary::-webkit-details-marker {
  display: none;
}
summary::after {
  content: "expand_more";
  font-family: "Material Icons";
  color: #9e9e9e;
  font-size: 1.5em;
  padding: 0;
  text-align: center;
  margin-top: 0;
  position: absolute;
  top: calc(50% - 12px);
  bottom: 0;
  right: 0;
  width: 6%;
}

.titleValue {
  color: #757575;
}
time {
  color: #757575;
  opacity: 0.75;
}
.list-unstyled {
  margin-top: 15px;
  padding-left: 0;
  list-style: none;
}
.list-unstyled li {
  margin-bottom: 6px;
}

.details-animated[open] .content {
  animation-name: invisiblyGrowFontSize, fadeIn;
  animation-duration: 200ms, 100ms;
  animation-delay: 0ms, 200ms;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes invisiblyGrowFontSize {
  0% {
    font-size: 0;
    opacity: 0;
  }
  100% {
    font-size: 1em;
    opacity: 0;
  }
}

.flexbox {
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-content: space-between;
  justify-content: space-between;
}

.flexbox > .center {
  margin-right: 3%;
}

@media (min-width: 576px) {
  .flexbox {
    flex-flow: row wrap;
  }
  .flexbox > .left {
    order: 1;
    flex: 0.5;
  }
  .flexbox > .center {
    order: 2;
  }
}

@media only screen and (max-width: 900px) {
  div.panel {
    max-width: 100%;
    width: 95%;
  }
}

@media (min-width: 768px) {
  .flexbox {
    flex-flow: row nowrap;
  }
  .flexbox > div {
    width: 80% !important;
  }
  .flexbox > .left {
    order: 1;
  }
  .flexbox > .center {
    order: 2;
  }
}

details {
  border: 1px solid #aaa;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}

.list-group-item-custom {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
}

.list-group-item-custom .list-group-item-text {
  line-height: 18px;
  margin-bottom: 5px;
  overflow: hidden;
}
</style>
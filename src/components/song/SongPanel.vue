<template>
  <details>
    <summary>
      <div class="list-group-item-custom">
        <div class="row">
          <div class="col-sm-5">
            <h4 class="list-group-item-heading">
              <img
                v-if="getSuccessPercent(song.duration, song.completed) == 100"
                src="../../assets/img/star.svg"
                widht="20"
                height="20"
                alt="Star"
                title="Star"
              />
              <img
                v-if="song.full"
                src="../../assets/img/tilde.svg"
                widht="20"
                height="20"
                alt="Star"
                title="Star"
              />
              {{ song.title }}
            </h4>
            <p class="list-group-item-text">{{ song.origin }}</p>
          </div>
          <div class="col-sm-6">
            <p class="list-group-item-text">
              Duration: {{ song.full ? "Full OST" : song.duration }}
            </p>
            <p class="list-group-item-text">
              Learned: {{ song.full ? "Full OST" : song.completed }}
            </p>
          </div>
          <div class="col-sm-12">
            <progressBar
              :percent="
                song.full
                  ? 'Full OST'
                  : getSuccessPercent(song.duration, song.completed)
              "
            />
          </div>
        </div>
      </div>
    </summary>
    <div class="content">
      <p class="list-group-item-text">
        <strong>Artist :</strong>
        {{ song.credit }}
      </p>
      <p class="list-group-item-text">
        <strong>Video link :</strong>
        <a :href="song.link">&nbsp;{{ song.link }}</a>
      </p>
      <p class="list-group-item-text">
        <strong>Sheet :</strong>
        <a v-if="song.sheet" :href="song.sheet"
          >&nbsp;Sheet - {{ song.title }}</a
        >
        <template v-else>&nbsp;NA</template>
      </p>
      <!--mp3 audio -->
      <!-- <audio v-if="song.mp3" controls>
        <source :src="song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> -->
      <!-- video -->
      <div class="video-wrapper">
        <div class="yt-video">
          <iframe
            width="560"
            height="315"
            :src="getEmbedLink(song.link)"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </details>
</template>

<script>
import { getSuccessPercent } from "../../js/functions.js";
import progressBar from "../utilities/ProgressBar";

export default {
  props: ["song"],
  methods: {
    /**
     * Retourne le pourcentage de réalisation d'une musique
     */
    getSuccessPercent(duration, completed) {
      return getSuccessPercent(duration, completed);
    },
    getEmbedLink(url) {
      let id = url.split("?v=")[1];
      let embedlink = "http://www.youtube.com/embed/" + id;
      return embedlink;
    },
  },
  components: {
    progressBar,
  },
};
</script>

<style>
audio {
  width: 100%;
}

html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}

.panel-custom {
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

div.panel-custom {
  max-width: 70%;
  margin: auto;
  margin-top: calc(2% - 0px);
}
details {
  border: 0;
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

.yt-video {
  display: flex;
  justify-content: center;
  padding-top: 5px;
  background: linear-gradient(to right, #fff 0%, #fff 100%),
    linear-gradient(to right, #fff 0%, #fff 100%),
    linear-gradient(to right, #fff 0%, #fff 100%),
    linear-gradient(to right, #fff 0%, #fff 100%),
    linear-gradient(to right, #fff 0%, #fff 100%),
    linear-gradient(to right, #fff 0%, #fff 100%),
    linear-gradient(to right, #fff 0%, #fff 100%),
    linear-gradient(to right, #fff 0%, #fff 100%),
    linear-gradient(to right, #444 0%, #444 100%),
    linear-gradient(to right, #444 0%, #444 100%);
  background-size: 15px 2px, 15px 2px, 15px 2px, 15px 2px, 2px 15px, 2px 15px,
    2px 15px, 2px 15px, 2px 100%, 2px 100%;
  background-position: 0 0, 0 100%, 100% 0, 100% 100%, 0 0, 0 100%, 100% 0,
    100% 100%, 0 0, 100% 0;
  background-repeat: no-repeat;
}

.video-wrapper {
  padding: 1px;
  background: #000;
  opacity: 0.9;
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
  div.panel-custom {
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
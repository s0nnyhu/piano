<template>
  <div class="panel-custom">
    <select name="sortFilter" id="sortFilter" v-model="sortFilter">
      <option value="az">A-Z</option>
      <option value="za">Z-A</option>
    </select>
    <select
      name="selectFilter"
      id="selectFilter"
      v-model="selectFilter"
      style="margin-bottom: 8px;"
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="inprogress">In progress</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
    <template v-if="filteredSong">
      <template v-for="(song) in filteredSong">
        <SongPanel :key="song.title" :song="song" />
      </template>
    </template>
  </div>
</template>

<script>
import { getSuccessPercent } from '../../js/functions.js';
import { mapGetters } from "vuex";
import { mapActions } from 'vuex'
import SongPanel from './SongPanel';

export default {
  data() {
    return {
      selectFilter: 'all',
      sortFilter: 'az',
    }
  },
  mounted() {
    if (this.listSong.length === 0) {
      this.fetchListMusic();
    }
  },
  computed: {
    ...mapGetters({
      listSong: "listSong"
    }),
    filteredSong() {
      switch (this.selectFilter) {
        case 'all':
          return this.sortSong(this.listSong);
        case 'completed':
          return this.sortSong(this.listSong.filter(song => getSuccessPercent(song.duration, song.completed) == 100));
        case 'inprogress':
          return this.sortSong(this.listSong.filter(song => getSuccessPercent(song.duration, song.completed) < 100 && getSuccessPercent(song.duration, song.completed) > 0));
        case 'uncompleted':
          return this.sortSong(this.listSong.filter(song => getSuccessPercent(song.duration, song.completed) == 0));
      }
      return this.listSong;
    },
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
    sortSong(aSong) {
      switch (this.sortFilter) {
        case 'az':
          return aSong.sort(function (a, b) {
            var titleA = a.title.toUpperCase(); // ignore upper and lowercase
            var titleB = b.title.toUpperCase(); // ignore upper and lowercase
            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
        case 'za':
          return aSong.sort(function (a, b) {
            var titleA = a.title.toUpperCase(); // ignore upper and lowercase
            var titleB = b.title.toUpperCase(); // ignore upper and lowercase
            if (titleA < titleB) {
              return 1;
            }
            if (titleA > titleB) {
              return -1;
            }
            // names must be equal
            return 0;
          });
      }
      return aSong;
    }
  },
  components: {
    SongPanel
  }
}
</script>

<style>
select {
  margin-right: 2px;
}
</style>
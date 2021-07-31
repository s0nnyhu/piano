<template>
  <div class="panel-custom">
    <!--Filter-->
    <select
      name="selectFilter"
      id="selectFilter"
      v-model="selectFilter"
      style="margin-bottom: 8px"
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="inprogress">In progress</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
    <!--Music pannel-->
    <input type="text" placeholder="Search music" v-model="searchedMusic" />
    <template v-if="filteredSong">
      <template v-for="song in filteredSong">
        <SongPanel :key="song.title" :song="song" />
      </template>
    </template>
  </div>
</template>

<script>
import { getSuccessPercent } from "../../js/functions.js";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import SongPanel from "./SongPanel";

export default {
  data() {
    return {
      searchedMusic: "",
      selectFilter: "all",
    };
  },
  mounted() {
    if (this.listSong.length === 0) {
      this.fetchListMusic();
    }
  },
  computed: {
    ...mapGetters({
      listSong: "listSong",
    }),
    filteredSong() {
      switch (this.selectFilter) {
        case "all":
          return this.searchSong(this.listSong);
        case "completed":
          return this.searchSong(
            this.listSong.filter(
              (song) => getSuccessPercent(song.duration, song.completed) == 100
            )
          );
        case "inprogress":
          return this.searchSong(
            this.listSong.filter(
              (song) =>
                getSuccessPercent(song.duration, song.completed) < 100 &&
                getSuccessPercent(song.duration, song.completed) > 0
            )
          );
        case "uncompleted":
          return this.searchSong(
            this.listSong.filter(
              (song) => getSuccessPercent(song.duration, song.completed) == 0
            )
          );
      }
      return this.listSong;
    },
  },
  methods: {
    ...mapActions({
      updateListSong: "updateListSong",
    }),
    fetchListMusic() {
      fetch(
        "https://raw.githubusercontent.com/s0nnyhu/piano/develop/data.json",
        {
          method: "GET",
        }
      )
        .then((oResponse) => {
          return oResponse.json();
        })
        .then((aData) => {
          this.updateListSong(aData);
        });
    },
    searchSong(aSong) {
      var stringToSearch = this.searchedMusic;
      var filteredSong = aSong.filter(function (str) {
        return (
          str.title.toLowerCase().includes(stringToSearch.toLowerCase()) ||
          str.origin.toLowerCase().includes(stringToSearch.toLowerCase())
        );
      });
      return filteredSong;
    },
  },
  components: {
    SongPanel,
  },
};
</script>

<style>
select {
  margin-right: 2px;
}
</style>
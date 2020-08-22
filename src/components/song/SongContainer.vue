<template>
  <div class="panel-custom">
    <template v-for="(song, index) in listSong">
      <SongPanel :key="index" :song="song" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from 'vuex'
import SongPanel from './SongPanel';

export default {
  data() {
    return {
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
  },
  components: {
    SongPanel
  }
}
</script>

<style>
</style>
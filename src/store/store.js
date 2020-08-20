import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        listSong: [],
    },
    mutations: {
        updateListSong(state, listSong) {
            state.listSong = listSong
        },
    },
    actions: {
        updateListSong(context, data) {
            context.commit('updateListSong', data)
        }
    },
    getters: {
        listSong: state => state.listSong,
    }

})
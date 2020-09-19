import Vue from 'vue'
import VueRouter from 'vue-router';
import SongView from '../components/view/SongView'
import ScaleView from '../components/view/ScaleView'
import KeySignaturesView from '../components/view/KeySignaturesView'

Vue.use(VueRouter);

export const router = new VueRouter({
    base: __dirname,
    routes: [
        {
            path: '/',
            component: SongView,
            meta: {
                title: 'Home - Piano',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Learning scales and beautiful songs'
                    },
                    {
                        property: 'og:description',
                        content: 'Learning scales and beautiful songs'
                    }
                ]
            }
        },
        {
            path: '/scales',
            component: ScaleView,
            meta: {
                title: 'Scales - Piano',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Learning scales and beautiful songs'
                    },
                    {
                        property: 'og:description',
                        content: 'Learning scales and beautiful songs'
                    }
                ]
            }
        },
        {
            path: '/key-signatures',
            component: KeySignaturesView,
            meta: {
                title: 'Key signatures - Piano',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Learning scales and beautiful songs'
                    },
                    {
                        property: 'og:description',
                        content: 'Learning scales and beautiful songs'
                    }
                ]
            }
        },
    ]
});
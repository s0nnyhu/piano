import Vue from 'vue'
import VueRouter from 'vue-router';
import SongView from '../components/view/SongView'
import ScaleView from '../components/view/ScaleView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
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
    ]
});
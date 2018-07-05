import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
        // 当你打包好的app.js很大(至少大于1M)的时候,推荐使用异步按需加载,反之使用同步加载,减少http请求的次数
        // component: () => import ('@/pages/home/Home')
    }, {
        path: '/city',
        name: 'City',
        component: City
    }, {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

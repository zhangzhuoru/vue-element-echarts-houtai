import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Testflex from './views/Testflex.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
     
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: "/home/about",
      meta: {
        breadCrumbName: '首页'
      },
      children: [{
          path: "about",
          component: About,
          name: "about",
          meta: {
            breadCrumbName: '全部项目'
          }
        },
          {
          path: "testflex",
          component: Testflex,
          name: "testflex",
          meta: {
            breadCrumbName: '测试Flex'
          }
        },]
    },

   
  ]
})

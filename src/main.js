import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from  "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

//在main.js加入下面两行代码
import echarts from 'echarts'
Vue.prototype.$echarts = echarts //将echarts注册成Vue的全局属性
import myCharts from './chart.js'
Vue.use(myCharts)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

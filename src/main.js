import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
Vue.prototype.$axios = axios

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
import 'echarts/extension/bmap/bmap'


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

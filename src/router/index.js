import Vue from 'vue';
import Router from 'vue-router';
import summary from '@/views/summaryView.vue';
import para from '@/views/paraView.vue';
import result from '@/views/resultView.vue';
import compare from '@/views/compareView.vue';
import test from '@/views/testView.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'summary',
      component: summary,
    },
    {
      path: '/para',
      name: 'para',
      component: para,
    },
    {
      path: '/result',
      name: 'result',
      component: result,
    },
    {
      path: '/compare',
      name: 'compare',
      component: compare,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
  ],
});
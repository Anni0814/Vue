// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  'element-ui/lib/theme-chalk/index,css';
import { Button,Table } from 'element-ui';
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Table)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

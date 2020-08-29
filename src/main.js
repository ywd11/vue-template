import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as filters from './filter/filter.js'
// import { Button } from 'ant-design-vue'
Vue.config.productionTip = false
// Vue.component(Button.name, Button)

//遍历所有导出的过滤器并添加到全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

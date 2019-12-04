import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from '@/plugins/http'
import { Layout, Menu, Breadcrumb, Icon, Avatar, Badge, Form, Input, Button, Checkbox, Dropdown } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(http)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(Icon)
Vue.use(Avatar)
Vue.use(Badge)
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Dropdown)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

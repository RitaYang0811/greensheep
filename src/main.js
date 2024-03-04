//style
import '@/assets/scss/all.scss'

import { createApp, markRaw } from 'vue'
//pinia
import { createPinia } from 'pinia'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//vue-loading-overlay
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

//vue-datepicker
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

//VeeValidate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

//  google第三方登入
import vue3GoogleLogin from 'vue3-google-login'

//bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'

import App from './App.vue'
import router from './router'

//VeeValidate 設定
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

// defineRule('ruleTest1', (value, [target]) => {
//   if(typeof value === 'number' && typeof target === 'number') {
//     return value >= target ? true : '折抵金額不可大於訂單金額'
//   }
//   return true
// });

// defineRule('ruleTest2', (value, [target]) => {
//   if(typeof value === 'number' && typeof target === 'number') {
//     return value <= target ? true : '折抵金額不可大於訂單金額'
//   }
//   return true
// });

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
// 在每個store 添加 pinia，為了方便在 Vue 組件中訪問 Vue Router，而不需要在每個組件中單獨引入和配置 Vue Router。通常，當你在 Vue 組件中需要訪問 Vue Router 的時候，你可以直接通過 this.$router 訪問，而不需要再單獨引入 Vue Router。
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})
app.use(router)
app.use(VueAxios, axios)

app.component('VueLoading', Loading)
app.component('VueDatePicker', VueDatePicker)
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)
// Google第三方登入
app.use(vue3GoogleLogin, {
  clientId: '780150754854-h5d15n56b8clqorddealcei20qcv17dd.apps.googleusercontent.com'
})

app.mount('#app')

//import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import './style.css'
import App from './App.vue'
import router from './router/index'
//import 'flowbite';
import VueCustomComponent from './libraries/vue-custom-component'
import Mixin from './libraries/mixin'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

//import Toast, { PluginOptions } from "vue-toastification";
// const options: PluginOptions = {
//     // You can set your default options here
// };

// Import the CSS or use your own!
// import "vue-toastification/dist/index.css";


/* add icons to the library */
library.add(faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('dialog-app', VueCustomComponent.__dialog)
.component('loader-app', VueCustomComponent.__loader)
//.use(Toast, options)
.use(moshaToast)
.use(ElementPlus)
.use(router)
.mixin(Mixin)
.mount('#app')

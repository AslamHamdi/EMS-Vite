//import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import './style.css'
import App from './App.vue'
import router from './router/index'
//import 'flowbite';
import VueCustomComponent from './libraries/vue-custom-component'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import Toastify from 'toastify-js'
// import "toastify-js/src/toastify.css"

import Toast, { PluginOptions } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
    // You can set your default options here
};

/* add icons to the library */
library.add(faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('dialog-app', VueCustomComponent.__dialog)
.use(Toast, options)
.use(ElementPlus)
.use(router)
.mount('#app')

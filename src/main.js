import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faEnvelope)
library.add(faGithub)
library.add(faLinkedin)
library.add(faVuejs)
library.add(faBootstrap)
library.add(faFontAwesome)
library.add(faStackOverflow)
library.add(faNpm)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueGtag, {
	config: {
		id: "G-TT76YTVCYJ"
	}
}, router);

Vue.use(VueMeta)

Vue.prototype.$resumeFile = "SDonchezResumeDec23.pdf"

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

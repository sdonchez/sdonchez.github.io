import { createApp, configureCompat} from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import BootstrapVue from './plugins/bootstrap-vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import { createRouter } from './router'
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
import { faCloudflare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faEnvelope)
library.add(faGithub)
library.add(faLinkedin)
library.add(faVuejs)
library.add(faBootstrap)
library.add(faFontAwesome)
library.add(faStackOverflow)
library.add(faNpm)
library.add(faCloudflare)

configureCompat({
	MODE: 2
})

const router = createRouter()

const app = createApp(App)

app.use(router)
app.use(BootstrapVue)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueGtag, {
	config: {
		id: "G-TT76YTVCYJ"
	}
});

app.use(VueMeta, { refreshOnceOnNavigation: true })

app.config.globalProperties.$resumeFile = "SDonchezResumeDec24.pdf"


app.mount('#app')
